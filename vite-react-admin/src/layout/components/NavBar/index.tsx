import { Layout } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import { observer } from "mobx-react-lite"
import { appStore } from "@/store/app"
import Breadcrumb from "./components/Breadcrumb"
import Personal from "./components/Personal/index"
import "./index.scss"
const { Header } = Layout
const NavBar = observer(() => {
  return (
    <Header style={{ padding: 0 }} className="header-box">
      {/* 侧边栏开关按钮 */}
      <div
        className="trigger"
        onClick={() => appStore.changeSideStatus()}
        style={{ fontSize: "20px" }}
      >
        {appStore.sideStatus ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </div>
      {/* 面包屑 */}
      <Breadcrumb></Breadcrumb>
      {/* 头像下拉框 */}
      <Personal></Personal>
    </Header>
  )
})
export default NavBar
