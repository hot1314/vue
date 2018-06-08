<template>
  <div class="mod">
    <h1>这是一个新开的页面</h1>
    <h2 class="title">{{ model.name }}</h2>
  </div>

</template>

<script>
  import ajax from "./common/httpHelper"
  /* eslint-disable */
  export default {
    data(){
      return {model: {}}
    },
    mounted(){
      this.init();
    },
    methods: {
      init: function () {
        var $vm = this;
        var uid = this.$route.params.uid;  //接收参数
        var params = {
          uid: uid,
          mid:16,
          muid:5
        };
//        this.$http.post('/api?g=Appapi&c=Coupon&a=coupon_info', params, {
//          headers: {},
//          emulateJSON: true
//        }).then(function (response) {
//          // 响应成功回调
//          console.log(response.body.data)
//          $vm.model = response.body.data;
//
//        }, function (response) {
//          // 响应错误回调
//          console.log(response)
//        });

        ajax.post({
          obj: $vm,
          url: "/api/app/User/userModulepp",
          data: params,
          success: function (res) {
            console.log(res)
            $vm.model = res.data;
          },
          error: function (error) {
            alert(error.msg)
          }
        });
      }
    }
  }
</script>
<style src="./common/load.css"></style>
