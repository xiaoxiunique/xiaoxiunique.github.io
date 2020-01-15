编辑 `crontab`
```
crontab -e
```

查看 `crontab`列表
```
crontab -l
```

追加内容
```
>>
```

覆盖内容
```
>
```

建立软连接
```
ln -s /usr/local/home/node/node-v10.15.3-linux-x64/bin/node node
```


获取服务器各个状态下的连接数
```
netstat -n | awk '/^tcp/{++S[$NF]}END{for (a in S) print a, S[a]}'
```

awk 命令
```
awk -F ',' '{print $1, $2}'
```

![](https://raw.githubusercontent.com/xiaoxiunique/Web-Tip/master/20190607234714.png)


**sed**
![](https://raw.githubusercontent.com/xiaoxiunique/Web-Tip/master/20190607235457.png)

**java 如何加载.class字节码文件**
![](https://raw.githubusercontent.com/xiaoxiunique/Web-Tip/master/20190608002306.png)


自动启动脚本
```

#/bin/bash

# 门店服务主目录
menderyWorkspace="/var/lib/jenkins/workspace/lk-mendery-truck/lk-truck-mendery-webfront/target"

# 进入主目录
cd $menderyWorkspace

# 打印当前当前文件夹路径
echo $(pwd)

# 查找文件
```shell
find ~ -iname "wenjian"
```

```shell
# 记录错误信息
function handleErr() {
   # 判断文件夹是否存在
   if [ ! -d "errorLog" ]; then
        # 文件不存在 创建文件
        mkdir errorLog
   fi

   # 判断日志文件是否存在
   if [ ! -x "nohup.log" ]; then
        # 日志文件不存在 直接返回
        touch nohup.log
   fi

   # 拷贝最近的错误日志
   tail -2000 nohup.log > ./errorLog/`date +%Y%m%d`.log

   echo "record message for error"
}

# 判断现在主进程是否在运行
cur=$(ps -ef | grep "lk-truck-mendery-webfront" | grep -v "grep")
echo cur
# 如果现在进程存活, 不进行处理
if [ "$cur" ]; then
    echo "the service is alive"
else
    handleErr
    echo "The service was shutdown!"
    echo "Starting service..."
    java -Dspring.profile.active=pro -jar lk-truck-mendery-webfront-1.0.0-SNAPSHOT.jar > nohup.log &
```
