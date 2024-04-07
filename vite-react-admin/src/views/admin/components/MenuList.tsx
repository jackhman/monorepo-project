import CustomIconCom from "@/components/CustomIcon"
import { EnumFieldToTransformText } from "@/utils"
import { MinusCircleTwoTone, PlusCircleTwoTone } from "@ant-design/icons"
import { MenuDto, MenuMeta } from "@shared/dto/menu.dto"
import {
  MenuStatusTextEnum,
  MenuStatusEnum,
  MenuVisibleTextEnum,
  MenuVisibleEnum
} from "@shared/enum/menu-enum"
import { Table, TableColumnsType, Tag } from "antd"
import { ReactNode } from "react"
interface Props {
  list: MenuDto[]
  loading: boolean
}

const columns: TableColumnsType<MenuDto> = [
  {
    title: "菜单名称",
    dataIndex: "meta",
    render: (meta: MenuMeta) => {
      return meta.title
    }
  },
  {
    title: "菜单图标",
    dataIndex: "meta",
    width: 100,
    render: (meta: MenuMeta) => {
      return <CustomIconCom iconPath={meta.icon || ""}></CustomIconCom>
    }
  },
  {
    title: "path",
    dataIndex: "path"
  },
  {
    title: "是否显示在侧边栏",
    dataIndex: "meta",
    width: 160,
    render: (meta: MenuMeta) => {
      const visible = meta.visible
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
    dataIndex: "meta",
    width: 80,
    render: (meta: MenuMeta) => {
      const status = meta.status
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
  /** 用来处理表格的展示关闭图标 */
  function handleExpandIcon({ expanded, onExpand, record }): ReactNode {
    if (record.children && record.children.length) {
      return (
        <span style={{ marginRight: "6px" }}>
          {expanded ? (
            <MinusCircleTwoTone onClick={e => onExpand(record, e)} />
          ) : (
            <PlusCircleTwoTone onClick={e => onExpand(record, e)} />
          )}
        </span>
      )
    }
  }

  return (
    <Table
      bordered
      rowKey="id"
      columns={columns}
      loading={props.loading}
      dataSource={props.list}
      expandable={{
        expandIcon: handleExpandIcon
      }}
    />
  )
}

export default MenuList
