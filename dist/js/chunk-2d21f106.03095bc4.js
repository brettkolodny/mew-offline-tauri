(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f106"],{d7da:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"full-width"},[t._l(t.coins,(function(e,n){return i("div",{key:e+n},[i("mew-input",{staticClass:"mb-2",attrs:{id:n,label:e,placeholder:e+" "+t.$t("common.addr"),"error-messages":t.errors[e]},on:{input:t.validateCoin},model:{value:t.setCoins[e],callback:function(i){t.$set(t.setCoins,e,i)},expression:"setCoins[coin]"}})],1)})),i("div",{staticClass:"d-flex align-center justify-center mt-3"},[i("mew-button",{attrs:{title:t.$t("common.save"),"btn-size":"xlarge",disabled:!t.valid},nativeOn:{click:function(e){return t.submit.apply(null,arguments)}}})],1)],2)},s=[],r=(i("b64b"),i("4de4"),i("d3b7"),i("07ac"),i("14d9"),i("2ef0")),o=i("9b88"),l={props:{setMulticoin:{default:function(){return{}},type:Function},multicoin:{type:[Object,null],default:null}},data:function(){var t={},e={};for(var i in this.multicoin)t[i]="",e[i]=this.multicoin[i].value;return{setCoins:e,errors:t}},computed:{coins:function(){return Object.keys(this.setCoins)},hasError:function(){return Object.values(this.errors).filter((function(t){if(""!==t)return t})).length>0},valid:function(){var t=Object.values(this.setCoins).filter((function(t){if(t&&""!==t.value)return t}));return t.length>0&&!this.hasError}},watch:{multicoin:{handler:function(t){if(t)for(var e in t)this.setCoins[e]=t[e].value,this.errors[e]=""},deep:!0,immediate:!0}},methods:{validateCoin:function(t,e){var i=this.coins[e];t&&!this.multicoin[i].validator.validate(t)?this.errors[i]=this.$t("ens.ens-resolver.invalid-addr",{coin:i}):this.errors[i]=""},submit:function(){var t=this,e=Object.keys(this.multicoin).reduce((function(e,i){var n=Object.assign({},Object(r["clone"])(t.multicoin[i]));return n.value=t.setCoins[i],n.value&&""!==n.value&&n.value!==t.multicoin[n.symbol].value&&e.push(n),e}),[]);e.length>0?this.setMulticoin(e):Object(o["d"])("No changes were made",{},o["e"])}}},a=l,u=i("2877"),c=Object(u["a"])(a,n,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-2d21f106.03095bc4.js.map