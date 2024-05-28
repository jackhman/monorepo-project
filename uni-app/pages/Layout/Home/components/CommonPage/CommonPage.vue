<template>
  <view class="common-page"> Common-page- {{ currentTab.name }} </view>
</template>

<script>
export default {
  name: "CommonPage",
	props: {
		currentTab: {
			required: true,
			type: Object,
			default: ()=> {}
		}
	},
  data() {
    return {}
  }
}
</script>

<style lang="scss"></style>
