(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-700c0d56"],{"38f4":function(t,e,i){"use strict";i("ec71")},"58b8":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"d-flex flex-column greyLight pa-6 rounded"},[i("div",{staticClass:"d-flex justify-space-between"},[i("span",[t._v(t._s(t.$t("ens.register.domain-name"))+":")]),i("span",{staticClass:"font-weight-medium"},[t._v(t._s(t.name))])]),i("div",{staticClass:"d-flex justify-space-between"},[i("span",[t._v(t._s(t.$t("ens.register.term"))+":")]),i("span",{staticClass:"font-weight-medium"},[t._v(t._s(1===t.duration?t.$tc("ens.commit.year",1):t.$tc("ens.commit.year",2,{duration:t.duration})))])]),t.committed||t.loadingCommit||!t.waitingForReg?t._e():i("div",{staticClass:"d-flex justify-space-between"},[i("span",[t._v("Estimated Fee:")]),i("span",{staticClass:"font-weight-medium"},[t._v(" "+t._s(t.commitFeeInEth)+" ETH ("+t._s(t.commitFeeUsd)+") ")])]),!t.committed&&t.loadingCommit&&t.waitingForReg?i("div",{staticClass:"d-flex justify-space-between"},[i("span",[t._v("Commitment Cost:")]),i("span",{staticClass:"font-weight-medium"},[t._v(" "+t._s(t.commitFeeInEth)+" ETH ("+t._s(t.commitFeeUsd)+") ")])]):t._e(),!t.committed||t.loadingCommit||t.waitingForReg?t._e():i("div",{staticClass:"d-flex justify-space-between"},[i("span",[t._v("Commitment Cost:")]),i("span",{staticClass:"font-weight-medium"},[t._v(" "+t._s(t.commitFeeInEth)+" ETH ("+t._s(t.commitFeeUsd)+") ")])]),!t.committed&&t.loadingCommit&&t.waitingForReg?i("div",{staticClass:"d-flex justify-space-between"},[i("span",{staticClass:"font-weight-medium"},[t._v(" Generating registration cost. Please wait... ")])]):t._e(),t.committed||t.loadingCommit||t.waitingForReg||t.noFundsForRegFees?t._e():i("div",{staticClass:"d-flex justify-space-between"},[i("span",[t._v("Registration Cost:")]),i("span",{staticClass:"font-weight-medium"},[t._v(" "+t._s(t.totalCost)+" ETH ("+t._s(t.totalCostUsd)+") ")])]),t.committed||t.loadingCommit||t.waitingForReg||!t.noFundsForRegFees?t._e():i("div",{staticClass:"d-flex justify-space-between"},[i("span",[t._v("Registration Cost:")]),i("span",{staticClass:"font-weight-medium"},[t._v(" Not enough funds to complete registration ")])])]),t.minimumAge||t.canRegister?i("div",{staticClass:"timer-container d-flex flex-column align-center justify-center mt-4"},[i("mew-icon",{staticClass:"canRegister ? 'disabled' : ''",attrs:{"icon-name":"clock","img-height":80}}),i("span",{staticClass:"ticket-subtitle greenPrimary--text"},[t._v(t._s(t.ticker))]),t.canRegister?t._e():i("div",{staticClass:"d-flex flex-column mt-5 justify-center align-center"},[i("span",{staticClass:"mew-heading-2"},[t._v(t._s(t.$t("ens.hang-on")))]),i("span",{staticClass:"mt-3 desc-container"},[t._v(t._s(t.$t("ens.hang-on-committing")))])]),t.canRegister?i("div",{staticClass:"d-flex flex-column mt-5 justify-center align-center"},[i("span",{staticClass:"mew-heading-2"},[t._v(t._s(t.$t("ens.register.complete-reg")))]),i("span",{staticClass:"mt-3 desc-container"},[t._v(t._s(t.$t("ens.register.complete-reg-desc")))])]):t._e()],1):t._e(),t.notEnoughFunds||t.noFundsForRegFees?i("div",[i("span",{staticClass:"balance-error d-flex mt-5 justify-center align-center"},[t._v(" Not enough balance: "),i("a",{staticClass:"link",attrs:{target:"_blank"},on:{click:t.openMoonpay}},[i("u",[t._v("Buy More Eth")])])])]):t._e(),i("div",{staticClass:"d-flex justify-center mt-6"},[i("mew-button",{attrs:{disabled:t.loadingCommit||"00:00"!==t.ticker||t.notEnoughFunds||t.noFundsForRegFees||t.loadingReg,loading:t.loadingReg,title:t.canRegister?t.$t("ens.register.name"):t.$t("ens.register.create-commitment"),"btn-size":"xlarge"},nativeOn:{click:function(e){t.canRegister?t.register(t.duration):t.commit()}}})],1)])},n=[],a=(i("a9e3"),i("99af"),i("54c6")),o={name:"EnsRegister",mixins:[a["a"]],props:{notEnoughFunds:{default:!1,type:Boolean},noFundsForRegFees:{default:!1,type:Boolean},commitFeeInEth:{type:String,default:""},commitFeeUsd:{type:String,default:""},totalCost:{type:String,default:""},totalCostUsd:{type:String,default:""},waitingForReg:{default:!1,type:Boolean},loadingCommit:{default:!1,type:Boolean},loadingReg:{default:!1,type:Boolean},committed:{default:!1,type:Boolean},name:{type:String,default:""},duration:{type:Number,default:1},minimumAge:{type:String,default:""},register:{default:function(){return{}},type:Function},commit:{default:function(){return{}},type:Function}},data:function(){return{ticker:"00:00",timer:function(){},canRegister:!1}},watch:{minimumAge:function(t){this.ticker="0".concat(t/60<10?Math.ceil(t/60):"00",":00")},loadingCommit:function(t){var e=this;if(t){clearInterval(this.timer);var i=(new Date).getTime(),s=i+1e3*this.minimumAge;this.minimumAge>0&&(this.timer=setInterval((function(){var t=(new Date).getTime(),i=s-t,n=Math.floor(i%36e5/6e4),a=Math.floor(i%6e4/1e3);e.ticker="".concat(n>=10?n:n<0?"00":"0"+n,":").concat(a>=10?a:a<0?"00":"0"+a),a<0&&clearInterval(e.timer)}),1e3))}else t?clearInterval(this.timer):(clearInterval(this.timer),this.canRegister=!0,this.ticker="00:00")}},destroyed:function(){clearInterval(this.timer)}},c=o,m=(i("38f4"),i("2877")),r=Object(m["a"])(c,s,n,!1,null,"ef1e0636",null);e["default"]=r.exports},ec71:function(t,e,i){}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-700c0d56.c68684ed.js.map