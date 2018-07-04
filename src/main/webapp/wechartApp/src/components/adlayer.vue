<template>
    <div class="ad" v-show="isPop">
      <div class="ad-container">
        <div class="ad-card">
          <div class="ad-img" :style="bgImg">
            <div class="ad-time">{{c}}s</div>
            <!-- <div v-for="(item,i) in adText"
          :key="i" class="ad-content">{{item}}</div> -->
          <!-- <div v-for="item in adText" class="ad-content">{{item.ad}}</div> -->
          <div class="ad-content">{{adGree}}</div>
          <div class="ad-gree">{{adGreen}}</div>
          </div>
          <div class="ad-text">
          <!-- <div class="ad-title">{{adTitle}}</div> -->
          
            <div class="ad-btn" @click="jumpToAdDetail">{{btnText}}</div>
        </div>
         
        </div>
        <img class="ad-cancel" src="./../../static/img/cancel.png" @click="cancel"/>
        </div>
       
      
    </div>
</template>

<script>
export default {
  mounted() {

    setTimeout(() => {
         this.cancel();   
    }, 5000);
    let timer = setInterval(() => {
      let self = this;
      self.c --;
      if(self.c < 1){
      this.cancel();
      clearInterval(timer);
    }
    },1000)
    
  },
  data: function data() {
    return {
      isPop: true,
      c:'5',
    };
  },
  props: {
    imgUrl: {
      type: String,
      default: './../static/img/ad.png',//./../static/img/ad.png
    },
    adUrl: {
      type: String,
      default: '',
    },
    adGree: {
      type: String,
      default: '格力生活电器',
    },
    adGreen: {
      type: String,
      default: '遇见更好的生活，遇见你',
    },
    
    btnText: {
      type: String,
      default: '了解详情',
    },
  },
  computed: {
    bgImg: function bgImg() {
      return {
        /* eslint-disable */
        backgroundImage: 'url(' + this.imgUrl + ')',
      };
    },
  },
  methods: {
    cancel() {
      this.isPop = false;
    },
    show() {
      this.isPop = true;
    },
    jumpToAdDetail(){
      window.location.href="https://m.gree.com"
    }
 
},
}
</script>

<style lang="scss" scoped>
@import './../../static/css/iotui.min.css';
.ad {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  
  
  .ad-container {
    animation: pop 0.5s;
    -webkit-animation: pop 0.5s;
    width: 17rem;
    height: 30rem;
    margin-top: 4.1rem;
    align-self: center;
    display: flex;
    flex-direction: column;
    .ad-card {
      width: 100%;
      height: 75%;
      
      border-radius: 7px;
      .ad-img {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 16.83rem;
        height: 16.83rem;
      }
       .ad-time {
         float: right;
         height: 20px;
         line-height: 20px;
         font-size: 14px;
         color: #ffffff;
       }
      .ad-text{
        margin: auto 0;
        text-align: center;
      }
      .ad-title {
        font-size: 20px;
        
        margin-bottom: 5px;
      }
      .ad-content {
        font-size: 14px;
        color: #ffffff;
        padding-top: 4.31rem;
        padding-left: 1.62rem
      }
      .ad-gree{
        font-size: 10px;
        color: #ffffff;
        margin-top: 0.05rem;
      }
    }
     .ad-btn {
      
      width: 100px;
      height: 35px;
      line-height: 35px;
      font-size: 14px;
      border-radius: 24px;
      margin:18px auto ;
      color: #ffffff;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-image:url('./../../static/img/knowbg.png')
      
    }
    
    .ad-cancel {
      margin: 0 auto;
      width: 30px;
      height: 30px;
      
    }
  }
}

@keyframes pop {
  from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
}

@-webkit-keyframes pop {
  from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
}
</style>
