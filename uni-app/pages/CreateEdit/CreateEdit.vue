<template>
  <view class="create-edit-page">
    <HeaderVue :title="navBarTitle"></HeaderVue>
    <EditCom></EditCom>
  </view>
</template>

<script>
import HeaderVue from "./components/Header.vue"
import EditCom from "./components/EditCom/index.vue"
export default {
  name: "CreateEditPage",
  components: {
    HeaderVue,
    EditCom
  },
  data() {
    return {}
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
