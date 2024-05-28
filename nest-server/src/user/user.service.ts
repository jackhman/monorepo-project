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
  UserInfoDto,
  WxLoginDto,
  WxLoginRegisterDto
} from "@shared/dto/user.dto"
import { UserPageDto } from "@shared/dto/page.dto"
import { Pagination, handleValidate } from "../utils"

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly authService: AuthService
  ) {}
  /** 注册用户 */
  async register(registerUserDto: RegisterUserDto) {
    const errors = await handleValidate(RegisterUserDto, registerUserDto)
    if (errors.length) {
      throw new BizException(ResultCode.ERROR, errors)
    }
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
    const errors = await handleValidate(LoginUserDto, loginUserDto)
    if (errors.length) {
      throw new BizException(ResultCode.ERROR, errors)
    }
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

  /** 微信登录 */
  async wxLogin(wxLoginDto: WxLoginDto) {
    const errors = await handleValidate(WxLoginDto, wxLoginDto)
    if (errors.length) {
      throw new BizException(ResultCode.ERROR, errors)
    }
    const params = {
      appid: "wx1e28ae8315a2f9a2",
      secret: "e328c5ade1fa8c4bf6a46a4f1cce6119",
      js_code: wxLoginDto.code,
      grant_type: "authorization_code"
    }
    const url = new URL("https://api.weixin.qq.com/sns/jscode2session")
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    )
    const response = await fetch(url.toString())
    const data = await response.json()

    const { openid } = data
    // 说明登录成功
    if (openid) {
      const userRes = await this.usersRepository.findOne({
        where: {
          openid
        }
      })
      // 说明是新增的微信用户
      if (!userRes) {
        const newUser = new WxLoginRegisterDto()
        newUser.avatar =
          "https://fastly.jsdelivr.net/npm/lz-npm-assets/images/funny-round.png"
        newUser.openid = openid
        newUser.nickName = "微信用户"
        newUser.userName = openid
        newUser.password = openid
        await this.usersRepository.save(newUser)
      }
      const jwtRes = await this.authService.login({
        userName: openid,
        id: openid
      })

      Object.keys(userRes).map(key => {
        data[key] = userRes[key]
      })

      data.token = jwtRes.token
    }
    return data
  }

  /** 通过用户id查询用户数据 */
  async getUserById(id: string) {
    if (!id) {
      throw new BizException(ResultCode.ERROR, ResultMsg.ID_FAIL)
    }
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
    if (!res) {
      throw new BizException(ResultCode.ERROR, ResultMsg.DELETE_FAIL)
    }
    return res
  }

  /** 查找所有用户信息 */
  async findAllUser(userPageDto: UserPageDto) {
    return Pagination(this.usersRepository, UserPageDto, userPageDto)
  }

  /** 更新用户的数据 */
  async updateUserInfo(userInfo: UserInfoDto, id: string) {
    await this.getUserById(id)
    const errors = await handleValidate(UserInfoDto, userInfo)
    if (errors.length) {
      throw new BizException(ResultCode.ERROR, errors)
    }
    await this.usersRepository.update(id, userInfo)
  }
}
