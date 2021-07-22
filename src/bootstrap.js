/*
 * @Description:
 * @Author: MRG
 * @Date: 2021-07-07 17:12:58
 * @LastEditors: MRG
 * @LastEditTime: 2021-07-21 17:38:01
 */

import Vue from 'vue'
import ElementUI from 'element-ui'
import App from '@/views/App'
import router from '@/router'
import store from '@/store'
/**
 * Component
 ----------------------------------------------------------------*/
import MyComp from '@/components'

/**
 * CSS
 ----------------------------------------------------------------*/
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import 'normalize.css'

Vue.use(ElementUI, { size: 'mini' })
Vue.use(MyComp)

async function download() {
  let { default: install } = await import('center/install')
  Vue.use(install)
}

download().then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
