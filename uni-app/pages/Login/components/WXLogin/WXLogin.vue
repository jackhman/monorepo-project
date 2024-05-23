<template>
  <view>
    <u-button openType="getUserInfo" type="success" text="微信登录" @click="wxLoginClick"></u-button>
    <LoadingCom :loading="loading" text="登录中..."></LoadingCom>
  </view>
</template>

<script>
import { wxLoginApi } from "@/api/modules/user"
export default {
  data() {
    return {
      loading: false
    }
  },
  onReady() {},
  methods: {
    wxLoginClick() {
      this.loading = true
      uni.login({
        success: res => {
          if (res.errMsg === "login:ok") {
            wxLoginApi({
              code: res.code
            })
              .then(result => {
                console.log(result)
              })
              .catch(err => {
                console.log(err)
              })
          }
        },
        fail: error => {
          console.log(error)
        },
        complete: () => {
          this.loading = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
