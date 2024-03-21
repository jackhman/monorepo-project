import { ROUTE_PATH } from "@/router/RouteConst"
import { appStore } from "@/store/app"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

/** 用来跳转到登录页面 */
export const TokenExpiredToLogin = observer(() => {
  const navigate = useNavigate()
  useEffect(() => {
    if (appStore.reLoginFlag) {
      navigate(ROUTE_PATH.LOGIN)
    }
  }, [appStore.reLoginFlag])

  return <></>
})
