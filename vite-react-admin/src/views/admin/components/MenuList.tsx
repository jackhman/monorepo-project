import { MenuDto } from "@shared/dto/menu.dto"
import { Table, TableColumnsType } from "antd"

interface Props {
  list: MenuDto[]
}

const columns: TableColumnsType<MenuDto> = [
  {
    title: "菜单名称",
    dataIndex: "menuName"
  },
  {
    title: "菜单图标",
    dataIndex: "icon"
  },
  {
    title: "path",
    dataIndex: "path"
  },
  {
    title: "是否显示在侧边栏",
    dataIndex: "visible"
  },
  {
    title: "状态",
    dataIndex: "status"
  },
  {
    title: "操作",
    dataIndex: "x"
  }
]

const MenuList = (props: Props) => {
  return <Table rowKey="menuId" columns={columns} dataSource={props.list} />
}

export default MenuList
