import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { RegisterUserDto } from "./dto/register-user.dto"
import { User } from "./user.entity"
import { LoginUserDto } from "./dto/login-user.dto"
import { BizException } from "../utils/exceptionHandler/biz-exception.filter"
import { ResultCode, ResultMsg } from "@shared/enum/result-num"
import { FindUserDto } from "./dto/find-user.dto"
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
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
  }

  /** 查找指定用户 */
  async findOne(findUserDto: FindUserDto): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        userName: findUserDto.userName
      }
    })
  }
}
