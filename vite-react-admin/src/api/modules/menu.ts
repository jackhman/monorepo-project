import axios from "../axiosConfig"
import { ResultModel } from "@shared/model"
import { MenuAddDto } from "@shared/dto/menu.dto"
/** 注册菜单 */
export const menuAddApi = (
  params: MenuAddDto
): Promise<ResultModel<any>> => axios.post("menu/add", params)
