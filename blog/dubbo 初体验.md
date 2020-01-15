
### dubbo 是什么?

Dubbo是一个分布式服务框架，致力于提供高性能和透明化的RPC远程服务调用方案，以及SOA服务治理方案。简单的说，dubbo就是个服务框架，如果没有分布式的需求，其实是不需要用的，只有在分布式的时候，才有dubbo这样的分布式服务框架的需求，并且本质上是个服务调用的东东，**说白了就是个远程服务调用的分布式框架（告别Web Service模式中的WSdl，以服务者与消费者的方式在dubbo上注册）**



**其核心部分包含:**

- 远程通讯: 提供对多种基于长连接的NIO框架抽象封装，包括多种线程模型，序列化，以及“请求-响应”模式的信息交换方式。

- 集群容错: 提供基于接口方法的透明远程过程调用，包括多协议支持，以及软负载均衡，失败容错，地址路由，动态配置等集群支持。
- 自动发现: 基于注册中心目录服务，使服务消费方能动态的查找服务提供方，使地址透明，使服务提供方可以平滑增加或减少机器。

## 如何使用?

其实看了上面的那句话, 我还是不是很明白, 还不如自己用一次来的快

## 实现环境

- `idea` : 2018.3

- `java-version `: 11

- `spring-version`	: 4.3.16.RELEASE

- `dubbo-version`: 2.6.4

## 实现步骤!

创建一个空的 `java` 工程, 并以`demo`命名

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fzff9s1sncj30rn0j70t5.jpg)

在`demo`项目中创建 `module`, 类型为`maven`, 命名为 `01-common`

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fzffmhv7xoj30rp0j8aa7.jpg)

并在`pom.xml` 中定义版本

```xml
    <!--定义版本-->
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
    </properties>
```

![](https://ws1.sinaimg.cn/large/0066iHyhly1fzffprjbj1j30jw096gm3.jpg)

然后在 `java` 包下, 创建`com.atom.service` 包, 并创建`SomeService`接口

```java
package com.atom.service;

/**
 * @author hcg
 * @date 2019/1/22 16:22
 * @className SomeService
 */
public interface SomeService {
    /**
     * hello 方法
     * @param name
     * @return
     */
    String hello(String name);
}

```

然后在`demo`项目中创建 `module`, 类型为`maven`, 命名为 `01-first-provider`

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fzffvcr909j30rp0j8weq.jpg)

同样定义版本, 并引用`01-common` 工程, 并 引入 dubbo 和 spring 依赖

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.atom</groupId>
    <artifactId>01-first-consumer</artifactId>
    <version>1.0-SNAPSHOT</version>

    <!--定义版本-->
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
        <!--spring 依赖-->
        <spring-version>4.3.16.RELEASE</spring-version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>com.atom</groupId>
            <artifactId>01-common</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>

        <!-- dubbo 依赖-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>dubbo</artifactId>
            <version>2.6.4</version>
        </dependency>

        <!--spring 依赖-->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-beans</artifactId>
            <version>${spring-version}</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-core</artifactId>
            <version>${spring-version}</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>${spring-version}</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-expression</artifactId>
            <version>${spring-version}</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-aop</artifactId>
            <version>${spring-version}</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-tx</artifactId>
            <version>${spring-version}</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-aspects</artifactId>
            <version>${spring-version}</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-web</artifactId>
            <version>${spring-version}</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>${spring-version}</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-jdbc</artifactId>
            <version>${spring-version}</version>
        </dependency>


    </dependencies>
</project>
```

并在`01-first-provider` 中添加`SomeService` 接口的实现类

```java
package com.atom.service;

/**
 * @author hcg
 * @date 2019/1/22 16:28
 * @className SomeServiceImpl
 */
public class SomeServiceImpl implements SomeService {
    @Override
    public String hello(String name) {
        System.out.println("Hello dubbo" + name);
        return "atom";
    }
}

```

而后在`resource` 中添加 `spring-dubbo-provider.xml` 配置文件, 并添加如下配置

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dubbo="http://code.alibabatech.com/schema/dubbo"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://code.alibabatech.com/schema/dubbo http://code.alibabatech.com/schema/dubbo/dubbo.xsd">

    <!--当前工程名称, 该名称将在监控平台使用-->
    <dubbo:application name="01-first-provider" />


    <!--注册Service, 其就是真正的服务提供者-->
    <bean id="someService" class="com.atom.service.SomeServiceImpl"/>


    <!--暴露服务: 采用直连的方式-->
    <dubbo:service interface="com.atom.service.SomeService"
                   ref="someService"
                   registry="N/A" />

</beans>
```

在工程添加实现类 `RunProvider` 类, 用于启动容器

```java
**
 * @author hcg
 * @date 2019/1/22 15:43
 * @className RunProvider
 */
public class RunProvider {
    public static void main(String[] args) throws IOException {
        ApplicationContext ac = new ClassPathXmlApplicationContext("spring-dubbo-provider.xml");
        // 启动spring 容器
        ((ClassPathXmlApplicationContext) ac).start();
		// 阻塞线程, 不让线程退出
        System.in.read();
    }
}
```

然后在`demo`项目中创建 `module`, 类型为`maven`, 命名为 `01-first-comsumer`

![](https://ws1.sinaimg.cn/large/0066iHyhgy1fzfgb6aihnj30rq0j3aab.jpg)

在 `comsumer` 工程中  添加 `spring-dubbo-consumer.xml` 配置文件, `comsumer` 中`pom.xml` 文件和`provider` 中保持一致

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dubbo="http://code.alibabatech.com/schema/dubbo"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://code.alibabatech.com/schema/dubbo http://code.alibabatech.com/schema/dubbo/dubbo.xsd">


    <!--当前工程的名称, 监控中心使用-->
    <dubbo:application name="01-first-consumer"/>


    <!--消费引用-->
    <dubbo:reference id="someService"
                     interface="com.atom.service.SomeService"
                     url="dubbo://localhost:20880"/>
</beans>
```

而后在创建 运行文件 `RunComsumer`

```java

/**
 * @author hcg
 * @date 2019/1/22 15:51
 * @className RunComsumer
 */
public class RunComsumer {
    public static void main(String[] args) {
        //创建spring 容器
        ApplicationContext ac = new ClassPathXmlApplicationContext("spring-dubbo-consumer.xml");

        SomeService service = (SomeService) ac.getBean("someService");
        service.hello("atom");

    }
}
```

然后先在01-common 工程中执行 `mvn install` , 而后分别启动 `provider` 和 `comsumer` 工程 , 便可查看效果