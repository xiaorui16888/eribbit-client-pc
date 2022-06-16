// 定义分类相关的API接口函数

import request from '@/utils/request'

export const findCategory = () => {
  return request('/home/category/head', 'get')
}
