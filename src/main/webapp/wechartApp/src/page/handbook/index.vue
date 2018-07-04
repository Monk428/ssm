<style scoped >
  .mint-header{background-color: #ecf4fd;color: #333;}
  ul.handboox{margin-top: 40px}
  ul.handboox li{text-align: center}
  img { width: 100%; margin: auto; }
  img[lazy=loading] { width: 5rem; height: 15rem; margin: auto; }
</style>
<template>
    <div>
      <mt-header title="电子说明书" fixed >
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
        
      <ul class="handboox">
        <li>
          <img :src="img">
        </li>
        <li v-for="item in specification">
          <img  v-lazy.container="item">
        </li>
      </ul>
    </div>
</template>
<script>

import * as types from '@/store/types'

  export default {
    data() {
      return{
        specification:'',
        img:'./static/img/disclaimer.jpg'
      }
    },
    methods: {
      setList(){
        this.specification = this.$store.state.specification;
        //  console.log(this.specification);
      }
     
    },
 
      
     

   /* methods:{
      setList(){
        var handbookRoot = localStorage.handbookRoot =  this.$store.state.handbookRoot ? this.$store.state.handbookRoot : localStorage.handbookRoot;
        var handbookCount = localStorage.handbookCount = this.$store.state.handbookCount  ? this.$store.state.handbookCount : localStorage.handbookCount;
        for(var i = 1 ; i<= handbookCount;i++){
          this.list.push(handbookRoot+"/page"+i+".jpg");
        }
        console.log(this.list);
      }

    },*/
    created() {
       this.setList();
    }
  }
</script>
