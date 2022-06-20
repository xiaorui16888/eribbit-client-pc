<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner />
        <!-- 新鲜好物 -->
        <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
          <template #right>
            <XtxMore path="/"></XtxMore>
          </template>
        </HomePanel>
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
import HomePanel from './components/home-panel'
import XtxMore from '@/components/library/xtx-more.vue'
export default {
  name: 'PageHome',
  components: {
    HomeCategory,
    HomeBanner,
    HomePanel,
    XtxMore
  }
}
</script>
<style scoped lang="less">
</style>
