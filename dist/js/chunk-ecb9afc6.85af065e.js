(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ecb9afc6"],{6674:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mew-stepper",{attrs:{items:t.stepperItems,"on-step":t.step},scopedSlots:t._u([1===t.step?{key:"stepperContent1",fn:function(){return[n("v-row",{staticClass:"align-start justify-space-between"},[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("div",{staticClass:"subtitle-1 font-weight-bold grey--text"},[t._v("STEP 1.")]),n("div",{staticClass:"headline font-weight-bold"},[t._v("Select your Keystore File")]),n("p",{staticClass:"mb-3 mb-sm-10 mb-md-5"},[t._v(" Please select keystore file that unlocks your wallet. ")]),n("div",{staticClass:"d-flex align-center justify-center d-sm-none"},[n("img",{staticStyle:{width:"75%"},attrs:{src:s("d731"),alt:"Keystore File"}})]),n("mew-button",{attrs:{title:"Select File","btn-style":"outline","color-theme":"primary","btn-size":"xlarge","has-full-width":!0,"shows-active-state":!0},nativeOn:{click:function(e){return t.uploadBtn.apply(null,arguments)}}}),n("input",{ref:"jsonInput",staticStyle:{display:"none"},attrs:{type:"file",name:"file"},on:{change:t.uploadFile}})],1),n("v-col",{staticClass:"d-none d-sm-flex",attrs:{cols:"12",sm:"6"}},[n("div",{staticClass:"d-flex align-start justify-sm-end"},[n("img",{staticStyle:{width:"75%"},attrs:{src:s("d731"),alt:"Keystore File"}})])])],1)]},proxy:!0}:null,2===t.step?{key:"stepperContent2",fn:function(){return[n("v-sheet",{staticClass:"border-radius--10px pa-4 pa-md-12",attrs:{color:"white"}},[n("div",{staticClass:"subtitle-1 font-weight-bold grey--text"},[t._v("STEP 2.")]),n("div",{staticClass:"headline font-weight-bold"},[t._v("Enter Password")]),n("div",{staticClass:"mb-5"},[t._v("Enter your password to unlock your wallet.")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.unlockBtn.apply(null,arguments)}}},[n("v-row",{staticClass:"align-stretch"},[n("v-col",{attrs:{cols:"12"}},[n("mew-input",{ref:"passwordInput",attrs:{label:"Enter Password",placeholder:"Enter my keystore password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[t.isUnlockingKeystore?n("v-row",{staticClass:"pt-5 pb-9",attrs:{justify:"center",align:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"greenPrimary"}}),n("p",{staticClass:"mb-0 mx-3"},[t._v(" Sit tight while we are unlocking your wallet ")])],1):n("app-btn-row",{staticClass:"pb-5",attrs:{"next-btn-text":"Access Wallet","next-btn-method":t.unlockBtn,"back-btn-method":t.backStepOne,"next-disable":!t.password}})],1)],1)],1)])]},proxy:!0}:null],null,!0)})},a=[],l=(s("d3b7"),s("3ca3"),s("ddb0"),s("9b88")),r={name:"AccessWalletKeystore",components:{AppBtnRow:function(){return s.e("chunk-2d2174d6").then(s.bind(null,"c5c1"))}},props:{handlerAccessWallet:{type:Object,default:function(){return{}}}},data:function(){return{step:1,file:{},password:"",stepperItems:[{step:1,name:"Select File"},{step:2,name:"Enter Password"}],isUnlockingKeystore:!1}},methods:{uploadFile:function(t){var e=this,s=new FileReader;s.onloadend=function(s){try{e.file=JSON.parse(s.target.result),e.step=2}catch(t){Object(l["d"])(t.message,{},l["a"])}},s.readAsBinaryString(t.target.files[0])},uploadBtn:function(){var t=this.$refs.jsonInput;t.value="",t.click()},unlockBtn:function(){var t=this;this.isUnlockingKeystore=!0,this.handlerAccessWallet.unlockKeystoreWallet(this.file,this.password).then((function(e){e&&(t.$emit("unlock"),t.isUnlockingKeystore=!1)})).catch((function(e){t.isUnlockingKeystore=!1,Object(l["d"])(e.message,{},l["a"])}))},backStepOne:function(){this.step=1,this.password="",this.$refs.passwordInput.clear()}}},i=r,o=s("2877"),c=Object(o["a"])(i,n,a,!1,null,null,null);e["default"]=c.exports},d731:function(t,e,s){t.exports=s.p+"img/keystore-file.cd9a1369.jpg"}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-ecb9afc6.85af065e.js.map