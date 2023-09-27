import { Body, Controller, Post } from "@nestjs/common"
import { UserService } from "./user.service"
import { User } from "./user.entity"
import { RegisterUserDto } from "./dto/register-user.dto"
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  register(@Body() registerUserDto: RegisterUserDto): Promise<User> {
    return this.userService.register(registerUserDto)
  }
}
