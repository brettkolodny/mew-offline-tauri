(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-defbf33a"],{"25d5":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modules--swap--components--swap-providers-list my-5"},[t.step>=1&&t.toTokenSymbol&&!t.hasProviderError?r("v-item-group",{attrs:{value:0}},[r("v-row",{attrs:{"no-gutters":""}},[t.providersList.length>0?r("div",{staticClass:"mew-heading-3 mb-5 pl-4"},[t._v(" Select rate ")]):t._e(),t._l(t.providersList,(function(e,s){return r("v-col",{key:"quote-"+s,staticClass:"mb-1",attrs:{cols:"12"}},[r("v-item",{ref:"card"+s,refInFor:!0,scopedSlots:t._u([{key:"default",fn:function(o){var i=o.active,a=o.toggle;return[r("v-container",{class:[i?"rate-active":"","d-flex align-center rate py-0 px-1"],on:{click:function(e){a(),t.setProvider(s,!0)}}},[r("v-row",{staticClass:"align-center justify-start",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"10",sm:"7"}},[r("v-container",{staticClass:"pa-2"},[r("v-row",{staticClass:"align-center justify-start pl-5 pr-1 py-3 py-sm-4"},[r("mew-token-container",{attrs:{size:"small",img:t.toTokenIcon}}),r("div",{staticClass:"d-block d-sm-flex mx-2 mx-sm-4 align-center justify-start"},[null!==t.bestRate&&t.bestRate===e.rate?r("div",{staticClass:"greenPrimary--text font-weight-medium mew-label order-sm-12 pl-sm-2"},[t._v(" Best Rate ")]):t._e(),r("div",{staticClass:"d-flex order-sm-1 justify-start align-center"},[r("div",{staticClass:"mb-0 mew-heading-3 font-weight-medium"},[t._v(" "+t._s(e.amount)+" "+t._s(t.toTokenSymbol)+" ")]),e.amount&&""!==e.amount?r("mew-tooltip",{staticClass:"pl-1",attrs:{text:e.tooltip}}):t._e()],1)])],1)],1)],1),r("v-col",{attrs:{cols:"2",sm:"5"}},[r("v-row",{staticClass:"align-center justify-end pr-3"},[r("mew-checkbox",{attrs:{value:i}})],1)],1)],1)],1)]}}],null,!0)})],1)}))],2)],1):t._e(),t.step>=1&&t.providersCut>0&&t.toTokenSymbol&&!t.hasProviderError?r("div",{staticClass:"cursor--pointer user-select--none greenPrimary--text mt-7 ml-4",on:{click:function(e){t.showMore=!t.showMore}}},[t._v(" "+t._s(t.moreProvidersText)+" "),r("v-icon",{directives:[{name:"show",rawName:"v-show",value:!t.showMore,expression:"!showMore"}],attrs:{small:"",color:"greenPrimary"}},[t._v("mdi-arrow-down")]),r("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],attrs:{small:"",color:"greenPrimary"}},[t._v("mdi-arrow-up")])],1):t._e(),t.step>=1&&t.hasProviderError&&!t.isLoading?r("app-user-msg-block",{attrs:{message:t.providersError,"is-alert":!1,"container-padding":"pa-4 py-6"}}):t._e()],1)},o=[],i=(r("d3b7"),r("3ca3"),r("ddb0"),r("a9e3"),r("fb6a"),r("14d9"),r("99af"),r("4de4"),r("c740"),r("b64b"),r("caad"),r("2532"),r("159b"),r("2ef0")),a=r("ac8e"),n=3,c={name:"SwapProvidersList",components:{AppUserMsgBlock:function(){return r.e("chunk-2d0aa989").then(r.bind(null,"124f"))}},props:{step:{type:Number,default:0},availableQuotes:{type:Array,default:function(){return[]}},setProvider:{type:Function,default:function(){}},toTokenSymbol:{type:String,default:""},toTokenIcon:{type:String,default:""},isLoading:{type:Boolean,default:!1},providersError:{type:Object,default:function(){return{subtitle:""}}},selectedProviderId:{type:Number,default:function(){}}},data:function(){return{showMore:!1}},computed:{hasProviderError:function(){return 0===this.availableQuotes.length||""!==this.providersError.subtitle},bestRate:function(){return this.providersList.length>0&&this.providersList[0].rate?this.providersList[0].rate:null},providersList:function(){var t=this;if(!this.isLoading&&this.step>0){var e=!this.showMore&&this.providersCut>0?this.availableQuotes.slice(0,n):this.availableQuotes,r=e.reduce((function(e,r){if(r){var s=Object(a["c"])(100*r.rate),o=Object(a["c"])(r.amount);e.push({rate:s.value,amount:o.value,tooltip:"".concat(o.tooltipText||o.value," ").concat(t.toTokenSymbol)})}return e}),[]);if(r)return r}return[]},providersCut:function(){return this.availableQuotes.filter((function(t){return!!t})).length-n},moreProvidersText:function(){if(this.providersCut>0){var t="More Rate",e="More Rates";return this.showMore?"Show Less":1===this.providersCut?"".concat(this.providersCut," ").concat(t):"".concat(this.providersCut," ").concat(e)}return""}},watch:{providersList:{handler:function(t,e){var r=this,s=!e||Object(i["isArray"])(e)&&0===e.length;if(t.length>0&&s&&!this.hasProviderError){var o=t.findIndex((function(t){return t.rate===r.bestRate}));this.$nextTick((function(){if(-1!==o){var t=r.$refs["card".concat(o)];if(!t)return;var e=t[0];null!==e&&void 0!==e&&e.isActive||e.toggle(),r.setProvider(o,1===r.step)}}))}},immediate:!0},selectedProviderId:{handler:function(t){var e=this;setTimeout((function(){if(void 0!==t){var r=e.$refs["card".concat(t)][0];null===r||void 0===r||!r.hasOwnProperty("isActive")||null!==r&&void 0!==r&&r.isActive||r.toggle()}else setTimeout((function(){var t=Object.keys(e.$refs),r=t.filter((function(t){return t.includes("card")}));r.forEach((function(t){var r=e.$refs[t][0];null!==r&&void 0!==r&&r.isActive&&r.toggle()}))}),500)}),100)}}}},l=c,u=(r("d704"),r("2877")),d=Object(u["a"])(l,s,o,!1,null,"b2d9dd20",null);e["default"]=d.exports},d704:function(t,e,r){"use strict";r("fb8a")},fb8a:function(t,e,r){}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-defbf33a.9b58c2eb.js.map