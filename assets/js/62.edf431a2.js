(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1004:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h5",{attrs:{id:"避免冗长的-if-else-switch-分支判断代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#避免冗长的-if-else-switch-分支判断代码"}},[t._v("#")]),t._v(" 避免冗长的 if-else/switch 分支判断代码")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("策略模式算是接触的最多的一个模式，在 【"),n("strong",[t._v("Head First 设计模式")]),t._v("】 一书中讲解的第一个设计模式便是策略模式，不过自己以前的学习中一直有一些问题，虽然策略模式大家耳熟能详的是用定义好的算法簇解决分支问题，但是就我自己看来光用策略模式是解决不了这些问题的，而是需要和其他策略模式配合才可以。")])]),t._v(" "),n("h5",{attrs:{id:"策略模式的定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#策略模式的定义"}},[t._v("#")]),t._v(" 策略模式的定义")]),t._v(" "),n("p",[t._v("定义一族算法类，将每个算法分别封装起来，让它们可以互相替换。策略模式可以使算法的变化独立于使用它们的客户端（这里的客户端代指使用算法的代码）。")]),t._v(" "),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(555),alt:"img"}}),t._v(" "),n("p",[t._v("听了上面的定义，我也不是很懂。个人的理解是针对某类问题我们会制定很多的解决方案（基于接口实现），然后在使用的时候通过多态的特性可以便捷的使用。")]),t._v(" "),n("p",[t._v("策略类的定义比较简单，包含一个策略接口和一组实现这个接口的策略类。因为所有的策略类都实现相同的接口，所以，客户端代码基于接口而非实现编程，可以灵活地替换不同的策略。")]),t._v(" "),n("p",[t._v("示例代码如下所示：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Strategy")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("algorithmInterface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteStrategyA")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Strategy")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("algorithmInterface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//具体的算法...")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteStrategyB")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Strategy")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("algorithmInterface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//具体的算法...")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("上面的代码就相当于自己针对某类问题制定了解决方案 "),n("code",[t._v("ConcreteStrategyA, ConcreteStrategyB")]),t._v("。")]),t._v(" "),n("h5",{attrs:{id:"策略的创建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#策略的创建"}},[t._v("#")]),t._v(" 策略的创建")]),t._v(" "),n("p",[t._v("因为策略模式会包含一组策略，在使用它们的时候，一般会通过类型（type）来判断创建哪个策略来使用。为了封装创建逻辑，我们需要对客户端代码屏蔽创建细节。我们可以把根据 type 创建策略的逻辑抽离出来，放到"),n("strong",[t._v("工厂类")]),t._v("中。")]),t._v(" "),n("p",[t._v("示例代码如下所示：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StrategyFactory")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Strategy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" strategies "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    strategies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteStrategyA")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    strategies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteStrategyB")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Strategy")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStrategy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalArgumentException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type should not be empty."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" strategies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h5",{attrs:{id:"策略模式的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#策略模式的使用"}},[t._v("#")]),t._v(" 策略模式的使用")]),t._v(" "),n("p",[t._v("使用策略模式创建算法簇，将算法簇根据类型添加进策略工厂中，工厂中以 Hash 表进行存储，Hash 表中存储的 Key， 就是以前 if / else 逻辑中的条件。")]),t._v(" "),n("p",[t._v("没有引入策略模式的代码")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderService")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("discount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Order")]),t._v(" order"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" discount "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderType")]),t._v(" type "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" order"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NORMAL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 普通订单")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...省略折扣计算算法代码")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GROUPON"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 团购订单")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...省略折扣计算算法代码")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PROMOTION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 促销订单")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...省略折扣计算算法代码")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" discount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("引入策略模式后")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 策略的定义")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountStrategy")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("calDiscount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Order")]),t._v(" order"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 省略NormalDiscountStrategy、GrouponDiscountStrategy、PromotionDiscountStrategy类代码...")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 策略的创建")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountStrategyFactory")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountStrategy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" strategies "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    strategies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NORMAL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NormalDiscountStrategy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    strategies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GROUPON"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GrouponDiscountStrategy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    strategies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PROMOTION"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PromotionDiscountStrategy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountStrategy")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDiscountStrategy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderType")]),t._v(" type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" strategies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 策略的使用")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderService")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("discount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Order")]),t._v(" order"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderType")]),t._v(" type "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" order"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountStrategy")]),t._v(" discountStrategy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscountStrategyFactory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDiscountStrategy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" discountStrategy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("calDiscount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("order"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("img",{staticStyle:{zoom:"80%"},attrs:{src:a(556),alt:"img"}}),t._v(" "),n("p",[t._v("实际上讲到这，还没怎么讲清楚，下次再整理吧。")])])}),[],!1,null,null,null);s.default=e.exports},555:function(t,s,a){t.exports=a.p+"assets/img/001FECE9.8b059757.png"},556:function(t,s){t.exports="data:image/jpeg;base64,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"}}]);