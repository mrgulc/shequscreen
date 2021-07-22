/**
 * @description 公共
 * @author Zhaohui Zeng
 * @version 2021/7/22
 */
import request from '@/utils/service.js'

/**
 * @description: 获取当前登录用户的最大权限区域ID
 */
export function regionId() {
  return request({
    method: 'get',
    url: '/screen/common/regionId'
  })
}
