<script>
import AppUtils from "@/utils/modules/appUtils"
export default {
  onLaunch: function () {
		// #ifdef WEB
    AppUtils.handleFetchUserInfo(this)
		// #endif
  },
  onShow: function () {
    console.log("App Show")
  },
  onHide: function () {
    console.log("App Hide")
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
@import "@/uni_modules/uview-ui/index.scss";
</style>
