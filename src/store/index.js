import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 引入三个模块
import cart from './modules/cart.js'
import user from './modules/user.js'
import category from './modules/category.js'

export default createStore({
  modules: {
    cart,
    user,
    category
  },
  plugins: [
    // 默认存储到localStorage中
    createPersistedState({
      // 本地存储名字
      key: 'eribbit-client-pc-store',
      // 指定需要存储的模块
      paths: [
        'user', 'cart'
      ]
    })
  ]
})
