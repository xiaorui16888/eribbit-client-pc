<template>
    <!-- 顶部头栏 -->
    <AppNavBar/>
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
import { useStore } from 'vuex'
export default {
  name: 'LayoutBase',
  components: {
    AppNavBar,
    AppHeader,
    AppFooter
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>
