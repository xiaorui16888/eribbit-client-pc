<template>
  <div class="xtx-infinite-loading" ref="container">
    <div class="loading" v-if="loading">
      <span class="img"></span>
      <span class="text">正在加载...</span>
    </div>
    <div class="none" v-if="finished">
      <span class="img"></span>
      <span class="text">亲，没有更多了</span>
    </div>
  </div>
</template>

<script>
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

export default {
  name: 'XtxInfiniteLoading',
  props: {
    // 控制正在加载效果的显示
    loading: {
      type: Boolean,
      default: false
    },
    // 控制没有更多效果的显示
    finished: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const container = ref(null)
    // 监听target是否进入可视区
    useIntersectionObserver(
      container,
      ([{ isIntersecting }], dom) => {
        if (isIntersecting) {
          console.log('进入可视区')
          // 触发加载事件条件：加载完成、数据加载完毕
          if (props.loading === false && props.finished === false) {
            emit('infinite')
          }
        }
      }, { threshold: 0 })

    return { container }
  }
}
</script>
<style scoped lang='less'>
.xtx-infinite-loading {
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    .img {
      width: 50px;
      height: 50px;
      background: url(../../assets/images/load.gif) no-repeat center / contain;
    }
    .text {
      color: #999;
      font-size: 16px;
    }
  }
  .none {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    .img {
      width: 200px;
      height: 134px;
      background: url(../../assets/images/none.png) no-repeat center / contain;
    }
    .text {
      color: #999;
      font-size: 16px;
    }
  }
}
</style>
