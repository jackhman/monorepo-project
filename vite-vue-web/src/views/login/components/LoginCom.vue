<template>
  <div class="login-form-com">
    <van-form class="login-form" @submit="onSubmit">
      <van-field
        v-model="form.userName"
        name="用户名"
        placeholder="用户名"
        left-icon="contact"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      >
        <template #left-icon>
          <span class="iconfont icon-mima customIcon" />
        </template>
      </van-field>
      <van-button
        round
        block
        type="primary"
        native-type="submit"
        size="small"
        class="submit-btn"
      >
        登录
      </van-button>
    </van-form>
  </div>
</template>

<script setup lang="ts">
/** 登录 */
import { reactive } from "vue"
import type { UnwrapRef } from "vue"

import { LoginUserDto } from "@shared/dto/user/user.dto"

const form: UnwrapRef<LoginUserDto> = reactive({
  userName: "admin",
  password: "123456"
})

const emit = defineEmits<{ (e: "onLoginSubmit", form: LoginUserDto): void }>()

const onSubmit = () => {
  emit("onLoginSubmit", form)
}
</script>

<style scoped lang="scss">
.login-form-com {
  :deep(.login-form) {
    margin-top: 20px;
    .van-field__control {
      margin-left: 10px;
    }
    .customIcon {
      font-size: 16px;
    }
    .submit-btn {
      width: 90%;
      margin: auto;
      margin-top: 12px;
    }
  }
}
</style>
