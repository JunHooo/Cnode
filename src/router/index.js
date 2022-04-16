import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/Index.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      component: index
    },
  ]
})


export default router