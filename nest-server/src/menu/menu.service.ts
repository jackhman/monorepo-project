import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm"
import { Menu } from "./menu.entity"
import { BizException } from "../utils/exceptionHandler/biz-exception.filter"
import { ResultCode, ResultMsg } from "@shared/enum/result-enum"
import { MenuDto } from "@shared/dto/menu.dto"
// import { validate } from "@shared/common"
import { validate, IsNotEmpty, IsNumber, IsString } from "class-validator";
@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>
  ) {}

  async addMenu(menu: MenuDto) {
    const menu1 = new MenuDto()
    validate(menu1).then(errors => {
      if (errors.length > 0) {
        console.error("Validation failed:", errors);
      } else {
        console.log("Validation succeeded!");
      }
    });
    // if (errors.length) {
    //   // throw new BizException(
    //   //   ResultCode.ERROR,
    //   //   errors
    //   // )
    // }
    // await this.menuRepository.save(menu)
  }
}
