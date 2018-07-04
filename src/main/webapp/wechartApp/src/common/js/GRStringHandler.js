//处理字符串相关函数
export default {
    
     //处理undefined和null
     checkNullString : function (value) {
        if (typeof(value) == "undefined" || value==null){ 
            return '';
         } 
     
         return String(value);
    }
    
    }