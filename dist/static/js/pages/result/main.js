global.webpackJsonp([5],{"+naB":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("5nAL"),n=a.n(i),r=a("eqLv");new n.a(r.a).$mount()},EPuy:function(t,s,a){"use strict";s.a={data:function(){return{sdArr:new Array(100),msg:{},time:0,status:1}},components:{},methods:{again:function(){var t=4==this.msg.type?"pages/game/main?path=four":6==this.msg.type?"pages/game/main?path=six":9==this.msg.type?"pages/game/main?path=nine":"pages/home/main";this.reLaunchPageTo(this.router+t)}},created:function(){},mounted:function(){if(console.log("result",this.$store.result),this.$store.result){var t=this.$store.result.avg-this.$store.result.time>0?this.$store.result.avg-this.$store.result.time>60?3:2:1;this.sdArr=this.$store.result.sdArr,this.time=this.$store.result.time,this.msg=this.$store.result,this.able=this.sdArr.map(function(t){return t?0:1}),this.status=t}else{this.reLaunchPageTo(this.router+"pages/home/main")}}}},"TN+B":function(t,s){},eqLv:function(t,s,a){"use strict";var i=a("EPuy"),n=a("jnpY");var r=function(t){a("TN+B")},e=a("ybqe")(i.a,n.a,r,null,null);s.a=e.exports},jnpY:function(t,s,a){"use strict";var i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"resultBox"},[a("img",{staticClass:"bg",attrs:{src:"../../../static/img/bg2.png"}}),t._v(" "),a("img",{staticClass:"resultkuang",attrs:{src:"../../../static/img/resultKuang.png",alt:""}}),t._v(" "),4==t.msg.type?a("div",{staticClass:"wrap wrap_4"},t._l(t.sdArr,function(s,i){return i%10<=4&&i>=11&&i<=44&&i%10!=0?a("div",{key:i,class:["item",i>20&&i<30?"mb":"",i%10==2?"column3":"",s?"num":"blank"],attrs:{"data-index":i,"data-num":s}},[a("img",{staticClass:"numimg",attrs:{"data-id":i,"data-num":s,src:s?t.imgSrc+"static/img/"+s+".png":t.imgSrc+"static/img/blank.png"}})]):t._e()})):6==t.msg.type?a("div",{staticClass:"wrap wrap_6"},[t._l(t.sdArr,function(s,i){return i%10==1&&i<=66&&i>=11?a("div",{key:i,class:["item",31==i?"column3":"",s?"num":"blank"],attrs:{"data-index":i,"data-num":s}},[a("img",{staticClass:"numimg",attrs:{"data-id":i,src:s?t.imgSrc+"static/img/"+s+".png":t.imgSrc+"static/img/blank.png"}})]):t._e()}),t._v(" "),t._l(t.sdArr,function(s,i){return i%10==2&&i<=66&&i>=11?a("div",{key:i,class:["item","mb",32==i?"column3":"",s?"num":"blank"],attrs:{"data-index":i,"data-num":s}},[a("img",{staticClass:"numimg",attrs:{"data-id":i,src:s?t.imgSrc+"static/img/"+s+".png":t.imgSrc+"static/img/blank.png"}})]):t._e()}),t._v(" "),t._l(t.sdArr,function(s,i){return i%10==3&&i<=66&&i>=11?a("div",{key:i,class:["item",33==i?"column3":"",s?"num":"blank"],attrs:{"data-index":i,"data-num":s}},[a("img",{staticClass:"numimg",attrs:{"data-id":i,src:s?t.imgSrc+"static/img/"+s+".png":t.imgSrc+"static/img/blank.png"}})]):t._e()}),t._v(" "),t._l(t.sdArr,function(s,i){return i%10==4&&i<=66&&i>=11?a("div",{key:i,class:["item","mb",34==i?"column3":"",s?"num":"blank"],attrs:{"data-index":i,"data-num":s}},[a("img",{staticClass:"numimg",attrs:{"data-id":i,src:s?t.imgSrc+"static/img/"+s+".png":t.imgSrc+"static/img/blank.png"}})]):t._e()}),t._v(" "),t._l(t.sdArr,function(s,i){return i%10==5&&i<=66&&i>=11?a("div",{key:i,class:["item",35==i?"column3":"",s?"num":"blank"],attrs:{"data-index":i,"data-num":s}},[a("img",{staticClass:"numimg",attrs:{"data-id":i,src:s?t.imgSrc+"static/img/"+s+".png":t.imgSrc+"static/img/blank.png"}})]):t._e()}),t._v(" "),t._l(t.sdArr,function(s,i){return i%10==6&&i<=66&&i>=11?a("div",{key:i,class:["item",36==i?"column3":"",s?"num":"blank"],attrs:{"data-index":i,"data-num":s}},[a("img",{staticClass:"numimg",attrs:{"data-id":i,src:s?t.imgSrc+"static/img/"+s+".png":t.imgSrc+"static/img/blank.png"}})]):t._e()})],2):9==t.msg.type?a("div",{staticClass:"wrap wrap_9"},t._l(t.sdArr,function(s,i){return i>=11&&i<=99&&i%10!=0?a("div",{key:i,class:["item",i>30&&i<40||i>60&&i<70?"mb":"",i%10==6?"column6":"",i%10==3?"column3":"",s?"num":"blank"],attrs:{"data-index":i,"data-num":s}},[a("img",{staticClass:"numimg",attrs:{"data-id":i,"data-num":s,src:s?t.imgSrc+"static/img/"+s+".png":t.imgSrc+"static/img/blank.png"}})]):t._e()})):t._e(),t._v(" "),a("img",{staticClass:"btn",attrs:{src:"../../../static/img/again.png",eventid:"0"},on:{click:t.again}}),t._v(" "),1==t.status?a("img",{staticClass:"monkey pass",attrs:{src:"../../../static/img/pass.png"}}):t._e(),t._v(" "),2==t.status?a("img",{staticClass:"monkey great",attrs:{src:"../../../static/img/great.png"}}):t._e(),t._v(" "),3==t.status?a("img",{staticClass:"monkey perfect",attrs:{src:"../../../static/img/perfect.png"}}):t._e(),t._v(" "),1==t.status?a("img",{staticClass:"icon passi",attrs:{src:"../../../static/img/passicon.png"}}):t._e(),t._v(" "),2==t.status?a("img",{staticClass:"icon greati",attrs:{src:"../../../static/img/greaticon.png"}}):t._e(),t._v(" "),3==t.status?a("img",{staticClass:"icon perfecti",attrs:{src:"../../../static/img/perfecticon.png"}}):t._e(),t._v(" "),a("div",{staticClass:"result time"},[a("img",{attrs:{src:"../../../static/img/time.png"}}),t._v(" "),a("span",[t._v(t._s((t.time-t.time%60)/60))]),t._v(" "),a("span",{staticClass:"r"},[t._v(t._s(t.time%60))])]),t._v(" "),a("div",{staticClass:"result error"},[a("img",{attrs:{src:"../../../static/img/error.png"}}),t._v(" "),a("span",[t._v(t._s(t.msg.error))])]),t._v(" "),a("div",{staticClass:"result count"},[a("img",{attrs:{src:"../../../static/img/count.png"}}),t._v(" "),a("span",[t._v(t._s(t.msg.count))])]),t._v(" "),a("div",{staticClass:"result avg"},[a("img",{attrs:{src:"../../../static/img/avg.png"}}),t._v(" "),a("span",[t._v(t._s((t.msg.avg-t.msg.avg%60)/60))]),t._v(" "),a("span",{staticClass:"r"},[t._v(t._s(t.msg.avg%60))])])])},staticRenderFns:[]};s.a=i}},["+naB"]);