import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login/Login'
import Index from '@/views/index/Index'
import Home from '@/components/home/Home'
import Order from '@/views/order/Order'
import My from '@/views/my/My'
import Path from '@/views/Path/Path'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: 'login' },
  {
    path: '/home',
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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  }, {
    path: '/path',
    name: 'Path',
    component: Path
  }
]

const router = new VueRouter({
  routes
})

export default router
