import axios from 'axios'
import * as apiConst from 'api/apiConst'
import GRStringHandler from '@/common/js/GRStringHandler'


/**
 * 获取请求头
 */
 function getVC (){

  var time =  Math.round(new Date().getTime()/1000)
  var vc = MD5(apiConst.apiKey+"_"+time);

  return {"vc":vc,"t":time}
 
 }


//模块点击统计api
export function recordModueleClick (obj) {
//const url = 'http://192.168.31.31:9000'+apiConst.clickApi
//const url = apiConst.clickApi
const url = apiConst.baseUrl+apiConst.clickApi
//console.log("api_url:"+url) 

let ip = GRStringHandler.checkNullString(obj.ip)
let area = GRStringHandler.checkNullString(obj.area)

let params = { 
  'moduleName':obj.moduleName,
  'moduleUrl':obj.moduleUrl,
  'tm':obj.tm,
  'xh':obj.xh,
  'OS':obj.OS,
  'browser':obj.browser,
  'ip':ip,
  'area':area,
  
}

var h = getVC();
console.log('t:'+h["t"])
console.log('vc:'+h["vc"])

//记得要抛出异常
 return axios.post(url,params,
  {
   timeout:1000*1.5,
   headers: {
  //  'Origin': "1", 
   't': h["t"], // unix时间戳
   'vc':h["vc"] //pi校验码 公式 vc=md5(apiKey_t) 
  }
}).catch((e) => {
     console.log('Nerror:'+e)
  })

}



//图文数据api
export function dataGet (obj){

//const url = apiConst.dataApi
const url = apiConst.baseUrl + apiConst.dataApi

let pp = GRStringHandler.checkNullString(obj.pp)
let xh = GRStringHandler.checkNullString(obj.xh)

var h = getVC();
console.log('t:'+h["t"])
console.log('vc:'+h["vc"])

return axios.get(url,{
  params:
  {
    'pp' : pp,
    'xh' : xh
  },
  //  timeout:1000*8,
   headers: {
  //  'Origin': "1", 
   't': h["t"], // unix时间戳
   'vc':h["vc"] //pi校验码 公式 vc=md5(apiKey_t) 
  },
  
}).catch((e) => {
     console.log('Nerror:'+e)
  })
}

//电子说明书Api
export function eleGet (para) {
  const url = apiConst.eleApi

  let formData = new FormData();
  formData.append('username','iot');
  formData.append('password','iot2018!#');
  formData.append('bucket','gree-qrcode');
  formData.append('machineType',para.machineType);

  return axios.post(url,
  formData
  ).catch((e) => {
    console.log('Nerror:'+e)
 })
}

//获取人气推荐产品
export function getRecommendList(){
  return [
    [{
      "img":'./static/img/air.png',
      'title':'品圆定频空调',
      'introduction':'简约时尚 | 唯美家居',   
      'url':'https://mall.gree.com/mall/ProductDisplayWap?catalogId=10001&langId=-7&productId=4593&storeId=10651'
    },{
      "img":'./static/img/air.png',
      'title':'品圆变频空调',
      'introduction':'节能变频 | 静音运行', 
      'url':'https://mall.gree.com/mall/ProductDisplayWap?catalog=10001&storeId=10651&productId=4551&langId=-7'
    },{
      "img":'./static/img/washer.png',
      'title':'格力变频洗干一体滚筒洗衣机',
      'introduction':'洗烘一体 | WIFI控制',
      'url':'https://mall.gree.com/mall/ProductDisplayWap?catalogId=10001&langId=-7&productId=12038&storeId=10651',
    }],
    [{
      "img":'./static/img/wash.png',
      'title':'格力变频洗干一体滚筒洗衣机',
      'introduction':'冷凝烘干 | WIFI掌控',
      'url':'https://mall.gree.com/mall/ProductDisplayWap?catalog=10001&storeId=10651&productId=12040&langId=-7',
    },{
      "img":'./static/img/fridge.png',
      'title':'晶弘多门冰箱',
      'introduction':'瞬冷冻 | 智能ECO',
      'url':'https://mall.gree.com/mall/ProductDisplayWap?catalogId=10001&langId=-7&productId=4513&storeId=10651',
    },{
      "img":'./static/img/icebox.png',
      'title':'晶弘多门冰箱',
      'introduction':'变频风冷 | 循环保湿',
      'url':'https://mall.gree.com/mall/ProductDisplayWap?catalogId=10001&langId=-7&productId=10714&storeId=10651',
    }],
  ]
}

