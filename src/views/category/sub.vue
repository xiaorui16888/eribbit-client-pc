<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 筛选区 -->
      <SubFilter />
      <!-- 测试复选框 -->
      <XtxCheckbox v-model="isAllChecked">全选</XtxCheckbox>{{ isAllChecked }}
      <!-- 商品面板（排序+列表） -->
      <div class="goods-list">
        <!-- 排序 -->
        <SubSort />
        <!-- 列表 -->
      </div>
    </div>
  </div>
</template>

<script>
import SubBread from './components/sub-bread'
import SubFilter from './components/sub-filter'
// import XtxCheckbox from '@/components/library/xtx-checkbox'
import SubSort from './components/sub-sort'
import { ref } from 'vue'
export default {
  name: 'SubCategory',
  components: {
    SubBread,
    SubFilter,
    // XtxCheckbox,
    SubSort
  },
  setup () {
    const isAllChecked = ref(false)
    return { isAllChecked }
  }
}
</script>
<style scoped lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
}
</style>
