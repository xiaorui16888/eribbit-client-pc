import request from '@/utils/request'
// 获取品牌
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'get', { limit })
}

/**
 * 获取广告区轮播图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}

/**
 * 获取新鲜好物
 * @returns Promise
 */
export const findNew = () => {
  return request('/home/new', 'get')
}

/**
 * 获取人气推荐
 * @returns Promise
 */
export const findHot = () => {
  return request('/home/hot', 'get')
}