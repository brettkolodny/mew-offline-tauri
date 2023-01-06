(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dapp-staked~f71cff67"],{"0143":function(t,e,a){t.exports=a.p+"img/icon-dapp-stake.21f5fa37.svg"},"1f5f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("the-wrapper-dapp",{attrs:{"is-new-header":!0,"dapp-img":t.headerImg,"banner-text":t.header,"tab-items":t.tabs,"active-tab":t.activeTab,"external-contents":"","on-tab":t.tabChanged,"valid-networks":t.validNetworks},scopedSlots:t._u([{key:"HeaderBody",fn:function(){return[a("v-divider",{staticClass:"textMedium my-3"}),a("div",{staticClass:"d-flex flex-wrap align-center justify-center"},[a("div",{staticClass:"text-uppercase textMedium--text font-weight-bold"},[t._v(" Total Staked: "),a("span",{staticClass:"greenPrimary--text"},[t._v(t._s(t.totalStaked))])]),a("v-icon",{attrs:{color:"textMedium"}},[t._v("mdi-circle-medium")]),a("div",{staticClass:"text-uppercase textMedium--text font-weight-bold"},[t._v(" Current APR: "),a("span",{staticClass:"greenPrimary--text"},[t._v(t._s(t.currentAprFormatted))])])],1),a("v-btn-toggle",{staticClass:"d-flex align-center justify-center mt-3 white--text",attrs:{mandatory:"",borderless:"","active-class":"expandHeader font-weight-bold","background-color":"transparent"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[a("v-btn",{staticClass:"px-md-9 white--text text-transform--initial",class:0===t.activeTab?"staked-tab-active":"staked-tab-inactive",attrs:{color:""}},[t._v(" New stake ")]),a("v-btn",{class:["px-md-9 white--text text-transform--initial d-flex  flex-column align-center",1===t.activeTab?"staked-tab-active":"staked-tab-inactive"],attrs:{color:""}},[a("div",[a("div",{class:["white--text",1===t.activeTab?"font-weight-medium":""]},[t._v(" My stake ")]),t.loadingValidators?t._e():a("div",{staticClass:"mew-caption textLight--text"},[t._v(" "+t._s(t.loadingValidators?"--":t.myETHTotalStaked)+" ")])])])],1)]},proxy:!0},{key:"HeaderRight",fn:function(){return[a("div",{staticClass:"text-right"},[a("a",{staticClass:"greenPrimary--text font-weight-medium text-right",attrs:{href:t.getArticle("stake-eth2-mew-web"),target:"_blank"}},[t._v(" New to staking? Learn more "),a("v-icon",{staticClass:"ml-1",attrs:{small:"",color:"greenPrimary"}},[t._v("mdi-open-in-new")])],1)])]},proxy:!0},{key:"tabContent1",fn:function(){return[a("v-sheet",{staticClass:"mx-auto",attrs:{"min-height":"500px","max-width":"700px",color:"transparent"}},[a("staked-stepper",{ref:"stakedStepper",attrs:{"current-apr":t.handlerStaked.apr,"start-provision":t.startProvision,"polling-status":t.pollingStatus},on:{readyToStake:t.sendTransaction}})],1)]},proxy:!0},{key:"tabContent2",fn:function(){return[a("v-sheet",{staticClass:"py-13 mx-auto",attrs:{"min-height":"500px","max-width":"700px",color:"transparent"}},[a("staked-status",{attrs:{"tx-receipt":t.handlerStaked.txReceipt,"pending-hash":t.pendingTxHash,validators:t.validators,loading:t.loadingValidators,amount:t.amount}})],1)]},proxy:!0}])})},s=[],i=a("5530"),r=(a("d3b7"),a("3ca3"),a("ddb0"),a("4de4"),a("b0c0"),a("2f62")),o=a("4223"),d={STAKED:{NAME:"Staked",PATH:"staked"},STATUS:{NAME:"StakedStatus",PATH:"status"}},c=a("ac8e"),u=a("4a2b"),l={name:"TheStakedLayout",components:{TheWrapperDapp:function(){return a.e("chunk-2c911ea0").then(a.bind(null,"580f"))},StakedStepper:function(){return a.e("chunk-2d21ea8e").then(a.bind(null,"d705"))},StakedStatus:function(){return a.e("chunk-04960302").then(a.bind(null,"db07"))}},data:function(){return{validNetworks:o["a"],headerImg:a("0143"),amount:0,header:{title:"Ethereum 2.0 staking",subtext:"Stake on Ethereum 2.0 and earn continuous rewards for providing a public good to the community.",subtextClass:"textMedium--text"},activeTab:0,handlerStaked:{},tabs:[{name:"Stake",route:{name:d.STAKED.NAME},id:0},{name:"Status",route:{name:d.STATUS.NAME,path:d.STATUS.PATH},id:1}]}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(r["d"])("wallet",["web3","address"])),Object(r["c"])("global",["network"])),Object(r["c"])("article",["getArticle"])),{},{myETHTotalStaked:function(){return Object(c["c"])(this.handlerStaked.myETHTotalStaked).value+" ETH"},totalStaked:function(){return Object(c["c"])(this.handlerStaked.totalStaked).value+" ETH"},currentAprFormatted:function(){return this.handlerStaked.apr>0?Object(c["g"])(this.handlerStaked.apr).value:"--"},pollingStatus:function(){return this.handlerStaked.pollingStatus},validators:function(){return this.handlerStaked.myValidators},loadingValidators:function(){return this.handlerStaked.loadingValidators},pendingTxHash:function(){return this.handlerStaked.pendingTxHash},isValidNetwork:function(){var t=this.network.type.chainID,e=this.validNetworks.filter((function(e){return e.chainID===t}));return e.length>0}}),watch:{$route:function(){this.detactUrlChangeTab()},pendingTxHash:function(t){""!==t&&(this.activeTab=1),this.$refs.stakedStepper&&this.$refs.stakedStepper.reset()},address:function(t){this.handlerStaked.address=t,this.$refs.stakedStepper&&this.$refs.stakedStepper.reset()}},mounted:function(){this.detactUrlChangeTab(),this.isValidNetwork&&(this.handlerStaked=new u["c"](this.web3,this.network,this.address))},methods:{detactUrlChangeTab:function(){var t=this.$route.name;t===d.STATUS.NAME?this.activeTab=this.tabs[1].id:this.activeTab=this.tabs[0].id},tabChanged:function(t){this.activeTab=t},startProvision:function(t){return this.handlerStaked.startProvision(t)},sendTransaction:function(t){this.handlerStaked.sendTransaction(),this.amount=t}}},h=l,p=(a("9847"),a("2877")),v=Object(p["a"])(h,n,s,!1,null,"d8d06fae",null);e["default"]=v.exports},"4a2b":function(t,e,a){"use strict";(function(t){a.d(e,"a",(function(){return m})),a.d(e,"b",(function(){return k})),a.d(e,"c",(function(){return g}));var n=a("c7eb"),s=a("1da1"),i=a("d4ec"),r=a("bee2"),o=(a("b0c0"),a("d3b7"),a("25f0"),a("b680"),a("99af"),a("bc3a")),d=a.n(o),c=a("901e"),u=a.n(c),l=a("7f65"),h=a("8e50"),p=a("9b88"),v=a("5ba3"),f=a("2623"),b=[{inputs:[],name:"get_deposit_count",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"view",type:"function"}],m=[{inputs:[{internalType:"uint256",name:"numValidators",type:"uint256"}],name:"getFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],k={PENDING:"pending",ACTIVE:"active",CREATED:"created",DEPOSITED:"deposited",FAILED:"failed",EXITED:"exited"},g=function(){function e(t,a,n){Object(i["a"])(this,e),this.web3=t,this.network=a,this.address=n,this.totalStaked="",this.apr="",this.validatorsCount="",this.pollingStatus={},this.transactionData={},this.myValidators=[],this.loadingValidators=!1,this.myETHTotalStaked=0,this.pendingTxHash="",this.txReceipt=!1,this.endpoint=l["a"].network[this.network.type.name].endpoint,this.getTotalStakedAndAPR(),this.getValidators()}return Object(r["a"])(e,[{key:"getTotalStakedAndAPR",value:function(){var e=this;this.eth2ContractAddress=l["a"].network[this.network.type.name].depositAddress;var a=new this.web3.eth.Contract(b,this.eth2ContractAddress);a.methods.get_deposit_count().call().then((function(a){var n=Object(v["toBN"])("0x"+t.from(a.substr(2),"hex").reverse().toString("hex"));e.totalStaked=n.muln(32).toString(),e.apr=new u.a(Object(h["a"])({totalAtStake:e.totalStaked})).times(100).toFixed()})).catch((function(t){Object(p["d"])(t,{},p["a"])}))}},{key:"getValidators",value:function(){var t=this;return this.loadingValidators=!0,d.a.get("".concat(this.endpoint,"/history?address=").concat(this.address),{header:{"Content-Type":"application/json"}}).then((function(e){t.myValidators=e.data,t.myETHTotalStaked=e.data.reduce((function(e,a){var n=a.raw[0],s=n.status.toLowerCase()===k.ACTIVE&&n.balance?t.convertToEth1(n.balance).toFixed():0;return new u.a(e).plus(s)}),0),t.loadingValidators=!1})).catch((function(e){t.loadingValidators=!1,t.myValidators=[],e.response&&404===e.response.status&&"No matching history found"===e.response.data.msg||Object(p["d"])(e,{},p["a"])}))}},{key:"startProvision",value:function(){var t=Object(s["a"])(Object(n["a"])().mark((function t(e){var a=this;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.validatorsCount=e.count,t.next=3,d.a.post(this.endpoint+"/provision",{address:this.address,withdrawalKey:e.eth2Address,validatorsCount:e.count},{header:{"Content-Type":"application/json"}}).then((function(t){return t&&t.data.provisioning_request_uuid?a.startPolling(t.data.provisioning_request_uuid):Object(p["d"])(a.$t("dappsStaked.error-try-again"),{},p["a"])})).catch((function(t){a.pollingStatus={success:!1,error:t}}));case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"startPolling",value:function(t){var e=this,a=!0,n=setInterval((function(){if(a)return a=!1,d.a.get("".concat(e.endpoint,"/status?provisioning_request_uuid=").concat(t),{header:{"Content-Type":"application/json"}}).then((function(t){a=!0,t&&t.data&&t.data.raw.length===parseInt(e.validatorsCount)&&(e.pollingStatus={success:!0},e.transactionData=t.data.transaction,clearInterval(n))})).catch((function(t){a=!0,t.response&&424===t.response.status&&"Not all validators have been provisioned"===t.response.data.msg||t.response&&404===t.response.status&&"Requested provisioning_request_uuid not found"===t.response.data.msg||(e.pollingStatus={success:!1,error:t.response})}))}),5e3)}},{key:"sendTransaction",value:function(){var t=this;this.transactionData.from=this.address,this.transactionData.to=l["a"].network[this.network.type.name].batchContract,this.web3.eth.sendTransaction(this.transactionData).on("transactionHash",(function(e){t.pendingTxHash=e})).on("receipt",(function(){t.txReceipt=!0})).catch((function(t){var e=Object(f["a"])(t);e&&Object(p["d"])(t,{},p["a"])}))}},{key:"convertToEth1",value:function(t){return new u.a(t).div(new u.a(10).pow(9))}}]),e}()}).call(this,a("1c35").Buffer)},"5fa8":function(t,e,a){},"7f65":function(t,e,a){"use strict";e["a"]={network:{GOERLI:{depositAddress:"0x8c5fecdc472e27bc447696f431e425d02dd46a8c",endpoint:"https://stakedtest.mewapi.io",batchContract:"0xC2a689783Af563e79F87CbFA3a6B14E6E2e42b20",url:"https://beaconscan.com/pyrmont/validator/",etherscanTxUrl:"https://goerli.etherscan.io/tx/",etherscanAddrUrl:"https://goerli.etherscan.io/address/"},ETH:{depositAddress:"0x00000000219ab540356cBB839Cbe05303d7705Fa",endpoint:"https://staked.mewapi.io",batchContract:"0xF243A92eB7D4B4F6A00A57888B887bd01ec6fd12",url:"https://beaconscan.com/main/validator/",etherscanTxUrl:"https://etherscan.io/tx/",ethvmTxUrl:"https://www.ethvm.com/tx/",etherscanAddrUrl:"https://etherscan.io/address/",ethvmAddrUrl:"https://www.ethvm.com/address/"}}}},"8e50":function(t,e,a){"use strict";var n=function(t){var e=t.slotTimeInSec,a=void 0===e?12:e,n=t.slotsInEpoch,s=void 0===n?32:n,i=t.baseRewardFactor,r=void 0===i?64:i,o=t.totalAtStake,d=void 0===o?1e6:o,c=t.baseRewardsPerEpoch,u=void 0===c?4:c,l=t.baseRewardsPropotionalValidators,h=void 0===l?3:l,p=t.averageNetworkPctOnline,v=void 0===p?.95:p,f=t.oneSlotLatePenalty,b=void 0===f?.0156:f,m=t.vaildatorUptime,k=void 0===m?.99:m,g=t.validatorDeposit,w=void 0===g?32:g,x=31556908.8,T=x/(a*s),S=32e9*r/Math.pow(1e9*d,.5)/u,y=4*S,A=S*h*v,C=.125*S*v,E=v+v*(1-v)*(1-b)+v*Math.pow(1-v,2)*(1-2*b),_=.875*S*E,j=A+C+_,O=j*k,P=y*(1-k),H=T*(O-P);return H/1e9/w};e["a"]=n},9847:function(t,e,a){"use strict";a("5fa8")}}]);
//# sourceMappingURL=../sourcemaps/js/dapp-staked~f71cff67.29657870.js.map