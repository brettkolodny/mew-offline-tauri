(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-838793e8"],{"168e":function(t,e,n){"use strict";n("2ba8")},"2ba8":function(t,e,n){},"95c9":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mew-component--module-side-apr pa-5 border-radius--10px box-border"},[n("div",{staticClass:"d-flex align-top justify-space-between mb-1"},[t._m(0),n("div",{staticClass:"text-right"},[n("div",{staticClass:"font-weight-bold mew-heading-3 mb-1"},[t._v(" "+t._s(t.formattedBalance)+" ")]),t.ethvmSupport?n("div",{staticClass:"textLight--text"},[t._v(" "+t._s(t.sethBalanceFiat)+" ")]):t._e()])]),t.hasStaked||t.hasPending?t._e():n("div",{staticClass:"mt-4"},[t._v(" You are currently not staking any "+t._s(t.currencyName)+". To earn rewards start staking. "),n("span",{staticClass:"greenPrimary--text cursor--pointer",on:{click:t.scrollToInput}},[t._v("Start staking")])]),t.isEthNetwork?n("div",t._l(t.stakewiseTxs.ETH,(function(e){return n("div",{key:e.hash,staticClass:"d-flex justify-space-between flex-wrap mt-4"},[n("div",{staticClass:"py-1"},[n("v-progress-circular",{staticClass:"mr-1",attrs:{indeterminate:"",color:"greenPrimary",width:2,size:20}}),t._v(" "+t._s(e.amount)+" "+t._s(t.currencyName)+" Pending ")],1),n("div",{staticClass:"greenPrimary--text font-weight-medium d-flex align-center cursor--pointer py-1",on:{click:function(n){return t.checkHash(e.hash)}}},[t._v(" View on "+t._s(t.ethvmSupport?"EthVM":"EtherScan")+" "),n("v-icon",{staticClass:"ml-1",attrs:{color:"greenPrimary",small:""}},[t._v("mdi-open-in-new")])],1)])})),0):n("div",t._l(t.stakewiseTxs.GOERLI,(function(e){return n("div",{key:e.hash,staticClass:"d-flex justify-space-between mt-4"},[n("div",[n("v-progress-circular",{staticClass:"mr-1",attrs:{indeterminate:"",color:"greenPrimary",width:2,size:20}}),t._v(" "+t._s(e.amount)+" "+t._s(t.currencyName)+" Pending ")],1),n("div",{staticClass:"greenPrimary--text font-weight-medium d-flex align-center cursor--pointer",on:{click:function(n){return t.checkHash(e.hash)}}},[t._v(" View on "+t._s(t.ethvmSupport?"EthVM":"EtherScan")+" "),n("v-icon",{staticClass:"ml-1",attrs:{color:"greenPrimary",small:""}},[t._v("mdi-open-in-new")])],1)])})),0),t.hasStaked?n("div",{staticClass:"d-flex align-center justify-space-between mt-4 flex-wrap-reverse"},[t.isEthNetwork?n("mew-button",{staticClass:"py-1",attrs:{title:"Redeem to "+t.currencyName,"btn-style":"transparent","btn-size":"small",disabled:t.enoughToCoverRedeem},nativeOn:{click:function(e){return t.executeSwap.apply(null,arguments)}}}):t._e(),n("mew-button",{staticClass:"py-1",attrs:{title:"Stake more "+t.currencyName,"btn-style":t.compoundRewards?"background":"transparent","btn-size":"small",disabled:t.enoughToCoverRedeem},nativeOn:{click:function(e){return t.scrollToInput.apply(null,arguments)}}})],1):t._e(),t.enoughToCoverRedeem?n("div",{staticClass:"mt-4 greyPrimary--text"},[t._v(" You do not have enough ETH to cover transaction fee. "),n("a",{attrs:{rel:"noopener noreferrer"},on:{click:t.openMoonpay}},[t._v(" Buy more ETH")])]):t._e()])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex align-center mt-n4"},[a("div",{staticClass:"stake-icon mr-2"},[a("img",{attrs:{src:n("247b"),alt:"Stakewise"}})]),a("div",{staticClass:"textLight--text"},[a("span",{staticClass:"textMedium--text"},[t._v("Staking")]),t._v(" - sETH2 ")])])}],i=n("5530"),r=(n("d3b7"),n("25f0"),n("159b"),n("07ac"),n("ac1f"),n("5319"),n("14d9"),n("2ef0")),c=n("2f62"),o=n("5ba3"),l=n("901e"),h=n.n(l),u=n("28f8"),d=n("573b"),m=n("35f4"),f=n("ac8e"),p=n("54c6"),v={name:"ModuleSideStaking",components:{},mixins:[p["a"]],props:{compoundRewards:{type:Boolean,default:!1},txFee:{type:String,default:""},hasEnoughBalance:{type:Boolean,default:!1}},data:function(){return{intervals:{}}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["c"])("global",["isEthNetwork","network","getFiatValue"])),Object(c["c"])("wallet",["tokensList"])),Object(c["c"])("external",["fiatValue"])),Object(c["d"])("wallet",["web3","address","balance"])),Object(c["d"])("stakewise",["stakewiseTxs","sethBalance","rethBalance"])),{},{currencyName:function(){return this.network.type.currencyName},ethvmSupport:function(){return this.network.type.isEthVMSupported.supported},enoughToCoverRedeem:function(){return!(!this.hasStaked&&!this.hasPending)&&(!this.hasEnoughBalance||!(!h()(this.rethBalance).gt(0)||!h()(this.sethBalance).gt(0))&&!h()(this.balance).gt(this.txFee))},linkUrl:function(){return this.ethvmSupport?this.network.type.isEthVMSupported.blockExplorerTX:this.network.type.blockExplorerTX},hasPending:function(){var t=this.isEthNetwork?this.stakewiseTxs.ETH:this.stakewiseTxs.GOERLI;return t.length>0},formattedBalance:function(){return Object(f["c"])(this.sethBalance).value},sethBalanceFiat:function(){return this.getFiatValue(h()(this.sethBalance).times(this.fiatValue).toString())},seth2Contract:function(){return this.isEthNetwork?u["j"]:u["i"]},hasStaked:function(){return this.ethvmSupport,h()(this.sethBalance).gt(0)}}),watch:{stakewiseTxs:{handler:function(t){var e=this,n=this.isEthNetwork?t.ETH:t.GOERLI;n.length>0&&n.forEach((function(t){e.fetcher(t.hash)}))},deep:!0},$route:{handler:function(t){var e=this;"stake"===t.query.module&&this.$nextTick((function(){e.$emit("scroll"),e.$emit("set-max")}))},deep:!0,immediate:!0}},mounted:function(){var t=this,e=this.isEthNetwork?this.stakewiseTxs.ETH:this.stakewiseTxs.GOERLI;e.length>0&&e.forEach((function(e){t.fetcher(e.hash)}))},beforeDestroy:function(){Object(r["isEmpty"])(this.intervals)&&Object.values(this.intervals).forEach((function(t){clearInterval(t)}))},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])("stakewise",["removePendingTxs","removePendingTxsGoerli","setStakeBalance"])),{},{executeSwap:function(){this.$emit("redeem-to-eth","seth",this.sethBalance)},fetchBalance:function(){var t=this,e=new this.web3.eth.Contract(d["a"],this.seth2Contract);e.methods.balanceOf(this.address).call().then((function(e){return t.setStakeBalance(Object(o["fromWei"])(e))}))},checkHash:function(t){window.open(this.linkUrl.replace("[[txHash]]",t),"_blank")},fetcher:function(t){var e=this;this.intervals[t]=setInterval((function(){e.web3.eth.getTransactionReceipt(t).then((function(n){n&&(clearInterval(e.intervals[t]),e.isEthNetwork?e.removePendingTxs(t):e.removePendingTxsGoerli(t),e.fetchBalance())}))}),1e4)},changeRoute:function(){var t=this;return new Promise((function(e){e(t.$router.push({name:m["a"].CORE.NAME,query:{module:"stake"}}))}))},scrollToInput:function(){var t=this;this.$emit("scroll"),this.changeRoute().then((function(){t.$nextTick((function(){t.$emit("set-max")}))}))}})},w=v,k=(n("168e"),n("2877")),g=Object(k["a"])(w,a,s,!1,null,"05631828",null);e["default"]=g.exports}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-838793e8.543bb78b.js.map