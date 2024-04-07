import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Breadcrumb } from "antd"
import { HomeOutlined } from "@ant-design/icons"
import { ROUTE_PATH } from "@/router/RouteConst"
import { IRouterList } from "@/ts/interface/router"
import { routerList } from "@/router/RouteList"
const BreadcrumbDom = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname
  const [breadcrumbArr, setBreadcrumbArr] = useState<IRouterList[]>(
    () => routerList
  )
  // 获取当前的路由
  useEffect(() => {
    breadcrumbChange(pathname)
  }, [pathname])
  // 每次路由切换的时候 面包屑变换
  const breadcrumbChange = (pathname: string) => {
    function findBreadcrumb(routePATH: string) {
      if (pathname.indexOf(routePATH) === -1) return false
      else return true
    }
    const getRouters: Array<IRouterList> = []
    // 获取当前的路由
    function routerLoop(routes = routerList) {
      routes.forEach(item => {
        if (item.path === pathname) {
          if (item.path === "/dashboard") return
        }
        if (!item.children) {
          // 说明该路由显示在面包屑上
          if (item.meta?.breadcrumbShowFlag !== false) {
            if (findBreadcrumb(item.path)) getRouters.push(item)
          }
        } else {
          if (
            findBreadcrumb(item.path) &&
            item.meta?.breadcrumbShowFlag !== false
          ) {
            getRouters.push(item)
          }
          routerLoop(item.children)
        }
      })
    }
    routerLoop()
    setBreadcrumbArr([...getRouters])
  }

  /** 面包屑的点击事件 */
  function breadcrumbClick(path: string) {
    navigate(path)
  }
  return (
    <Breadcrumb
      className="breadcrumb-box"
      style={{ lineHeight: "inherit" }}
      items={[
        {
          onClick: () => breadcrumbClick(ROUTE_PATH.DASHBOARD),
          title: (
            <span style={{ color: "#000", cursor: "pointer" }}>
              <HomeOutlined />
              <span style={{ marginLeft: "5px" }}>首页</span>
            </span>
          )
        },
        ...breadcrumbArr.map(breadcrumb => {
          return {
            onClick: () =>
              breadcrumbClick(
                breadcrumb.redirect ? breadcrumb.redirect : breadcrumb.path
              ),
            title: (
              <span className="breadcrumb-child-item">
                <span>{breadcrumb.meta?.title}</span>
              </span>
            )
          }
        })
      ]}
    ></Breadcrumb>
  )
}

export default BreadcrumbDom
