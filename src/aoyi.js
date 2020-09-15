import Vue from 'vue'
import Aoyi from './Aoyi.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import './utils/fliters'

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Aoyi)                                                                
}).$mount('#app')          
