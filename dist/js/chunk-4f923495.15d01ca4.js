(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f923495"],{"2bd9":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mew-component--paper-wallet-content",staticStyle:{width:"800px"}},[t._m(0),s("div",{staticClass:"mt-12 d-flex align-center"},[s("mew-blockie",{staticClass:"mr-6",attrs:{address:t.address,width:"110px",height:"110px",flat:""}}),t._m(1)],1),s("v-divider",{staticClass:"my-6"}),s("v-container",[s("v-row",{staticClass:"align-center"},[s("v-col",{attrs:{cols:"8"}},[s("div",{staticClass:"mew-heading-1 font-weight-black text-uppercase"},[t._v(" My wallet address ")]),s("div",{staticClass:"mew-heading-3 mew-address font-weight-bold mt-4"},[t._v(" "+t._s(t.getChecksumAddressString)+" ")])]),s("v-col",{staticClass:"ml-auto",attrs:{cols:"auto"}},[s("qr-code",{attrs:{data:t.address,height:140,width:140}})],1)],1),t.showPrivateKey?s("v-row",[s("v-col",{staticClass:"mr-auto",attrs:{cols:"12",md:"8"}},[s("div",{staticClass:"mew-heading-1 font-weight-black text-uppercase redPrimary--text"},[s("v-icon",{attrs:{color:"redPrimary"}},[t._v("mdi-alert")]),t._v(" My Private Key ")],1),s("div",{staticClass:"font-weight-black redPrimary--text mt-2"},[t._v(" You might LOSE your MONEY if you share this Private Key with anyone! KEEP YOUR PRIVATE KEY IN SAFE PLACE! ")]),s("div",{staticClass:"mew-heading-3 mew-address font-weight-bold word-break--break-all mt-4"},[t._v(" "+t._s(t.key)+" ")])]),s("v-col",{attrs:{cols:"auto"}},[s("qr-code",{attrs:{data:t.key,height:140,width:140,"type-number":10}})],1)],1):t._e()],1),s("v-divider",{staticClass:"my-6"})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-space-between align-start"},[a("div",{staticClass:"d-flex align-center"},[a("img",{attrs:{height:"35",src:s("2e0a")}}),a("div",{staticClass:"greenPrimary--text"},[a("span",{staticClass:"mx-3"},[t._v("|")]),t._v("Paper Wallet ")])]),a("div",[a("div",{staticClass:"d-flex align-center mr-3 mb-2"},[a("img",{staticClass:"mr-2",attrs:{height:"20",src:s("2ca3")}}),a("div",[t._v("support@myetherwallet.com")])]),a("div",{staticClass:"d-flex align-center mr-3"},[a("img",{staticClass:"mr-2",attrs:{height:"20",src:s("2ca3")}}),a("div",[t._v("https://www.myetherwallet.com")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"max-width":"400px"}},[s("div",{staticClass:"mew-heading-1 font-weight-black text-uppercase mb-2"},[t._v(" My address icon ")]),s("div",[t._v(" Always look for the icon when sending to this wallet. And please keep your paper wallet at a "),s("span",{staticClass:"text-uppercase redPrimary--text font-weight-medium"},[t._v(" Safe Place! ")])])])}],r=s("5530"),n=s("2f62"),c=s("d6fd"),d={name:"BalanceAddressPaperWallet",data:function(){return{}},computed:Object(r["a"])(Object(r["a"])({},Object(n["d"])("wallet",["address","instance","isHardware"])),{},{key:function(){return this.showPrivateKey?this.instance.getPrivateKeyString():null},getChecksumAddressString:function(){return this.address?Object(c["b"])(this.address):""},showPrivateKey:function(){return!this.instance.isPubOnly}})},l=d,o=s("2877"),u=Object(o["a"])(l,a,i,!1,null,null,null);e["default"]=u.exports},"2ca3":function(t,e,s){t.exports=s.p+"img/icon-support.fadaebc3.svg"},"2e0a":function(t,e,s){t.exports=s.p+"img/logo-mew-dark.5d962d4e.png"},d6fd:function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return n}));var a=s("99e5"),i=s.n(a),r=function(t){return t&&i.a.utils.isHexStrict(t)&&i.a.utils.isAddress(t)},n=function(t){return i.a.utils.toChecksumAddress(t)}}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-4f923495.15d01ca4.js.map