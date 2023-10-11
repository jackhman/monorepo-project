import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { User } from "./user.entity"
import { BizException } from "../utils/exceptionHandler/biz-exception.filter"
import { ResultCode, ResultMsg } from "@shared/enum/result-num"
import { AuthService } from "../auth/auth.service"
import {
  LoginUserDto,
  RegisterUserDto,
  UserInfoDto
} from "@shared/dto/user/user.dto"
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
      userName: loginUserDto.userName
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
}
