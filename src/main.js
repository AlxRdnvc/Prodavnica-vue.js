import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Customers from './components/AppCustomers.vue'
import Products from './components/AppProduct.vue'
import Purchases from './components/LatestPurchases.vue'
import PurchaseProduct from './components/PurchaseProduct.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Customers},
  {path: '/app-product', component: Products},
  {path: '/customers/:id', component: Purchases, name:'latestPurchases', props: true},
  {path: '/app-product/:id', component: PurchaseProduct, name:'PurchaseProduct', props: true}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
