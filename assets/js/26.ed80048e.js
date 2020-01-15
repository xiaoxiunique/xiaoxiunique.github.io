(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{226:function(e,v,_){"use strict";_.r(v);var t=_(0),o=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h3",{attrs:{id:"requestparam"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#requestparam"}},[e._v("#")]),e._v(" @RequestParam")]),e._v(" "),_("p",[e._v("用来处理"),_("code",[e._v("Content-Type")]),e._v(": 为 "),_("code",[e._v("application/x-www-form-urlencoded")]),e._v("编码的内容。（"),_("code",[e._v("Http")]),e._v("协议中，如果不指定"),_("code",[e._v("Content-Type")]),e._v("，则默认传递的参数就是"),_("code",[e._v("application/x-www-form-urlencoded")]),e._v("类型）")]),e._v(" "),_("p",[_("code",[e._v("RequestParam")]),e._v("可以接受简单类型的属性，也可以接受对象类型。\n实质是将"),_("code",[e._v("Request.getParameter()")]),e._v(" 中的"),_("code",[e._v("Key-Value")]),e._v("参数"),_("code",[e._v("Map")]),e._v("利用"),_("code",[e._v("Spring")]),e._v("的转化机制"),_("code",[e._v("ConversionService")]),e._v("配置，转化成参数接收对象或字段。")]),e._v(" "),_("blockquote",[_("p",[e._v("tip")])]),e._v(" "),_("p",[e._v("在"),_("code",[e._v("Content-Type: application/x-www-form-urlencoded")]),e._v("的请求中，\n"),_("code",[e._v("get")]),e._v(" 方式中"),_("code",[e._v("queryString")]),e._v("的值，和"),_("code",[e._v("post")]),e._v("方式中 "),_("code",[e._v("body data")]),e._v("的值都会被"),_("code",[e._v("Servlet")]),e._v("接受到并转化到"),_("code",[e._v("Request.getParameter()")]),e._v("参数集中，所以"),_("code",[e._v("@RequestParam")]),e._v("可以获取的到。")]),e._v(" "),_("h3",{attrs:{id:"requestbody"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#requestbody"}},[e._v("#")]),e._v(" @RequestBody")]),e._v(" "),_("p",[e._v("处理"),_("code",[e._v("HttpEntity")]),e._v("传递过来的数据，一般用来处理非"),_("code",[e._v("Content-Type: application/x-www-form-urlencoded")]),e._v("编码格式的数据。")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("GET")]),e._v("请求中，因为没有"),_("code",[e._v("HttpEntity")]),e._v("，所以"),_("code",[e._v("@RequestBody")]),e._v("并不适用。")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("POST")]),e._v("请求中，通过"),_("code",[e._v("HttpEntity")]),e._v("传递的参数，必须要在请求头中声明数据的类型"),_("code",[e._v("Content-Type")]),e._v("，"),_("code",[e._v("SpringMVC")]),e._v("通过使用"),_("code",[e._v("HandlerAdapter")]),e._v(" 配置的"),_("code",[e._v("HttpMessageConverters")]),e._v("来解析"),_("code",[e._v("HttpEntity")]),e._v("中的数据，然后绑定到相应的"),_("code",[e._v("bean")]),e._v("上。")])])]),e._v(" "),_("h3",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),_("p",[e._v("在"),_("code",[e._v("GET")]),e._v("请求中，不能使用"),_("code",[e._v("@RequestBody")]),e._v("。")]),e._v(" "),_("p",[e._v("在"),_("code",[e._v("POST")]),e._v("请求，可以使用"),_("code",[e._v("@RequestBody")]),e._v("和"),_("code",[e._v("@RequestParam")]),e._v("，但是如果使用"),_("code",[e._v("@RequestBody")]),e._v("，对于参数转化的配置必须统一。")]),e._v(" "),_("p",[e._v("举个例子，在"),_("code",[e._v("SpringMVC")]),e._v("配置了"),_("code",[e._v("HttpMessageConverters")]),e._v("处理栈中，指定 json 转化的格式，如"),_("code",[e._v("Date")]),e._v("转成"),_("code",[e._v("yyyy-MM-dd")]),e._v(",则参数接收对象包含的字段如果是 Date 类型，就只能让客户端传递年月日的格式，不能传时分秒。因为不同的接口，它的参数可能对时间参数有不同的格式要求，所以这样做会让客户端调用同事对参数的格式有点困惑，所以说扩展性不高。")]),e._v(" "),_("p",[e._v("如果使用"),_("code",[e._v("@RequestParam")]),e._v("来接受参数，可以在接受参数的"),_("code",[e._v("model")]),e._v("中设置"),_("code",[e._v("@DateFormat")]),e._v("指定所需要接受时间参数的格式。")]),e._v(" "),_("p",[e._v("另外，使用"),_("code",[e._v("@RequestBody")]),e._v("接受的参数是不会被"),_("code",[e._v("Servlet")]),e._v("转化统一放在"),_("code",[e._v("request")]),e._v("对象的"),_("code",[e._v("Param")]),e._v("参数集中，"),_("code",[e._v("@RequestParam")]),e._v("是可以的。")]),e._v(" "),_("p",[e._v("综上所述，一般情况下，推荐使用"),_("code",[e._v("@RequestParam")]),e._v("注解来接受"),_("code",[e._v("Http")]),e._v("请求参数。")]),e._v(" "),_("p",[_("a",{attrs:{href:"https://blog.csdn.net/xinluke/article/details/52710706",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=o.exports}}]);