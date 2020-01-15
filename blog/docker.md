

### 安装 ifconfig 命令, 虚拟机
```
yum install net-tools
```


### docker安装
- 卸载旧版本
```shell
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
```

```
yum remove docker-ce docker-ce-cli containerd.io
```

- 安装存储驱动
```shell
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

- 下载官方的yum源文件
```shell
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

- 安装docker-ce
```shell
yum install -y docker-ce-18.09.0-3.el7 docker-ce-cli-18.09.0-3.el7 containerd.io-1.2.0-3.el7

sudo yum install docker-ce
```




**1.启动docker**
```
systemctl start docker 
```
**2.停止docker**
```
systemctl stop docker
```

**重启docker**
```
$ sudo systemctl daemon-reload
$ sudo systemctl restart docker
```

**3.docker 配置镜像**
```
vi /etc/docker/daemon.json 
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
  ]
}
```

**查看有哪些镜像**
```
docker image ls
```

**docker 安装镜像**
```
docker pull tomcat
```

**拉取镜像**
```
docker container pull [name]
```

**连接镜像**
```
--link dockerName
```

**进入容器**
```
docker exec -it [container_id] bash
```
**修改docker 启动容器指定端口**
```
docker container run  -p 8080:8080 [container_name]
```

**docker 从 docker容器中拷贝文件到本地种**
```
docker cp tomcat:/usr/local/tomcat/conf/web.xml ./
// 将tomcat 文件下的web.xml配置， 复制到当前目录
```

**docker 同时删除多个符合条件的容器**
```
docker rm $(docker container ls -f "status=exited" -q)
```

**docker 刪除镜像**
```
docker rmi [imagename]
```
**docker 配置nginx**
```
docker container run -p 8881:80 --name nginx -v /root/webserver/:/www -v /usr/local/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /usr/local/nginx/logs/:/wwwlogs -d nginx
```




### docker安装 tomcat
- 创建tomcat 本地挂载文件
```
mkdir -p /usr/local/atom.hu/tomcat/webapps
```
- 拉取镜像
```
docker pull tomcat
```
- 启动镜像
```
docker run --name tomcat -p 80:8080 -v /usr/local/atom.hu/tomcat/webapps:/usr/local/tomcat/webapps -d tomcat

-p 主机与容器端口
-v 挂载文件
--name 给容器命名
```



### docker安装 jenkins
- 创建jenkins 文件,并修改文件权限
```
mkdir -p /usr/local/atom.hu/jenkins
chown -R 1000:1000 /usr/loca/atom.hu/jenkins
```
- 拉取镜像
```
docker pull jenkins
```
- 启动镜像
```
docker run -p 8080:8080 -p 50000:50000 --name jenkins --privileged=true -v /usr/local/atom.hu/jenkins/:/var/jenkins_home -d jenkins
```
- 稍作等待
![](https://ws1.sinaimg.cn/large/0066iHyhgy1g0jn6kraqjj315d0wg40r.jpg)

- 进入目录查看密码
```
[root@localhost secrets]# cat initialAdminPassword 
9ca7368042fe45be8b693ab43e7797d1
```

**jenkins 容器中的公钥私钥**

很常用的 `jenkins` 构建操作有：在 `Execute shell` 步骤中用 `ssh` 的方式远程登录上其他服务器，服务器上面的执行 `shell` 脚本。 `ssh` 方式需要用到的 `public key` 和 `private key` 也是可以用 `-v` 参数挂载到 `/var/jenkins_home/.ssh` 目录中。注意，这里不挂载到容器的 `/root/.ssh` 目录，因为整个 `jenkins` 容器是以 `jenkins` 用户来运行的。