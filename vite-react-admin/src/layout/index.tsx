import { useEffect } from "react"
import { redirect } from "react-router-dom"
import { Layout } from "antd"
import "./index.scss"
import SiderDom from "./components/SideBar"
import NavBarDom from "./components/NavBar/"
import ContentDom from "./components/Content"
import { TokenExpiredToLogin } from "./components/Common"
import resizeMethods from "../utils/modules/onResize"
import { ROUTE_PATH } from "@/router/RouteConst"

const LayoutDom = () => {
  redirect(ROUTE_PATH.DASHBOARD)
  useEffect(() => {
    resizeMethods.onResize()
    resizeMethods.listenResize()
    return () => {
      window.removeEventListener("resize", resizeMethods.onResize)
    }
  }, [])
  return (
    <div className="layout-box">
      {/* 侧边栏 */}
      <SiderDom />
      {/* 右边内容区域 */}
      <Layout className="site-layout">
        {/* 头部 */}
        <NavBarDom />
        {/* 内容区域 */}
        <ContentDom></ContentDom>
      </Layout>
      <TokenExpiredToLogin></TokenExpiredToLogin>
    </div>
  )
}

export default LayoutDom
