<template>
  <div class="home">
    <img :src="headIcon" />
    <h2 class="title">欢迎您 {{ loginInfo.username }} ，登录成功</h2>
    <a href="#" @click="clear" class="btn">安全退出</a>
    <!--传参-->
    <router-link :to="{ name: 'default', query: { uid: 19 }}">打开新页面</router-link>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data(){
      return { loginInfo: "",headIcon:""}
    },
    mounted: function () {
      this.loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
      this.headIcon = "http://dianbang.ailaidian.cn" + this.loginInfo.userhead;
    },
    methods: {
      clear: function () {
        localStorage.clear();
        this.$router.push({path: '/'})
      }
    }
  }
</script>
<style>
  .btn {
    display: inline-block;
    margin: 15px 15px 0 0;
    font-size: 14px;
  }
</style>
