
import com.mk.dao.UserDao;
import com.mk.entity.User;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class UserDaoTest extends BaseTest {
    @Autowired
    private UserDao userDao;

    @Test
    public void signUpTest() {
        User user = new User();
        user.setUsername("monk");
        user.setPassword("654321");
        user.setEmail("464493571@126.com");
        try {
            Integer value = userDao.userSignUp(user);
            System.out.println(value);
            System.out.println("done");
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
        }
    }

    @Test
    public void loginTest() {
        User user = userDao.userLogin("wjf", "123456");
        System.out.println(user);
    }

    @Test
    public void userUpdateTest() {
        User user = new User();
        user.setUsername("monk");
        user.setPassword("123456");
        user.setEmail("464493571@qq.com");
        int value = userDao.userUpdate(user);
        System.out.println(value);
    }
}





