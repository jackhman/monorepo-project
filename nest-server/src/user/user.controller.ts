import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from "@nestjs/common"
import { UserService } from "./user.service"

import { LoginUserDto, RegisterUserDto } from "@shared/dto/user/user.dto"
import { R } from "../utils/R/R"
import { ResultMsg } from "@shared/enum/result-num"
import { Public } from "../auth/decorators/public.decorator"
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post("register")
  async register(@Body() registerUserDto: RegisterUserDto){
    await this.userService.register(registerUserDto)
    return R.success().setMsg(ResultMsg.REGISTER_SUCCESS)
  }

  @Public()
  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto){
    const getUserInfo = await this.userService.login(loginUserDto)
    return R.success().setMsg(ResultMsg.LOGIN_SUCCESS).setData(getUserInfo)
  }

  @Get(":id")
  async getUserById(@Param("id") id:string) {
    const getUserInfo =  await this.userService.getUserById(id)
    return R.success().setData(getUserInfo)
  }
}
