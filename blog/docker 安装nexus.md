
- docker 查看 nexus

```
docker search nexus
```

![](https://ws1.sinaimg.cn/large/0066iHyhly1g19lmfhoofj31ly0lutb5.jpg)

- docker 拉取 nexus 镜像

```
docker pull sonatype/nexus3
```

![](https://ws1.sinaimg.cn/large/0066iHyhly1g19m1tj098j30vw06fwew.jpg)

- 使用 docker 运行 nexus

```
docker run -d -p 8081:8081 --name nexus -v /usr/local/nexus/nexus-data:/var/nexus-data --restart=always 5d3600fd5cf2
```

- 上传完成之后 访问本机的 8081 端口

![](https://ws1.sinaimg.cn/large/0066iHyhgy1g1a4g45fqjj31gd0isq51.jpg)

- 创建一个测试用户
  ![](https://ws1.sinaimg.cn/large/0066iHyhgy1g1a4hrrcwlj30qh0ey3yr.jpg)

- 创建一个 repositories
  ![](https://ws1.sinaimg.cn/large/0066iHyhgy1g1a4iy0skxj311h0cmwfi.jpg)

- 创建一个 maven2 host 的 Repository
  ![](https://ws1.sinaimg.cn/large/0066iHyhgy1g1a4l36dmzj30z50ml758.jpg)

- 修改 maven setting.xml

```
	<server>
			<id>test</id>
			<username>test</username>
			<password>test</password>
	</server>
```

- 在 pom.xml xml 文件中添加如下配置

```
    <distributionManagement>
        <repository>
            <id>test</id>
            <url>http://192.168.152.128:8999/repository/repositories/lk-common</url>
        </repository>
    </distributionManagement>

```

> 上面的 id 需要与 maven 中配置的 id 保持一致

- 添加打包插件

```
 <build>
        <plugins>
            <!--发布代码Jar插件-->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-deploy-plugin</artifactId>
                <version>2.7</version>
            </plugin>
            <!--发布源码插件-->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-source-plugin</artifactId>
                <version>2.2.1</version>
                <executions>
                    <execution>
                        <phase>package</phase>
                        <goals>
                            <goal>jar</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
```

然后执行

```
mvn deploy
```

在需要添加相关依赖的项目中添加私服配置

```
    <repositories>
        <repository>
            <id>Release</id>
            <url>http://192.168.186.130:8081/repository/test-nexus-repositories</url>
        </repository>
    </repositories>
```
