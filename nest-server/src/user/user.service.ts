import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { CreateUserDto } from "./dto/create-user.dto"
import { User } from "./user.entity"

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User()
    user.userName = createUserDto.userName
    user.password = createUserDto.password
    return this.usersRepository.save(user)
  }
}
