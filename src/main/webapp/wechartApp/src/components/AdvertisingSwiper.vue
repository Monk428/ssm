<template>
 
  <div >
    <hr class="header">
    <!-- <div class="header"></div> -->
    <p class="topic">
      <span class="recommend">人气推荐</span>
      <a class="more" href="https://m.gree.com/">更多好物</a>
    </p>
    <div class="swiperCnt">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="arr in adverstData ">
          <div class="box">
            <div class="item" v-for="item in arr">
              <a :href="item.url">
                <div class="model">                 
                  <img :src="item.img">
                 </div>
                  <p class="title">{{ item.title }}</p>
                  <p class="introduction">{{ item.introduction }}</p>
              </a>
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- <div class="header"></div> -->
    <hr class="header">
    <div class="footer">
        <div class="text">珠海联云科技提供</div>
        <div class="text">公司地址：珠海市金山科技大厦</div>
        <div class="text">邮箱地址：lianyun@outlook.com</div>
    </div>
  </div>
</template>
<script>

  export default {
      props:['adverstData'],
      data(){
        return{          

        }
      }
    }
</script>
<style scoped>
@import './../../static/css/my-mint.css';
  .swiperCnt{
    height: 13rem;
  }
  .header{
    width:95%;
    color: #cfcfcf;
    margin:0 auto ;
  }
  .topic{
    padding: 15px 20px;
  }
  .topic .recommend{
    font-size: 16px;
    font-weight: 400;
  }
  .topic .more{
    float: right;
    font-size: 14px;
    color:#999898;
  }
  .box{
    display: flex;
    justify-content: space-between;
    margin: 0px 20px;

  }
  .box>.item{
    width: 7rem;
    border:1px solid #eee;
    background-repeat: no-repeat;
    text-align: center;
    /* padding: 10px 5px 5px; */
    box-sizing: border-box;
    height: 10rem;
    background: #fff;
  }
  .box>.item .model{
    height: 6.5rem;
    line-height: 6.5rem;
    background-size: 100% 100%;
    background-image: url('./../../static/img/procard.png');
   }
  .box>.item>a>.model>img{
    max-width: 5.44rem;
    max-height: 5.09rem;
    display: inline-block;
  }
  .title{
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: .6rem;
    margin-left: .39rem;
    font-size: 12px;
    font-weight: 400;
  }
 .introduction{
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #bbb;
    margin-left: .39rem;       
    font-size: 10px;
  }
  .footer{
    text-align: center;
    color: #cfcfcf;
    margin: 50px auto;
    
  }
  .footer .text{
    margin-top: 20px;
  }

</style>
