#Servlet

一个简单的ssm代码

创建周期：
    1.默认第一次访问创建
    2.在服务器启动时就创建<load-on-startup>1</load-on-startup>,数字代表优先级，越小越高

**web应用中所有的资源响应都是servlet负责，包括静态资源**
所以当有全局url-pattern时，就不会查不到static/index.html
**这种情况下采用**
  <!--用于访问静态资源-->
```xml  
  <servlet-mapping>
    <servlet-name>default</servlet-name>
    <url-pattern>/static/*</url-pattern>
  </servlet-mapping>
  
  <!--默认欢迎页面，当没匹配到时-->
  <welcome-file-list>
  <welcome-file>index.html</welcome-file>
  </welcome-file-list>
```

通过@PathVariable，例如/blogs/1
通过@RequestParam，例如blogs?blogId=1
**如果写不对，不会进入mapping响应**





  <!--中文乱码-->
```xml  
  <filter>
    <filter-name>encodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
      <param-name>encoding</param-name>
      <param-value>UTF-8</param-value>
    </init-param>
    <init-param>
      <param-name>forceEncoding</param-name>
      <param-value>true</param-value>
    </init-param>
  </filter>
  <filter-mapping>
    <filter-name>encodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
  </filter-mapping>
```  
  
  
  
  
  
  