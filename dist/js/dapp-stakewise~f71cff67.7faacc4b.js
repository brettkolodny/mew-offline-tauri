(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dapp-stakewise~f71cff67"],{"669a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("the-wrapper-dapp",{attrs:{"is-new-header":!0,"dapp-img":e.headerImg,"banner-text":e.header,"tab-items":e.tabs,"active-tab":e.activeTab,"valid-networks":e.validNetworks,"top-strip":""}})},i=[],n=a("5530"),r=(a("d3b7"),a("3ca3"),a("ddb0"),a("7db0"),a("b0c0"),a("14d9"),a("25f0"),a("2f62")),c=a("901e"),o=a.n(c),h=a("5ba3"),l=a("35f4"),d=a("3ca5"),u=a("ac8e"),p=a("8b76"),b={name:"TheStakewiseLayout",components:{TheWrapperDapp:function(){return a.e("chunk-2c911ea0").then(a.bind(null,"580f"))}},data:function(){return{header:{title:"Stakewise",subtext:"Stake any amount of ETH and begin earning rewards."},activeTab:0,headerImg:a("787b"),validNetworks:d["a"],stakewiseHandler:{},fetchInterval:null}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(r["d"])("wallet",["web3","address"])),Object(r["c"])("global",["isEthNetwork","network"])),{},{isSupported:function(){var e=this,t=this.validNetworks.find((function(t){return t.name===e.network.type.name}));return!!t},tabs:function(){var e=[{name:"Stake ETH",route:{name:l["a"].CORE.NAME},id:0}];return this.isEthNetwork&&e.push({name:"Compound Rewards",route:{name:l["a"].REWARDS.NAME},id:1}),e}}),watch:{$route:function(e){e.name===l["a"].REWARDS.NAME?this.activeTab=this.tabs[1].id:this.activeTab=this.tabs[0].id},web3:function(){clearInterval(this.fetchInterval),this.isSupported&&this.setup()},network:function(){clearInterval(this.fetchInterval),this.isSupported&&this.setup()}},mounted:function(){this.$route.name===l["a"].REWARDS.NAME&&(this.activeTab=this.tabs[1].id),this.isSupported&&this.setup()},beforeDestroy:function(){clearInterval(this.fetchInterval)},methods:Object(n["a"])(Object(n["a"])({},Object(r["b"])("stakewise",["setPoolSupply","setStakingFee","setValidatorApr","setRewardBalance","setStakeBalance"])),{},{setup:function(){var e=this;this.stakewiseHandler=new p["a"](this.web3,this.isEthNetwork),this.collectiveFetch(),this.fetchInterval=setInterval((function(){e.collectiveFetch()}),14e3)},collectiveFetch:function(){var e=this;Promise.all([this.stakewiseHandler.getEthPool(),this.stakewiseHandler.getStakingFee(),this.stakewiseHandler.getValidatorApr(),this.stakewiseHandler.getSethBalance(this.address),this.stakewiseHandler.getRethBalance(this.address)]).then((function(t){e.setPoolSupply(t[0]),e.setStakingFee(t[1]),e.setValidatorApr(o()(t[2]).minus(o()(t[2]).times(.1)).dp(2).toString()),e.setStakeBalance(Object(h["fromWei"])(Object(u["h"])(t[3]))),e.setRewardBalance(Object(h["fromWei"])(Object(u["h"])(t[4])))}))}})},w=b,f=a("2877"),k=Object(f["a"])(w,s,i,!1,null,null,null);t["default"]=k.exports},"787b":function(e,t,a){e.exports=a.p+"img/icon-dapp-stakewise.cc89987d.svg"}}]);
//# sourceMappingURL=../sourcemaps/js/dapp-stakewise~f71cff67.7faacc4b.js.map