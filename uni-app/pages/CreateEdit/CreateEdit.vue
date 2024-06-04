<template>
  <view class="create-edit-page">
    <HeaderVue :title="navBarTitle"></HeaderVue>
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
}
</style>
