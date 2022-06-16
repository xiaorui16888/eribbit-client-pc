<template>
  <!-- vue2.0需要根元素，vue3.0可以是代码片段 -->
  <div>
    APP
  </div>
  <!-- 使用根模块state的数据 -->
  <p>{{ $store.state.username }}</p>
  <!-- 使用根模块getters的数据 -->
  <p>{{ $store.getters.newName }}</p>
  <p>{{ $store.getters['newName'] }}</p>

  <button @click="mutationsFn">mutationsFn</button>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    // 使用vuex仓库
    const store = useStore()
    // 使用根模块state的数据
    console.log(store.state.username)
    const mutationsFn = () => {
      // 提交根模块mutations函数
      // store.commit('updateName')
      // 调用根模块actions函数
      store.dispatch('updateName')
    }

    return { mutationsFn }
  }
}
</script>
