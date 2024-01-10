import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { Menu } from "./menu.entity"
import { BizException } from "../utils/exceptionHandler/biz-exception.filter"
import { ResultCode, ResultMsg } from "@shared/enum/result-enum"
import { MenuDto } from "@shared/dto/menu.dto"
import { handleValidate } from "../utils"
@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>
  ) {}

  async addMenu(menu: MenuDto) {
    const errors = await handleValidate(MenuDto, menu)
    if (errors.length > 0) {
      throw new BizException(ResultCode.ERROR, errors)
    }
    await this.menuRepository.save(menu)
  }
}
 