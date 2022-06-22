// 定义分类相关的API接口函数

import request from '@/utils/request'

export const findCategory = () => {
  return request('/home/category/head', 'get')
}

/**
 * 获取单个顶级分类信息
 * @param {String} id - 顶级分类ID
 */
export const findTopCategory = (id) => {
  return request('/category', 'get', { id })
}
