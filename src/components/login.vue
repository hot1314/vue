<template>
  <!--登录模块-->
  <div class="login">
    <div class="login-box">
      <h2>用户登录</h2>
      <div class="input">
        <input type="text" placeholder="请输入用户名" v-model="username"/>
      </div>
      <div class="input">
        <input type="password" placeholder="请输入密码" v-model="password"/>
      </div>
      <div class="submit" @click="loginAction">登录</div>
    </div>
  </div>
</template>

<script>
  import ajax from "./common/httpHelper"
  export default {
    name: 'loginBox',
    data () {
      return {
        username: "18350240545",
        password: "123456",
        msg: '这是登录页'
      }
    },
    methods: {
      loginAction: function () {
        var $vm = this;
        var params = {
          username: $vm.username,
          password: $vm.password
        };
        ajax.post({
          obj: $vm,
          url: "/api/app/Login/index",
          data: params,
          success: function (res) {
            console.log(res)
            var data = res.data;
            localStorage.setItem("loginInfo", JSON.stringify(data));
            $vm.$router.push({ path: '/home' })
          },
          error: function (error) {
            alert(error.msg)
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./login.css"></style>
