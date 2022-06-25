<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 筛选区 -->
      <SubFilter/>
      <!-- 测试复选框 -->
      <XtxCheckbox v-model="isAllChecked">全选</XtxCheckbox>{{isAllChecked}}
    </div>
  </div>
</template>

<script>
import SubBread from './components/sub-bread'
import SubFilter from './components/sub-filter'
import XtxCheckbox from '@/components/library/xtx-checkbox'
import { ref } from 'vue'
export default {
  name: 'SubCategory',
  components: {
    SubBread,
    SubFilter,
    XtxCheckbox
  },
  setup () {
    const isAllChecked = ref(false)
    return { isAllChecked }
  }
}
</script>
