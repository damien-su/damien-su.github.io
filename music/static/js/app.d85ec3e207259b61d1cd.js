webpackJsonp([1],{"34KM":function(t,e){},"90y8":function(t,e){},MASa:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("briU"),s("34KM");var n=s("MVMM"),i=s("iDdd"),r=s.n(i),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-header"},[e("div",{staticClass:"icon"}),this._v(" "),e("h1",{staticClass:"text"},[this._v("芥末音乐")])])}]};var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab"},[e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/recommend"}},[e("span",{staticClass:"tab-link"},[this._v("推荐")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/singer"}},[e("span",{staticClass:"tab-link"},[this._v("歌手")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/rank"}},[e("span",{staticClass:"tab-link"},[this._v("排行")])]),this._v(" "),e("router-link",{staticClass:"tab-item",attrs:{tag:"div",to:"/search"}},[e("span",{staticClass:"tab-link"},[this._v("搜索")])])],1)},staticRenderFns:[]};var o={components:{MHeader:s("Z0/y")({},l,!1,function(t){s("ciDE")},"data-v-0b3a90d6",null).exports,Tab:s("Z0/y")({},a,!1,function(t){s("kxKW")},"data-v-04e7c91d",null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("m-header"),this._v(" "),e("tab"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var c=s("Z0/y")(o,d,!1,function(t){s("eGY+")},null,null).exports,h=s("zO6J"),u=s("aA9S"),v=s.n(u),f=s("rVsN"),p=s.n(f),y=s("6yg2"),m=s.n(y);function x(t,e,s){var n=t;return n+=(t.indexOf("?")<0?"?":"&")+function(t){var e="";for(var s in t){var n=void 0!==t[s]?t[s]:"";e+="&"+s+"="+encodeURIComponent(n)}return e?e.substring(1):""}(e),new p.a(function(t,e){m()(n,s,function(s,n){s?e(s):t(n)})})}var _={g_tk:1928093487,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},g={param:"jsonpCallback"};var I={data:function(){return{clientWidth:document.body.clientWidth,sliderIndex:1,timer:null,sliderBody:null,startPos:{x:0,y:0},currentPos:{x:0,y:0},prevPos:{x:0,y:0}}},props:{sliderList:{type:Array,default:function(){return[]}}},computed:{realList:function(){var t=this.sliderList,e=v()({},t[0]),s=v()({},t[t.length-1]);return console.log(e),console.log(s),t.unshift(s),t.push(e),t},sliderBodyStyle:function(){return{width:100*this.realList.length+"%",left:this.sliderLeft+"px",height:this.clientWidth/2.5+"px",transition:"0s","-webkit-transition":"0s"}},sliderItemStyle:function(){return{width:this.clientWidth+"px",height:"100%"}},sliderLeft:function(){return-this.sliderIndex*this.clientWidth}},mounted:function(){var t=this;this.runSlider(),this.sliderBody=document.getElementsByClassName("slider-body")[0],window.onresize=function(){t.clientWidth=document.body.clientWidth,t.setTransInterval(0),t.sliderBodyStyle.left=-t.clientWidth*t.sliderIndex+"px"}},methods:{runSlider:function(){var t=this;this.timer=setInterval(function(){t.sliderIndex+=1,t.sliderIndex===t.realList.length?(clearInterval(t.timer),t.timer=null,t.setTransInterval(0),t.sliderIndex=1,t.sliderBody.style.left=-t.clientWidth+"px",setTimeout(function(){t.setTransInterval(.5),t.sliderIndex=2,t.sliderBodyStyle.left=-t.clientWidth*t.sliderIndex+"px",t.runSlider()},10)):t.setTransInterval(.5)},2e3)},setTransInterval:function(t){this.sliderBody.style.transition=t+"s",this.sliderBody.style["-webkit-transition"]=t+"s"},sliderTouchStart:function(t){console.log("start"),clearInterval(this.timer),this.timer=null;var e=t.touches[0];this.startPos.x=e.pageX,this.startPos.y=e.pageY,this.prevPos.x=this.startPos.x,this.prevPos.y=this.startPos.y},sliderTouchMove:function(t){var e=this;console.log("move");var s=t.touches[0];this.currentPos.x=s.pageX,this.currentPos.y=s.pageY;var n=this.currentPos.x-this.prevPos.x;if(n<0&&this.sliderIndex===this.realList.length-1)this.setTransInterval(0),this.sliderIndex=1,this.sliderBody.style.left=-this.clientWidth*this.sliderIndex+"px",setTimeout(function(){var t=parseInt(e.sliderBody.style.left,10);e.sliderBody.style.left=t+n+"px",e.prevPos.x=e.currentPos.x,e.prevPos.y=e.currentPos.y},10);else if(n>0&&0===this.sliderIndex)this.setTransInterval(0),this.sliderIndex=this.realList.length-2,this.sliderBody.style.left=-this.clientWidth*this.sliderIndex+"px",setTimeout(function(){var t=parseInt(e.sliderBody.style.left,10);e.sliderBody.style.left=t+n+"px",e.prevPos.x=e.currentPos.x,e.prevPos.y=e.currentPos.y},10);else{var i=parseInt(this.sliderBody.style.left,10);this.sliderBody.style.left=i+n+"px",this.prevPos.x=this.currentPos.x,this.prevPos.y=this.currentPos.y}},sliderTouchEnd:function(t){console.log("end");var e=t.changedTouches[0];this.currentPos.x=e.pageX,this.currentPos.y=e.pageY;var s=this.currentPos.x-this.startPos.x;s>0&&(this.sliderIndex-=1),s<0&&(this.sliderIndex+=1),this.setTransInterval(.5),this.runSlider()}}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slider-wrapper"},[s("div",{staticClass:"slider-body",style:t.sliderBodyStyle},t._l(t.realList,function(e,n){return s("img",{key:n,staticClass:"slider-item",style:t.sliderItemStyle,attrs:{src:e.picUrl},on:{touchstart:t.sliderTouchStart,touchmove:t.sliderTouchMove,touchend:t.sliderTouchEnd}})}))])},staticRenderFns:[]};var b=this,C={data:function(){return{slider:[]}},created:function(){this._getRecommend(),this.test()},methods:{_getRecommend:function(){var t,e=this;(t="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",console.log(t),x(t,v()({},_,{platform:"h5",uin:0,needNewCode:1}),g)).then(function(t){0===t.code&&(e.slider=t.data.slider)})},test:function(){console.log("this"),console.log(b)}},components:{TSlider:s("Z0/y")(I,P,!1,function(t){s("MASa")},null,null).exports}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recommend"},[e("div",{staticClass:"recommend-content"},[e("div",{staticClass:"recommend-list"},[e("t-slider",{attrs:{sliderList:this.slider}})],1)]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var k=s("Z0/y")(C,T,!1,function(t){s("90y8")},"data-v-733490cc",null).exports,B={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    歌手\n")])},staticRenderFns:[]};var S=s("Z0/y")({},B,!1,function(t){s("jJ/c")},"data-v-13ed5854",null).exports,w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    排行榜\n")])},staticRenderFns:[]};var E=s("Z0/y")({},w,!1,function(t){s("qMzs")},"data-v-f488179a",null).exports,W={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    搜索\n")])},staticRenderFns:[]};var M=s("Z0/y")({},W,!1,function(t){s("pnez")},"data-v-4050f6dd",null).exports;n.a.use(h.a);var L=new h.a({routes:[{path:"/",redirect:"/recommend"},{path:"/recommend",component:k},{path:"/singer",component:S},{path:"/rank",component:E},{path:"/search",component:M}]});r.a.attach(document.body),new n.a({el:"#app",render:function(t){return t(c)},router:L})},ciDE:function(t,e){},"eGY+":function(t,e){},"jJ/c":function(t,e){},kxKW:function(t,e){},pnez:function(t,e){},qMzs:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d85ec3e207259b61d1cd.js.map