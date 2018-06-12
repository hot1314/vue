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
  export default {
    name: 'App',
    data(){
      return {  }
    },
    computed:{
      isShowLoading(){
        var loadingShow = this.$store.state.loadingShow;
        return  loadingShow;
      }
    },
    components: {
      'v-loading': loading
    }
  }
</script>

<style>
</style>
