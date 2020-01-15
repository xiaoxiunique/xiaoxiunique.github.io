(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{229:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"安装将花费一定时间，请耐心等待直到安装完成^_^"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" vim-gnome ctags xclip astyle python-setuptools python-dev "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y gcc "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ctags xclip astyle python-setuptools python-devel\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##Add HomeBrew support on  Mac OS")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" brew "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/dev/null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"You are using HomeBrew tool"')]),s._v("\n    brew "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ctags "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" astyle\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" easy_install -ZU autopep8\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/bin/ctags /usr/local/bin/ctags\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" -f ~/vim ~/vim_old\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/ "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/ma6174/vim.git\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" -f ~/.vim ~/.vim_old\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" -f ~/vim ~/.vim\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" -f ~/.vimrc ~/.vimrc_old\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" -f ~/.vim/.vimrc ~/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/gmarik/vundle.git ~/.vim/bundle/vundle\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ma6174正在努力为您安装bundle程序"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ma6174\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"安装完毕将自动退出"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ma6174\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请耐心等待"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ma6174\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ma6174 -c "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"BundleInstall"')]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"q"')]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"q"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" ma6174\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"安装完成"')]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);