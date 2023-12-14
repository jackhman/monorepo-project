# 定义模块

在创建数据库时`autoLoadEntities`设置为`ture`之后`nestjs`就会自动搜寻代码中的实例。

:::tip 代码地址 `/src/user/`

:::

```bash
-user
    user.controller.ts # 定义用户的接口 
    user.entity.ts     # 定义实例对象，nestjs执行时，会自动写入数据库
    user.module.ts     # 引入需要的模块内容
    user.service.ts    # 调取数据库的数据，然后返回给接口
```