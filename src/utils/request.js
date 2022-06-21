// 1.创建一个新的axios实例
// 2.请求拦截器，如果有token进行头部携带
// 3.响应拦截器：1，剥离无效数据；2，理token失效
// 4.导出一个函数，调用当前的axios实例，返回值promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 导出基准地址，原因：其他地方不是通过axios发请求的地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  // axios的一些配置，baseURL thimeout
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(config => {
  // 拦截的业务逻辑
  // 进行请求配置的修改
  // 如果本地有token就在头部携带token，
  // 1.获取用户信息对象
  const { profile } = store.state.user
  // 2.判断是否有token
  if (profile.token) {
    // 3.设置token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// res => res.data  取出data数据，将来调用接口的时候，直接拿到的就是需要的数据
instance.interceptors.response.use(res => res.data, err => {
  // 401 状态码，进入该函数
  if (err.response && err.response.status === 401) {
    // 1.清空本地无效用户信息
    store.commit('user/setUser', {})

    // 当前路由地址
    // 组件中： `/user?a=10` $route.path === /user  $router.fullPath === /user?a=10
    // js模块中：router.currentRoute.fullPath 就是当前路由地址
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)

    // 2.跳转到登录页面
    // 3.跳转需要传参（当前路由地址），给登录页
  }
  return Promise.reject(err)
})

// 请求工具函数
export default (url, method, submitData) => {
  // 负责发请求：请求地址，请求方法，提交的数据
  return instance({
    url,
    method,
    // 1.如果是get请求，需要使用parmas来传递参数
    // 2.如果不是get请求，需要使用data来传递参数
    [method.toLowerCase() === 'get' ? 'parmas' : 'data']: submitData
  })
}
