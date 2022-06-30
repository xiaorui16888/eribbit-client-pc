<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 筛选区 -->
      <SubFilter @filter-change="filterChange" />
      <!-- 测试复选框 -->
      <!-- <XtxCheckbox v-model="isAllChecked">全选</XtxCheckbox>{{ isAllChecked }} -->
      <!-- 商品面板（排序+列表） -->
      <div class="goods-list">
        <!-- 排序 -->
        <SubSort  @sort-change="sortChange"/>
        <!-- 列表 -->
        <ul>
          <li v-for="goods in goodList" :key="goods.id" >
            <GoodsItem :goods="goods" />
          </li>
        </ul>
        <!-- 无限加载组件 -->
        <XtxInfiniteLoading :loading="loading" :finished="finished" @infinite="getData"/>
      </div>
    </div>
  </div>
</template>

<script>
import SubBread from './components/sub-bread'
import SubFilter from './components/sub-filter'
import SubSort from './components/sub-sort'
import GoodsItem from './components/goods-item'
import { ref, watch } from 'vue'
import XtxInfiniteLoading from '@/components/library/xtx-infinite-loading.vue'
import { findSubCategoryGoods } from '@/api/category'
import { useRoute } from 'vue-router'
export default {
  name: 'SubCategory',
  components: {
    SubBread,
    SubFilter,
    SubSort,
    GoodsItem,
    XtxInfiniteLoading
  },
  setup () {
    const isAllChecked = ref(false)
    const route = useRoute()

    // 是否正在加载
    const loading = ref(false)
    // 是否加载完毕
    const finished = ref(false)
    // 商品列表数据
    const goodList = ref([])
    // 请求参数
    let reqParams = {
      page: 1,
      pageSize: 20
    }

    const getData = () => {
      loading.value = true
      console.log('加载数据')
      // 设置二级分类的ID
      reqParams.categoryId = route.params.id
      findSubCategoryGoods(reqParams).then(({ result }) => {
        // 获取数据成功
        if (result.items.length) {
          // 有数据就追加数据
          goodList.value.push(...result.items)
          // 把page改成下一页页码
          reqParams.page++
        } else {
          // 没有数据
          finished.value = false
        }
        loading.value = false
      })
    }

    // 在更改了二级分类的时候需要重新加载数据
    watch(() => route.params.id, (newVal) => {
      if (newVal && `/category/sub${newVal}` === route.path) {
        goodList.value = []
        reqParams = { page: 1, pageSize: 20 }
        finished.value = false
      }
    })

    // 1.更改排序组件的筛选数据，重新请求
    const sortChange = (sortParams) => {
      finished.value = false
      // 合并请求参数，保留之前的参数
      reqParams = { ...reqParams, ...sortParams }
      reqParams.page = 1
      goodList.value = []
    }
    // 2.更改筛选组件的筛选数据，重新请求
    const filterChange = (filterParams) => {
      console.log(filterParams)
      finished.value = false
      // 合并请求参数，保留之前的参数
      reqParams = { ...reqParams, ...filterParams }
      reqParams.page = 1
      goodList.value = []
    }
    return { isAllChecked, getData, loading, finished, goodList, sortChange, filterChange }
  }
}
</script>
<style scoped lang='less'>
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    li {
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
