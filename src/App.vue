<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <v-loading v-show="isShowLoading"></v-loading>
  </div>
</template>

<script>
  import loading from './components/common/loading.vue';
  import eventBus from './components/common/eventBus';
  export default {
    name: 'App',
    data(){
      return { isShowLoading: false }
    },
    components: {
      'v-loading': loading
    },
    created() {
      var $vm = this;
      eventBus.$on("toggleLoading",function(show){
        $vm.isShowLoading = show;
      })
    }
  }
</script>

<style>
</style>
