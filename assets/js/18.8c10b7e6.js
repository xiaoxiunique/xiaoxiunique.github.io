(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{218:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"FDC70FA27CA240A98F6446B63C200F1E",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"一、简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、简述"}},[t._v("#")]),t._v(" 一、简述")]),t._v(" "),a("p",[a("code",[t._v("MQTT（Message Queuing Telemetry Transport")]),t._v("，消息队列遥测传输协议），是一种基于发布/订阅"),a("code",[t._v("（publish/subscribe")]),t._v('）模式的"轻量级"通讯协议，该协议构建于 TCP/IP 协议上，由 IBM 在 1999 年发布。'),a("code",[t._v("MQTT")]),t._v("最大优点在于，可以以极少的代码和有限的带宽，为连接远程设备提供实时可靠的消息服务。作为一种低开销、低带宽占用的即时通讯协议，使其在物联网、小型设备、移动应用等方面有较广泛的应用。")]),t._v(" "),a("p",[a("code",[t._v("MQTT")]),t._v("是一个基于客户端-服务器的消息发布/订阅传输协议。"),a("code",[t._v("MQTT")]),t._v("协议是轻量、简单、开放和易于实现的，这些特点使它适用范围非常广泛。在很多情况下，包括受限的环境中，如：机器与机器"),a("code",[t._v("（M2M）")]),t._v("通信和物联网"),a("code",[t._v("（IoT）")]),t._v("。其在，通过卫星链路通信传感器、偶尔拨号的医疗设备、智能家居、及一些小型化设备中已广泛使用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"0C2736D90FF04F1F9B7F818088172F82",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"二、设计规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、设计规范"}},[t._v("#")]),t._v(" 二、设计规范")]),t._v(" "),a("p",[t._v("由于物联网的环境是非常特别的，所以 MQTT 遵循以下设计原则：")]),t._v(" "),a("p",[t._v("（1）精简，不添加可有可无的功能；")]),t._v(" "),a("p",[t._v("（2）发布/订阅（Pub/Sub）模式，方便消息在传感器之间传递；")]),t._v(" "),a("p",[t._v("（3）允许用户动态创建主题，零运维成本；")]),t._v(" "),a("p",[t._v("（4）把传输量降到最低以提高传输效率；")]),t._v(" "),a("p",[t._v("（5）把低带宽、高延迟、不稳定的网络等因素考虑在内；")]),t._v(" "),a("p",[t._v("（6）支持连续的会话控制；")]),t._v(" "),a("p",[t._v("（7）理解客户端计算能力可能很低；")]),t._v(" "),a("p",[t._v("（8）提供服务质量管理；")]),t._v(" "),a("p",[t._v("（9）假设数据不可知，不强求传输数据的类型与格式，保持灵活性。")]),t._v(" "),a("p",[a("img",{attrs:{src:"8B688A7D9CF44BE39CFDC18C1113D1D8",alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"三、主要特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、主要特性"}},[t._v("#")]),t._v(" 三、主要特性")]),t._v(" "),a("p",[a("code",[t._v("MQTT")]),t._v("协议工作在低带宽、不可靠的网络的远程传感器和控制设备通讯而设计的协议，它具有以下主要的几项特性：")]),t._v(" "),a("p",[t._v("（1）使用发布/订阅消息模式，提供一对多的消息发布，解除应用程序耦合。")]),t._v(" "),a("p",[t._v("这一点很类似于 XMPP，但是 MQTT 的信息冗余远小于 XMPP，,因为 XMPP 使用 XML 格式文本来传递数据。")]),t._v(" "),a("p",[t._v("（2）对负载内容屏蔽的消息传输。")]),t._v(" "),a("p",[t._v("（3）使用 TCP/IP 提供网络连接。")]),t._v(" "),a("p",[t._v("主流的 MQTT 是基于 TCP 连接进行数据推送的，但是同样有基于 UDP 的版本，叫做 MQTT-SN。这两种版本由于基于不同的连接方式，优缺点自然也就各有不同了。")]),t._v(" "),a("p",[t._v("（4）有三种消息发布服务质量：")]),t._v(" "),a("p",[t._v('"至多一次"，消息发布完全依赖底层 TCP/IP 网络。会发生消息丢失或重复。这一级别可用于如下情况，环境传感器数据，丢失一次读记录无所谓，因为不久后还会有第二次发送。这一种方式主要普通 APP 的推送，倘若你的智能设备在消息推送时未联网，推送过去没收到，再次联网也就收不到了。')]),t._v(" "),a("p",[t._v('"至少一次"，确保消息到达，但消息重复可能会发生。')]),t._v(" "),a("p",[t._v('"只有一次"，确保消息到达一次。在一些要求比较严格的计费系统中，可以使用此级别。在计费系统中，消息重复或丢失会导致不正确的结果。这种最高质量的消息发布服务还可以用于即时通讯类的 APP 的推送，确保用户收到且只会收到一次。')]),t._v(" "),a("p",[t._v("（5）小型传输，开销很小（固定长度的头部是 2 字节），协议交换最小化，以降低网络流量。")]),t._v(" "),a("p",[t._v('这就是为什么在介绍里说它非常适合"在物联网领域，传感器与服务器的通信，信息的收集"，要知道嵌入式设备的运算能力和带宽都相对薄弱，使用这种协议来传递消息再适合不过了。')]),t._v(" "),a("p",[t._v("（6）使用 Last Will 和 Testament 特性通知有关各方客户端异常中断的机制。")]),t._v(" "),a("p",[t._v("Last Will：即遗言机制，用于通知同一主题下的其他设备发送遗言的设备已经断开了连接。")]),t._v(" "),a("p",[t._v("Testament：遗嘱机制，功能类似于 Last Will。")]),t._v(" "),a("h3",{attrs:{id:"四、mqtt-协议原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、mqtt-协议原理"}},[t._v("#")]),t._v(" 四、MQTT 协议原理")]),t._v(" "),a("h4",{attrs:{id:"_4-1-mqtt-协议实现方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-mqtt-协议实现方式"}},[t._v("#")]),t._v(" 4.1 MQTT 协议实现方式")]),t._v(" "),a("p",[t._v("实现 MQTT 协议需要客户端和服务器端通讯完成，在通讯过程中，MQTT 协议中有三种身份：发布者（Publish）、代理（Broker）（服务器）、订阅者（Subscribe）。其中，消息的发布者和订阅者都是客户端，消息代理是服务器，消息发布者可以同时是订阅者。")]),t._v(" "),a("p",[t._v("MQTT 传输的消息分为：主题（Topic）和负载（payload）两部分：")]),t._v(" "),a("p",[t._v("（1）Topic，可以理解为消息的类型，订阅者订阅（Subscribe）后，就会收到该主题的消息内容（payload）；")]),t._v(" "),a("p",[t._v("（2）payload，可以理解为消息的内容，是指订阅者具体要使用的内容。")]),t._v(" "),a("h4",{attrs:{id:"_4-2-网络传输与应用消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-网络传输与应用消息"}},[t._v("#")]),t._v(" 4.2 网络传输与应用消息")]),t._v(" "),a("p",[t._v("MQTT 会构建底层网络传输：它将建立客户端到服务器的连接，提供两者之间的一个有序的、无损的、基于字节流的双向传输。")]),t._v(" "),a("p",[t._v("当应用数据通过 MQTT 网络发送时，MQTT 会把与之相关的服务质量（QoS）和主题名（Topic）相关连。")]),t._v(" "),a("h4",{attrs:{id:"_4-3-mqtt-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-mqtt-客户端"}},[t._v("#")]),t._v(" 4.3 MQTT 客户端")]),t._v(" "),a("p",[t._v("一个使用 MQTT 协议的应用程序或者设备，它总是建立到服务器的网络连接。客户端可以：")]),t._v(" "),a("p",[t._v("（1）发布其他客户端可能会订阅的信息；")]),t._v(" "),a("p",[t._v("（2）订阅其它客户端发布的消息；")]),t._v(" "),a("p",[t._v("（3）退订或删除应用程序的消息；")]),t._v(" "),a("p",[t._v("（4）断开与服务器连接。")]),t._v(" "),a("h4",{attrs:{id:"_4-4-mqtt-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-mqtt-服务器"}},[t._v("#")]),t._v(" 4.4 MQTT 服务器")]),t._v(" "),a("p",[t._v('MQTT 服务器以称为"消息代理"（Broker），可以是一个应用程序或一台设备。它是位于消息发布者和订阅者之间，它可以：')]),t._v(" "),a("p",[t._v("（1）接受来自客户的网络连接；")]),t._v(" "),a("p",[t._v("（2）接受客户发布的应用信息；")]),t._v(" "),a("p",[t._v("（3）处理来自客户端的订阅和退订请求；")]),t._v(" "),a("p",[t._v("（4）向订阅的客户转发应用程序消息。")]),t._v(" "),a("h4",{attrs:{id:"_4-5-mqtt-协议中的订阅、主题、会话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-mqtt-协议中的订阅、主题、会话"}},[t._v("#")]),t._v(" 4.5 MQTT 协议中的订阅、主题、会话")]),t._v(" "),a("p",[t._v("一、订阅（Subscription）")]),t._v(" "),a("p",[t._v("订阅包含主题筛选器（Topic Filter）和最大服务质量（QoS）。订阅会与一个会话（Session）关联。一个会话可以包含多个订阅。每一个会话中的每个订阅都有一个不同的主题筛选器。")]),t._v(" "),a("p",[t._v("二、会话（Session）")]),t._v(" "),a("p",[t._v("每个客户端与服务器建立连接后就是一个会话，客户端和服务器之间有状态交互。会话存在于一个网络之间，也可能在客户端和服务器之间跨越多个连续的网络连接。")]),t._v(" "),a("p",[t._v("三、主题名（Topic Name）")]),t._v(" "),a("p",[t._v("连接到一个应用程序消息的标签，该标签与服务器的订阅相匹配。服务器会将消息发送给订阅所匹配标签的每个客户端。")]),t._v(" "),a("p",[t._v("四、主题筛选器（Topic Filter）")]),t._v(" "),a("p",[t._v("一个对主题名通配符筛选器，在订阅表达式中使用，表示订阅所匹配到的多个主题。")]),t._v(" "),a("p",[t._v("五、负载（Payload）")]),t._v(" "),a("p",[t._v("消息订阅者所具体接收的内容。")]),t._v(" "),a("h4",{attrs:{id:"_4-6-mqtt-协议中的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-mqtt-协议中的方法"}},[t._v("#")]),t._v(" 4.6 MQTT 协议中的方法")]),t._v(" "),a("p",[t._v("MQTT 协议中定义了一些方法（也被称为动作），来于表示对确定资源所进行操作。这个资源可以代表预先存在的数据或动态生成数据，这取决于服务器的实现。通常来说，资源指服务器上的文件或输出。主要方法有：")]),t._v(" "),a("p",[t._v("（1）Connect。等待与服务器建立连接。")]),t._v(" "),a("p",[t._v("（2）Disconnect。等待 MQTT 客户端完成所做的工作，并与服务器断开 TCP/IP 会话。")]),t._v(" "),a("p",[t._v("（3）Subscribe。等待完成订阅。")]),t._v(" "),a("p",[t._v("（4）UnSubscribe。等待服务器取消客户端的一个或多个 topics 订阅。")]),t._v(" "),a("p",[t._v("（5）Publish。MQTT 客户端发送消息请求，发送完成后返回应用程序线程。")]),t._v(" "),a("h2",{attrs:{id:"创建-mqtt-user-相关表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-mqtt-user-相关表"}},[t._v("#")]),t._v(" 创建 mqtt user 相关表")]),t._v(" "),a("h3",{attrs:{id:"acl-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acl-配置"}},[t._v("#")]),t._v(" ACL 配置")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("mqtt_acl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("allow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0: deny, 1: allow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("ipaddr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'IpAddress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("clientid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ClientId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1: subscribe, 2: publish, 3: pubsub'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("topic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Topic Filter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("blockquote",[a("p",[t._v("解释\nallow：禁止（0）；或则允许（1）。")])]),t._v(" "),a("p",[t._v("ipaddr：设置 IP 地址。")]),t._v(" "),a("p",[t._v("username：连接客户端的用户名，此处的值如果设置为 $all 表示该规则适用于所有的用户。")]),t._v(" "),a("p",[t._v("clientid：连接客户端的 clientId。")]),t._v(" "),a("p",[t._v("access：允许的操作。订阅（1）；发布（2）；订阅和发布都可以（3）。")]),t._v(" "),a("p",[t._v("topic：控制的主题名。主题可以使用通配符；并且可以在主题中加入占位符 %c , 来匹配带客户端 ID 的主题，例如 /smarthome/$clientId/temperature 。")]),t._v(" "),a("h3",{attrs:{id:"修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[t._v("#")]),t._v(" 修改配置")]),t._v(" "),a("p",[t._v("打开配置文件 "),a("code",[t._v("/etc/emqx/emqx.conf")]),t._v(" ，将 ACL 的规则匹配变为：不匹配则不允许。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mqtt.acl_nomatch = deny\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);