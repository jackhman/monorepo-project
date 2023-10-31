<template>
  <div class="register-com">
    <van-form @failed="registerSubmit">
      <!-- 请输入用户名 -->
      <van-field
        v-model="form.userName"
        name="userName"
        placeholder="请输入用户名"
        left-icon="contact"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <!-- 请输入昵称 -->
      <van-field
        v-model="form.nickName"
        name="nickName"
        placeholder="请输入昵称"
      >
        <template #left-icon>
          <span class="iconfont icon-nicheng" />
        </template>
      </van-field>
      <!-- 请输入密码 -->
      <van-field
        v-model="form.password"
        name="password"
        type="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      >
        <template #left-icon>
          <span class="iconfont icon-mima" />
        </template>
      </van-field>
      <!-- 确认密码 -->
      <van-field
        v-model="form.confirmPwd"
        name="confirmPwd"
        type="password"
        placeholder="确认密码"
        :rules="formRules.confirmPwd"
      >
        <template #left-icon>
          <span class="iconfont icon-querenmima customIcon" />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          size="small"
        >
          注册
        </van-button>
      </div>
    </van-form>
    <div class="return-login" @click="returnLogin">已有账号?去登录</div>
  </div>
</template>

<script setup lang="ts">
/** 注册 */
import { reactive } from "vue"
import {
  RegisterUserDto,
} from "@shared/dto/user/user.dto"

interface ICom extends RegisterUserDto {
  confirmPwd: string
}

const emits = defineEmits<{
  (e: "changeComStatus", flag: boolean): void
  (e: "registerSubmit", form: RegisterUserDto): void
}>()
const form = reactive<ICom>({
  userName: "admin",
  nickName: "admin",
  password: "123456",
  confirmPwd: "123456"
})
/** 规则 */
const formRules = reactive({
  confirmPwd: [
    {
      validator: (value: string) => {
        if (!value) return "请确认密码"
        // 说明两次的密码不相同
        if (form.password !== value) {
          return "两次密码不相同"
        }
        else return false
      }
    }
  ]
})
/** 注册 */
const registerSubmit = () => {
  const registerForm: RegisterUserDto = {
    userName: form.userName,
    nickName: form.nickName,
    password: form.password
  }
  emits("registerSubmit", registerForm)
}

/** 返回登录 */
const returnLogin = () => {
  emits("changeComStatus", true)
}
</script>

<style scoped lang="scss">
.register-com {
  .return-login {
    font-size: 12px;
    text-align: center;
    // color: $font-color;
  }
}
</style>
