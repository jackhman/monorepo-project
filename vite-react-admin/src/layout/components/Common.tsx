import { ROUTE_PATH } from "@/router/RouteConst"
import { appStore } from "@/store/app"
import { userStore } from "@/store/user"
import { observer } from "mobx-react-lite"
import { message } from "antd"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getUserInfoApi } from "@/api/modules/user"
import { getUserIdStorage } from "@/utils/modules/commonSave"
import { ResultMsg } from "@shared/enum/result-enum"
/** 用来跳转到登录页面 */
export const TokenExpiredToLogin = observer(() => {
  const navigate = useNavigate()
  useEffect(() => {
    if (appStore.reLoginFlag) {
      appStore.changeReLogin(false)
      navigate(ROUTE_PATH.LOGIN)
    }
  }, [appStore.reLoginFlag])

  return <></>
})

interface LoadingUserInfoProps {
  setLoading: (flag: boolean) => void
}
/** 用来处理获取用户数据，加载状态 */
export const LoadingUserInfo = observer((props: LoadingUserInfoProps) => {
  useEffect(() => {
    getUserInfo()
  }, [])

  async function getUserInfo() {
    try {
      const { data } = await getUserInfoApi(getUserIdStorage())
      userStore.saveUserInfo(data)
    } catch (error) {
      message.error(ResultMsg.REQUEST_FAIL)
    } finally {
      props.setLoading(false)
    }
  }
  return <></>
})
