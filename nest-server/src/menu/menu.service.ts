import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { Menu } from "./menu.entity"
import { BizException } from "../utils/exceptionHandler/biz-exception.filter"
import { ResultCode, ResultMsg } from "@shared/enum/result-enum"
import { MenuAddDto } from "@shared/dto/menu.dto"
import { handleValidate } from "../utils"
@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>
  ) {}

  async addMenu(menu: MenuAddDto) {
    
    console.log(menu)
    const errors = await handleValidate(MenuAddDto, menu)
    console.log(errors)
    if (errors.length > 0) {
      throw new BizException(ResultCode.ERROR, errors)
    }
    console.log(menu)
    await this.menuRepository.save(menu)
  }
}
 