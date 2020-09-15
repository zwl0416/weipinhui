import Vue from 'vue'
Vue.filter('wh',function(val,params){
  return val.replace(/200x100/,params)
})