import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Field,
  NavBar,
  CellGroup,
  Cell,
  Button,
  Tabbar,
  TabbarItem,
  Tabs,
  Tab,
  Panel,
  PasswordInput,
  Collapse,
  CollapseItem,
  Search,
  Card,
  Dialog,
  Picker,
  Notify
} from 'vant'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8400/'
axios.defaults.withCredentials = true
Vue.prototype.$http = axios

Vue.use(Field)
Vue.use(NavBar)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(Tab)
Vue.use(TabbarItem)
Vue.use(Tabs)
Vue.use(Panel)
Vue.use(PasswordInput)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Search)
Vue.use(Card)
Vue.use(Dialog)
Vue.use(Picker)
Vue.use(Notify)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
