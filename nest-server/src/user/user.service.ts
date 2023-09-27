import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { RegisterUserDto } from "./dto/register-user.dto"
import { User } from "./user.entity"

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
    return this.usersRepository.save(user)
  }
}
