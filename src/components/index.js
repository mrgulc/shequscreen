/*
 * @Description:
 * @Author: MRG
 * @Date: 2021-07-21 15:44:54
 * @LastEditors: MRG
 * @LastEditTime: 2021-07-21 17:21:39
 */

import * as layout from './layout'

const components = { ...layout }

const install = Vue => {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

export default install
