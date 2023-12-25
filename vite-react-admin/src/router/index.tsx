import { createBrowserRouter } from "react-router-dom"
import { ROUTE_PATH } from "./RouteConst"
import Login from "@/views/login"
import Dashboard from "@/views/dashboard"
import LayoutPage from "@/layout/index"
import Error404Page from "@/views/error_page/404_page"
const router = createBrowserRouter([
  {
    path: ROUTE_PATH.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE_PATH.DASHBOARD,
    element: <LayoutPage />,
    children: [
      {
        path: ROUTE_PATH.DASHBOARD,
        element: <Dashboard />,
      }
    ],
    
  },
  {
    path: "*",
    element: <Error404Page />
  }
])
export default router
