<style  scoped>

</style>
<template>
	<div>
      <div class="form">
         <input type="text" placeholder="输入你的用户名" value="" v-model="apiKey"><br>
         <input type="password" placeholder="输入你的密码" value="" v-model="apiSecret">
         <button @click="getToken">确定</button>
      </div>
	</div>
</template>
<script>
import * as types from '../../store/types'
export default {
    data() {
        return{
          apiKey:"",
          apiSecret:"",
        }
    },
    methods: {
         getToken(){
           this.post({
             apiKey:this.apiKey,
             apiSecret:this.apiSecret
           },(da)=>{
             console.log(da)
             if (da.resData.accessToken) {
               this.$store.commit(types.LOGIN, da.resData.accessToken)
               let redirect = decodeURIComponent(this.$route.query.redirect || '/');
               this.$router.push({
                 path: redirect
                })
             }
           },(error)=>{
             this.$mint.Toast(error.resMsg);
           },this.Root.api.login)
         }
    },
    created(){
//      this.getToken();
    }
}
</script>
