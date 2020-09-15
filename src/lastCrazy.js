import Vue from 'vue'
import LastCrazy from './LastCrazy.vue'
import router from './router'
import store from './store'
import './assets/style/reset.css'
import Vant from "vant"
import "vant/lib/index.css"

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(LastCrazy)
}).$mount('#app')
