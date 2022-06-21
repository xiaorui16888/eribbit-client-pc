<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner />
        <!-- 新鲜好物 -->
        <HomeNew />
        <!-- 人气推荐 -->
        <HomeHot />
        <!-- 热门品牌 -->
        <HomeBrand/>
        <!-- 商品区域 -->
        <HomeProduct/>
        <!-- 最新专题 -->
        <HomeSpecial/>

        <!-- <div>
          <button @click="show = true">显示|创建</button>
          <button @click="show = false">隐藏|移除</button>
          <div v-show="show" style="background:red;height:100px;width:100px;">
          </div>
          <Transition>
            <div v-show="show" style="background:red;height:100px;width:100px;">
            </div>
          </Transition>
        </div> -->

      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner'
import HomeNew from './components/home-new'
import HomeHot from './components/home-hot'
import { ref } from 'vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product.vue'
import HomeSpecial from './components/home-special.vue'
export default {
  name: 'PageHome',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial
  },
  setup () {
    const show = ref(true)

    return { show }
  }
}
</script>
<style scoped lang="less">
//如果需要多组动画，transition加上name属性 name="xxx"
//其他6个类型写法：xxx-enter-form xxx-enter-active xxx-enter-to
// xxx-leave-form xxx-leave-active xxx-leave-to

// vue2.0 进入前-中-后 v-enter v-enter-active v-enter-to
// vue3.0 进入前-中-后 v-enter-from v-enter-active v-enter-to
.v-enter-from{
  opacity: 0;
}
.v-enter-active{
  transition: all 2s;
}
.v-enter-to{
  opacity: 1;
}
// vue2.0 离开前-中-后 v-leave v-leave-active v-leave-to
// vue2.0 离开前-中-后 v-leave-from v-leave-active v-leave-to
.v-leave-from{
  opacity: 1;
}
.v-leave-active{
  transition: all 2s;
}
.v-leave-to{
  opacity: 0;
}
</style>
