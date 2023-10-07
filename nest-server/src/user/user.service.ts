import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { RegisterUserDto } from "./dto/register-user.dto"
import { User } from "./user.entity"
import { LoginUserDto } from "./dto/login-user.dto"

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}
  /** 注册用户 */
  register(registerUserDto: RegisterUserDto): Promise<User> {
    const user = new User()
    user.userName = registerUserDto.userName
    user.password = registerUserDto.password
    return this.usersRepository.save(user)
  }

  /** 登录 */
  login(loginUserDto: LoginUserDto) {
    const result = this.usersRepository.find({
      where: {
        userName: loginUserDto.userName,
        password: loginUserDto.password
      }
    })
    return result
  }
}
