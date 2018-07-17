export default {

    //获取url的参数 add by hamnet
    getUrlKey: function (name) {

        var reg = new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)')
        var result = reg.exec(location.href);
        //console.log("正则结果:"+result);
        if (result == null) return null;

        return decodeURIComponent((result || [''])[1].replace(/\+/g, '%20')) || null
    }

}
