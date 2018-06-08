import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource  from 'vue-resource'
import login from './../components/login'
import home from './../components/home'
import newPage from './../components/newPage'

Vue.use(VueResource)
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history', //去掉地址#号
  routes: [
    {
      path: '/',
      component:login
    },
    {
      path: '/home',
      component:home
    },
    {
      path: '/page',
      name:"default",
      component:newPage
    },
  ]
})
