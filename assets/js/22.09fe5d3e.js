(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{222:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"nginx-日志分析工具-goaccess"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-日志分析工具-goaccess"}},[t._v("#")]),t._v(" Nginx 日志分析工具 goaccess")]),t._v(" "),s("blockquote",[s("p",[t._v("开源项目 "),s("a",{attrs:{href:"http://github.com/xiaoxiunique/tool-tips",target:"_blank",rel:"noopener noreferrer"}},[t._v("tool-tips"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("让你深入了解 idea 使用, 提升开发效率")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200107141107.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"goaccess-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goaccess-是什么"}},[t._v("#")]),t._v(" goaccess 是什么?")]),t._v(" "),s("p",[s("strong",[t._v("GoAccess")]),t._v("是一个开源的实时"),s("strong",[t._v("web")]),t._v("日志分析器和交互式查看器，可以在*nix系统的终端上运行，也可以通过浏览器运行。")]),t._v(" "),s("p",[t._v("它为需要动态可视化服务器报告的系统管理员提供了快速而有价值的"),s("strong",[t._v("HTTP")]),t._v("统计信息。")]),t._v(" "),s("p",[s("a",{attrs:{href:"goaccess.io"}},[t._v("goaccess 官网")])]),t._v(" "),s("p",[t._v("简单讲, 就是 "),s("code",[t._v("goaccess")]),t._v(" 可以将 "),s("code",[t._v("nginx")]),t._v(" 的访问日志, 转换为一个可视化的 "),s("code",[t._v("html")]),t._v("界面")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200107142757.png",alt:""}})]),t._v(" "),s("p",[t._v("支持离线分析和在线分析, 在线可以实时将网站的访问情况, 通过 "),s("code",[t._v("websocket")]),t._v(" 推送到页面中, 实时查看网站的访问情况")]),t._v(" "),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[s("strong",[t._v("docker 安装")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("docker pull allinurl/goaccess\n")])])]),s("p",[s("strong",[t._v("离线分析")])]),t._v(" "),s("p",[t._v("准备一个"),s("code",[t._v("nginx")]),t._v("的日志访问文件 "),s("code",[t._v("access.log")]),t._v(", 可以通过 "),s("code",[t._v("nginx -V")]),t._v(" 查看日志存放位置")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" access.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" docker run --rm -i -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("LANG")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("en allinurl/goaccess -a -o html --log-format COMBINED - "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" report.html\n")])])]),s("p",[t._v("生成后的 "),s("code",[t._v("html")]),t._v("文件就在当前文件夹中")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200107143536.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"统计的信息包括"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统计的信息包括"}},[t._v("#")]),t._v(" 统计的信息包括")]),t._v(" "),s("p",[s("strong",[t._v("每日独立访客")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200107150907.png",alt:""}})]),t._v(" "),s("p",[t._v("Api 调用统计")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200107151049.png",alt:""}})]),t._v(" "),s("p",[t._v("静态资源统计")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/xiaoxiunique/picgo-image/raw/master/20200107151016.png",alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);