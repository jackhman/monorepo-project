<template>
  <p v-for="item in 100" :key="item">SHOPCAR --- {{ item }}</p>
</template>

<script setup lang="ts"></script>

<script lang="ts">
import { ROUTE_NAME } from "@/router/RouteConst"
export default {
  name: ROUTE_NAME.SHOPCAR
}
</script>

<style scoped lang="scss"></style>
