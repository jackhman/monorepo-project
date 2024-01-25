import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { Menu } from "./menu.entity"
import { BizException } from "../utils/exceptionHandler/biz-exception.filter"
import { ResultCode, ResultMsg } from "@shared/enum/result-enum"
import { MenuAddDto, MenuRouterDto } from "@shared/dto/menu.dto"
import { handleValidate } from "../utils"
import { MenuPageDto } from "@shared/dto/page.dto"
import { MenuVisibleEnum } from "@shared/enum/menu-enum"
@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>
  ) {}

  async addMenu(menu: MenuAddDto) {
    const errors = await handleValidate(MenuAddDto, menu)
    if (errors.length > 0) {
      throw new BizException(ResultCode.ERROR, errors)
    }
    await this.menuRepository.save(menu)
  }

  async listMenu(menuPageDto: MenuPageDto) {
    const errors = await handleValidate(MenuPageDto, menuPageDto)
    if (errors.length) {
      throw new BizException(ResultCode.ERROR, errors)
    }
    const { current, pageSize } = menuPageDto
    const skip = (current - 1) * pageSize
    const res = await this.menuRepository.find({
      take: pageSize,
      skip
    })
    const total = await this.menuRepository.count()
    if (!res) {
      throw new BizException(ResultCode.ERROR, ResultMsg.REQUEST_FAIL)
    }
    // console.log(res)
    const menuList: MenuRouterDto[] = []
    for (let index = 0; index < res.length; index++) {
      const menu = res[index]
      if(!menu.parentId) {
        menuList.push({
          ...handleData(menu)
        })
      }
      else {
        const getFind = res.find(i => menu.parentId === i.menuId)
        if (getFind) {
          findMenuChild(menu)
        }
      }
    }

    function findMenuChild(filterMenu: Menu) {
      function loop(list: MenuRouterDto[]) {
        list.forEach(i => {
          if (i.children.length) {
            loop(i.children)
          } else {
            // console.log(i, "-----")
            if (i.id === filterMenu.parentId) {
              i.children.push({
                ...handleData(filterMenu)
              })
            }
          }
        })
      }
      loop(menuList)
    }
    // 用来处理数据，将 接口返回的数据，赋值给前端需要的数据
    function handleData(menu: Menu): MenuRouterDto {
      return {
        id: menu.menuId,
        path: menu.path,
        component: menu.component,
        meta: {
          title: menu.menuName,
          icon: menu.icon,
          role: menu.roleId,
          visible: menu.visible,
          status: menu.status
        },
        children: []
      }
    }

    // console.log(menuList, "menuList")

    return { res: menuList, total }
  }
}
