import { Body, Controller, Post } from "@nestjs/common"
import { UserService } from "./user.service"
import { User } from "./user.entity"
import { CreateUserDto } from "./dto/create-user.dto"
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("create")
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto)
  }
}
