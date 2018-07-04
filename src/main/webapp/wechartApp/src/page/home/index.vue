<style  scoped>
/* header { text-align: center; position: relative; background: #ffffff; padding: .8rem 1rem }
 header .status { position: absolute; right: 1rem; top: .8rem; }
header .status a { float: right; font-size: .85rem; color: #666; margin-left: 1rem }
header span.proType {font-size: 17px; font-weight: 300; color: #000; text-align: left} */
#screenshot {
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  visibility: hidden;
}

.screenshot-container {
  max-width: 12rem;
  max-height: 12rem;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.screenshot-img {
  height: 12rem;
}

.proWrap {
  position: relative;
  font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, "微软雅黑",
    Tahoma, Arial, sans-serif;
  user-select: none;
  height: 16.57rem;
  padding: 0rem 0rem 0rem 2.2rem;
  background: url("../../../static/img/proBG.png");
  background-size: 100% 100%;
  text-align: center;
  color: #666;
}
.proWrap p {
  font-weight: lighter;
  font-size: 12px;
  color: #fff;
  margin-top: 0.58rem;
}
/* .proWrap .share {
  
  
  
  
  
} */
.proWrap .image {
  /* position: absolute; */
  display: block;
  z-index: 10;
  float: right;
  height: 30px;
  margin-top: 20px;
  margin-right: 10px;
  clear: both;
}
.proWrap .pname {
  padding-top: 1.9rem;
  font-size: 32px;
  font-weight: 300;
  color: #fff;
  text-align: left;
}
.proWrap .nodTips {
  position: absolute;
  font-size: 20px;
  bottom: 0.36rem;
  color: #fff;
  white-space: nowrap;
  transform-origin: 0 0;
  transform: scale(0.5);
}
.proWrap img {
  display: none;
}
/*产品标题图片竖向排列布局 */
.proWrap .wll {
  display: flex;
  flex-direction: column;
  padding-bottom: 2.5rem;
}
.proWrap .wll .pname {
  padding-top: 1.9rem;
}
.proWrap .wll p {
  text-align: left;
  font-weight: 300;
}
.proWrap .wll img {
  display: none;
  pointer-events: none;
  margin: 2rem auto;
  margin-top: 1.63rem;
  margin-right: 3.15rem;
  justify-content: center;
  width: 13.66rem;
  height: 4.17rem;
}
/*产品标题图片左右排列布局 */
.proWrap .llw {
  text-align: right;
}
.proWrap .llw p {
  text-align: left;
  font-weight: 300;
}
.proWrap .llw img {
  position: absolute;
  pointer-events: none;
  display: none;
  float: right;
  width: 2.99rem;
  height: 13.66rem;
  right: 5.76rem;
  bottom: 0.95rem;
  clear: both;
}
section.ops {
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: normal;
  height: 7rem;
  background: #fff;
  margin-top: 1.6rem;
  margin-left: 0.81rem;
  margin-right: 0.81rem;
  border-radius: 7px;
}
section.ops .divi {
  display: block;
  border: 1px solid #eeeff0;
  height: 48%;
  transform-origin: 0 0;
  transform: scaleX(0.5);
}
section.ops .pps {
  display: block;
  width: 49.5%;
  height: 100%;
}
section.ops .psp {
  display: block;
  width: 49.5%;
  height: 100%;
}
section.ops .pdtItem {
  display: block;
  width: 50%;
  height: 80%;
  text-align: center;
  margin: auto;
  padding-top: 1.4rem;
}
section.ops .pdtItem .img {
  display: block;
  pointer-events: none;
}
section.ops .pdtItem .txt {
  display: block;
  font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, "微软雅黑",
    Tahoma, Arial, sans-serif;
  margin-top: 0.97rem;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
}
section.ops img {
  width: 2.5rem;
  height: 2.5rem;
}
.pdtItem {
  border-radius: 1px;
}

/* section.ops ul li:hover{background: #f9f9f9} */
section.ops ul li div {
  display: block;
  height: 3.5rem;
  width: 100%;
  color: #666;
  line-height: 3.5rem;
  border-right: 4.5px;
}
section.ops ul li div span.img {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
}
.main {
  padding: 2.41rem 2.34rem 0;
  user-select: none;
}
.main .listWrap {
  margin-right: -1rem;
  margin-left: -1rem;
}
/* .main ul.list { margin-right: .7rem; margin-left: .6rem; } */
.main ul.list li {
  width: 25%;
  float: left;
  list-style: none;
  box-sizing: border-box;
  overflow: hidden;
}
.main ul.list li div.item {
  color: #3f3f3f;
  height: 4rem;
  margin: 0.3rem;
  margin-top: 0;
  margin-bottom: 2.85rem;
  padding-bottom: 0.2rem;
  text-align: center;
  font-size: 0.95rem !important;
  border-radius: 5px;
}
/* .main ul.list li div.item:hover{background: #f5f5f5} */
.main ul.list li div.item span.img {
  display: inline-block;
  pointer-events: none;
  width: 2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.85rem;
}
.main ul.list li div.item span.img img {
  width: 100%;
  height: 100%;
}
.main ul.list li div.item p {
  font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, "微软雅黑",
    Tahoma, Arial, sans-serif;
  font-size: 12px !important;
  color: #3f3f3f;
  font-weight: 400;
}

/* 添加 */
.itemHighlighted {
  background: lightgray !important;
}
</style>
<template>
  <div>
    <div id="screenshot">
      <div class="screenshot-container">
      <img class="screenshot-img" :src="cpImageSrc">
      </div>
      </div>
    <!-- <ad-layer></ad-layer> -->
    <header v-show="">
       <span class="proType">格力空调</span>  <span style="display:none;">版本:{{appVer}}></span>
      <div class="status" v-show="isShowAccount">
        <a v-if="lgOk" v-on:click="outLogin">退出</a>
        <template v-else>
          <router-link to="/login">未登录</router-link>
          <a @click="getToken">注册</a>
        </template>
      </div>
    </header>

    <div class="proWrap">
      <img class="image" src="../../../static/img/share.png" @click="share">
      <div v-bind:class="{wll:isVerticalLayout,llw:!isVerticalLayout}">
        
        <!-- 系列名如果是出口机型要补空格 &nbsp; -->
        <div class="pname">{{cpName}}</div>
        <p>{{ xh }}</p>
        <img id="cpImg" :src="cpImageSrc" alt="图片加载失败" @load="cpImageLoad(this)" />
        <!--<p v-show="isVerticalLayout">{{ xh }}</p>-->
        <p class="nodTips">本图片可能与实物不尽相同,请以实物为准</p>
      </div>
    </div>
    <section class="ops">
        <span class="pps" ref="pdt">
          <span  class="pdtItem" @click="goProductDetalPage">
            <span class="img"><img src="../../../static/img/proDetail.png"></span>
            <span class="txt">产品详情</span>
          </span>
        </span>
        <span class="divi" ref="divi"></span>
        <span class="psp" ref="hbk">
          <!--<router-link  to="/handbook">未登录</router-link>-->
          <div class="pdtItem" @click="getHandbook"><span class="img">
            <img src="../../../static/img/elecManual.png"></span>
            <span class="txt">电子说明书</span>
          </div>
        </span>
    </section>
    <div class="main">
      <div id="functionList" class="listWrap">
        <div class="layui-row">
        <ul class="list">
          <li class="list-1">
            <div class="item" @click="jumpUrlWithFunctionKey('online_services')">
            <span class="img"> <img  :src= "functionBtnList.online_services.img" ></span>
              <p>{{functionBtnList["online_services"]["name"]}}</p>
            </div>
          </li>
          <li class="list-1">
            <div class="item" @click="jumpUrlWithFunctionKey('price_service')">
              <span class="img">
                <img :src="functionBtnList.price_service.img">
              </span>
              <p>{{functionBtnList["price_service"]["name"]}}</p>
            </div>
          </li>
          <li class="list-1">
            <div class="item" @click="jumpUrlWithFunctionKey('gree_repair')">
              <span class="img">
                <img :src="functionBtnList.gree_repair.img">
              </span>
              <p>{{functionBtnList["gree_repair"]["name"]}}</p>
            </div>
          </li>
          <li class="list-1">
            <div class="item" @click="jumpUrlWithFunctionKey('schedule_query')">
              <span class="img">
                <img :src="functionBtnList.schedule_query.img">
              </span>
              <p>{{functionBtnList["schedule_query"]["name"]}}</p>
            </div>
          </li>

        </ul>
</div>
       <!-- 解决某些机型边框 -->
       <div class="layui-row">
        <ul class="list">
          <li class="list-1">
            <div class="item" @click="jumpUrlWithFunctionKey('nearby_shop')">
              <span class="img">
                <img :src="functionBtnList.nearby_shop.img">
              </span>
              <p>{{functionBtnList["nearby_shop"]["name"]}}</p>
            </div>
          </li>
          <li class="list-1">
            <div class="item" @click="jumpUrlWithFunctionKey('gree_aircontroller')">
              <span class="img">
                <img :src="functionBtnList.gree_aircontroller.img">
              </span>
              <p>{{functionBtnList["gree_aircontroller"]["name"]}}</p>
            </div>
          </li>
          <li class="list-1">
            <div class="item" @click="jumpUrlWithFunctionKey('gree_mall')">
              <span class="img">
                <img :src="functionBtnList.gree_mall.img">
              </span>
              <p>{{functionBtnList["gree_mall"]["name"]}}</p>
            </div>
          </li>
          <li class="list-1">
            <div class="item" @click="jumpUrlWithFunctionKey('greePlus_download')">
              <span class="img">
                <img :src="functionBtnList.greePlus_download.img">
              </span>
              <p>{{functionBtnList["greePlus_download"]["name"]}}</p>
            </div>
          </li>
        </ul>
</div>
      </div>


    </div>
    <re-commend :adverstData="recommendList"></re-commend>
      <!-- 引用外部JS -->
      <!-- <remoteJs src="http://pv.sohu.com/cityjson?ie=utf-8" ></remoteJs>  -->
      <remote-js src="https://pv.sohu.com/cityjson?ie=utf-8" ></remote-js>

  </div>


  
</template>




<script>
import "babel-polyfill";
import * as types from "@/store/types";
import GRStringHandler from "@/common/js/GRStringHandler";
import { recordModueleClick } from "api/common_Api";
import remoteJs from "@/components/remoteJs/remoteJs";
import { dataGet } from "api/common_Api";
import * as apiConst from "api/apiConst";
import { eleGet } from "api/common_Api";
import adlayer from "@/components/adlayer";
import recommend from "@/components/AdvertisingSwiper";
import { mapState } from "vuex";
import wxShare from "../../../static/js/share";
import screenshot from "./../../../static/js/screenshot";
import baseToFile from "./../../../static/js/base64ToFile";
function checkNullString(value) {
  if (typeof value == "undefined" || value == null) {
    return "";
  }

  return String(value);
}

export default {
  //注册组件
  components: {
    "remote-js": {
      render(createElement) {
        return createElement("script", {
          attrs: { type: "text/javascript", src: this.src }
        });
      },

      props: {
        src: { type: String, required: true }
      }
    },
    "re-commend": recommend,
    "ad-layer": adlayer
  },
  // props: [],
  // components: {
  //     remoteJs
  //   },

  data() {
    return {
      isurldebug: false, //url是否启用debug
      appVer: "2018-01-20_build1", //app版本号,暂定

      isShowAccount: false, //暂不显示登录注册
      isVerticalLayout: true, //产品是否竖向排列
      lgOk: "",
      uname: "littled",
      psw: "111111",
      time: "",
      svrTime: "",
      timeSpan: "-249",

      pp: "", //品牌标识 : gree
      ppName: "", //品牌名称 : 格力
      pp_info: { gree: "格力", midea: "美的", haier: "海尔", unknow: "" },
      tm: "", //条码
      xh: "", //型号 KFR-26GW/(26578)FNhBa-A1
      cpName: "", //产品名称
      cpImageSrc: "", //产品图片路径 : /static/img/air1.png
      details: "", //产品详情链接：http://
      topPics: "", //广告链接
      specification: "", //电子说明书图片链接
      ky: "0", //空样机
      controllerUrl: "", //遥控器链接
      //功能清单
      functionBtnList: {
        online_services: {
          name: "在线客服",
          url:
            "http://zxkf.gree.com/zxkf/chatClient/chatbox.jsp?companyID=8942&configID=11&skillId=1&enterurl=&k=1",
          img: "./static/img/service.png"
        },
        price_service: {
          name: "收费指导价",
          url: "http://qrcode.gree.com:8088",
          img: "./static/img/price.png"
        },
        gree_repair: {
          name: "一键预约",
          url: "http://qrcode.gree.com:8090/torepair?imei=",
          img: "./static/img/repair.png"
        },
        schedule_query: {
          name: "进度查询",
          url: "http://pgxt.gree.com:7909/hjzx/bx/chabx.jsp",
          img: "./static/img/schedule.png"
        },
        nearby_shop: {
          name: "附近门店",
          url: "http://www.gree.com/zwydb/zmdsjb/zmdcxsjb/index.shtml",
          img: "./static/img/adress.png"
        },
        gree_aircontroller: {
          name: "遥控器",
          url:
            "https://m.gree.com/mall/ProductDisplayWap?catalogId=10001&langId=-7&productId=11146&storeId=10651",
          img: "./static/img/airController.png"
        },
        gree_mall: {
          name: "格力商城",
          url: "https://m.gree.com/",
          img: "./static/img/mall.png"
        },
        greePlus_download: {
          name: "格力+",
          url: "https://grihqr.gree.com/GreePlus/",
          img: "./static/img/download.png"
        }
      }
      // {
      // "online_services":{"name":"在线客服","url":"http://zxkf.gree.com/zxkf/chatClient/chatbox.jsp?companyID=8942&configID=11&skillId=1&enterurl=&k=1","img":"./static/img/service.png"},
      // "appointment_service":{"name":"服务预约","url":"http://pgxt.gree.com:7909/hjzx/bx/addbx.jsp","img":"./static/img/appointment.png"},
      // "schedule_query":{"name":"进度查询","url":"http://pgxt.gree.com:7909/hjzx/bx/chabx.jsp","img":"./static/img/schedule.png"},
      // "nearby_shop":{"name":"附近门店","url":"http://m.gree.com/wcsstore/GreeStorefrontAssetStore/20161028/index.html","img":"./static/img/adress.png"},
      // "gree_mall":{"name":"格力商城","url":"http://m.gree.com/","img":"./static/img/mall.png"},
      // "gree_aircontroller":{"name":"遥控器购买","url":"http://m.gree.com/mall/ProductDisplayWap?catalogId=10001&langId=-7&productId=11146&storeId=10651","img":"./static/img/airController.png"},
      // "greePlus_download":{"name":"格力+","url":"https://grihqr.gree.com/GreePlus/","img":"./static/img/download.png"},
      // "gree_repair":{"name":"一键报修","url":"http://116.6.120.29:8090/torepair","img":"./static/img/repair.png"} //原来的一键报修
      // // },

      //http://pgxt.gree.com:7909/hjzx/greegzh/gzh_wangdian.html 售后网点
    };
  },
  methods: {
    share() {
      // alert("share");
      // var myShare = mshare.init({
      //   // 分享标题（默认使用document.title）
      //   title: "这是一条分享内容",
      //   // 分享url（默认使用当前页url）
      //   url: "http://baidu.com",
      //   // 分享图片
      //   pic: "https://ts.bdimg.com/womc/photo/mem_banner/focus.png",
      //   // 分享方式
      //   // app: 使用唤起APP的方式分享（默认）
      //   // web: 使用web的方式分享
      //   method: "app"
      // });

      // myShare.shareTo('weixin');
      // 先创建一个实例
      var nativeShare = new NativeShare();
      // alert(nativeShare);
      // 如果你需要在微信浏览器中分享，那么你需要设置额外的微信配置
      // 特别提示一下微信分享有一个坑，不要分享安全域名以外的链接(具体见jssdk文档)，否则会导致你配置的文案无效
      // 创建实例应该带参数
      // var nativeShare = new NativeShare({
      //   wechatConfig: {
      //     appId: "",
      //     timestamp: "",
      //     nonceStr: "",
      //     signature: ""
      //   },
      //   // 让你修改的分享的文案同步到标签里，比如title文案会同步到<title>标签中
      //   // 这样可以让一些不支持分享的浏览器也能修改部分文案，默认都不会同步
      //   syncDescToTag: false,
      //   syncIconToTag: false,
      //   syncTitleToTag: false
      // });

      // 你也可以在setConfig方法中设置配置参数
      // nativeShare.setConfig({
      //   wechatConfig: {
      //     appId: "",
      //     timestamp: "",
      //     nonceStr: "",
      //     signature: ""
      //   }
      // });

      // document.getElementById('screenshot').style.visibility="visible";
      // screenshot(document.getElementById("screenshot"), function(data) {
      //   console.log(data);

        // alert("data");
        // 设置分享文案
        nativeShare.setShareData({
          icon: "http://qrimg.gree.com/ad/153025322576.png",
          // icon:'./../../assets/logo.png',
          // icon:data,
          link:
            "https://q.gree.com/?pp=GREE&cp=%e6%a0%bc%e5%8a%9b%e9%a2%86%e5%be%a1&tm=t6eYI6jivFaimlwJCrtPmA==&xh=KFR-50L(50577)FNhAa-A1&from=singlemessage#/index",
          // "https://q.gree.com/?" +
          // "cp=" +
          // this.cp +
          // "&xh=" +
          // this.xh +
          // "&pp=" +
          // this.pp +
          // "&tm=" +
          // this.tm,
          title: this.cpName,
          desc: this.xh,
          success: function() {
            alert("success");
          },
          fail: function() {
            alert("fail");
          }
          // from: "@fa-ge"
        });

        // 唤起浏览器原生分享组件(如果在微信中不会唤起，此时call方法只会设置文案。类似setShareData)
        try {
          // nativeShare.call();
          // 如果是分享到微信则需要
          nativeShare.call("wechatFriend");
          // 类似的命令下面有介绍
        } catch (err) {
          // 如果不支持，你可以在这里做降级处理
          nativeShare.call("wechatFriend");
          // alert(err.message);
        }
      // });
    },
    outLogin() {
      this.$store.commit(types.LOGOUT);
      this.$router.replace({ path: "/login" });
    },
    getToken() {
      var now = new Date();
      var t =
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate(),
          now.getUTCHours(),
          now.getUTCMinutes(),
          now.getUTCSeconds()
        ) / 1000;

      //fwq时间
      var stime = new Date((t - this.timeSpan) * 1000);
      var time = stime.UTCFormat("yyyy-MM-dd hh:mm:ss");

      var psw = this.psw;
      var m1 = MD5(MD5(MD5(psw) + psw) + time);
      this.psw = m1;
      this.time = time;

      this.post(
        {
          uname: this.uname,
          psw: this.psw,
          time: this.time,
          svrTime: this.svrTime,
          timeSpan: this.timeSpan
        },
        da => {
          console.log(da);
        },
        error => {
          this.$mint.Toast(error.resMsg);
        },
        this.Root.api.login2
      );
    },

    getHandbook() {
      var specification = this.specification;

      this.$store.commit(types.SPECIFICATION, specification);
      if (specification == "") {
        console.log(specification);
        return;
      }
      let redirect = decodeURIComponent(
        this.$route.query.redirect || "/handbook"
      );

      //------模块点击记录-----
      ///*
      let obj = {
        moduleName: "电子说明书",
        moduleUrl: redirect,
        tm: this.tm,
        xh: this.xh,
        OS: this.currentOS,
        browser: this.currentBrowser,
        ip: window.returnCitySN.cip,
        area: window.returnCitySN.cname
      };
      //记录api
      recordModueleClick(obj).then(res => {
        if (this.isurldebug) {
          var str = JSON.stringify(res);
          alert(str);
        }

        //------页面跳转-------
        this.$router.push({
          path: redirect
        });
      });
    },
    getProductInfoFromUrl() {
      //从url获取参数

      //是否启用debug
      var isdebuginurl = this.$geturlpara.getUrlKey("debug");
      if (isdebuginurl) {
        this.isurldebug = true;
      }

      //品牌
      var get_pp = this.$geturlpara.getUrlKey("pp"); // this.$route.query.pp;該方法需要加在url路由后才能使用
      get_pp = GRStringHandler.checkNullString(get_pp).toLowerCase();
      var get_ppName = this.pp_info[get_pp];
      get_ppName = GRStringHandler.checkNullString(get_ppName);

      if (get_pp != "") {
        this.pp = get_pp;
        this.ppName = get_ppName;
      } else {
        this.pp = "unknow";
        this.ppName = this.pp_info["unknow"];
      }

      // 产品名称
      var get_cp = this.$geturlpara.getUrlKey("cp");
      get_cp = GRStringHandler.checkNullString(get_cp);
      if (get_cp != "") {
        this.cpName = get_cp;
      }

      //型号
      var get_xh = this.$geturlpara.getUrlKey("xh");
      get_xh = GRStringHandler.checkNullString(get_xh);
      if (get_xh != "") {
        this.xh = get_xh;
      }

      //条码
      var get_tm = this.$geturlpara.getUrlKey("tm");
      get_tm = GRStringHandler.checkNullString(get_tm);
      if (get_tm != "") {
        this.tm = get_tm;
      }

      //图文数据获取
      let obj = {
        pp: this.pp,
        xh: this.xh
      };
      //记录api
      // for (let i = 0, j = 100; i < j; i += 1) {
      dataGet(obj).then(res => {
        console.log(res);

        this._details = res.data.details;
        this._topPics = res.data.topPics;

        this.cpImageSrc = this._topPics; //获取首页图片

        if (this.isurldebug) {
          var str = JSON.stringify(res);
          console.log(res.data);
        }
      });
      // }

      // console.log("品牌标识:"+this.pp);
      // console.log("品牌名:"+this.ppName);
      // console.log("产品名:"+this.cpName);
      // console.log("型号:"+this.xh);
      // console.log("条码:"+this.tm);

      //电子说明书链接获取
      let para = {
        username: "iot",
        password: "iot2018!#",
        bucket: "gree-qrcode",
        machineType: this.xh
        // machineType: "NDY13-X6026a"
      };

      eleGet(para).then(res => {
        console.log(res);
        this.specification = res.data.url;
      });
    },

    cpImageLoad() {
      //图片加载完毕
      var cpimg = document.querySelector("#cpImg");

      var width = parseFloat(cpimg.width);
      var height = parseFloat(cpimg.height);
      console.log("图片宽:" + width + ",图片高:" + height);

      //根据图片宽高使用布局, 以4:3比例为基准
      if (height / width < 0.75) {
        this.isVerticalLayout = true;
      } else {
        this.isVerticalLayout = false;
      }

      setImmediate(() => {
        cpimg.style.display = "block";
      });
    },

    //点击产品介绍
    goProductDetalPage() {
      var pageLink = "";
      pageLink = this._details;
      if (pageLink.indexOf("http") < 0) {
        pageLink = "http://" + pageLink;
      }
      if (pageLink.indexOf("?") < 0) {
        pageLink = pageLink + "?sourceFrom=qgree";
      } else {
        pageLink = pageLink + "&sourceFrom=qgree";
      }

      if (pageLink != "") {
        //------模块点击记录-----
        ///*
        let obj = {
          moduleName: "产品详情",
          moduleUrl: pageLink,
          tm: this.tm,
          xh: this.xh,
          OS: this.currentOS,
          browser: this.currentBrowser,
          ip: window.returnCitySN.cip,
          area: window.returnCitySN.cname
        };
        //记录api
        recordModueleClick(obj).then(res => {
          if (this.isurldebug) {
            var str = JSON.stringify(res);
            //var str = JSON.stringify(returnCitySN);
            alert(str);
          }
          //------页面跳转-------
          this.jumpUrl(pageLink);
        });
      }
    },

    //根据功能按钮获取链接再跳转
    jumpUrlWithFunctionKey(functionKey) {
      var url = this.functionBtnList[functionKey]["url"];
      //有些链接需要加条码
      if (functionKey == "price_service") {
        url = url + "?tm=" + this.tm;
      } else if (functionKey == "gree_repair") {
        url = url + this.tm;
      } else if (functionKey == "gree_aircontroller") {
        var cnt_xh = this.xh.toLowerCase();
        let m_val = apiConst.controllerType[cnt_xh];

        if (typeof m_val == "undefined") {
          url = apiConst.controllerUrl2;
        } else {
          url = apiConst.controllerUrl1;
        }
      }

      //------模块点击记录-----
      ///*
      let obj = {
        moduleName: this.functionBtnList[functionKey]["name"],
        moduleUrl: url,
        tm: this.tm,
        xh: this.xh,
        OS: this.currentOS,
        browser: this.currentBrowser,
        ip: window.returnCitySN.cip,
        area: window.returnCitySN.cname
      };

      //记录api
      recordModueleClick(obj).then(res => {
        if (this.isurldebug) {
          var str = JSON.stringify(res);
          console.log(str);
          alert(str);
        }
        //------页面跳转-------
        this.jumpUrl(url);
      });

      // setTimeout(() => {
      //  //------页面跳转-------
      // this.jumpUrl(url)
      //  }, 100);
      // */
    },

    //跳链接
    jumpUrl(pageLink) {
      console.log("跳链接");
      window.location.href = pageLink;
    },

    // 为产品相关的添加触发样式变化
    addPdtClickStyleChange() {
      let opsNode = document.querySelector(".ops");

      let ops = opsNode.getElementsByClassName("pdtItem");
      for (let i = 0; i < ops.length; i++) {
        let opsItem = ops[i];
        //
        opsItem.addEventListener("touchstart", function(ev) {
          opsItem.className = "pdtItem itemHighlighted";
        });

        //
        opsItem.addEventListener("touchend", function(ev) {
          opsItem.className = "pdtItem";
        });

        //
        opsItem.addEventListener("touchcancel", function(ev) {
          opsItem.className = "pdtItem";
        });
        // console.log(opsItem)
      }
    },
    // 为功能相关按钮添加触发样式变化
    addFunctionsClickStyleChange() {
      let fNode = document.querySelector("#functionList");

      let fops = fNode.getElementsByClassName("item");
      for (let i = 0; i < fops.length; i++) {
        let fopsItem = fops[i];
        //
        fopsItem.addEventListener("touchstart", function(ev) {
          fopsItem.className = "item itemHighlighted";

          var f = fopsItem.getAttribute("onclick");
          // alert(fopsItem)
        });

        //
        fopsItem.addEventListener("touchend", function(ev) {
          fopsItem.className = "item";
        });

        //
        fopsItem.addEventListener("touchcancel", function(ev) {
          fopsItem.className = "item";
        });
        // console.log(opsItem)
      }
    },

    // 正常样式
    serviceItemStyleNormal(event) {
      event.currentTarget.className = "item";
    },

    // 高亮样式
    serviceItemStyleHighlighted(event) {
      event.currentTarget.className = "item itemHighlighted";

      // debugger;
      // alert("dddd")
      /*
      currentTarget 事件监听的节点
      target 当前触发的节点
      */
      //  console.log(event.currentTarget);
      //  console.log(event.target);
    }
  },
  computed: {
    ...mapState(["recommendList"])
  },
  created() {
    //这里调用
    this.lgOk = this.$store.state.lgOk;
    console.log(this.lgOk);

    //获取url参数
    this.getProductInfoFromUrl();

    document.body.addEventListener("touchstart", function(e) {
      e.preventDefault();
    });
    this.$store.dispatch(types.GET_RECOMMEND_LIST, this);
  },

  mounted() {
    //添加按钮点击样式
    this.addPdtClickStyleChange();
    this.addFunctionsClickStyleChange();

    //空样机样式
    var get_ky = this.$geturlpara.getUrlKey("ky");
    get_ky = GRStringHandler.checkNullString(get_ky);
    this.ky = parseInt(get_ky);
    if (this.ky > 0) {
      this.$refs.hbk.style.display = "none";
      this.$refs.divi.style.display = "none";
      this.$refs.pdt.style.margin = "auto";
    }
  }
};
</script>

