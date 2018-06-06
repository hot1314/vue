import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource  from 'vue-resource'
import module1 from './../components/module1'
import module2 from './../components/module2'
import newPage from './../components/newPage'

Vue.use(VueResource)
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history', //去掉地址#号
  routes: [
    {
      path: '/',
      component:module1
    },
    {
      path: '/page',
      component:module2
    },
    {
      path: '/new_page',
      name:"default",
      component:newPage
    },


  ]
})
