(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ed37"],{d6e4:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.toastGenerator,(function(e){return n("mew-toast",{key:t.getName(e)+t.getRef(e),ref:t.getName(e),refInFor:!0,attrs:{persistent:!1,duration:t.duration,"toast-type":t.getRef(e),text:t.text,"link-obj":t.linkObj},on:{closed:t.onClose}})})),1)},a=[],r=n("ade3"),i=(n("b64b"),n("d81d"),n("d3b7"),n("159b"),n("07ac"),n("87d1")),s=n("068e"),u={name:"ModuleToast",data:function(){return{text:"",linkObj:{},duration:6e3}},computed:{toastGenerator:function(){var t=Object.keys(i["a"]);return t.map((function(t){return Object(r["a"])({},t,i["a"][t])}))}},watch:{linkObj:{handler:function(t){this.linkObj=t},deep:!0}},beforeMount:function(){var t=this;Object.keys(i["a"]).forEach((function(e){s["a"].$on(i["a"][e],(function(n,o,a){t.text=n,t.linkObj=o,t.duration=a||6e3,t.callToast(i["a"][e])}))}))},beforeDestroy:function(){var t=this;Object.keys(i["a"]).forEach((function(e){s["a"].$off(i["a"][e],(function(){t.text="",t.linkObj={},t.duration=6e3}))}))},methods:{onClose:function(){this.text="",this.linkObj={},this.duration=6e3},getRef:function(t){return Object.keys(t)[0]},getName:function(t){return Object.values(t)[0]},callToast:function(t){this.$refs[t]&&this.$refs[t].length>0&&this.$refs[t][0].showToast()}}},c=u,f=n("2877"),l=Object(f["a"])(c,o,a,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-2d21ed37.9c2a4d4f.js.map