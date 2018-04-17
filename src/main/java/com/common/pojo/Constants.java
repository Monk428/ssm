package com.common.pojo;

public class Constants {

    public static final int RESULT_CODE_SUCCESS = 200; // 成功处理

    public static final int RESULT_CODE_BAD_FORMAT = 400; // 请求格式错误
    public static final int RESULT_CODE_UNAUTHORIZED = 401; // 未授权
    public static final int RESULT_CODE_FORBIDDEN = 403; // 鉴权成功，该用户无权限
    public static final int RESULT_CODE_BAD_REQUEST = 404; // 请求资源不存在
    public static final int RESULT_CODE_METHOD_NOTALLOWED = 405; // 该http方法资源不可用
    public static final int RESULT_CODE_URL_GONE = 410; // url对应资源不可用
    public static final int RESULT_CODE_UNSUPPORED_TYPE = 415; // 请求类型错误

    public static final int RESULT_CODE_SERVER_ERROR = 500; // 没有对应结果

}
