import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { MenuService } from "./menu.service"

import { R } from "../utils/R/R"
import { ResultMsg } from "@shared/enum/result-enum"
import { MenuAddDto } from "@shared/dto/menu.dto"
@Controller("menu")
export class MenuController {
  constructor(
    private readonly menuService: MenuService
  ) {}
  
  @Post("add")
  async addMenu(@Body() menu: MenuAddDto) {
    await this.menuService.addMenu(menu)
  }
}
