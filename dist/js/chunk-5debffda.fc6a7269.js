(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5debffda"],{"056e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mx-auto mb-3",staticStyle:{"max-width":"550px"}},[a("div",{staticClass:"mew-heading-2 py-8 text-center"},[t._v(" Select ETH amount to stake ")]),a("border-block",{staticClass:"pt-9 pb-0 px-3 px-sm-5"},[a("mew-select",{attrs:{label:"Staking amount",items:t.selectItems,"error-messages":t.errorMessages,"buy-more-str":t.errorMessages&&t.network.type.canBuy?"Buy more.":null,"filter-placeholder":"Search for Amount","is-custom":"",outlined:""},on:{buyMore:t.openMoonpay,input:t.setAmount},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}}),a("div",{staticClass:"pt-6"},[a("v-row",[a("v-col",{staticClass:"py-1 text-uppercase textLight--text font-weight-bold",attrs:{cols:"6",md:"6"}},[t._v(" Current APR ")]),a("v-col",{staticClass:"py-1 text-right greenPrimary--text",attrs:{cols:"6",md:"6"}},[t._v(" "+t._s(t.currentAprFormatted)+" ")])],1),a("v-row",[a("v-col",{staticClass:"py-1 text-uppercase textLight--text font-weight-bold d-flex align-center",attrs:{cols:"6",md:"6"}},[a("div",{staticClass:"staking-fee"},[t._v("Staking Fee")]),a("mew-tooltip",{staticClass:"ml-1",attrs:{text:t.toolTipFee,"max-width":"320px"}})],1),a("v-col",{staticClass:"py-1 text-right",attrs:{cols:"6",md:"6"}},[t._v(" 0.75% "),a("span",{staticClass:"textLight--text"},[t._v("0.3 ETH min")])])],1)],1),a("v-divider",{staticClass:"greyMedium my-6"}),a("div",[a("div",{staticClass:"mew-heading-3 mb-8"},[t._v("Deposit value growth forecast")]),t._l(t.depositForecast,(function(e,n){return a("div",{key:e+n,staticClass:"mb-6"},[a("v-row",[a("v-col",{staticClass:"py-1",attrs:{cols:"6",md:"6"}},[t._v(t._s(e.duration))]),a("v-col",{staticClass:"py-1 text-right textLight--text",attrs:{cols:"6",md:"6"}},[t._v(" "+t._s(e.balanceFiat)+" ")])],1),a("v-row",[a("v-col",{staticClass:"py-1 greenPrimary--text",attrs:{cols:"6",md:"6"}},[t._v(t._s(e.earningsETH+" ETH"))]),a("v-col",{staticClass:"py-1 text-right",attrs:{cols:"6",md:"6"}},[t._v(t._s(e.balanceETH+" ETH"))])],1)],1)}))],2)],1),t._m(0),a("mew-button",{staticClass:"mx-auto d-block mt-9",attrs:{loading:!1,"has-full-width":t.$vuetify.breakpoint.smAndDown,"btn-size":"xlarge",title:t.buttonText,disabled:!t.hasEnoughBalance},nativeOn:{click:function(e){return t.onContinue.apply(null,arguments)}}})],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"greyLight px-6 px-sm-12 py-8 mt-2 border-radius--10px"},[a("ul",{staticClass:"user-info textMedium--text"},[a("li",[t._v("Your ETH is staked with our partner Staked.us")]),a("li",[t._v("Staked.us will create and maintain Eth2 validators for you")]),a("li",[t._v("Earn up to 21% Annualized rewards")]),a("li",{staticClass:"orangePrimary--text"},[t._v(" You can neither spend nor transfer your Eth2 funds until an unknown date in the future when transfers are enabled on the Eth2 chain ")])])])}],i=a("5530"),r=(a("d3b7"),a("3ca3"),a("ddb0"),a("14d9"),a("b680"),a("901e")),o=a.n(r),c=a("2f62"),l=a("ac8e"),u=a("54c6"),d={components:{BorderBlock:function(){return a.e("chunk-4d3d9ba2").then(a.bind(null,"3b13"))}},mixins:[u["a"]],props:{currentApr:{type:String,default:""}},data:function(){return{toolTipFee:"0.75% staking fee (or 0.3 ETH, whichever is higher) is covering staking until transfers are enabled on Eth2. Once transfers are enabled, you will have a choice to either continue staking your ETH for an additional fee, or withdraw your ETH and earned rewards and stop staking.",amount:0,selectedItem:{}}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["d"])("wallet",["web3"])),Object(c["c"])("wallet",["balanceInETH"])),Object(c["c"])("external",["fiatValue"])),Object(c["c"])("global",["network","getFiatValue"])),{},{networkImg:function(){return this.network.type.icon},buttonText:function(){return this.hasEnoughBalance?"Next: Eth2 address":"Not enough funds"},currentAprFormatted:function(){return this.currentApr>0?Object(l["g"])(this.currentApr).value:"--"},selectItems:function(){for(var t=[],e=1;e<=4e3;e++)e%32===0&&t.push({name:e+" ETH",value:e+"",img:this.networkImg,price:this.getFiatValue(new o.a(e).times(this.fiatValue))});return t},errorMessages:function(){return this.hasEnoughBalance?null:"Not enough funds. Staking requires 32 ETH per validator."},hasEnoughBalance:function(){return o()(this.balanceInETH).gte(this.amount)},depositForecast:function(){var t=this.getEarnings(3),e=this.getEarnings(12),a=this.getEarnings(24);return[{duration:"In 3 months",balanceFiat:this.getFiatValue(new o.a(this.amount).plus(t).times(this.fiatValue)),balanceETH:Object(l["c"])(new o.a(this.amount).plus(t)).value,earningsETH:Object(l["c"])(t).value},{duration:"In 1 year",balanceFiat:this.getFiatValue(new o.a(this.amount).plus(e).times(this.fiatValue)),balanceETH:Object(l["c"])(new o.a(this.amount).plus(e)).value,earningsETH:Object(l["c"])(e).value},{duration:"In 2 years",balanceFiat:this.getFiatValue(new o.a(this.amount).plus(a).times(this.fiatValue)),balanceETH:Object(l["c"])(new o.a(this.amount).plus(a)).value,earningsETH:Object(l["c"])(a).value}]}}),methods:{getEarnings:function(t){var e=new o.a(this.currentApr).dividedBy(100).times(t/12).toFixed();return new o.a(this.amount).times(e).toFixed()},onContinue:function(){this.$emit("onContinue",{onStep:1,amount:this.amount})},setAmount:function(t){this.amount=parseInt(t.value)}}},h=d,m=(a("c931"),a("2877")),p=Object(m["a"])(h,n,s,!1,null,"1d55b488",null);e["default"]=p.exports},"2fec":function(t,e,a){},c931:function(t,e,a){"use strict";a("2fec")}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-5debffda.fc6a7269.js.map