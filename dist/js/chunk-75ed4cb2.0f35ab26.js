(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75ed4cb2"],{"31ad":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"module-balance"},[e.loading?t("loader"):e._e(),e.hasBalance&&!e.loading?t("mew-module",{attrs:{subtitle:e.subtitle,title:e.title,"has-body-padding":!1,icon:e.network.type.icon,caption:e.convertedBalance,"has-elevation":!0,"has-full-height":!0,"icon-align":"left"},scopedSlots:e._u([null,{key:"moduleBody",fn:function(){return[e._e(),t("div",{staticClass:"pa-3 pa-sm-7 d-block d-md-flex align-center justify-space-between"},[t("div",{staticClass:"d-flex flex-column flex-sm-row align-center justify-center"},[t("div",{staticClass:"d-flex align-center"},[t("div",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.network.type.currencyName)+" PRICE ")]),t("div",{class:["ml-2 font-weight-regular",e.priceChange?"greenPrimary--text":"redPrimary--text"]},[e._v(" "+e._s(e.formatChange)+" ")]),t("v-icon",{class:[e.priceChange?"greenPrimary--text":"redPrimary--text","body-2"]},[e._v(e._s(e.priceChangeArrow))])],1),t("div",{staticClass:"ml-sm-5"},[e._v(" "+e._s(e.formatFiatPrice)+" / 1 "+e._s(e.network.type.currencyName)+" ")])]),t("div",{staticClass:"text-center text-md-right mt-4 mt-md-0"},[t("mew-button",{staticClass:"mr-3",attrs:{"has-full-width":!1,title:e.sendText,"btn-size":"large","btn-style":"transparent"},nativeOn:{click:function(n){return e.navigateToSend.apply(null,arguments)}}}),e.hasSwap?t("mew-button",{attrs:{"has-full-width":!1,title:e.swapText,"btn-size":"large","btn-style":"outline"},nativeOn:{click:function(n){return e.navigateToSwap.apply(null,arguments)}}}):e._e()],1)])]},proxy:!0}],null,!0)}):e._e(),e.hasBalance||e.loading?e._e():t("balance-empty-block",{attrs:{"network-type":e.network.type.currencyName,"is-eth":e.isEthNetwork}})],1)},i=[],r=t("5530"),s=(t("d3b7"),t("3ca3"),t("ddb0"),t("99af"),t("14d9"),t("2f62")),l=t("901e"),c=t.n(l),d=t("ac8e"),o=t("db3a"),u=(t("caad"),t("d81d"),t("b680"),t("6379")),m=t("5ba3"),k=t.n(m),v=t("9b88"),h={name:"HandlerBalanceHistory",data:function(){return{getTimeseriesData:"",nextKey:""}},apollo:{getTimeseriesData:{query:u["getBalanceHistory"],variables:function(){return{timeString:Math.floor(this.timeString/1e3),todaysDate:Math.floor((new Date).getTime()/1e3),key:"ACCOUNT_BALANCE_PREFIX_AVG-0xETH-".concat(this.address),scale:this.scale,_nextKey:this.nextKey}},update:function(e){return e.getTimeseriesData},skip:function(){var e=["seconds","minutes","hours","days"];return!e.includes(this.scale)||!this.isEthNetwork},result:function(){var e=this._parseResult(this.getTimeseriesData.items),n=this.getTimeseriesData.nextKey;do{var t;if(n)this.nextKey=n,this.scale="days",this.timeString=(new Date).getTime()-31536e6,this.chartData.push(e),null===(t=this.$apollo.queries.getBalanceHistory)||void 0===t||t.refetch();else this.chartData=e}while(n)},error:function(e){Object(v["d"])(e.message,{},v["a"])}}},methods:{_parseResult:function(e){return e?e.map((function(e){var n=k.a.fromWei(e.value),t=c()(n).toFixed(4),a=c()(t).toNumber(),i=c()(e.timestamp).times(1e3).toNumber();return[i,a]})):[]}}},g=t("5965"),f={components:{Loader:function(){return t.e("chunk-486c7e57").then(t.bind(null,"a2ca"))},BalanceChart:function(){return t.e("chunk-094e5f70").then(t.bind(null,"e023"))},BalanceEmptyBlock:function(){return t.e("chunk-06948fd4").then(t.bind(null,"e443"))}},mixins:[h,g["a"]],data:function(){return{chartButtons:["1D","1W","1M","1Y"],chartData:[],timeString:"",scale:"",activeButton:0,loading:!0}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(s["d"])("wallet",["address"])),Object(s["c"])("global",["network","hasSwap","getFiatValue"])),Object(s["c"])("wallet",["balanceInETH","balanceInWei"])),Object(s["c"])("external",["fiatValue","balanceFiatValue","networkTokenUSDMarket"])),Object(s["c"])("global",["isEthNetwork","network"])),{},{priceChangeArrow:function(){return this.priceChange?"mdi-arrow-up-bold":"mdi-arrow-down-bold"},priceChange:function(){return this.networkTokenUSDMarket.price_change_percentage_24h>0},title:function(){return"".concat(Object(d["c"])(this.balanceInETH).value," ").concat(this.network.type.currencyName)},sendText:function(){return"Send ".concat(this.network.type.currencyName)},swapText:function(){return"Swap ".concat(this.network.type.currencyName)},subtitle:function(){return"My ".concat(this.network.type.currencyName," Balance")},convertedBalance:function(){return this.fiatLoaded?this.getFiatValue(this.balanceFiatValue):""},formatChange:function(){return this.fiatLoaded?Object(d["g"])(this.networkTokenUSDMarket.price_change_percentage_24h).value:""},formatFiatPrice:function(){return this.fiatLoaded?this.getFiatValue(this.fiatValue):""},fiatLoaded:function(){return!!this.networkTokenUSDMarket&&!!this.networkTokenUSDMarket.price_change_percentage_24h&&!!this.balanceFiatValue&&!!this.fiatValue},hasBalance:function(){return c()(this.balanceInWei).gt(0)}}),watch:{chartData:{handler:function(){},deep:!0}},mounted:function(){this.initChart()},methods:{initChart:function(){var e=this,n=0,t=function t(){e.onToggle(e.chartButtons[n]),setTimeout((function(){n>=3?(e.onToggle(e.chartButtons[n]),e.activeButton=n,e.loading=!1):e.chartData.length<=1?(n++,t()):(e.activeButton=n,e.loading=!1)}),1e3)};t()},onToggle:function(e){switch(e){case this.chartButtons[0]:this.setDataYesterday();break;case this.chartButtons[1]:this.setDataWeek();break;case this.chartButtons[2]:this.setDataMonth();break;case this.chartButtons[3]:this.setDataYear();break;default:this.setDataMonth()}},setDataMonth:function(){var e=new Date;this.timeString=e.getTime()-26784e5,this.scale="days"},setDataYear:function(){var e=new Date;this.timeString=e.getTime()-31536e6,this.scale="days"},setDataWeek:function(){var e=new Date;this.timeString=e.getTime()-6048e5,this.scale="days"},setDataYesterday:function(){var e=new Date;this.timeString=e.getTime()-864e5,this.scale="hours"},navigateToSend:function(){this.$router.push({name:o["b"].SEND_TX.NAME})},navigateToSwap:function(){this.trackSwap("fromDashboardBalanceModule"),this.$router.push({name:o["b"].SWAP.NAME})}}},p=f,b=t("2877"),y=Object(b["a"])(p,a,i,!1,null,null,null);n["default"]=y.exports},6379:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getEthBalance"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"hash"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getEthBalance"},arguments:[{kind:"Argument",name:{kind:"Name",value:"owner"},value:{kind:"Variable",name:{kind:"Name",value:"hash"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"balance"},arguments:[],directives:[]}]}}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getLatestPrices"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getLatestPrices"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"symbol"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contract"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"current_price"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"market_cap"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"total_volume"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price_change_percentage_24h"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"total_supply"},arguments:[],directives:[]}]}}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getBalanceHistory"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"timeString"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"todaysDate"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"key"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"scale"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"TimeseriesScale"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"_nextKey"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getTimeseriesData"},arguments:[{kind:"Argument",name:{kind:"Name",value:"fromT"},value:{kind:"Variable",name:{kind:"Name",value:"timeString"}}},{kind:"Argument",name:{kind:"Name",value:"toT"},value:{kind:"Variable",name:{kind:"Name",value:"todaysDate"}}},{kind:"Argument",name:{kind:"Name",value:"key"},value:{kind:"Variable",name:{kind:"Name",value:"key"}}},{kind:"Argument",name:{kind:"Name",value:"scale"},value:{kind:"Variable",name:{kind:"Name",value:"scale"}}},{kind:"Argument",name:{kind:"Name",value:"nextKey"},value:{kind:"Variable",name:{kind:"Name",value:"_nextKey"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"timestamp"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"nextKey"},arguments:[],directives:[]}]}}]}},{kind:"OperationDefinition",operation:"subscription",name:{kind:"Name",value:"subscribeToAccountBalance"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"owner"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"event"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"AddressEventType"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addressEvent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"owner"},value:{kind:"Variable",name:{kind:"Name",value:"owner"}}},{kind:"Argument",name:{kind:"Name",value:"event"},value:{kind:"Variable",name:{kind:"Name",value:"event"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"blockNumber"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:791}};t.loc.source={body:"query getEthBalance($hash: String!) {\n  getEthBalance(owner: $hash) {\n    balance\n  }\n}\n\nquery getLatestPrices {\n  getLatestPrices {\n      id\n      symbol\n      name\n      image\n      contract\n      current_price\n      market_cap\n      total_volume\n      price_change_percentage_24h\n      total_supply\n  }\n}\n\nquery getBalanceHistory(\n  $timeString: Int!\n  $todaysDate: Int!\n  $key: String!\n  $scale: TimeseriesScale!\n  $_nextKey: String\n) {\n  getTimeseriesData(\n    fromT: $timeString\n    toT: $todaysDate\n    key: $key\n    scale: $scale\n    nextKey: $_nextKey\n  ) {\n    items {\n      value\n      timestamp\n    }\n    nextKey\n  }\n}\n\nsubscription subscribeToAccountBalance(\n  $owner: String!\n  $event: AddressEventType!\n) {\n  addressEvent(owner: $owner, event: $event) {\n    blockNumber\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,n)})),e.definitions&&e.definitions.forEach((function(e){a(e,n)}))}var i={};function r(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t];if(a.name&&a.name.value==n)return a}}function s(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var a=i[n]||new Set,s=new Set,l=new Set;a.forEach((function(e){l.add(e)}));while(l.size>0){var c=l;l=new Set,c.forEach((function(e){if(!s.has(e)){s.add(e);var n=i[e]||new Set;n.forEach((function(e){l.add(e)}))}}))}return s.forEach((function(n){var a=r(e,n);a&&t.definitions.push(a)})),t}(function(){t.definitions.forEach((function(e){if(e.name){var n=new Set;a(e,n),i[e.name.value]=n}}))})(),e.exports=t,e.exports["getEthBalance"]=s(t,"getEthBalance"),e.exports["getLatestPrices"]=s(t,"getLatestPrices"),e.exports["getBalanceHistory"]=s(t,"getBalanceHistory"),e.exports["subscribeToAccountBalance"]=s(t,"subscribeToAccountBalance")}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-75ed4cb2.0f35ab26.js.map