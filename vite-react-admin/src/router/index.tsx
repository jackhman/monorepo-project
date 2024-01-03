import {
  createBrowserRouter,
  Navigate
} from "react-router-dom"
import { ROUTE_PATH } from "./RouteConst"
import Login from "@/views/login"
import LayoutPage from "@/layout/index"
import Error404Page from "@/views/error_page/404_page"
import { routerList } from "./RouteList"
const router = createBrowserRouter([
  {
    path: ROUTE_PATH.LOGIN,
    Component: Login
  },
  {
    path: "/",
    Component: LayoutPage,
    children: [
      {
        index: true, element: <Navigate to={ROUTE_PATH.DASHBOARD}></Navigate>
      },
      ...routerList
    ]
  },
  {
    path: "*",
    element: <Error404Page />
  }
])
export default router
