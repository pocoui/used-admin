<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    name: String
  }
})
</script>

<style lang="less" scoped>
.app {
  height: 100%;
}
</style>
