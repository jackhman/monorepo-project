import { createBrowserRouter } from "react-router-dom"
import { ROUTE_PATH } from "./RouteConst"
import Login from "@/views/login"
import Dashboard from "@/views/dashboard"
const router = createBrowserRouter([
  {
    path: ROUTE_PATH.LOGIN,
    element: <Login />
  },
  {
    path: ROUTE_PATH.DASHBOARD,
    element: <Dashboard />
  }
])

export default router
