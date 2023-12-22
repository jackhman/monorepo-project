import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

import { constRoutes } from "@/router/RouteConst"
import { IRouterList } from '@/typescript/shared/interface/router'
const BreadcrumbDom = () => {
  const navigate = useNavigate()
  const { pathname } = navigate
  const [breadcrumbArr, setBreadcrumbArr] = useState<IRouterList[]>(() => [])
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
    const getRouters: Array<IRouterList> = []
    // 获取当前的路由
    function routerLoop(routes: Array<IRouterList> = constRoutes) {
      routes.forEach(item => {
        if (item.path === pathname) {
          if (item.path === '/dashboard') return
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
  return (
    <Breadcrumb className="breadcrumb-box">
      <Breadcrumb.Item>
        <Link to="/">首页</Link>
      </Breadcrumb.Item>
      {breadcrumbArr.map((breadcrumb, index) => {
        return (
          <Breadcrumb.Item key={index}>
            <Link
              className="breadcrumb-item"
              to={`${
                breadcrumb.redirect ? breadcrumb.redirect : breadcrumb.path
              }`}
            >
              {breadcrumb.meta?.title}
            </Link>
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

export default BreadcrumbDom
