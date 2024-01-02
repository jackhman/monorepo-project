import {
  createBrowserRouter,
  Navigate,
  type RouteObject
} from "react-router-dom"
import { ROUTE_PATH } from "./RouteConst"
import Login from "@/views/login"
import LayoutPage from "@/layout/index"
import Error404Page from "@/views/error_page/404_page"
import { routerList } from "./RouteList"
const layoutRouteList: RouteObject[] = routerList.map(route => {
  return {
    path: route.path,
    Component: route.component,
    children: route.children
  }
})

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.LOGIN,
    element: <Login />
  },
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index: true, element: <Navigate to={ROUTE_PATH.DASHBOARD}></Navigate>
      },
      ...layoutRouteList
    ]
  },
  {
    path: "*",
    element: <Error404Page />
  }
])
export default router
