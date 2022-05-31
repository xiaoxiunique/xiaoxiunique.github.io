(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1034:function(t,a,e){"use strict";e.r(a);var s=e(20),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#alibaba-cloud-toolkit"}},[t._v("Alibaba Cloud Toolkit")])]),s("li",[s("a",{attrs:{href:"#翻译插件"}},[t._v("翻译插件")])]),s("li",[s("a",{attrs:{href:"#mybatis-插件"}},[t._v("`mybatis` 插件")])]),s("li",[s("a",{attrs:{href:"#intellij-lombok-plugin"}},[t._v("IntelliJ Lombok plugin")])]),s("li",[s("a",{attrs:{href:"#genallsetter"}},[t._v("GenAllSetter")])]),s("li",[s("a",{attrs:{href:"#gendaocode"}},[t._v("GenDaoCode")])]),s("li",[s("a",{attrs:{href:"#codeglance"}},[t._v("CodeGlance")])]),s("li",[s("a",{attrs:{href:"#restfultoolkit"}},[t._v("RestfulToolkit")])]),s("li",[s("a",{attrs:{href:"#grep-console"}},[t._v("Grep Console")])]),s("li",[s("a",{attrs:{href:"#mybatis-log-plugin"}},[t._v("MyBatis Log Plugin")])]),s("li",[s("a",{attrs:{href:"#gsonformat"}},[t._v("GsonFormat")])]),s("li",[s("a",{attrs:{href:"#visualvm-launcher"}},[t._v("VisualVm Launcher")])]),s("li",[s("a",{attrs:{href:"#jclasslib-bytecode-viewer"}},[t._v("jclasslib bytecode viewer")])]),s("li",[s("a",{attrs:{href:"#codota"}},[t._v("Codota")])]),s("li",[s("a",{attrs:{href:"#auto-filling-java-call-arguments"}},[t._v("Auto filling Java call arguments")])]),s("li",[s("a",{attrs:{href:"#rainbow-brackets"}},[t._v("Rainbow Brackets")])]),s("li",[s("a",{attrs:{href:"#sequencediagram"}},[t._v("SequenceDiagram")])]),s("li",[s("a",{attrs:{href:"#java-stream-debugger"}},[t._v("Java Stream Debugger")])]),s("li",[s("a",{attrs:{href:"#ace-jump"}},[t._v("Ace Jump")])])])]),s("p"),t._v(" "),s("h3",{attrs:{id:"alibaba-cloud-toolkit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alibaba-cloud-toolkit"}},[t._v("#")]),t._v(" "),s("strong",[t._v("Alibaba Cloud Toolkit")])]),t._v(" "),s("p",[t._v("个人经常会有这样的需求, 每次自己更新完测试环境之后, 就需要 "),s("code",[t._v("maven")]),t._v(" 打包"),s("code",[t._v("clean install")]),t._v(", 然后"),s("code",[t._v("copy")]),t._v(" "),s("code",[t._v("jar")]),t._v(" 包, 利用"),s("code",[t._v("ftp")]),t._v("工具上传"),s("code",[t._v("jar")]),t._v("包到测试服务器, 然后"),s("code",[t._v("kill")]),t._v(" 服务, 在启动服务 "),s("code",[t._v("java -jar")]),t._v(" , 有时更新频繁 这就是一件非常麻烦的事")]),t._v(" "),s("p",[s("code",[t._v("Cloud Toolkit")]),t._v(" 是本地 "),s("code",[t._v("IDE")]),t._v(" 插件，帮助开发者更高效地开发、测试、诊断并部署应用。通过插件，您可以将本地应用一键部署到云端"),s("code",[t._v("（ECS、EDAS 和 Kubernetes 等")]),t._v("）和任意服务器；并且它还内置了 "),s("code",[t._v("Arthas")]),t._v(" 程序诊断、"),s("code",[t._v("Dubbo工具")]),t._v("、"),s("code",[t._v("Terminal Shell")]),t._v(" 终端和 "),s("code",[t._v("MySQL")]),t._v(" 执行器等工具。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.aliyun.com/product/cloudtoolkit",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网链接"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("简单的说, 安装了这个插件之后, "),s("code",[t._v("idea")]),t._v(" 就具备了一些"),s("code",[t._v("jenkins")]),t._v("的自动部署的功能")]),t._v(" "),s("p",[s("strong",[t._v("0x01")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("idea")]),t._v(" 工具中"),s("code",[t._v("Plugins")]),t._v(" 直接搜索安装")]),t._v(" "),s("p",[s("strong",[t._v("0x02")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("在安装完成之后, 在工具栏中就会出现阿里云的按钮, "),s("strong",[t._v("点击按钮")])]),t._v(" "),s("img",{staticStyle:{zoom:"100%"},attrs:{src:e(333)}}),t._v(" "),s("p",[t._v("然后点击 "),s("code",[t._v("Deploy to Host")]),t._v(", 然后下方就会出现添加主机页面"),s("br"),t._v(" "),s("img",{staticStyle:{zoom:"100%"},attrs:{src:e(334)}})]),t._v(" "),s("p",[t._v("点击 "),s("code",[t._v("Add Host")])]),t._v(" "),s("img",{staticStyle:{zoom:"100%"},attrs:{src:e(335)}}),t._v(" "),s("p",[t._v("以我自己的"),s("a",{attrs:{href:"www.atomblogs.com"}},[t._v("博客")]),t._v("为例, 输入完配置之后, 点击 "),s("code",[t._v("Test Connection")]),t._v(", 出现 "),s("code",[t._v("Succeeded")]),t._v(", 点击 "),s("code",[t._v("add")]),t._v(", 代表添加成功")]),t._v(" "),s("img",{staticStyle:{zoom:"100%"},attrs:{src:e(336)}}),t._v(" "),s("p",[t._v("然后再点击 "),s("code",[t._v("Deploy to Host")])]),t._v(" "),s("img",{staticStyle:{zoom:"100%"},attrs:{src:e(337)}}),t._v(" "),s("p",[t._v("点击"),s("code",[t._v("Run")]),t._v(", "),s("code",[t._v("idea")]),t._v(" 便会, 先使用"),s("code",[t._v("maven")]),t._v("打包, 后发送到服务器的指定位置")]),t._v(" "),s("img",{staticStyle:{zoom:"100%"},attrs:{src:e(338)}}),t._v(" "),s("img",{staticStyle:{zoom:"100%"},attrs:{src:e(339)}}),t._v(" "),s("p",[t._v("后续还可以 监听启动日志, 很简单, 就是 "),s("code",[t._v("Advanced")]),t._v(" 里面, 大家看看就知道了,"),s("br"),t._v("\n后续有时间再完善笔记吧")]),t._v(" "),s("h3",{attrs:{id:"翻译插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#翻译插件"}},[t._v("#")]),t._v(" "),s("strong",[t._v("翻译插件")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Translation\n")])])]),s("h3",{attrs:{id:"mybatis-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-插件"}},[t._v("#")]),t._v(" "),s("strong",[s("code",[t._v("mybatis")]),t._v(" 插件")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Free Mybatis plugin\n")])])]),s("blockquote",[s("p",[t._v("安装此插件后可以节约很多的开发时间, 在 "),s("code",[t._v("mapper")]),t._v(" 层接口可以直接进入 "),s("code",[t._v("xml")]),t._v("文件中")])]),t._v(" "),s("h3",{attrs:{id:"intellij-lombok-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intellij-lombok-plugin"}},[t._v("#")]),t._v(" IntelliJ Lombok plugin")]),t._v(" "),s("p",[t._v("Lombok pom.xml 文件配置")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.projectlombok"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("lombok"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.16.18"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("provided"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("生命很宝贵, 没有必要浪费在这个重复的工作上, 尤其是如果我们使用传统的 "),s("code",[t._v("get")]),t._v(" "),s("code",[t._v("set")]),t._v(" 方法, 在实体类进行变更的时候, 或多添加了列, 或减少了列, 又要重新生成对应的 "),s("code",[t._v("get set")]),t._v(" 这难道不就是浪费时间浪费生命吗?")])]),t._v(" "),s("p",[t._v("还不熟悉使用的可以看这篇文章")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5cf3edf7e51d454f71439c79",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 开发之 Lombok 必知必会"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"genallsetter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#genallsetter"}},[t._v("#")]),t._v(" GenAllSetter")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("Java")]),t._v("方法中, 根据 "),s("code",[t._v("new")]),t._v(" 关键词, 为"),s("code",[t._v("Java Bean")]),t._v(" 生成所有"),s("code",[t._v("Setter")]),t._v("方法。")]),t._v(" "),s("p",[t._v("按"),s("code",[t._v("GenAllSetter")]),t._v("键两次, 会为"),s("code",[t._v("Setter")]),t._v("方法生成默认值。")]),t._v(" "),s("h3",{attrs:{id:"gendaocode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gendaocode"}},[t._v("#")]),t._v(" GenDaoCode")]),t._v(" "),s("p",[t._v("一键生成 "),s("code",[t._v("dao")]),t._v(" "),s("code",[t._v("xml")]),t._v(" "),s("code",[t._v("service")])]),t._v(" "),s("h3",{attrs:{id:"codeglance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codeglance"}},[t._v("#")]),t._v(" CodeGlance")]),t._v(" "),s("p",[t._v("在右侧生成代码地图")]),t._v(" "),s("h3",{attrs:{id:"restfultoolkit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restfultoolkit"}},[t._v("#")]),t._v(" RestfulToolkit")]),t._v(" "),s("p",[t._v("一套 Restful 服务开发辅助工具")]),t._v(" "),s("ul",[s("li",[t._v("1.根据 URL 直接跳转到对应的方法定义 ( Ctrl \\ or Ctrl Alt N );")]),t._v(" "),s("li",[t._v("2.提供了一个 Services tree 的显示窗口;")]),t._v(" "),s("li",[t._v("3.一个简单的 http 请求工具;")]),t._v(" "),s("li",[t._v("4.在请求方法上添加了有用功能: 复制生成 URL;,复制方法参数...")]),t._v(" "),s("li",[t._v("5.其他功能: java 类上添加 Convert to JSON 功能，格式化 json 数据 ( Windows: Ctrl + Enter; Mac: Command + Enter )。")])]),t._v(" "),s("h3",{attrs:{id:"grep-console"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grep-console"}},[t._v("#")]),t._v(" Grep Console")]),t._v(" "),s("p",[t._v("高亮"),s("code",[t._v("log")]),t._v("不同级别日志，看日志的时候一目了然。")]),t._v(" "),s("h3",{attrs:{id:"mybatis-log-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-log-plugin"}},[t._v("#")]),t._v(" MyBatis Log Plugin")]),t._v(" "),s("p",[t._v("把 "),s("code",[t._v("Mybatis")]),t._v(" 输出的"),s("code",[t._v("sql")]),t._v("日志还原成完整的"),s("code",[t._v("sql")]),t._v("语句，看起来更直观。")]),t._v(" "),s("h3",{attrs:{id:"gsonformat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gsonformat"}},[t._v("#")]),t._v(" GsonFormat")]),t._v(" "),s("blockquote",[s("p",[t._v("快速的讲一个 "),s("code",[t._v("json")]),t._v("转换为一个实体 安装完插件后 "),s("code",[t._v("alt + s")]),t._v(" 放入正确的 "),s("code",[t._v("json")]),t._v("格式")])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"http://193.112.98.8/atomImg/plugins/gson_use.gif"}}),t._v(" "),s("h3",{attrs:{id:"visualvm-launcher"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visualvm-launcher"}},[t._v("#")]),t._v(" VisualVm Launcher")]),t._v(" "),s("p",[t._v("运行"),s("code",[t._v("java")]),t._v("程序的时候启动"),s("code",[t._v("visualvm")]),t._v("，方便查看"),s("code",[t._v("jvm")]),t._v("的情况 比如堆内存大小的分配")]),t._v(" "),s("p",[t._v("某个对象占用了多大的内存，"),s("code",[t._v("jvm")]),t._v("调优必备工具")]),t._v(" "),s("h3",{attrs:{id:"jclasslib-bytecode-viewer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jclasslib-bytecode-viewer"}},[t._v("#")]),t._v(" jclasslib bytecode viewer")]),t._v(" "),s("p",[t._v("一款可视化的字节码查看插件")]),t._v(" "),s("h3",{attrs:{id:"codota"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codota"}},[t._v("#")]),t._v(" Codota")]),t._v(" "),s("p",[t._v("支持智能代码自动提示，该功能可以增强 IDEA 的代码提示功能；")]),t._v(" "),s("p",[t._v("支持 JDK 和知名第三方库的函数的使用方法搜索，可以看到其他知名开源项目对该函数的用法。")]),t._v(" "),s("p",[t._v("当我们第一次使用某个类，对某个函数不够熟悉时，可以通过该插件搜索相关用法，快速模仿学习。")]),t._v(" "),s("h3",{attrs:{id:"auto-filling-java-call-arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-filling-java-call-arguments"}},[t._v("#")]),t._v(" Auto filling Java call arguments")]),t._v(" "),s("p",[t._v("开发中，我们通常会调用其它已经编写好的函数，调用后需要填充参数，但是绝大多数情况下，传入的变量名称和该函数的参数名一致，当参数较多时，手动单个填充参数非常浪费时间。")]),t._v(" "),s("p",[t._v("该插件就可以帮你解决这个问题。")]),t._v(" "),s("p",[t._v("安装完该插件以后，调用一个函数，使用 Alt+Enter 组合键，调出 “Auto fill call parameters” 自动使用该函数定义的参数名填充。")]),t._v(" "),s("h3",{attrs:{id:"rainbow-brackets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rainbow-brackets"}},[t._v("#")]),t._v(" Rainbow Brackets")]),t._v(" "),s("p",[t._v("由于很多人没有养成好的编码风格，没有随手 format 代码的习惯，甚至有些同事会写代码超过几百行，阅读起来将非常痛苦。")]),t._v(" "),s("p",[t._v("痛苦的原因之一就是找到上下文，由于括号太多，不确定当前代码行是否属于某个代码块，此时这个插件就会帮上大忙。")]),t._v(" "),s("h3",{attrs:{id:"sequencediagram"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sequencediagram"}},[t._v("#")]),t._v(" SequenceDiagram")]),t._v(" "),s("p",[t._v("SequenceDiagram 可以根据代码调用链路自动生成时序图，超级赞，超级推荐！")]),t._v(" "),s("p",[t._v("这对研究源码，梳理工作中的业务代码有极大的帮助，堪称神器。")]),t._v(" "),s("p",[t._v("安装完成后，在某个类的某个函数中，右键 --\x3e Sequence Diagaram 即可调出。")]),t._v(" "),s("h3",{attrs:{id:"java-stream-debugger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-stream-debugger"}},[t._v("#")]),t._v(" Java Stream Debugger")]),t._v(" "),s("p",[t._v("Stream 非常好用，可以灵活对数据进行操作，但是对很多刚接触的人来说，不好理解。")]),t._v(" "),s("p",[t._v("那么 Java Stream Debugger 这款神器的 IDEA 就可以帮到你。它可以将 Stream 的操作步骤可视化，非常有助于我们的学习。")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://note.youdao.com/noteshare?id=27b8552ba1bd2040235c5e308e7def1c&sub=D458C1C0BB3D402B982F47D03863066A",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件下载地址"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"ace-jump"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ace-jump"}},[t._v("#")]),t._v(" Ace Jump")])])}),[],!1,null,null,null);a.default=r.exports},333:function(t,a,e){t.exports=e.p+"assets/img/20190831235312.bc1469db.png"},334:function(t,a,e){t.exports=e.p+"assets/img/20190831235513.2bf0d037.png"},335:function(t,a,e){t.exports=e.p+"assets/img/20190831235536.874860e7.png"},336:function(t,a,e){t.exports=e.p+"assets/img/20190831235554.e315336f.png"},337:function(t,a,e){t.exports=e.p+"assets/img/20190831235602.3402063f.png"},338:function(t,a,e){t.exports=e.p+"assets/img/20190831235612.be55a56e.png"},339:function(t,a,e){t.exports=e.p+"assets/img/20190831235621.06e83ffb.png"}}]);