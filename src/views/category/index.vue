<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread parentPath="/category/1005000" parentName="电器">空调</XtxBread>
      <!-- 轮播图 -->
      <!-- 全部分类 -->
      <!-- 各个分类推荐商品 -->
    </div>
  </div>
</template>
<script>
import XtxBread from '@/components/library/xtx-bread.vue'
export default {
  name: 'TopCategory',
  components: { XtxBread }
}
</script>
<style scoped lang="less"></style>
