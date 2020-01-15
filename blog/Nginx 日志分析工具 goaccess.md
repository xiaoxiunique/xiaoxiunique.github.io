## Nginx 日志分析工具 goaccess

> 开源项目 [tool-tips](http://github.com/xiaoxiunique/tool-tips)
>
> 让你深入了解 idea 使用, 提升开发效率

![](https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200107141107.png)

### goaccess 是什么?

**GoAccess**是一个开源的实时**web**日志分析器和交互式查看器，可以在*nix系统的终端上运行，也可以通过浏览器运行。

它为需要动态可视化服务器报告的系统管理员提供了快速而有价值的**HTTP**统计信息。



[goaccess 官网](goaccess.io)



简单讲, 就是 `goaccess` 可以将 `nginx` 的访问日志, 转换为一个可视化的 `html `界面

![](https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200107142757.png)

支持离线分析和在线分析, 在线可以实时将网站的访问情况, 通过 `websocket` 推送到页面中, 实时查看网站的访问情况

### 使用

**docker 安装**

```
docker pull allinurl/goaccess
```

**离线分析**

准备一个`nginx`的日志访问文件 `access.log`, 可以通过 `nginx -V` 查看日志存放位置

```shell
cat access.log | docker run --rm -i -e LANG=en allinurl/goaccess -a -o html --log-format COMBINED - > report.html
```

生成后的 `html `文件就在当前文件夹中

![](https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200107143536.png)

### 统计的信息包括

**每日独立访客**

![](https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200107150907.png)

Api 调用统计

![](https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200107151049.png)

静态资源统计

![](https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200107151016.png)