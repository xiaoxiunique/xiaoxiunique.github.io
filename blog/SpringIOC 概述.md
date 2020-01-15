
### 前言

`Spring`, 是一个轻量级的控制反转`(IOC)`和面向切面`(AOP)`的容器框架

### 1.控制反转 `IOC` (inversion of controller)

IOC 是一种概念, 是吧我们程序中类与类之间的依赖关系交给容器处理, 一般有两种方式

- 依赖查找 `DL (dependency lookup)`

  程序提供查找方式, 交给容器去查找(回调函数)

- 依赖注入 `DI (dependency injection)`

  程序不提供查找方式, 提供合适的构造方法或者 setter 方法,让容器进行注入来解决依赖关系

**spring 的控制反转就是通过依赖注入来实现的**

### 2.什么叫依赖

简单的说,一个类实现某个功能需要依赖另一个类的帮助来实现

> 举个简单的例子

将类抽象为某一件事物,不同的类为不同的事物, 比如我们现在有一个 `菜刀类` 和一个 `肉类`, 如果我们现在想要菜能够将肉切成片, 而后才能进行后台的烹饪. 但是我们发现光凭 `菜刀` 和 `肉`根本无法达到我们想要的效果, 我们想要叫肉变成肉片, 还必须借助一个`菜板类`,也只有借助`菜板`, 我们才能达到我们想要的想过, 而现在 `菜刀` 和 `菜板` 也就存在依赖的关系

#### 用程序举一个例子

**目标: 我们将模拟一个 web 登录验证功能**

创建两个文件 `UserDao.java` `UserService.java`

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fzmbckbzgxj30te050744.jpg)

`UserDao.java` 作为数据持久层,连接数据库, 提供链接数据库, 判断数据库中用户名和密码是否正确

`UserDao`

```java
public class UserDao{

	public boolean loginUser(String userName, String password) {
		System.out.println("这是通过jdbc进行登陆验证的dao方法");
		return true;
	}

}
```

`UserService.java` 作为业务逻辑层, 调用数据持久层进行具体业务编写

`UserService`

```java
/**
 * 类描述:用于对关于用户登陆,用户增删改查的服务类(service)
 * @author atom.hu
 *
 */
public class UserService {

	/**
	 * 通过调用与数据库交互的UserDao里面的loginUser方法,判断是否验证成功
	 * @param userName
	 * @param password
	 * @return
	 */
	public boolean loginUser(String userName,String password){
		boolean flag = false;
		//在userService中,,为了实现登陆的验证,需要调用Dao的方法
		UserDao userDao = new UserDao();
		//IUserDao userDao = new UserDaoOther();
		flag = userDao.loginUser(userName, password);
		return flag;
	}
}

```

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fzmb5z181hj30v009lq36.jpg)

这里我们在`UserService`中创建`main`方法, 模拟进行调用

```java
public static void main(String[] args) {
	UserService userService = new UserService();
	userService.loginUser("aaa", "bbb");
}
```

至此, 我们就模拟了一个简单的登录功能, 不难发现按照传统的 mvc 模式, 我们需要使用 dao , service, controller 三层结合起来使用, 每层负责自己的事,

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fzna1dversj30xs050aa2.jpg)

在上的代码中 UserService 中调用 UserDao 中的代码, 它们便就存在依赖关系`(图中红线框类)`

#### 3.面向接口编程

上面介绍了依赖的情况, 然后在实际开发中,都需要使用接口定义公共方法, 实现`(implement)`接口, 针对具体方法进行实现

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fznff7l0h8j30qu0f0t8z.jpg)

在实际开发中,随着项目的开展, 需求不时也会发生变化, 详细到每一个功能点, 今天这个功能点需要实现 A 功能, 明天业务可能就会变成 B 功能, 再往后也有可能在回到 A 功能, 在针对着这样多变的开发环境下, 针对接口编程就变得尤为重要

**星期一**

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fzngjszxrsj30v80bf74h.jpg)

**星期二**, 老板心情不太好, 想要换个样子

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fznh1r960lj301x01jq2t.jpg)

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fznh0hm2yxj30wa0b3mxd.jpg)

**星期三**

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fznh5w34xgj30um0eqwgs.jpg)

**老板看了看觉得这个颜色好像有点不妥, 于是便又换了个样子**

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fznh3e7hzzj30uy0bvq35.jpg)

此时的你

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fznh6rnembj302i02r0sq.jpg)

**星期四**

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fznh9dv9p8j30iv07i3z6.jpg)

**星期五 老板觉得, 看来看去, 还是觉得星期一的比较好**

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fznhak3ityj30ha074dgd.jpg)

尽管你再不想改, 但是为了生存你还是要去做, 然后这样的工作, 其实更多的是体力活, 对于技术而言增长不大

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fznhfknbavj30n70ctgn2.jpg)

然后其实我们可以很好的避免这一点

我们需要定义一个公共的接口 `IService`, 接口中定义需要实现的功能列表, 然后我们只需要创建多个不同的实现类即可

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fznhrq2clzj30t20f53yw.jpg)

如上图所示, 再实现具体的功能时只需要通过接口`new` 对应的对象即可

**今天要实现 A 功能**

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fzni0z4tmxg301e01edfm.gif)

```java
IService ServiceA = new ServiceAImpl();
```

**今天要实现 B 功能**

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fzni0z4tmxg301e01edfm.gif)

```java
IService ServiceB = new ServiceBImpl();
```

**今天要实现 C 功能**

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fzni0z4tmxg301e01edfm.gif)

```java
IService ServiceC = new ServiceCImpl();
```

这样而言, 无论需求如果改变都不再害怕
