global.webpackJsonp([1],{IcnI:function(n,t,e){"use strict";var r=e("5nAL"),a=e.n(r),o=e("NYxO"),u=e("mUbh"),i=(e.n(u),e("UjVw"));a.a.use(o.a);t.a=new o.a.Store({actions:u,getters:i,state:{result:"",os:""},mutations:{SETOS:function(n,t){n.os=t}}})},M93x:function(n,t,e){"use strict";var r=e("Mw+1");var a=function(n){e("NXzY")},o=e("ybqe")(r.a,null,a,null,null);t.a=o.exports},"Mw+1":function(n,t,e){"use strict";t.a={created:function(){this.$store.commit("SETOS","wx")}}},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("5nAL"),a=e.n(r),o=e("M93x"),u=e("IcnI"),i=e("x/O6");e("SWAV");a.a.config.productionTip=!1,o.a.mpType="app",a.a.prototype.$store=u.a,a.a.mixin({data:function(){return{service:"",router:"/",imgSrc:"/"}},methods:{newroot:function(){return this.$root.$mp},navigatePageTo:function(n){wx.navigateTo({url:n})},reLaunchPageTo:function(n){wx.reLaunch({url:n})}},created:function(){this.service=i.a}}),new a.a(o.a).$mount(),t.default={config:{pages:["^pages/home/main"],window:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#fff",navigationBarTitleText:"数独小游戏",navigationBarTextStyle:"black"}}}},NXzY:function(n,t){},SWAV:function(n,t,e){"use strict";var r=e("Xxa5"),a=(e.n(r),e("exGp")),o=(e.n(a),e("XRHw"),e("mtWM"));e.n(o)},UjVw:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"getOs",function(){return r});var r=function(n){return n.os}},XRHw:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r="http://203.195.236.254:8886/yidekuai"},mUbh:function(n,t){},"x/O6":function(n,t,e){"use strict";var r=e("woOf"),a=e.n(r),o=e("Xxa5"),u=e.n(o),i=e("//Fk"),c=e.n(i),s=e("exGp"),f=e.n(s),p=e("XRHw");t.a={getUserInfo:function(){var n=this;return f()(u.a.mark(function t(){var e;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new c.a(function(n,t){wx.login({success:function(){wx.getUserInfo({success:n,fail:t})}})});case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}},t,n)}))()},httpRequest:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return f()(u.a.mark(function e(){var r;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new c.a(function(n,e){wx.request({url:p.a+t.url,data:a()({},t.data),method:t.methods||"GET",header:t.headers||{"Content-Type":"application/json"},success:n,fail:e})});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}},e,n)}))()}}}},["NHnr"]);