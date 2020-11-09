import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '@/views/test/Test'
import Login from '@/components/Login/Login'
import Index from '@/views/index/Index'
import Home from '@/components/home/Home'
import Order from '@/views/order/Order'
import My from '@/views/my/My'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: Home,
    component: Home,
    redirect: '/index',
    children: [
      { path: '/index', name: 'Index', component: Index },
      { path: '/order', name: 'Order', component: Order },
      { path: '/my', name: 'My', component: My }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  }
]

const router = new VueRouter({
  routes
})

export default router
