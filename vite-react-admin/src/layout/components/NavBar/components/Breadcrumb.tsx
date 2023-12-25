import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import type { RouteObject } from "react-router-dom"
import { Breadcrumb } from "antd"
import  type {  BreadcrumbProps } from "antd"
import { HomeOutlined } from "@ant-design/icons"
import { constRoutes, ROUTE_PATH } from "@/router/RouteConst"
const BreadcrumbDom = () => {
  const location = useLocation()
  const pathname = location.pathname
  // const { pathname } = navigate
  const [breadcrumbArr, setBreadcrumbArr] = useState<RouteObject[]>(() => [])
  // 获取当前的路由
  useEffect(() => {
    breadcrumbChange(pathname)
    // setAnimateFlag(!animateFlag)
  }, [pathname])
  // 每次路由切换的时候 面包屑变换
  const breadcrumbChange = (pathname: string) => {
    function findBreadcrumb(routePATH) {
      if (pathname.indexOf(routePATH) === -1) return false
      else return true
    }
    const getRouters: Array<RouteObject> = []
    // 获取当前的路由
    function routerLoop(routes = breadcrumbArr) {
      routes.forEach(item => {
        if (item.path === pathname) {
          if (item.path === "/dashboard") return
        }
        if (!item.children) {
          // 说明该路由显示在面包屑上
          // if (item.meta?.breadcrumbShowFlag !== false) {
          //   if (findBreadcrumb(item.path)) getRouters.push(item)
          // }
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

  // breadcrumbArr.map((breadcrumb, index) => {
  //   return (
  //       <Link
  //         className="breadcrumb-item"
  //         to={`${
  //           breadcrumb.redirect ? breadcrumb.redirect : breadcrumb.path
  //         }`}
  //       >
  //         {breadcrumb.meta?.title}
  //       </Link>
  //   )
  // })
  return (
    <Breadcrumb
      className="breadcrumb-box"
      items={[
        {
          href: ROUTE_PATH.DASHBOARD,
          title: (
            <>
              <HomeOutlined />
              <span>首页</span>
            </>
          )
        }
      ]}
    >
    </Breadcrumb>
  )
}

export default BreadcrumbDom
