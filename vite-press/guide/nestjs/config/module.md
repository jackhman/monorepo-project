# 定义模块

在创建数据库时`autoLoadEntities`设置为`ture`之后`nestjs`就会自动搜寻代码中的实例。

:::tip 代码地址 `/src/{modules名字}/`，这里以`user`模块说明

:::

```bash
-user
    user.controller.ts # 定义用户的接口
    user.entity.ts     # 定义实例对象，nestjs执行时，会自动写入数据库
    user.module.ts     # 最重要的：引入需要的模块内容
    user.service.ts    # 调取数据库的数据，然后返回给接口
```

::: warning

最重要的是，需要在`app.module.ts`中导入模块

```ts
@Module({
  imports:
    UserModule,
  ],
  providers: []
})
export class AppModule {}
```

:::

## `user.module.ts`

:::tip `user.module.ts`是最重要的一个，可以在这里引入\导出指定的服务

| providers   | 由 Nest 注入器实例化的提供者，并且可以至少在整个模块中共享 |
| ----------- | -------------------------------- |
| controllers | 必须创建的一组控制器                       |
| imports     | 导入模块的列表，这些模块导出了此模块中所需提供者         |
| exports     | 由本模块提供并应在其他模块中可用的提供者的子集。         |

:::

```ts
import { Module } from "@nestjs/common"
import { UserController } from "./user.controller"
import { UserService } from "./user.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./user.entity"
import { AuthModule } from "../auth/auth.module"
@Module({
  /**
   * TypeOrmModule.forFeature([User]) 这段代码的作用是在当前的Module中注册 User 实体。
    forFeature方法会把传入的实体注册到当前Module的提供者中。这样可以实现以下目的:
    1. 将User实体与当前Module关联,可以通过依赖注入使用
    2. 会在当前Module初始化数据库连接时,自动将User实体加入映射
   */
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
```

## `user.entity.ts`

:::tip 用来定义字段实例

实体是映射到数据库表（或使用 MongoDB 时的集合）的类。 你可以通过定义一个新类来创建一个实体，并用  `@Entity()`  标记它：

`@Entity("User")`就是用来定义数据库表明

([什么是实体？ | TypeORM (nodejs.cn)](https://typeorm.nodejs.cn/entities#entity-columns))

:::

```ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import {
  UserRolesEnum,
  UserRolesTextEnum,
  UserIsDeletedEnum
} from "@shared/enum/user-enum"
@Entity("User")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  userName: string

  // 用户昵称
  @Column()
  nickName: string

  // 密码
  @Column({
    select: false
  })
  password: string

  // 用户头像
  @Column({
    default: "https://fastly.jsdelivr.net/npm/lz-npm-assets/images/gkd.gif",
    comment: "用户头像"
  })
  avatar: string

  // 角色权限
  @Column({
    default: UserRolesEnum.user,
    comment: "角色权限"
  })
  roleId: UserRolesEnum

  // 权限中文名
  @Column({
    default: UserRolesTextEnum.user,
    comment: "权限中文名"
  })
  roleName: string

  // 是否删除
  @Column({
    default: UserIsDeletedEnum.noDelete,
    select: false,
    comment: "是否删除"
  })
  isDelete: UserIsDeletedEnum
}
```

## `user.controller.ts`

定义接口用到的就是`controller`

`@Post("login")`定义一个`post`请求的接口，一个`login`的请求就完成了

:::tip TIP

`@Controller("user")`定义在头部，用来在该控制器前面添加请求前缀，因此添加之后，`login`请求就会变成`http://xxx/user/login`

:::

- 获取`post`请求的参数`@Body()`
  
  ```ts
  @Post("register")
  async register(@Body() registerUserDto: RegisterUserDto) {
    await this.userService.register(registerUserDto)
    return R.success().setMsg(ResultMsg.REGISTER_SUCCESS)
  }
  ```

- 动态参数的请求方式`@Get(":id")`
  
  ```ts
  @Get(":id")
  async getUserById(@Param("id") id: string) {
    const getUserInfo = await this.userService.getUserById(id)
    return R.success().setData(getUserIn{});
  }
  ```

::: details 完整代码

```ts
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { UserService } from "./user.service"

import { LoginUserDto, RegisterUserDto } from "@shared/dto/user.dto"
import { R } from "../utils/R/R"
import { ResultMsg } from "@shared/enum/result-enum"
import { Public } from "../auth/decorators/public.decorator"
import { AuthService } from "../auth/auth.service"
@Controller("user")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Public()
  @Post("register")
  async register(@Body() registerUserDto: RegisterUserDto) {
    await this.userService.register(registerUserDto)
    return R.success().setMsg(ResultMsg.REGISTER_SUCCESS)
  }

  @Public()
  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {
    const getUserInfo = await this.userService.login(loginUserDto)
    return R.success().setMsg(ResultMsg.LOGIN_SUCCESS).setData(getUserInfo)
  }

  /** 退出登录 */
  @Get("logout")
  logout() {
    this.authService.logout()
    return R.success().setMsg(ResultMsg.LOGOUT_SUCCESS)
  }

  /** 删除用户 */
  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    await this.userService.deleteUser(id)
    return R.success().setMsg(ResultMsg.DELETE_SUCCESS)
  }

  @Get(":id")
  async getUserById(@Param("id") id: string) {
    const getUserInfo = await this.userService.getUserById(id)
    return R.success().setData(getUserInfo)
    // return new Observable(observer => {});
  }
}
```

:::

## `user.service.ts`

让我们从创建一个简单的 `UserService` 开始。该服务将负责数据存储和检索，其由 `UserController` 使用，因此把它定义为 `provider`，是一个很好的选择。因此，我们用 `@Injectable()` 来装饰这个类 。

`@InjectRepository()`装饰器将 `UserRepository` 注入到 `UserService` 中，就可以调用数据库了

```ts
export class UserService {
    constructor(
      @InjectRepository(User)
      private readonly usersRepository: Repository<User>,
      private readonly authService: AuthService
  ) {}
}
```

::: details 完整代码

```ts
import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { User } from "./user.entity"
import { BizException } from "../utils/exceptionHandler/biz-exception.filter"
import { ResultCode, ResultMsg } from "@shared/enum/result-enum"
import { AuthService } from "../auth/auth.service"
import {
  LoginUserDto,
  RegisterUserDto,
  UserInfoDto
} from "@shared/dto/user.dto"
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly authService: AuthService
  ) {}
  /** 注册用户 */
  async register(registerUserDto: RegisterUserDto) {
    const user = new User()
    user.userName = registerUserDto.userName
    user.password = registerUserDto.password
    user.nickName = registerUserDto.nickName || registerUserDto.userName
    const userNameRes = await this.usersRepository.findOne({
      where: {
        userName: registerUserDto.userName
      }
    })
    if (userNameRes) {
      throw new BizException(ResultCode.ERROR, ResultMsg.USERNAME_IS)
    }
    return this.usersRepository.save(user)
  }

  /** 登录 */
  async login(loginUserDto: LoginUserDto) {
    const userNameRes = await this.usersRepository.findOne({
      where: {
        userName: loginUserDto.userName
      }
    })
    if (!userNameRes) {
      throw new BizException(ResultCode.ERROR, ResultMsg.USERNAME_IS_NOT)
    }

    const userRes = await this.usersRepository.findOne({
      where: {
        userName: loginUserDto.userName,
        password: loginUserDto.password
      }
    })
    if (!userRes) {
      throw new BizException(ResultCode.ERROR, ResultMsg.LOGIN_FAIL)
    }

    const jwtRes = await this.authService.login({
      userName: loginUserDto.userName,
      id: userRes.id
    })

    const userInfo: UserInfoDto = userRes
    userInfo.token = jwtRes.token
    return userInfo
  }

  /** 通过用户id查询用户数据 */
  async getUserById(id: string) {
    const res: UserInfoDto = await this.usersRepository.findOne({
      where: {
        id
      }
    })
    if (!res) {
      throw new BizException(ResultCode.ERROR, ResultMsg.USERNAME_IS_ID)
    }
    res.token = this.authService.getToken()
    return res
  }

  /** 删除用户 */
  async deleteUser(id: string) {
    const res = await this.usersRepository.update(id, { isDelete: 1 })
    if(!res) {
      throw new BizException(ResultCode.ERROR, ResultMsg.DELETE_FAIL)
    }
    return res
  }
}
```

:::
