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
import { BizException } from "../utils/exceptionHandler/biz.exception"
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  register(@Body() registerUserDto: RegisterUserDto): R {
    this.userService.register(registerUserDto)
    return R.success()
  }

  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto): Promise<R> {
    const result = await this.userService.login(loginUserDto)
    if (result.length === 0) {
      throw new BizException(ResultCode.ERROR, ResultMsg.LOGIN_FAIL)
    } else {
      return R.success().setMsg("登录成功")
    }
  }
}
