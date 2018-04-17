package com.mk.dao;

import com.mk.entity.User;
import org.apache.ibatis.annotations.Param;

public interface UserDao {
    /**
     * 注册
     */
    Integer userSignUp(@Param("user") User user);

    /**
     * 验证用户名、密码是否正确
     * @param username 用户名
     * @param password 密码
     */
    User userLogin(@Param("username") String username, @Param("password") String password);

    /**
     * 更新状态
     */
    int userUpdate(@Param("user") User user);
}
