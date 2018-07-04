// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './config/routes'
import Root from './config/root.js'
import store from './store/'
import SystemTools from 'common/js/SystemTools'
import  axios from 'axios'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'layui-src/dist/css/layui.css'; // layui框架
import geturlpara from '../static/js/geturlpara.js'
import getCommonApi from '../static/js/common.js'
import fastclick from 'fastclick'
//import qs from 'qs';
//import components from './components/' //加载公共组件

// 用来解决移动端点击事件延迟300毫秒的问题
fastclick.attach(document.body)

//设置
 //axios.defaults.headers.post['hello'] = 'xxxxxxxxxx';
//全局拦截
//  axios.interceptors.request.use( (config) => {
//   if (config.method=="post"){
//       //config.data = qs.stringify(config.data);
//       // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//       config.headers['hello'] = 'xxxxxxxxxx';
//   }
//   return config;
// },  (error) => {
//   return Promise.reject(error);
// });

Vue.use(Mint);
Vue.prototype.Root=Root;
Vue.prototype.$mint=Mint;
Vue.prototype.$http = axios;
Vue.prototype.$geturlpara = geturlpara;
Vue.prototype.$getCommonApi = getCommonApi;

Vue.prototype.currentOS = SystemTools.getCurrentOS(); //当前操作系统
Vue.prototype.currentBrowser = SystemTools.getCurrentBrowser(); //当前浏览器

// console.log("操作系统:"+SystemTools.getCurrentOS());
// console.log("浏览器:"+SystemTools.getCurrentBrowser());
/*ajax请求封装*/
Vue.prototype.post=function(obj,success,error,root){
  if(typeof obj!=="object"){
    console.log("第一个参数只能是对象");
    return
  }
  var data={
    token:this.$store.state.token,
  }
  for(var i in obj){
    data[i]=obj[i];
  }
  var location=root?root:"http://server.worldours.com/";
  console.log("test");
  this.$http({
    url: location,
    data:data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'}
  }).then(function(res){
      if(res){
        success(res.data)
      }else{
        error&&error(res.data)
      }
    }).catch(function(err){
    alert(err);
  })
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
function reSizePx(){
  if(IsPC()) {
    document.getElementsByTagName('html')[0].style.fontSize = (document.body.clientWidth / 85).toString() + 'px';
  }else{
    document.getElementsByTagName('html')[0].style.fontSize = (document.body.clientWidth / 25).toString() + 'px';
  }
}
reSizePx();
window.addEventListener("resize", function(){
  reSizePx()
}, false);
