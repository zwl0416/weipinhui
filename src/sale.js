import Vue from 'vue'
import Sale from './Sale.vue'
import "./assets/style/reset.css"
import Vant from 'vant';
import 'vant/lib/index.css';


Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  render: h => h(Sale)                                                                
}).$mount('#app')          
