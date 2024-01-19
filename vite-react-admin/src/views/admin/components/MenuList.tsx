import CustomIconCom from "@/components/CustomIcon"
import { EnumFieldToTransformText } from "@/utils"
import { MenuDto } from "@shared/dto/menu.dto"
import {
  MenuStatusTextEnum,
  MenuStatusEnum,
  MenuVisibleTextEnum,
  MenuVisibleEnum
} from "@shared/enum/menu-enum"
import { Table, TableColumnsType, Tag } from "antd"
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
    dataIndex: "icon",
    width: 100,
    render: icon => {
      return <CustomIconCom iconPath={icon}></CustomIconCom>
    }
  },
  {
    title: "path",
    dataIndex: "path"
  },
  {
    title: "是否显示在侧边栏",
    dataIndex: "visible",
    width: 160,
    render: visible => {
      return (
        <>
          <Tag
            color={visible === MenuVisibleEnum.show ? "processing" : "warning"}
          >
            {EnumFieldToTransformText(
              MenuVisibleEnum,
              MenuVisibleTextEnum,
              visible
            )}
          </Tag>
        </>
      )
    }
  },
  {
    title: "状态",
    dataIndex: "status",
    width: 80,
    render: status => {
      return (
        <>
          <Tag color={status === MenuStatusEnum.normal ? "success" : "error"}>
            {EnumFieldToTransformText(
              MenuStatusEnum,
              MenuStatusTextEnum,
              status
            )}
          </Tag>
        </>
      )
    }
  },
  {
    title: "操作",
    dataIndex: "x"
  }
]

const MenuList = (props: Props) => {
  return (
    <Table bordered rowKey="menuId" columns={columns} dataSource={props.list} />
  )
}

export default MenuList
