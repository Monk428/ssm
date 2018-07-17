//var TempDate = new Date();
//TempDate.toLocaleDateString()//2013年9月4日
//TempDate.format("yyyy-MM-dd")//2013-09-04
Date.prototype.format = function (format) {
        var o = {
            "M+": this.getMonth() + 1, //month
            "d+": this.getDate(), //day
            "h+": this.getHours(), //hour
            "m+": this.getMinutes(), //minute
            "s+": this.getSeconds(), //second
            "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
            "S": this.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
            RegExp.$1.length == 1 ? o[k] :
            ("00" + o[k]).substr(("" + o[k]).length));
        return format;
}

Date.prototype.UTCFormat = function (format) {
    var o = {
        "M+": this.getUTCMonth() + 1, //month
        "d+": this.getUTCDate(), //day
        "h+": this.getUTCHours(), //hour
        "m+": this.getUTCMinutes(), //minute
        "s+": this.getUTCSeconds(), //second
        "q+": Math.floor((this.getUTCMonth() + 3) / 3), //quarter
        "S": this.getUTCMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
        RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}

function UTCToLocalTime(d)
{
    var m = (d.getUTCMonth() + 1); if (m < 10) m = "0" + m;
    var d = d.getUTCDate(); if (d < 10) d = "0" +d;
    var h = d.getUTCHours(); if (h < 10) h = "0" + h;
    var mm = d.getUTCMinutes(); if (mm < 10) mm = "0" + mm;
    var ss = d.getUTCSeconds(); if (ss < 10) ss = "0" + ss;
    return d.getUTCFullYear() + "-" + m  + "-" + d + " "
            + h + ":" + mm + ":" + ss;
}
