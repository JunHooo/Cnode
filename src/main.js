import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios=axios


Vue.filter('getType', function (value) {
  if(value.top===true) {
    value = '置顶'
  }
  else if (value.good ===true ) {
    value='精品'
  }else if(value.tab==='share'){
    value='分享'
  }else if(value.tab==='job'){
    value='招聘'
  }else if(value.tab==='ask'){
    value='问答'
  }
  return value
})
Vue.filter('getDate', function (date) {

  let now =new Date().getTime()
  let lastDate =new Date(date).getTime()
  let diff=(now-lastDate)/1000
  let result;
  if(diff<60){
    result=Math.round(diff)+'秒之前'
  }else if(diff<3600){
    result=Math.round(diff/60)+'分之前'
  }else if(diff<86400){
    result=Math.round(diff/3600)+'小时前'
  }else if(diff<2592000){
    result=Math.round(diff/86400)+'天前'
  }else if(diff<31104000){
    result=Math.round(diff/2592000)+'月前'
  }else{
    result=Math.round(diff/31104000)+'年前'
  }
  return result
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
