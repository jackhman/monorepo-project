import { useLocation } from "react-router-dom"
export const TokenExpiredToLogin = () => {
  const location = useLocation()
  const pathname = location.pathname
  console.log(pathname)
  return (<></>)
}
