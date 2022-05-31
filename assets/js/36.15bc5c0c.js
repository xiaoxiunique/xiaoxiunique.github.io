(window.webpackJsonp=window.webpackJsonp||[]).push([[36,68,111],{324:function(e,t,n){"use strict";var r=n(34),a=n(50),s=n(21),i=n(29),u=n(104),c=n(103),o=(n(102),n(106),n(105),n(74),n(176),n(327)),p=n.n(o).a,m=n(328),f=n.n(m),h=function(){function e(){Object(s.a)(this,e),this._=f.a,this.axios=p,this.serverBaseURL="",this.pathURL="",this.timeOut=2e3}var t;return Object(i.a)(e,[{key:"get",value:(t=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.serverBaseURL+this.pathURL,e.next=3,p.get(n,{method:"GET",params:t});case 3:return r=e.sent,e.abrupt("return",r&&r.data);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}(),l=function(e){Object(u.a)(r,e);var t,n=Object(c.a)(r);function r(e){var t;return Object(s.a)(this,r),(t=n.call(this,e)).serverBaseURL="https://new.i.atips.cn/api/v1",t.pathURL="/reqConfs",t}return Object(i.a)(r,[{key:"getReqConfByType",value:(t=Object(a.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get({type:t});case 2:return n=e.sent,e.abrupt("return",this._.get(n,"data.list[0].parse"));case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),r}(h),v=function(e){Object(u.a)(p,e);var t,n,o=Object(c.a)(p);function p(e){var t;return Object(s.a)(this,p),(t=o.call(this,e)).serverBaseURL="https://new.i.atips.cn/api/v1",t.pathURL="/commonRecommands",t.reqConfAPI=new l,t}return Object(i.a)(p,[{key:"getRecommendByType",value:(n=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.type){e.next=3;break}return console.error("----- [error] type is not found -----"),e.abrupt("return");case 3:return n="".concat(this.serverBaseURL,"/commonRecommands/types/").concat(t.type),e.next=6,this.axios.get(n,{params:t});case 6:return r=e.sent,e.abrupt("return",r&&r.data);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"convertData",value:function(e,t){var n=this,a=Object.keys(t);return Object(r.a)(e).map((function(e){return a.reduce((function(r,a){return n._.set(r,a,_.get(e,t[a])||t[a]),r}),{})}))}},{key:"getNewRecommend",value:(t=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.reqConfAPI.getReqConfByType(t.type);case 2:return n=e.sent,e.next=5,this.getRecommendByType(t);case 5:return r=e.sent,a=this.convertData(r.data.content,n),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),p}(h);t.a=v},326:function(e,t,n){"use strict";n.r(t);var r=n(50),a=(n(102),n(324)),s={name:"RecommendParentComponent",props:{type:String},data:function(){return{list:[]}},created:function(){this.getList()},methods:{getList:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new a.a,t.next=3,n.getNewRecommend({type:e.type});case 3:r=t.sent,e.list=r;case 5:case"end":return t.stop()}}),t)})))()}}},i=n(20),u=Object(i.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-list",[0===e.list.length?n("v-list-item",[n("v-progress-circular",{attrs:{size:50,color:"amber",indeterminate:""}})],1):e._e(),e._v(" "),e._l(e.list,(function(t){return n("v-list-item",{key:t.itemID},[e._t("default",null,{item:t})],2)}))],2)],1)}),[],!1,null,"637e220d",null);t.default=u.exports},329:function(e,t,n){"use strict";n.r(t);n(108);var r={name:"Link",props:{title:Object,jumpURL:Object|Number,baseURL:Object},data:function(){return{}},computed:{linkURL:function(){return(this.baseURL||"")+this.jumpURL}},watch:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},destroyed:function(){},methods:{}},a=n(20),s=Object(a.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",[t("a",{attrs:{href:this.linkURL,target:"_blank"}},[this._v(" "+this._s(this.title))])])}),[],!1,null,"18a6801d",null);t.default=s.exports},729:function(e,t,n){"use strict";n.r(t);var r=n(326),a=n(329),s={name:"TZhihuRecommend",components:{RecommendParent:r.default,TLink:a.default}},i=n(20),u=Object(i.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",[t("RecommendParent",{attrs:{type:"zhHotSearch"},scopedSlots:this._u([{key:"default",fn:function(e){return[t("TLink",{attrs:{title:e.item.title,baseURL:e.item.baseURL,jumpURL:e.item.jumpURL}})]}}])})],1)}),[],!1,null,null,null);t.default=u.exports}}]);