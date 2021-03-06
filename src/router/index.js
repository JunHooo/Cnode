import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import Article from '@/components/Article'
import UserInfo from '@/components/UserInfo.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      name:'Article',
      path:'/topic/:id',
      component:Article
    },
    {
      name: 'UserInfo',
      path: '/userinfo/:name',
      component:UserInfo
    },

  ]
})


export default router