(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae9a1"],{"0b81":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mew-overlay",{attrs:{footer:{text:"Need help?",linkTitle:"Contact support",link:"mailto:support@myetherwallet.com"},"show-overlay":e.onRegister,title:e.$t("ens.register-domain"),"content-size":"xlarge",close:e.close}},[n("mew-stepper",{attrs:{items:e.stepperItems,"on-step":e.onStep},scopedSlots:e._u([{key:"stepperContent1",fn:function(){return[1===e.onStep?n("request",{staticClass:"mt-3",attrs:{name:e.name,"host-name":e.parsedHostName,loading:e.checkingDomainAvail,"get-rent-price":e.getRentPrice},on:{onRequest:e.onRequest}}):e._e()]},proxy:!0},{key:"stepperContent2",fn:function(){return[2===e.onStep?n("register",{staticClass:"mt-3",attrs:{name:e.name,duration:e.duration,register:e.register,"not-enough-funds":e.notEnoughFunds,"no-funds-for-reg-fees":e.noFundsForRegFees,"commit-fee-in-eth":e.commitFeeInEth,"commit-fee-in-wei":e.commitFeeInWei,"commit-fee-usd":e.commitFeeUsd,"total-cost":e.totalCost,"total-cost-usd":e.totalCostUsd,"waiting-for-reg":e.waitingForReg,commit:e.commit,committed:e.committed,"minimum-age":e.minimumAge,"loading-commit":e.loadingCommit,"loading-reg":e.loadingReg}}):e._e()]},proxy:!0},{key:"stepperContent3",fn:function(){return[3===e.onStep?n("complete"):e._e()]},proxy:!0}])})],1)},i=[],a=n("5530"),r=(n("d3b7"),n("3ca3"),n("ddb0"),n("25f0"),n("14d9"),n("901e")),s=n.n(r),u=n("2f62"),l=n("db3a"),c={components:{Request:function(){return n.e("chunk-2d0e88dc").then(n.bind(null,"8a85"))},Register:function(){return n.e("chunk-700c0d56").then(n.bind(null,"58b8"))}},props:{getRentPrice:{default:function(){return{}},type:Function},commit:{default:function(){return{}},type:Function},onRegister:{default:!1,type:Boolean},close:{default:function(){return{}},type:Function},register:{default:function(){return{}},type:Function},generateKeyPhrase:{default:function(){return{}},type:Function},waitingForReg:{default:!1,type:Boolean},notEnoughFunds:{default:!1,type:Boolean},noFundsForRegFees:{default:!1,type:Boolean},commitFeeInWei:{type:String,default:""},commitFeeInEth:{type:String,default:""},commitFeeUsd:{type:String,default:""},totalCost:{type:String,default:""},totalCostUsd:{type:String,default:""},loadingCommit:{default:!1,type:Boolean},loadingReg:{default:!1,type:Boolean},committed:{default:!1,type:Boolean},minimumAge:{default:"",type:String},name:{default:"",type:String},parsedHostName:{default:"",type:String},checkingDomainAvail:{default:!1,type:Boolean}},data:function(){return{duration:1,onStep:1,stepperItems:[{step:1,name:"STEP 1. Select Duration"},{step:2,name:"STEP 2. Create Commitment"},{step:3,name:"STEP 3. Complete registration"}]}},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(u["c"])("global",["network","gasPrice","gasPriceByType"])),Object(u["c"])("external",["fiatValue"])),Object(u["d"])("wallet",["balance","address","web3"])),Object(u["d"])("global",["gasPriceType"])),balanceToWei:function(){return this.web3.utils.toWei(s()(this.balance).toString(),"ether")},watch:{onStep:function(e){2==e?this.$router.push({name:l["b"].ENS_2.NAME}):3==e?this.$router.push({name:l["b"].ENS_3.NAME}):this.$router.push({name:l["b"].ENS_MANAGER.NAME})}},mounted:function(){1==this.onStep&&this.$router.push({name:l["b"].ENS_1.NAME})},methods:{onRequest:function(e){this.duration=e,this.generateKeyPhrase(),this.$emit("getCommitFeeOnly"),this.onStep+=1}}},m=c,p=n("2877"),d=Object(p["a"])(m,o,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-2d0ae9a1.2c7d058d.js.map