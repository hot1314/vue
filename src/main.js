// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import eventBus from './components/common/eventBus'

Vue.config.productionTip = false;

/*路由拦截*/
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next()
  } else {
    var loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
    if (!loginInfo) {
      next({ path: '/' })
    } else {
      next()
    }
  }
});

/*请求拦截*/
Vue.http.interceptors.push((request, next)=> {
  eventBus.$emit('toggleLoading', true);
  next((response => {
    eventBus.$emit('toggleLoading', false);
  }));
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})


