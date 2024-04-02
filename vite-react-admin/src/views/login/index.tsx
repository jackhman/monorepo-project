import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { message, Spin } from "antd"
import styles from "./index.module.scss"
import { loginApi } from "@/api/modules/user"
import { setUserIdStorage, setToken } from "@/utils/modules/commonSave"
import { userStore } from "@/store/user"
import { LoginUserDto, RegisterUserDto } from "@shared/dto/user.dto"
import { ROUTE_PATH } from "@/router/RouteConst"
import LoginFrom from "./components/LoginFrom"
import RegisterFrom from "./components/RegisterFrom"
import LoginOrRegisterBtn from "./components/LoginOrRegisterBtn"
const LoginDom = observer(() => {
  const navigate = useNavigate()
  const [firstInit, setFirstInit] = useState(true)
  const [loading, setLoading] = useState(false)
  const [isRegisterStatus, setRegisterStatus] = useState(false)
  const [changeClassStatus, setChangeClassStatus] = useState(false)
  /** 登录请求 */
  const login = async (values: LoginUserDto) => {
    setLoading(true)
    const params: LoginUserDto = {
      userName: values.userName,
      password: values.password
    }
    try {
      const { data } = await loginApi(params)
      userStore.saveUserInfo(data)
      message.success("登录成功")
      setUserIdStorage(data.id!)
      setToken(`Bearer ${data.token}`)
      navigate(ROUTE_PATH.DASHBOARD)
    } catch (error) {
      console.log(error)
      message.error(`${error}`)
    } finally {
      setLoading(false)
    }
  }
  /** 注册 */
  function register(values: RegisterUserDto) {
    console.log(values)
    try {
      setLoading(true)
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }
  /** 登录注册切换 */
  function registerClick() {
    setFirstInit(false)
    setChangeClassStatus(() => {
      return !changeClassStatus
    })
    setTimeout(() => {
      setRegisterStatus(() => {
        return !isRegisterStatus
      })
    }, 200)
  }
  return (
    <div className={styles["login-register-box"]}>
      <Spin spinning={loading}>
        <div className={styles["spin-box"]}>
          <div
            className={`${
              changeClassStatus
                ? "flip-vertical-right"
                : firstInit
                  ? ""
                  : "flip-vertical-left"
            }`}
          >
            {isRegisterStatus ? (
              <div className={styles["register-box"]}>
                <RegisterFrom register={register}></RegisterFrom>
              </div>
            ) : (
              <div
                className={styles["login-box"]}
                style={{
                  transform: `rotateY(${firstInit ? "0deg" : "-180deg"})`
                }}
              >
                <LoginFrom login={login}></LoginFrom>
              </div>
            )}
          </div>

          <div className={styles["checkBtn"]}>
            <LoginOrRegisterBtn
              message={
                isRegisterStatus
                  ? "已有账号？快去登录吧！！！"
                  : "还没有账号？赶紧来注册吧！！！"
              }
              registerClick={registerClick}
            ></LoginOrRegisterBtn>
          </div>
        </div>
      </Spin>
    </div>
  )
})

export default LoginDom
