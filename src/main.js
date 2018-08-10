import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Customers from './components/AppCustomers.vue'
import Product from './components/AppProduct.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Customers},
  {path: '/app-product', component: Product}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
