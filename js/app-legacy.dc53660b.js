(function(){"use strict";var t={3573:function(t,e,n){n(6992),n(8674),n(9601),n(7727),n(7327),n(1539);var a=n(8935),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("router-view")],1)},i=[],r={name:"App"},o=r,c=n(1001),l=(0,c.Z)(o,s,i,!1,null,null,null),u=l.exports,p=n(2809),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("Header"),n("PostList")],1)},d=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("div",{staticClass:"container"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:n(3956),alt:""}})]),t._m(0),a("div",{staticClass:"link"},[a("span",[a("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),a("span",[a("router-link",{attrs:{to:"/"}},[t._v("新手入门")])],1),a("span",[a("router-link",{attrs:{to:"/"}},[t._v("API")])],1),a("span",[a("router-link",{attrs:{to:"/"}},[t._v("关于")])],1),a("span",[a("router-link",{attrs:{to:"/"}},[t._v("注册")])],1),a("span",[a("router-link",{attrs:{to:"/"}},[t._v("登录")])],1)])],1)])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"reach"},[n("label",[n("input",{attrs:{type:"text",autocomplete:"off",icon:"el-icon-search"}})])])}],_={name:"Header"},g=_,m=(0,c.Z)(g,h,v,!1,null,"bfcf4942",null),b=m.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"navbar"},[n("span",{class:{hit:"全部"===t.hit},on:{click:t.selected}},[t._v("全部")]),n("span",{class:{hit:"精华"===t.hit},on:{click:t.selected}},[t._v("精华")]),n("span",{class:{hit:"分享"===t.hit},on:{click:t.selected}},[t._v("分享")]),n("span",{class:{hit:"问答"===t.hit},on:{click:t.selected}},[t._v("问答")]),n("span",{class:{hit:"招聘"===t.hit},on:{click:t.selected}},[t._v("招聘")]),n("span",{class:{hit:"客户端测试"===t.hit},on:{click:t.selected}},[t._v("客户端测试")])]),n("ul",{staticClass:"postlist"},t._l(t.postlist,(function(e,a){return n("li",{key:a},[n("img",{attrs:{src:e.author.avatar_url,alt:""}}),n("div",{staticClass:"count"},[n("span",[t._v(t._s(e.reply_count))]),t._v("/"+t._s(e.visit_count)+" ")]),n("span",{class:[{top:!0===e.top||!0===e.good},{tab:null!==e.tap}]},[t._v(" "+t._s(t._f("getType")(e))+" ")]),n("div",{staticClass:"text"},[n("router-link",{attrs:{to:{name:"Article",params:{id:e.id}}}},[n("a",{attrs:{href:"",title:e.title}},[t._v(t._s(e.title))])])],1),n("span",{staticClass:"time"},[t._v(t._s(t._f("getDate")(e.last_reply_at)))])])})),0),n("Pagination",{on:{handleList:t.handle}})],1)},y=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("button",{on:{click:t.changeBtn}},[t._v("首页")]),n("button",{on:{click:t.changeBtn}},[t._v("上一页")]),t.jduge?n("button",{staticClass:"pagebtn"},[t._v("......")]):t._e(),t._l(t.pagebtns,(function(e,a){return n("button",{key:a,class:[{currentPage:e===t.currentPage},"pagebtn"],on:{click:function(n){return t.changeBtn(e)}}},[t._v(" "+t._s(e)+" ")])})),n("button",{on:{click:t.changeBtn}},[t._v("下一页")])],2)},x=[],P=(n(561),n(4029)),j=n.n(P),$={name:"Pagination",data:function(){return{pagebtns:[1,2,3,4,5,"......"],currentPage:1,jduge:!1}},methods:{changeBtn:function(t){if("number"==typeof t)this.currentPage=t,this.jduge=t>4,t===this.pagebtns[4]?(this.pagebtns.shift(),this.pagebtns.splice(4,0,this.pagebtns[3]+1)):t===this.pagebtns[0]&&1!==t&&(this.pagebtns.unshift(this.pagebtns[0]-1),this.pagebtns.splice(5,1)),this.$emit("handleList",this.currentPage);else switch(t.target.innerText){case"上一页":j()("button.currentPage").prev().click();break;case"下一页":j()("button.currentPage").next().click();break;case"首页":this.pagebtns=[1,2,3,4,5,"......"],this.changeBtn(1);break;default:break}}}},w=$,M=(0,c.Z)(w,C,x,!1,null,"5e2a1996",null),T=M.exports,A={name:"PostList",components:{Pagination:T},data(){return{postlist:[],post:"",pageList:1,type:"all",hit:!1}},methods:{getData(){this.$axios.get("https://cnodejs.org/api/v1/topics",{params:{page:this.pageList,limit:20,tab:this.type}}).then((t=>{this.postlist=t.data.data})).catch((t=>{console.log(t)}))},handle(t){this.pageList=t,this.getData()},selected(t){this.hit=t.target.innerHTML;let e=t.target.innerHTML;switch(e){case"分享":this.type="share";break;case"招聘":this.type="job";break;case"精华":this.type="good";break;case"问答":this.type="ask";break;default:this.type="all";break}console.log(this.type),this.getData()}},beforeMount(){this.getData()}},D=A,O=(0,c.Z)(D,k,y,!1,null,"6ef709e5",null),L=O.exports,E={name:"Index",components:{PostList:L,Header:b}},Z=E,B=(0,c.Z)(Z,f,d,!1,null,"0710eec9",null),H=B.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("SlideBar",{attrs:{tname:t.name}}),n("div",{staticClass:"content"},[n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(t.content.title))])]),n("div",{staticClass:"instro"},[n("span",[t._v("• 发布于 "+t._s(t._f("getDate")(t.content.create_at)))]),n("span",[t._v("• 作者 "+t._s(t.name))]),n("span",[t._v("• "+t._s(t.content.visit_count)+"次浏览")]),n("span",[t._v("• 来自 "+t._s(t._f("getArtType")(t.content.tab)))])])]),n("div",{attrs:{id:"content"}},[n("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.content.content)}})]),n("div",{attrs:{id:"reply"}},[n("div",{staticClass:"topbar"},[t._v("回复")]),t._l(t.content.replies,(function(e,a){return n("div",{key:a,staticClass:"replySec"},[n("div",{staticClass:"replyUp"},[n("router-link",{attrs:{to:{name:"UserInfo",params:{name:e.author.loginname}}}},[n("img",{attrs:{src:e.author.avatar_url,alt:""}})]),n("router-link",{attrs:{to:{name:"UserInfo",params:{name:e.author.loginname}}}},[n("span",[t._v(t._s(e.author.loginname))])]),n("span",[t._v(" "+t._s(a+1)+"楼 ")]),e.ups.length>0?n("span",[t._v(" ☝ "+t._s(e.ups.length)+" ")]):n("span")],1),n("p",{domProps:{innerHTML:t._s(e.content)}})])}))],2)])],1)},S=[],U=(n(8309),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"autherinfo"},[n("div",{staticClass:"authersummay"},[n("div",{staticClass:"topbar"},[t._v("作者")]),n("router-link",{attrs:{to:{name:"UserInfo",params:{name:t.userinfo.loginname}}}},[n("img",{attrs:{src:t.userinfo.avatar_url,alt:""}})])],1),n("div",{staticClass:"recent_topics"},[n("div",{staticClass:"topbar"},[t._v("作者最近主题")]),n("ul",t._l(t.topcilimitby5,(function(e,a){return n("li",{key:a},[n("router-link",{attrs:{to:{name:"Article",params:{id:e.id}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)]),n("div",{staticClass:"recent_replies"},[n("div",{staticClass:"topbar"},[t._v("作者最近回复")]),n("ul",t._l(t.replylimitby5,(function(e,a){return n("li",{key:a},[n("router-link",{attrs:{to:{name:"Article",params:{id:e.id}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])}),F=[],q=(n(7042),{name:"SlideBar",props:["tname"],data:function(){return{userinfo:{},name:""}},methods:{getData:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/user/"+this.tname).then((function(e){t.userinfo=e.data.data})).catch((function(t){console.log(t)}))}},watch:{tname:function(t){this.name=t,t&&this.getData()}},computed:{topcilimitby5:function(){return this.userinfo.recent_topics?this.userinfo.recent_topics.slice(0,5):this.userinfo.recent_topics},replylimitby5:function(){return this.userinfo.recent_replies?this.userinfo.recent_replies.slice(0,5):this.userinfo.recent_replies}}}),z=q,G=(0,c.Z)(z,U,F,!1,null,"0f6ca5a4",null),J=G.exports,K={name:"Article",components:{SlideBar:J,Header:b},data:function(){return{content:{},name:""}},methods:{getArticle:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/topic/"+this.$route.params.id).then((function(e){!0===e.data.success&&(console.log(e),t.content=e.data.data,t.name=e.data.data.author.loginname)})).catch((function(t){console.log(t)}))}},watch:{$route:function(){this.getArticle()}},beforeMount:function(){this.getArticle()},filters:{getArtType:function(t){return"share"===t?"分享":"ask"===t?"问答":"job"===t?"招聘":void 0}}},N=K,Q=(0,c.Z)(N,I,S,!1,null,null,null),R=Q.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"UserInfo"},[n("div",{staticClass:"userInfomation"},[n("section",[n("img",{attrs:{src:t.userinfo.avatar_url}}),n("span",[t._v(t._s(t.userinfo.loginname))]),n("p",[t._v(" "+t._s(t.userinfo.score)+"积分 ")]),n("p",[t._v(" 注册时间："+t._s(t._f("getDate")(t.userinfo.create_at))+" ")])]),n("div",{staticClass:"replies"},[n("p",[t._v("回复的主题")]),n("ul",t._l(t.userinfo.recent_replies,(function(e,a){return n("li",{key:a},[n("router-link",{attrs:{to:{name:"Article",params:{id:e.id}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)]),n("div",{staticClass:"topics"},[n("p",[t._v("创建的主题")]),n("ul",t._l(t.userinfo.recent_topics,(function(e,a){return n("li",{key:a},[n("router-link",{attrs:{to:{name:"Article",params:{id:e.id}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])])},W=[],X={name:"UserInfo",data:function(){return{userinfo:{}}},methods:{getData:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/user/"+this.$route.params.name).then((function(e){t.userinfo=e.data.data})).catch((function(t){console.log(t),console.log("出错")}))}},beforeMount:function(){this.getData()}},Y=X,tt=(0,c.Z)(Y,V,W,!1,null,"995b5966",null),et=tt.exports;a["default"].use(p.Z);var nt=new p.Z({routes:[{path:"/",component:H},{name:"Article",path:"/topic/:id",component:R},{name:"UserInfo",path:"/userinfo/:name",component:et}]}),at=nt,st=n(4549),it=n.n(st),rt=n(6166),ot=n.n(rt);a["default"].config.productionTip=!1,a["default"].use(it()),a["default"].prototype.$axios=ot(),a["default"].filter("getType",(function(t){return t=!0===t.top?"置顶":!0===t.good?"精华":"share"===t.tab?"分享":"job"===t.tab?"招聘":"ask"===t.tab?"问答":"其他",t})),a["default"].filter("getDate",(function(t){var e,n=(new Date).getTime(),a=new Date(t).getTime(),s=(n-a)/1e3;return e=s<60?Math.round(s)+"秒之前":s<3600?Math.round(s/60)+"分之前":s<86400?Math.round(s/3600)+"小时前":s<2592e3?Math.round(s/86400)+"天前":s<31104e3?Math.round(s/2592e3)+"月前":Math.round(s/31104e3)+"年前",e})),new a["default"]({router:at,render:function(t){return t(u)}}).$mount("#app")},3956:function(t,e,n){t.exports=n.p+"img/cnodejs_light.0acdf610.svg"}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var i=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,a,s,i){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],i=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(o=!1,i<r&&(r=i));if(o){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,s,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/Cnode/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,i,r=a[0],o=a[1],c=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(c)var u=c(n)}for(e&&e(a);l<r.length;l++)i=r[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},a=self["webpackChunkcnode"]=self["webpackChunkcnode"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3573)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.dc53660b.js.map