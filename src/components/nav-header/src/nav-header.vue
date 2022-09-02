<template>
  <div class="navHeader">
    <i class="fold-menu" @click="handleFoldClick">
      <template v-if="isFold">
        <el-icon><Expand /></el-icon>
      </template>
      <template v-else>
        <el-icon><Fold /></el-icon>
      </template>
    </i>
    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import userInfo from './components/user-info.vue'

export default defineComponent({
  name: 'navHeader',
  emits: ['foldChange'],
  components: {
    userInfo
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style lang="less" scoped>
.navHeader {
  width: 100%;
  display: flex;
  .fold-menu {
    margin-left: 5px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
}
</style>
