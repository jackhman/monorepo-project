import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Breadcrumb } from "antd"
import { HomeOutlined } from "@ant-design/icons"
// import { ROUTE_PATH } from "@/router/RouteConst"
import { IRouterList } from "@/ts/interface/router"
const BreadcrumbDom = () => {
  const location = useLocation()
  const pathname = location.pathname
  const [breadcrumbArr, setBreadcrumbArr] = useState<IRouterList[]>(() => [])
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
    function routerLoop(routes = breadcrumbArr) {
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
  function breadcrumbClick(type) {
    console.log(type, breadcrumbArr)
  }
  return (
    <Breadcrumb
      className="breadcrumb-box"
      items={[
        {
          onClick: ()=> breadcrumbClick(123),
          title: (
            <>
              <HomeOutlined />
              <span>首页</span>
            </>
          )
        },
        ...breadcrumbArr.map(breadcrumb => {
          return {
            href: breadcrumb.redirect ? breadcrumb.redirect : breadcrumb.path,
            title: breadcrumb.meta?.title
          }
        })
      ]}
    ></Breadcrumb>
  )
}

export default BreadcrumbDom
