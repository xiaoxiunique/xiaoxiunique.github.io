

#### 新建存储库文件

```shell
vim /etc/yum.repos.d/mongodb-org-3.4.repo
```

#### 写入 `aliyun` 配置

```shell
[mongodb-org]

name=MongoDB Repository

baseurl=http://mirrors.aliyun.com/mongodb/yum/redhat/7Server/mongodb-org/3.4/x86_64/

gpgcheck=0

enabled=1
```

#### 开始安装

```shell
yum install -y mongodb-org
```

#### 启动服务

```shell
systemctl start mongod
```

#### 进入命令行

```shell
mongo
```

![](http://images.atomblogs.com/20190818151812.png)

#### 打开远程访问

编辑配置文件

```shell
vim /etc/mongod.conf
```

将`bind` 的 `127.0.0.1` 修改为 `0.0.0.0`, 并重启服务

![](http://images.atomblogs.com/20190818152112.png)

```shell
systemctl restart mongod
```

#### 配置安全组

![](http://images.atomblogs.com/20190818152521.png)

#### 使用 Robo 3T 连接

![](http://images.atomblogs.com/20190818153121.png)

#### 创建连接密码

创建用户

```shell
use admin;

db.createUser({ user:"root", pwd:"123456", roles:["root"] })

```

```shell
vim /etc/mongodb.conf

-- 修改配置文件
security:
  authorization: enabled //冒号后面需要空一格
```
