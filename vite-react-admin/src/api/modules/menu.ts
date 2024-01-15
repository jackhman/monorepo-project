import axios from "../axiosConfig"
import { ResultModel } from "@shared/model"
import { MenuAddDto, MenuDto } from "@shared/dto/menu.dto"
import { MenuPageDto } from "@shared/dto/page.dto"
/** 注册菜单 */
export const menuAddApi = (
  params: MenuAddDto
): Promise<ResultModel<any>> => axios.post("menu/add", params)

/** 菜单列表 */
export const menuListApi = (
  params: MenuPageDto
): Promise<ResultModel<MenuDto[]>> => axios.post("menu/list", params)
