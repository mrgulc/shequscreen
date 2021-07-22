/*
 * @Description:
 * @Author: MRG
 * @Date: 2021-07-21 16:26:23
 * @LastEditors: MRG
 * @LastEditTime: 2021-07-21 17:14:28
 */

const routes = [
  {
    path: '/preview/first',
    name: 'PreviewFirst',
    component: () => import(/* webpackChunkName:"PreviewFirst" */ './first/first.vue')
  }
]

export default routes
