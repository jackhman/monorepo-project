import { useState, useMemo } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Layout, Menu } from "antd"
import type { MenuProps } from "antd"

import CustomIconCom from "@/components/CustomIcon/index"
import { routerList } from "@/router/RouteList"
import { appStore } from "@/store/app"
import { observer } from "mobx-react-lite"
const { Sider } = Layout
type MenuItem = Required<MenuProps>["items"][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
    type
  } as MenuItem
}

const SideBar = observer(()=> {
  const navigate = useNavigate()
  const location = useLocation()
  const { sideStatus } = appStore
  // 默认选择的侧边栏 当前选中的菜单项 key 数组
  const [selectedKeys, setSelectenMenu] = useState(["/dashboard"])

  // 初始展开的 SubMenu 菜单项 key 数组
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<Array<any>>([])

  useMemo(() => {
    const { pathname } = location
    setSelectenMenu([pathname])
    const getOpenKeyArr = pathname.split("/")
    const getOpenKey = getOpenKeyArr.length >= 3 ? "/" + getOpenKeyArr[1] : null
    setDefaultOpenKeys([getOpenKey])
  }, [location.pathname])

  let menuItems: MenuItem[] = []
  // 获取动态的侧边栏
  const getMenu = (routerArr = routerList): MenuItem[] => {
    const menuItemsChild: MenuItem[] = []
    for (let index = 0; index < routerArr.length; index++) {
      const element = routerArr[index]
      if (element.meta) {
        if (!element.meta.hidden) {
          if (!element.children) {
            menuItemsChild.push(getItem(element.meta.title, element.path, handleIcon(element)))
          } else if (element.children) {
            menuItemsChild.push(getItem(element.meta.title, element.path, handleIcon(element), getMenu(element.children)))
          }
        }
      }
    }
    return menuItemsChild
  }

  /** 处理侧边栏图标 */
  const handleIcon = item => {
    if (typeof item.meta.icon === "string") {
      return <CustomIconCom iconPath={item.meta.icon} />
    } else {
      return <item.meta.icon />
    }
  }
  menuItems = getMenu()
  // 点击侧边栏跳转
  const MenuClick = ({ key }) => {
    navigate(key)
  }
  return (
    <Sider
      className="sider-box"
      trigger={null}
      collapsible
      collapsed={sideStatus}
      theme="light"
    >
      <div className="logo" />
      <Menu
        theme="light"
        selectedKeys={selectedKeys}
        mode="inline"
        onClick={MenuClick}
        defaultOpenKeys={defaultOpenKeys}
        items={menuItems}
      >
      </Menu>
    </Sider>
  )
})

export default SideBar
