import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { MenuService } from "./menu.service"

import { R } from "../utils/R/R"
import { ResultMsg } from "@shared/enum/result-enum"
import { MenuAddDto } from "@shared/dto/menu.dto"
import { MenuPageDto } from "@shared/dto/page.dto"
@Controller("menu")
export class MenuController {
  constructor(
    private readonly menuService: MenuService
  ) {}
  
  @Post("add")
  async addMenu(@Body() menu: MenuAddDto) {
    await this.menuService.addMenu(menu)
  }

  /** 菜单的表格结构 */
  @Post("list")
  async listMenu(@Body() menuPageDto: MenuPageDto) {
    const { res: row, total } = await this.menuService.listMenu(menuPageDto)
    return R.success().setRow({ row, total })
  }

  /** 菜单的树形结构 */
  @Get("tree")
  async treeMenu() {
    
  }
}
