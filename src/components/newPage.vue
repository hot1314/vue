<template>
  <div class="mod">
    <h1>这是一个新开的页面</h1>
    <h2 class="title">{{ pageData.name }}</h2>
  </div>

</template>

<script>

  /* eslint-disable */
  export default {
    data(){
      return {}
    },
    computed:{
      pageData(){
        var data = this.$store.state.newPageData; //获取全局数据
        return data;
      }
    },
    methods: {

    }
  }
</script>
<style src="./common/load.css"></style>
