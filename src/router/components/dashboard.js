
import Layout from '@/views/Common/Layout'

export default  {
  path: '/dashboard',
  redirect: '/dashboard/index',
  name: 'home',
  component: Layout,
  children:[{
    path: 'index',
    name: 'customerList',
    component: () => import('@/views/Dashboard/About.vue')
  }]
}
