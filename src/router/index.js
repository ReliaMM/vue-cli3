import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Common/Layout'
import asyncRouters from './components/index'

Vue.use(Router)

export const constantRouters = [{
  path: '*',
  hidden: true,
  component: () => import('@/views/Exception/404.vue')
}, {
  path: '/',
  hidden: true,
  component: Layout,
  redirect: '/dashboard/index'
}]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...constantRouters,
    ...asyncRouters
  ]
})
