import {
  Body,
  Controller,
  ForbiddenException,
  Post,
  UseFilters
} from "@nestjs/common"
import { UserService } from "./user.service"
import { User } from "./user.entity"
import { RegisterUserDto } from "./dto/register-user.dto"
import { LoginUserDto } from "./dto/login-user.dto"
import { R } from "../utils/R/R"
import { ResultCode, ResultMsg } from "@shared/enum/result-num"
import { BizException } from "../utils/exceptionHandler/biz-exception.filter"
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  register(@Body() registerUserDto: RegisterUserDto): R {
    this.userService.register(registerUserDto)
    return R.success().setMsg(ResultMsg.REGISTER_SUCCESS)
  }

  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto): Promise<R> {
    await this.userService.login(loginUserDto)
    return R.success().setMsg(ResultMsg.LOGIN_SUCCESS)
  }
}
