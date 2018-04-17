package com.mk.service;

import com.mk.entity.User;
import org.apache.ibatis.annotations.Param;

/**
 * 业务接口：站在"使用者"角度设计接口 三个方面：方法定义粒度，参数，返回类型（return 类型/异常）
 */
public interface UserService {

    /**
     * 注册
     * @param user 用户
     * @return bool
     */
    Integer userSignUp(@Param("user") User user);

    /**
     * 登录
     * @param name 用户名
     * @param password 密码
     */
    User userLogin(@Param("name") String name, @Param("password") String password);


    /**
     * 更新状态
     * @param user 用户
     * @return bool
     */
    int userUpdate(@Param("user") User user);
}
