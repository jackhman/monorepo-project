<template>
  <div class="login-form-box">
    <van-nav-bar :title="isFlag ? '登录' : '注册'" />
    <div class="logo-box">
      <img src="@/assets/images/default-logo.png" alt="" srcset="" />
    </div>
    <LoginCom v-show="isFlag" @onLoginSubmit="onSubmit" />
    <RegisterCom
      v-show="!isFlag"
      @changeComStatus="isFlag = true"
      @registerSubmit="registerSubmit"
    />
    <!-- 其他操作 -->
    <div v-show="isFlag" class="login-form-bottom">
      <div class="forget-pwd" @click="forgetPWD">忘记密码</div>
      <span class="icon">|</span>
      <div class="register-user" @click="registerUser">注册用户</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import { showToast, closeToast, showNotify, showDialog } from "vant"
import { useUserStore } from "@/store/user"
import { loginApi, registerApi } from "@/api/modules/user"
import { tokenExpired } from "@/utils"
import { ROUTE_PATH } from "@/router/RouteConst"
import { setToken, setUserIdStorage } from "@/utils/modules/commonSave"
import LoginCom from "./components/LoginCom.vue"
import RegisterCom from "./components/RegisterCom.vue"
import { ResultCode } from "@shared/enum/result-enum"
import {
  LoginUserDto,
  UserInfoDto,
  RegisterUserDto
} from "@shared/dto/user.dto"

/** 显示登录组件还是注册组件 true 登录组件 false 注册组件 */
const isFlag = ref<boolean>(true)

const router = useRouter()
const store = useUserStore()

/** 登录 提交按钮 */
const onSubmit = async (form: LoginUserDto) => {
  tokenExpired()
  showToast({
    message: "登录中...",
    duration: 0,
    type: "loading"
  })
  try {
    const data = await loginApi(form)
    if (data.code === ResultCode.SUCCESS) {
      successCallBack("登录成功", data.data)
    } else {
      showNotify({
        message: data.msg,
        type: "warning"
      })
    }
  } catch (error) {
    showNotify({
      message: `登录失败${error}`,
      type: "warning"
    })
  } finally {
    closeToast(true)
  }
}

/** 注册用户 */
const registerSubmit = async (from: RegisterUserDto) => {
  showToast({
    message: "注册中...",
    duration: 0,
    type: "loading"
  })
  try {
    const data = await registerApi(from)
    if (data.code === ResultCode.SUCCESS) {
      successCallBack("注册成功", data.data)
    } else {
      showToast({
        message: data.msg,
        type: "fail"
      })
    }
  } catch (error) {
    showToast({
      message: `${error}`,
      type: "fail"
    })
  }
}

/** 注册用户按钮 */
const registerUser = () => {
  isFlag.value = false
}

/** 登录 注册 成功的回调 */
const successCallBack = async (message: string, data: UserInfoDto) => {
  setToken(data.token as string)
  setUserIdStorage(data.id as string)
  await store.getUserInfo(data.id as string)
  showToast({
    message,
    type: "loading",
    duration: 1000,
    onClose: () => {
      router.push({
        path: ROUTE_PATH.HOME
      })
    }
  })
}

/** 忘记密码 */
const forgetPWD = () => {
  showDialog({
    title: "静候佳音",
    message: "功能开发中..."
  }).then(() => {
    // on close
  })
}
</script>

<script lang="ts">
import { ROUTE_NAME } from "@/router/RouteConst"
export default {
  name: ROUTE_NAME.LOGIN
}
</script>

<style scoped lang="scss">
.login-form-box {
  .logo-box {
    margin-top: 20vh;
    text-align: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }

  .login-form-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    > div {
      margin: 0 10px;
      font-size: 12px;
    }
    .icon {
      color: #f8f8f8;
    }
    .forget-pwd {
      color: $base-color;
    }
    .register-user {
      color: $font-color;
    }
  }
}
</style>
