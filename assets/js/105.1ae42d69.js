(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1052:function(t,e,n){"use strict";n.r(e);var s=n(20),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("img",{staticStyle:{zoom:"80%"},attrs:{src:n(662),alt:"img"}}),t._v(" "),s("p",[t._v("1.管程是一种概念，任何语言都可以通用。")]),t._v(" "),s("p",[t._v("2.在java中，每个加锁的对象都绑定着一个管程（监视器）")]),t._v(" "),s("p",[t._v("3.线程访问加锁对象，就是去拥有一个监视器的过程。如一个病人去门诊室看医生，医生是共享资源，门锁锁定医生，病人去看医生，就是访问医生这个共享资源，门诊室其实是监视器（管程）。")]),t._v(" "),s("p",[t._v("4.所有线程访问共享资源，都需要先拥有监视器。就像所有病人看病都需要先拥有进入门诊室的资格。")]),t._v(" "),s("p",[t._v("5.监视器至少有两个等待队列。一个是进入监视器的等待队列一个是条件变量对应的等待队列。后者可以有多个。就像一个病人进入门诊室诊断后，需要去验血，那么它需要去抽血室排队等待。另外一个病人心脏不舒服，需要去拍胸片，去拍摄室等待。")]),t._v(" "),s("p",[t._v("6.监视器要求的条件满足后，位于条件变量下等待的线程需要重新在门诊室门外排队，等待进入监视器。就像抽血的那位，抽完后，拿到了化验单，然后，重新回到门诊室等待，然后进入看病，然后退出，医生通知下一位进入。")]),t._v(" "),s("p",[t._v("总结起来就是，管程就是一个对象监视器。任何线程想要访问该资源，就要排队进入监控范围。进入之后，接受检查，不符合条件，则要继续等待，直到被通知，然后继续进入监视器。")]),t._v(" "),s("p",[t._v("简单来说，一个锁实际上对应两个队列，一个是就绪队列，对应本节的入口等待队列，一个是阻塞队列，实际对应本节的条件变量等待队列，wait操作是把当前线程放入条件变量的等待队列中，而notifyall是将条件变量等待队列中的所有线程唤醒到就绪队列（入口等待队列）中，实际上哪个线程执行由jvm操作")])])}),[],!1,null,null,null);e.default=v.exports},662:function(t,e,n){t.exports=n.p+"assets/img/57e4d94e90226b70be3d57024f5333fa.57e4d94e.png"}}]);