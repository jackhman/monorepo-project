import {
  Body,
  Controller,
  Post,
} from "@nestjs/common"
import { UserService } from "./user.service"
import { RegisterUserDto } from "./dto/register-user.dto"
import { LoginUserDto } from "./dto/login-user.dto"
import { R } from "../utils/R/R"
import { ResultMsg } from "@shared/enum/result-num"
import { Public } from "../auth/decorators/public.decorator"
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post("register")
  register(@Body() registerUserDto: RegisterUserDto){
    this.userService.register(registerUserDto)
    // return R.success().setMsg(ResultMsg.REGISTER_SUCCESS)
  }

  @Public()
  @Post("login")
  login(@Body() loginUserDto: LoginUserDto): R {
    this.userService.login(loginUserDto)
    return R.success().setMsg(ResultMsg.LOGIN_SUCCESS)
  }
}
