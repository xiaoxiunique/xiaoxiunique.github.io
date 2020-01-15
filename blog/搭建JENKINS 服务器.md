## 1.JENKINS 是什么
Jenkins是一个自包含的、开源的自动化服务器，可以用于自动化与构建、测试、交付或部署软件相关的各种任务。

Jenkins可以通过本机系统包、Docker安装，甚至可以由任何安装了Java运行时环境(JRE)的机器独立运行

## 2.在centos 系统上安装jenkins
三种方式
- 通过 docker 安装
- 通过jenkins.war 在tomcat中运行
- 通过yum 的方式安装

### 2.1 通过docker 安装

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

### 2.2 通过jenkins.war 的方式安装
在[jenkins官网](https://jenkins.io/download/)中下载war包

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1onmsgs3oj30wi0ejjru.jpg)

可以直接右键复制软件地址, 使用 wget 命令进行下载
```
wget http://mirrors.jenkins.io/war-stable/latest/jenkins.war
```

下载完成后 将项目放入`tomcat`中`webapps` 文件夹下


### 2.3 通过yum的方式安装jenkins

获取软件安装源
```
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
```

```
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
```

安装jenkins
```
yum -y install jenkins
```

安装完成后 启动jenkins
```
systemctl start jenkins
```

> 通过对三种方式的实验 每种方式都进行了探索, 最后选择通过yum的方式进行安装, 也是最麻烦的安装方式, 但是相对可靠, docker 的安装方式虽然简便, 但是会遇到比较多软件环境问题.  使用jenkins.war的方式, 也相对比较简便, 但是也是遇到比较多的问题, 最后还是放弃了, 采用了最原始也是最麻烦的方式

### 3.0 使用jenkins自动化部署的前提条件
为了保证后面的配置能够顺利进行, 需要一些前期的准备工作

**修改jenkins的配置文件**

```
# 打开jenkins的配置文件
vim /etc/sysconfig/jenkins
# 修改 $JENKINS_USER 的值为root
$JENKINS_USER="root"
```

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1oocnjlscj30ft0d1q3b.jpg)

**修改Jenkins相关文件夹用户权限**

```
chown -R root:root /var/lib/jenkins
chown -R root:root /var/cache/jenkins
chown -R root:root /var/log/jenkins
```

**重启Jenkins服务并检查运行Jenkins的用户是否已经切换为root**
```
# 重启Jenkins（若是其他方式安装的jenkins则重启方式略不同）
systemctl restart jenkins
# 查看Jenkins进程所属用户
ps -ef | grep jenkins
# 若显示为root用户，则表示修改完成
```
> 到此为止, 前期准备工作就算完按成了, 可以开始进行jenkins自动化部署了


### 4.0 在jenkins中安装插件
> 在jenkins中, 新手推荐直接安装推荐插件, 后设置管理员密码后, 进入主界面, 切记不要忘记密码, 虽然也有解决办法, 但是还是记住密码的好

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1oonuu2uuj312e0ivq50.jpg)

#### 安装必要的jenkins插件


**Git Parameter Plug-In**

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1oowfbd63j30pf0dmaai.jpg)
![image](865C4BC01F884A2C94D21C61B52D2401)

在后续的自动化部署中, 我们需要通过参数, 设置不同的分支, 对不同的分支进行打包, 需要这个插件的支持

**Maven Integration plugin**

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1ootngpzwj30ti0gqq4m.jpg)

在部署spring boot 项目的时候, 我们需要创建maven项目, 在安装了这个插件之后, 在创建项目的时候, 如果没有这个插件, 在创建项目的时候就没有 `构建一个maven项目`的选项

**Publish Over SSH**
![](https://ws1.sinaimg.cn/large/0066iHyhly1g1op2p0y5wj30tm0gfaaj.jpg)
有的时候我们在A机器上搭建的jenkins 但是却可能是在B机器上部署项目, 需要`Publish Over SSH`的支持

> 这里注意, 在填主机Ip的时候, 如果两台机器同属一个运行商的话, 尽量填写内网IP比较好, 这个很重要

### 5.0 在服务器中添加相关支持环境
1. 安装 openjdk 1.8
jenkins 的运行需要openjdk依赖

**官方说法**
>You will need to explicitly install a Java runtime environment, because Oracle's Java RPMs are incorrect and fail to register as providing a java dependency. Thus, adding an explicit dependency requirement on Java would force installation of the OpenJDK JVM.

```
yum install java-1.8.0-openjdk
```

2. 安装 git

```
yum install git
```

3. 安装 node, 后续会部署前端项目需要

```
# 下载安装包
wget https://nodejs.org/dist/v10.15.3/node-v10.15.3-linux-x64.tar.xz

# 解压
tar -xvf node-v10.15.3-linux-x64.tar.xz -C ./

# 将node命令和npm设置软连接到 /usr/bin 中
ln -s ./node /usr/bin/node
ln -s ./npm /usr/bin/npm

# 然后在其他的地方都可以使用这两个命令了
```
4. 安装`maven`, 并在`/etc/profile` 中配置

### 6.0 系统配置
![](https://ws1.sinaimg.cn/large/0066iHyhly1g1opr48ycoj30yx0gmjt8.jpg)

在全局配置工具中, 配置 `jdk`, `maven`, `git`, `node` 的安装路径

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1optokrgrj30sy0est90.jpg)

### 7.0 自动化部署 前端vue项目
> 部署场景, 在A机器进行webpack打包, 将打包后的文件,发送到B机器上指定的文件夹, 通过nginx代理实现访问

1. 创建一个自由风格的软件项目

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1opy2xuf8j30q40g7405.jpg)

2.填写项目描述

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1oq0qc5ymj30qp06rgln.jpg)

3. 选择参数化构建过程, 后续可以选择不同分支进行打包

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1oq2613owj30q10h5750.jpg)

4. 选择不同的版本控制工具 svn 和 git都可以, 这里我们使用git

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1oq3ww5wyj30q20exaak.jpg)
需要添加 自己的用户和密码, 不然会出现下面的情况
![](https://ws1.sinaimg.cn/large/0066iHyhly1g1oq5ydtqmj30q40ef0tb.jpg)

5. 在构建环境中选择 `Send files or execute commands over SSH after the build runs`
![](https://ws1.sinaimg.cn/large/0066iHyhly1g1oq86idjvj30tt0gw755.jpg)
> 这里的配置为, 在本地构建完成之后, 我们需要将哪些文件发送到目标主机上, 发送到目标主机上, 并执行什么命令

```
cd /home/project/web/test  
tar -zxvf dist.tar.gz
rm -rf dist.tar.gz
```
> `/home/project/web/test`  为目标主机nginx 配置过的目录

6. 在构建中选中 `Execute Shell`
![](https://ws1.sinaimg.cn/large/0066iHyhly1g1oqagkyskj30tw07fgll.jpg)
并配置构建时执行的命令

``` shell
cnpm i &&
rm -rf dist && 
npm run build && 
cd dist&& 
tar -zcvf dist.tar.gz *
```
点击保存, 这样就完成了 前端项目的搭建了

### 8.0 自动化部署 spring boot 项目
1. 新建任务, 创建maven 项目

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1oqfqoxjtj30tt0f2myo.jpg)

2. 填写项目描述, 配置参数构建

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1oqh6ay4kj30u20gojry.jpg)


3. 配置源码管理

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1oqhmd4y9j30u20h2aap.jpg)

4. 配置构建环境 ssh server

![](https://ws1.sinaimg.cn/large/0066iHyhly1g1oqj1d0srj30t60hgab1.jpg)

```
BUILD_ID=DONTKILLME
source /etc/profile;
cd /home/project/java/test&&

pid=`ps -ef | grep 'jar 名称' | grep -v grep | awk '{print $2}'`
if [ -n "$pid" ]
then
   kill -9 $pid
fi

 java -jar lk-truck-mendery-webfront-1.0.0-SNAPSHOT.jar > nohup.log &
```

> 注意点

1. `shell` 前需要添加 `BUILD_ID=DONTKILLME`, 不然在jenkins创建了java 进程之后,退出的时候, 会杀死之前创建过的工程
2. 需要在前面添加  `source /etc/profile`, 不然可能会出现 `java` 命令找不到的情况


> 到此 springboot的项目便搭建完成了

### 9.0 如果设置了密码之后, 又忘记了密码应该怎么办
1. 进入到jenkins的配置文件中
```
cd /var/lib/jenkins/users
vim config.xml
```
![](https://ws1.sinaimg.cn/large/0066iHyhly1g1p5gvkr8ij30nw0cndgr.jpg)
替换途中的值, 替换为
```
#jbcrypt:$2a$10$DdaWzN64JgUtLdvxWIflcuQu2fgrrMSAMabF5TSrGK5nXitqK9ZMS
```
替换后,`重启jenkins` 
```
systemctl restart jenkins
```
登录密码就变为 1111111 了

### 10.0 jenkins 配置全局变量

echo $PATH

系统设置 -> 全局设置-> 环境变量 添加key, value


### 11.0 修改jenkins 的日志打印级别

在`/etc/sysconfig`目录下新建文件 `jenkins.logging.properties`，写入一行代码`.level = INFO`。

编辑文件`jenkins`配置文件`/etc/sysconfig/jenkins`，加入一行代码`JENKINS_JAVA_OPTIONS="-Djava.util.logging.config.file=/etc/sysconfig/jenkins.logging.properties"`，重启`jenkins`即可。

### 12.0 jenkins 发布失败回退版本

设置, 增加构建参数
![image](9A5476092C564643B0902E0330D6BC6A)

```shell
case $Status in
	DEPLOY)
        echo ${projectName}
	    mv ${projectName}/target/${projectName}-1.0.0-SNAPSHOT.jar ${projectName}/target/${projectName}.jar
    	backup="${WORKSPACE}/back"
		
		if [ ! -d $backup ] ; then
			mkdir $backup -p
            pwd
		fi
		
		cp ${projectName}/target/${projectName}.jar back/${BUILD_NUMBER}.jar -f
        
        # 只保存5个备份文件
		lineCount=$(ls back/*jar | wc -l)
		echo $lineCount

		if [ "$lineCount" -gt 5 ] ; then
		  firstFile=$(ls back/*jar | sort -n | head -1)
		  rm -rf $firstFile
		fi
        
    	;;
    ROLLBACK)
    	echo "STATUS ${STATUS}"
    	echo "Version ${Version}"
		# 定义回滚文件
		rollbackFile="${WORKSPACE}/backup/${Version}.jar"
		
		 # 判断回滚文件是否存在
		if [ ! -f $rollbackFile ]; then
		  echo "Error: rollbackFile doesn't exist!"
		  # 返回异常状态
		  return -1
		else
		  echo "copy backup file..."
		  cp $rollbackFile ${WORKSPACE}/${projectName}/target/${projectName}.jar
		  # 因为 jenkins 会为回滚操作分配 builde_number, 但实际上我们没有构建项目, 此处创建软链指向恢复的节点
		  echo "SUCCESS!"
		fi
		
        ;;
    *)
    exit
    	;;
esac
```