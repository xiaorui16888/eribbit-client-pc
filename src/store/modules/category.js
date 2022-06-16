// 分类模块

// 存储的分类数据
import { topCategory } from '@/api/contast'
import { findCategory } from '@/api/category'

export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    // headCategory所有的分类集合
    setCategory (state, headCategory) {
      state.list = headCategory
    },
    // 定义show和hide函数，控制当前分类的二级分类显示和隐藏
    show (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = true
    },
    hide (state, id) {
      const currCategory = state.list.find(item => item.id === id)
      currCategory.open = false
    }
  },
  actions: {
    async getList ({ commit }) {
      // 获取分类数据
      const { result } = await findCategory()
      // 给每个分类加上控制二级分类显示隐藏的数据
      result.forEach(top => {
        top.open = false
      })
      // 获取数据成功，提交mutations进行数据修改分类数据
      commit('setCategory', result)
    }
  }
}
