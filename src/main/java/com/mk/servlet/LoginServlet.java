package com.mk.servlet;

import com.common.pojo.JsonResult;
import com.common.pojo.Result;
import com.mk.entity.User;
import com.mk.service.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

@Controller
@RequestMapping("/verify")
public class LoginServlet {
    private Logger logger = Logger.getLogger(this.getClass());

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    private Result login(@RequestParam("username") String username, @RequestParam("password") String password) {

            User user = userService.userLogin(username, password);
            logger.info("user[{}] info is " + user);

            if (user != null) {
//                将登录的用户的user对象存到session中
                Result result = JsonResult.genSuccessResult();
                Map<String, String> data = new HashMap<String, String>();
                data.put("r","111");
                result.setData(data);
                return result;
            } else {
                Result result = JsonResult.genFailResult("登录失败");
                Map<String, String> data = new HashMap<String, String>();
                data.put("r","000");
                result.setData(data);
                return result;
            }
    }

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    @ResponseBody
    private Result signup(User user) {
        try {

            userService.userSignUp(user);
            logger.info("signup info is: " + user.toString());

            Result result = JsonResult.genSuccessResult();
            Map<String, String> data = new HashMap<String, String>();
            data.put("r","");
            result.setData(data);
            return result;

        } catch (Exception e) {

            String errorMsg = e.getLocalizedMessage();
            if (errorMsg.contains("Duplicate entry")) {
                if (errorMsg.contains("for key 'usename'")) {
                    System.out.println("用户名重复");
                } else if (errorMsg.contains("for key 'email'")) {
                    System.out.println("邮箱重复");
                }
            } else {
                System.out.println("数据库错误");
            }
            logger.info("signup error info is: " + errorMsg);

            Result result = JsonResult.genFailResult(errorMsg);
            Map<String, String> data = new HashMap<String, String>();
            data.put("r","00");
            result.setData(data);
            return result;

        }
    }
}








