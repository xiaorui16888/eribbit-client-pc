import request from '@/utils/request'
export const findBrand = (limit) => {
  return request('/home/brand', 'get', { limit })
}
