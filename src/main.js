import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/style/reset.css"
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import { Swipe, SwipeItem } from 'vant';
import { ShareSheet } from "vant";
import { Dialog } from 'vant';


Vue.use(Dialog);
Vue.use(ShareSheet);
Vue.use(Swipe);
Vue.use(SwipeItem);

import { Lazyload } from 'vant';

Vue.use(Lazyload);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)                                                                
}).$mount('#app')          
