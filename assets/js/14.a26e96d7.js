(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{511:function(t,e,a){t.exports=a.p+"assets/img/image-20200509152716378.d92509af.png"},512:function(t,e,a){t.exports=a.p+"assets/img/image-20200509152818874.39c99244.png"},513:function(t,e,a){t.exports=a.p+"assets/img/image-20200509152942631.3b84ec38.png"},514:function(t,e,a){t.exports=a.p+"assets/img/image-20200509153037582.268378c8.png"},515:function(t,e,a){t.exports=a.p+"assets/img/image-20200509153130098.2f6a77b5.png"},516:function(t,e,a){t.exports=a.p+"assets/img/image-20200509153230976.e0897f04.png"},517:function(t,e,a){t.exports=a.p+"assets/img/image-20200509153345451.a2f97133.png"},963:function(t,e,a){"use strict";a.r(e);var s=a(20),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"使用git-rebase合并多次commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用git-rebase合并多次commit"}},[t._v("#")]),t._v(" 使用git rebase合并多次commit")]),t._v(" "),s("h3",{attrs:{id:"_1-背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[t._v("#")]),t._v(" 1. 背景")]),t._v(" "),s("p",[t._v("一个repo通常是由一个 Team 中的多个人共同维护，如果需要增加新 Feature，那么就是一个 Feature 分支了。由于开发中各种修改，本 Feature 分支多次 commit 。最后提交 master 后，会看到乱七八糟的所有增量修改历史。其实对别人来说，我们的改动应该就是增加或者删除，给别人看开发过程的增量反而太乱。于是我们可以将 feature 分支的提交合并后然后再merge到主干这样看起来就清爽多了。")]),t._v(" "),s("p",[t._v("记得知乎上有个帖子提问为啥vue的作者尤大大在开发vue的时候，提交历史能做到如此清爽。"),s("a",{attrs:{href:"https://www.zhihu.com/question/61283395",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git commits历史是如何做到如此清爽的? - 知乎"),s("OutboundLink")],1)]),t._v(" "),s("img",{staticStyle:{zoom:"101%"},attrs:{src:a(511),alt:"image-20200509152716378"}}),t._v(" "),s("h3",{attrs:{id:"_2-rebase简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-rebase简介"}},[t._v("#")]),t._v(" 2. rebase简介")]),t._v(" "),s("p",[t._v("rebase 的作用简要概括为：可以对某一段线性提交历史进行编辑、删除、复制、粘贴；")]),t._v(" "),s("p",[t._v("因此，合理使用 rebase 命令可以使我们的提交历史干净、简洁！")]),t._v(" "),s("p",[t._v("但是需要注意的是：")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("不要通过 rebase 对任何已经提交到公共仓库中的 commit 进行修改（你自己一个人玩的分支除外）")])]),t._v(" "),s("h3",{attrs:{id:"_3-反面例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-反面例子"}},[t._v("#")]),t._v(" 3. 反面例子")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("新建一个repo "),s("code",[t._v("rebase-test")]),t._v("；")])]),t._v(" "),s("li",[s("p",[t._v("新建开发分支"),s("code",[t._v("dev")]),t._v("；在开发分支是"),s("code",[t._v("commit")]),t._v("了三次然后"),s("code",[t._v("merge")]),t._v("到"),s("code",[t._v("master")]),t._v("分支；")])]),t._v(" "),s("li",[s("p",[t._v("然后"),s("code",[t._v("git log")]),t._v("或者"),s("code",[t._v("git log --oneline")]),t._v("；")])]),t._v(" "),s("li",[s("p",[t._v("可以发现"),s("code",[t._v("dev")]),t._v("分支上的每次"),s("code",[t._v("commit")]),t._v("都体现到了"),s("code",[t._v("master")]),t._v("上")])])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("fb28c8d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" master, origin/master, origin/dev, origin/HEAD, dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" fix: 第三次提交\n47971f6 fix: 第二次提交\nd2cf1f9 fix: 第一次提交\n26bac61 Initial commit\n")])])]),s("blockquote",[s("p",[t._v("如果用"),s("code",[t._v("git log")]),t._v("可以按"),s("code",[t._v("s")]),t._v("向下翻"),s("code",[t._v("log")])]),t._v(" "),s("p",[s("code",[t._v("git log --oneline")]),t._v(" 可以一行展现")])]),t._v(" "),s("h3",{attrs:{id:"_4-具体操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-具体操作"}},[t._v("#")]),t._v(" 4. 具体操作")]),t._v(" "),s("p",[t._v("当我们在本地仓库中提交了多次，在我们把本地提交push到公共仓库中之前，为了让提交记录更简洁明了，我们希望把如下分支B、C、D三个提交记录合并为一个完整的提交，然后再push到公共仓库。")]),t._v(" "),s("img",{staticStyle:{zoom:"101%"},attrs:{src:a(512),alt:"image-20200509152818874"}}),t._v(" "),s("p",[t._v("这里我们使用命令:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("git rebase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("startpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("endpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),s("p",[t._v("其中"),s("code",[t._v("-i")]),t._v("的意思是"),s("code",[t._v("--interactive")]),t._v("，即弹出交互式的界面让用户编辑完成合并操作，"),s("code",[t._v("[startpoint] [endpoint]")]),t._v("则指定了一个编辑区间，如果不指定"),s("code",[t._v("[endpoint]")]),t._v("，则该区间的终点默认是当前分支HEAD所指向的commit(注：该区间指定的是一个前开后闭的区间)。"),s("br"),t._v("\n在查看到了log日志后，我们运行以下命令：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git rebase -i 36224db\n")])])]),s("p",[t._v("或者")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git rebase -i HEAD~3 \n\n")])])]),s("p",[t._v("然后我们会看到如下界面:")]),t._v(" "),s("img",{staticStyle:{zoom:"101%"},attrs:{src:a(513),alt:"image-20200509152942631"}}),t._v(" "),s("p",[t._v("上面未被注释的部分列出的是我们本次rebase操作包含的所有提交，下面注释部分是git为我们提供的命令说明。每一个commit id 前面的pick表示指令类型，git 为我们提供了以下几个命令:")]),t._v(" "),s("blockquote",[s("p",[t._v("pick：保留该commit（缩写:p）")]),t._v(" "),s("p",[t._v("reword：保留该commit，但我需要修改该commit的注释（缩写:r）")]),t._v(" "),s("p",[t._v("edit：保留该commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）")]),t._v(" "),s("p",[t._v("squash：将该commit和前一个commit合并（缩写:s）")]),t._v(" "),s("p",[t._v("fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）")]),t._v(" "),s("p",[t._v("exec：执行shell命令（缩写:x）")]),t._v(" "),s("p",[t._v("drop：我要丢弃该commit（缩写:d）")])]),t._v(" "),s("p",[t._v("根据我们的需求，我们将commit内容编辑如下:")]),t._v(" "),s("blockquote",[s("p",[t._v("pick d2cf1f9 fix: 第一次提交")]),t._v(" "),s("p",[t._v("s 47971f6 fix: 第二次提交")]),t._v(" "),s("p",[t._v("s fb28c8d fix: 第三次提交")])]),t._v(" "),s("p",[t._v("上面的意思就是把第二次、第三次提交都合并到第一次提交上")]),t._v(" "),s("p",[t._v("然后"),s("code",[t._v("wq")]),t._v("保存退出后是注释修改界面:")]),t._v(" "),s("img",{staticStyle:{zoom:"101%"},attrs:{src:a(514),alt:"image-20200509153037582"}}),t._v(" "),s("blockquote",[s("p",[t._v("可以再浏览态 按下两个dd可以删除一行")])]),t._v(" "),s("p",[t._v("最终的编辑效果如下："),s("br"),t._v(" "),s("img",{staticStyle:{zoom:"150%"},attrs:{src:a(515),alt:"image-20200509153130098"}})]),t._v(" "),s("p",[t._v("编辑完保存即可完成commit的合并了：")]),t._v(" "),s("img",{staticStyle:{zoom:"101%"},attrs:{src:a(516),alt:"image-20200509153230976"}}),t._v(" "),s("p",[t._v("最后查看"),s("code",[t._v("log")]),t._v("可以发下提交合并了")]),t._v(" "),s("img",{staticStyle:{zoom:"101%"},attrs:{src:a(517),alt:"image-20200509153345451"}}),t._v(" "),s("h2",{attrs:{id:"_5-参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-参考文献"}},[t._v("#")]),t._v(" 5. 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/zuopf769",target:"_blank",rel:"noopener noreferrer"}},[t._v("左鹏飞"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);