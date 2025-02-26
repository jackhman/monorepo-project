import { Badge, Dropdown } from "antd"
import type { MenuProps } from "antd"
import {
  DownOutlined,
  UserOutlined,
  ExportOutlined,
  BellOutlined
} from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { clearLoginData } from "@/utils"
import { userStore } from "@/store/user"
import { ROUTE_PATH } from "@/router/RouteConst"
import { observer } from "mobx-react-lite"
import MessageDropdown from "./MessageDropdown"
import { appStore } from "@/store/app"
import "./index.scss"
const Personal = observer(() => {
  const navigate = useNavigate()
  // 点击 菜单项
  const menuClick: MenuProps["onClick"] = e => {
    const { key } = e
    switch (key) {
      // 个人中心
      case "personal":
        navigate("/personal", {
          state: { test: "dashboard" }
        })
        break
      // 退出登录
      case "logout":
        clearLoginData()
        navigate(ROUTE_PATH.LOGIN)
        break
      default:
        break
    }
  }

  const items: MenuProps["items"] = [
    {
      key: "personal",
      label: (
        <span>
          <UserOutlined />
          <span>个人中心</span>
        </span>
      )
    },
    {
      type: "divider"
    },
    {
      key: "logout",
      label: (
        <span>
          <ExportOutlined />
          <span>退出登录</span>
        </span>
      )
    }
  ]
  /** 消息下拉框的改变事件 */
  function messageDropOpen(flag: boolean) {
    if (flag) {
      setTimeout(() => {
        appStore.changeMessageCount(0)
      }, 500)
    }
  }
  return (
    <div className="personal-box">
      <div id="personal-box-icon">
        <div
          className={`icon-tip ${appStore.messageCount && "message-animation"}`}
        >
          <Dropdown
            placement="bottom"
            dropdownRender={MessageDropdown}
            onOpenChange={messageDropOpen}
            getPopupContainer={()=> document.getElementById('personal-box-icon') as HTMLElement}
          >
            <Badge
              size="small"
              count={appStore.messageCount}
              overflowCount={10}
            >
              <BellOutlined />
            </Badge>
          </Dropdown>
        </div>
      </div>
      <Dropdown menu={{ items, onClick: menuClick }} trigger={["hover"]}>
        <div
          className="personal-dropdown"
          style={{ display: "flex", alignItems: "center" }}
        >
          <span className="personal-name">Hi~</span>
          <img
            className="personal-img"
            src={userStore.userInfo.avatar}
            alt=""
          />
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  )
})

export default Personal
