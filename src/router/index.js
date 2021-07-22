import Vue from 'vue'
import VueRouter from 'vue-router'

import previewRoutes from '@/views/preview/routes.js'

const routes = [...previewRoutes]

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
export { routes }
