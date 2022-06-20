<template>
    <!-- 顶部头栏 -->
    <AppNavBar/>
    <!-- 吸顶头部 -->
    <!-- <AppHeaderSticky/> -->
    <AppHeaderStickyNew/>
    <!-- 头部组件 -->
    <AppHeader/>
    <!-- 内容容器 -->
    <div class="main">
      <!-- 二级路由 -->
      <RouterView/>
    </div>
    <!-- 底部组件 -->
    <AppFooter/>
</template>
<script>
import AppNavBar from '@/components/app-navbar'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
// import AppHeaderSticky from '@/components/app-header-sticky'
import AppHeaderStickyNew from '@/components/app-header-sticky-new'
import { useStore } from 'vuex'
export default {
  name: 'LayoutBase',
  components: {
    AppNavBar,
    AppHeader,
    AppFooter,
    // AppHeaderSticky
    AppHeaderStickyNew
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>
