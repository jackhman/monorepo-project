import { useEffect, useState } from "react"
import { redirect } from "react-router-dom"
import { Layout, Spin } from "antd"
import "./index.scss"
import SiderDom from "./components/SideBar"
import NavBarDom from "./components/NavBar/"
import ContentDom from "./components/Content"
import { TokenExpiredToLogin, LoadingUserInfo } from "./components/Common"
import resizeMethods from "../utils/modules/onResize"
import { ROUTE_PATH } from "@/router/RouteConst"

const LayoutDom = () => {
  redirect(ROUTE_PATH.DASHBOARD)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    resizeMethods.onResize()
    resizeMethods.listenResize()
    return () => {
      window.removeEventListener("resize", resizeMethods.onResize)
    }
  }, [])

  return (
    <Spin spinning={loading} wrapperClassName="layout-spin">
      <LoadingUserInfo setLoading={setLoading}></LoadingUserInfo>
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
    </Spin>
  )
}

export default LayoutDom
