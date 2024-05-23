<template>
  <view class="login-box">
    <view class="logo-box">
      <image
        class="logo-img"
        src="../../static/images/common/logo.png"
        mode="scaleToFill"
      ></image>
    </view>
    <!-- #ifdef WEB || APP-PLUS -->
    <WebLogin></WebLogin>
    <!-- #endif-->

		<!-- #ifdef MP-WEIXIN  -->
		<WXLogin></WXLogin>
		<!-- #endif -->
		
  </view>
</template>

<script>
import WebLogin from './components/WebLogin/WebLogin.vue';
import WXLogin from './components/WXLogin/WXLogin.vue';
export default {
  name: "LoginPage",
  components: {
    WebLogin,
    WXLogin
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  margin: 0 40rpx;
  padding-top: 300rpx;
  text-align: center;

  .logo-box {
    margin-bottom: 60rpx;

    .logo-img {
      width: 168rpx;
      height: 168rpx;
    }
  }
}
</style>
