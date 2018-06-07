<template>
  <div class="mod">
    <h2 class="title">{{ model.order_money }}</h2>
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
        var id = this.$route.params.id;  //接收参数
        var params = {
          coupon_id: id
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
          url: "/api?g=Appapi&c=Coupon&a=coupon_info",
          data: params,
          success: function (res) {
            console.log(res)
            $vm.model = res.data;
          },
          error: function (error) {
            console.log(error)
          }
        });
      }
    }
  }
</script>
<style src="./common/load.css"></style>
