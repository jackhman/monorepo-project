import { Body, Controller, Delete, Get, Param, Post, Req, Request } from "@nestjs/common"
import { UserService } from "./user.service"

import { LoginUserDto, RegisterUserDto } from "@shared/dto/user.dto"
import { UserPageDto } from "@shared/dto/page.dto"
import { R } from "../utils/R/R"
import { ResultMsg } from "@shared/enum/result-enum"
import { Public } from "../auth/decorators/public.decorator"
import { AuthService } from "../auth/auth.service"
@Controller("user")
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Public()
  @Post("register")
  async register(@Body() registerUserDto: RegisterUserDto) {
    await this.userService.register(registerUserDto)
    return R.success().setMsg(ResultMsg.REGISTER_SUCCESS)
  }

  @Public()
  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto) {
    const getUserInfo = await this.userService.login(loginUserDto)
    return R.success().setMsg(ResultMsg.LOGIN_SUCCESS).setData(getUserInfo)
  }

  /** 退出登录 */
  @Get("logout")
  logout() {
    this.authService.logout()
    return R.success().setMsg(ResultMsg.LOGOUT_SUCCESS)
  }

  /** 删除用户 */
  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    await this.userService.deleteUser(id)
    return R.success().setMsg(ResultMsg.DELETE_SUCCESS)
  }

  /** 通过用户id查询用户数据 */
  @Get(":id")
  async getUserById(@Param("id") id: string) {
    const getUserInfo = await this.userService.getUserById(id)
    return R.success().setData(getUserInfo)
  }

  /** 查找所有用户信息 */
  @Post("list")
  async findAllUser(@Body() userPageDto: UserPageDto) {
    const { res: row, total } = await this.userService.findAllUser(userPageDto)
    return R.success().setRow({ row, total })
  }
}
