import { createBrowserRouter } from "react-router-dom"
import { ROUTE_PATH } from "./RouteConst"
import Login from "@/views/login"
import Dashboard from "@/views/dashboard"
import Error404Page from "@/views/error_page/404_page"
const router = createBrowserRouter([
  {
    path: ROUTE_PATH.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE_PATH.DASHBOARD,
    element: <Dashboard />
  },
  {
    path: "*",
    element: <Error404Page />
  }
])
console.log(router)
export default router
