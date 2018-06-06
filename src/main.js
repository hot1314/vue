// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import eventBus from './components/common/eventBus'

Vue.config.productionTip = false;

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


