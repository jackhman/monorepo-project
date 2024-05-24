<template>
  <view class="h5-view">
    <view class="form-box">
      <u--form ref="uForm" :model="formData" :rules="rules">
        <u-form-item label="用户名" name="userName" required prop="userName">
          <u--input
            type="text"
            v-model="formData.userName"
            placeholder="请输入用户名"
          />
        </u-form-item>
        <u-form-item label="密码" name="password" required prop="password">
          <u--input
            type="password"
            v-model="formData.password"
            placeholder="请输入密码"
          />
        </u-form-item>
      </u--form>
      <view class="btn-box">
        <view class="btn-box-login">
          <view class="login-btn" @click="submitForm">{{
            loginFlag ? "登 录" : "注 册"
          }}</view>
          <view class="change-register">
            <text @click="changeStatus">{{
              loginFlag ? "还没有账号? 立即注册" : "已有账号? 立即登录"
            }}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="agreement-box">
      <text>登录/注册即代表同意</text>
      <text
        class="agreement-file"
        @click="argeementFileClick(ARGEEMENT_TYPE_COM.User)"
        >《用户协议》</text
      >
      <text
        class="agreement-file"
        @click="argeementFileClick(ARGEEMENT_TYPE_COM.Privacy)"
        >《隐私协议》</text
      >
    </view>
    <!-- 协议弹出框 -->
    <AgreementPopup
      :argeementType="argeementType"
      :argeementTimeStamp="argeementTimeStamp"
    />
    <!-- 加载弹出框 -->
    <LoadingCom :loading="loading" text="登录中..."></LoadingCom>

    <u-notify ref="uNotify"></u-notify>
  </view>
</template>

<script>
import { ARGEEMENT_TYPE } from "./type"
import AgreementPopup from "./AgreementPopup.vue"

import { loginApi } from "@/api/modules/user.js"
import { StorageConst } from "@/utils/modules/constVariable.js"
export default {
  components: {
    AgreementPopup
  },
  data() {
    return {
      // 表单数据
      formData: {
        userName: "admin",
        password: "123456"
      },
      rules: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      },
      loginFlag: true,
      argeementType: ARGEEMENT_TYPE.User,
      argeementTimeStamp: null,
      loading: false
    }
  },
  computed: {
    ARGEEMENT_TYPE_COM() {
      return ARGEEMENT_TYPE
    }
  },
  onReady() {
    //如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
    this.$refs.uForm.setRules(this.rules)
  },
  methods: {
    submitForm() {
      this.$refs.uForm
        .validate()
        .then(res => {
          // 登录
          if (this.loginFlag) {
            this.loading = true
            loginApi(this.formData)
              .then(res => {
                if (res.code === 0) {
                  uni.setStorageSync(StorageConst.token, `Bearer ${res.data.token}`)
									uni.setStorageSync(StorageConst.userId, res.data.id)
                  uni.switchTab({
                    url: "/pages/Layout/Home/index"
                  })
                } else {
                  this.$refs.uNotify.show({
                    type: "error",
                    message: res.msg
                  })
                }
              })
              .finally(() => {
                this.loading = false
              })
          } else {
            // 注册
            // userCloud.register(res).then(res => {
            //   let icon = res.code === 0 ? "success" : "error"
            //   uni.showToast({
            //     title: res.msg,
            //     icon
            //   })
            //   this.loginFlag = true
            // })
          }
        })
        .catch(err => {
          console.log("表单错误信息：", err)
        })
    },
    // 切换为注册或者登录
    changeStatus() {
      this.loginFlag = !this.loginFlag
    },
    // 当前点击了协议
    argeementFileClick(type) {
      this.argeementTimeStamp = +new Date()
      this.argeementType = type
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .form-box {
  padding: 50rpx;
  box-shadow: 0px 0px 20px 10px #eee;
  border-radius: 10px;

  .u-form-item__body__left {
    width: 60px !important;
  }

  .u-form-item__body__right__message {
    text-align: left;
    margin-left: 60px !important;
  }
}

.btn-box {
  &-login {
    .login-btn {
      background-color: $base-color;
      border-radius: 30rpx;
      padding: 18rpx 0;
      color: #fff;
      font-size: 24rpx;
    }

    .change-register {
      height: 100rpx;
      line-height: 100rpx;
      font-size: 12px;
      color: $uni-color-primary;
    }
  }
}

.agreement-box {
  position: absolute;
  font-size: 16rpx;
  bottom: 50rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-size: 16px;

  .agreement-file {
    color: $uni-color-primary;
  }
}

.loading-view {
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
</style>
