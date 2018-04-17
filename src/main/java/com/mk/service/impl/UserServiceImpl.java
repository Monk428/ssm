package com.mk.service.impl;

import com.mk.dao.UserDao;
import com.mk.entity.User;
import com.mk.service.UserService;
import org.apache.ibatis.annotations.Param;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    private Logger logger = Logger.getLogger(this.getClass());

    @Autowired
    private UserDao userDao;

    public Integer userSignUp(User user) {
       return userDao.userSignUp(user);
    }

    public User userLogin(String name, String psw) {
        return userDao.userLogin(name, psw);
    }

    public int userUpdate(User user) {
        return userDao.userUpdate(user);
    }

}
