<template>
  <!-- <router-link :to="ROUTE_PATH.LOGIN">登录</router-link> -->
  <div class="personal-page-box">
    <!-- 个人信息 -->
    <div class="personal-info-box">
      <div class="personal-info-box-user">
        <div class="avatar-box">
          <img class="avatar-box-img" :src="store.userInfo?.avatar" alt="" />
          <span class="avatar-box-user-name lineEllipsisOne">{{
            store.userInfo?.nickName
          }}</span>
        </div>
        <span class="edit-info">编辑资料</span>
      </div>
      <div class="personal-info-box-article">
        <div class="personal-info-box-article-item">
          <span class="num">666</span>
          <span class="text">头条</span>
        </div>
        <div class="personal-info-box-article-item">
          <span class="num">666</span>
          <span class="text">获赞</span>
        </div>
        <div class="personal-info-box-article-item">
          <span class="num">666</span>
          <span class="text">粉丝</span>
        </div>
        <div class="personal-info-box-article-item">
          <span class="num">666</span>
          <span class="text">关注</span>
        </div>
      </div>
    </div>
    <!-- 功能 -->
    <div class="opear-box card-box">
      <OpearCom />
    </div>
    <!-- 链接 -->
    <div class="link-box card-box">
      <LinkCom />
    </div>
    <!-- 退出登录 -->
    <div class="logout-btn" @click="logoutBtn">退出登录</div>
  </div>
</template>

<script setup lang="ts">
/** 个人中心页面 */
import { useRouter } from "vue-router"
import { ROUTE_PATH } from "@/router/RouteConst"
import { useUserStore } from "@/store/user"
import { logoutClearUtils } from "@/utils"
import OpearCom from "./components/OpearCom.vue"
import LinkCom from "./components/LinkCom.vue"
import { showConfirmDialog } from "vant"
const store = useUserStore()
const router = useRouter()
/** 退出登录 */
const logoutBtn = (): void => {
  showConfirmDialog({
    title: "是否退出登录",
    message: "退出之后,部分模块不可访问"
  })
    .then(() => {
      logoutClearUtils()
      router.push({
        path: ROUTE_PATH.LOGIN
      })
    })
    .catch(() => {})
}
</script>

<script lang="ts">
import { ROUTE_NAME } from "@/router/RouteConst"
export default {
  name: ROUTE_NAME.PERSONAL
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
