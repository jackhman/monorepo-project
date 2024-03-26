import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Input, Button, Checkbox, message } from "antd"
import styles from "./index.module.scss"
import { loginApi } from "@/api/modules/user"
import { setUserIdStorage, setToken } from "@/utils/modules/commonSave"
import { LoginUserDto } from "@shared/dto/user.dto"
import { ROUTE_PATH } from "@/router/RouteConst"
import LoginFrom from "./components/LoginFrom"
import RegisterFrom from "./components/RegisterFrom"
import LoginOrRegisterBtn from "./components/LoginOrRegisterBtn"
const LoginDom = () => {
  interface IForm {
    userName: string
    password: string
  }
  const navigate = useNavigate()
  const [loginForm] = useState<IForm>({ userName: "admin", password: "123456" })
  const [loading, setLoading] = useState(false)
  const [isRegisterStatus, setRegisterStatus] = useState(false)
  /** 登录请求 */
  const onFinish = async (values: IForm) => {
    setLoading(true)
    const params: LoginUserDto = {
      userName: values.userName,
      password: values.password
    }
    try {
      const { data } = await loginApi(params)
      message.success("登录成功")
      setUserIdStorage(data.id!)
      setToken(`Bearer ${data.token}`)
      navigate(ROUTE_PATH.DASHBOARD)
    } finally {
      setLoading(false)
    }
  }
  /** 登录注册切换 */
  function registerClick() {
    setRegisterStatus(() => {
      return !isRegisterStatus
    })
  }
  return (
    <div className={styles["login-register-box"]}>
      {isRegisterStatus ? (
        <RegisterFrom></RegisterFrom>
      ) : (
        <LoginFrom></LoginFrom>
      )}

      <LoginOrRegisterBtn
        message={
          isRegisterStatus
            ? "已有账号？快去登录吧！！！"
            : "还没有账号？赶紧来注册吧！！！"
        }
        registerClick={registerClick}
      ></LoginOrRegisterBtn>
    </div>
  )
}

export default LoginDom
