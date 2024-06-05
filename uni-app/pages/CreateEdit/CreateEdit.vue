<template>
  <view class="create-edit-page">
    <HeaderVue :title="navBarTitle"></HeaderVue>
    <view class="html-box">
      <mp-html :content="html" />
    </view>
  </view>
</template>

<script>
import HeaderVue from "./components/Header.vue"
export default {
  name: "CreateEditPage",
  components: {
    HeaderVue
  },
  data() {
    return {
      html: "<div>Hello World!</div>"
    }
  },
  computed: {
    navBarTitle() {
      return "创建文章"
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.create-edit-page {
  .html-box {
    height: 100%;
  }
}
</style>
