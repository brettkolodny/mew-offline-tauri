(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3914"],{"0372":function(e,t,c){"use strict";c.r(t);var s=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"dapp--eth-blocks--block-search"},[c("p",{staticClass:"primary--text mb-1 ml-2"},[e._v("Max block: "+e._s(e.maxBlock))]),c("date-selector-popup",{attrs:{"show-popup":e.showDate,"search-date":e.searchByDate,"hide-popup":e.hidePopup}}),c("mew-search",{attrs:{"is-search-block":"",placeholder:"Enter a block number",value:e.searchBlock,"on-search":e.search,"can-search-date":"","on-date-search":e.showDatePopup,"error-messages":e.searchErrorMessage,type:"number"},on:{input:e.setBlock}})],1)},o=[],r=c("5530"),a=(c("d3b7"),c("3ca3"),c("ddb0"),c("4c53"),c("14d9"),c("2f62")),h=c("5ba3"),n=c("470f"),i=c("9b88"),u=c("d666"),l={name:"ModuleEthBlocksMint",components:{DateSelectorPopup:function(){return c.e("chunk-2d22bd51").then(c.bind(null,"f13c"))}},data:function(){return{searchBlock:"",showDate:!1}},computed:Object(r["a"])(Object(r["a"])({},Object(a["d"])("wallet",["blockNumber"])),{},{maxBlock:function(){var e=Object(h["toBN"])(this.blockNumber?this.blockNumber:0).sub(Object(h["toBN"])(50)),t=Object(h["toBN"])(0);return e.gt(t)?e.toNumber():""},searchErrorMessage:function(){if(this.searchBlock&&""!==this.searchBlock){if(!Object(u["b"])(this.searchBlock))return"value must be a positive integer";if(Object(u["a"])(this.searchBlock))return"value cannot begin with zero";var e=Object(h["toBN"])(this.searchBlock),t=Object(h["toBN"])(10);if(!e.isZero()&&e.lte(t))return"ETH Blocks 1-10 are reserved for the Ethereum founders";var c=Object(h["toBN"])(this.blockNumber).sub(Object(h["toBN"])(50));if(e.gt(c))return"Block number must be smaller or equal to ".concat(this.maxBlock)}return""},checkExistingBlock:function(){var e=Object(h["toBN"])(this.searchBlock),t=Object(h["toBN"])(this.blockNumber).sub(Object(h["toBN"])(50));return!e.gt(t)}}),methods:{search:function(){if(this.searchBlock&&""!==this.searchBlock&&!Object(u["a"])(this.searchBlock)&&this.checkExistingBlock)try{this.$router.push({name:n["a"].BLOCK.NAME,params:{blockRef:this.searchBlock}})}catch(e){Object(i["d"])(e,{},i["a"])}},searchByDate:function(e){if(e&&""!==e)try{this.$router.push({name:n["a"].DATE_SEARCH.NAME,params:{dateString:e}}).then(this.hidePopup)}catch(t){Object(i["d"])(t,{},i["a"])}},showDatePopup:function(){this.showDate=!0},hidePopup:function(){this.showDate=!1},setBlock:function(e){this.searchBlock=e}}},b=l,p=c("2877"),k=Object(p["a"])(b,s,o,!1,null,null,null);t["default"]=k.exports}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-2d0a3914.0c24872b.js.map