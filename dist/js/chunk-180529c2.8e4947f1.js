(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-180529c2"],{"086a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"core-components--app-addr-qr"},[s("div",{staticClass:"mew-heading-2 mb-3"},[t._v(" "+t._s(t.$t("interface.qr.title"))+" ")]),s("div",{staticClass:"textDark--text mb-8"},[t._v(" "+t._s(t.$t("interface.qr.desc",{network:t.getNetwork()}))+" ")]),s("div",{staticClass:"d-flex align-center mb-4"},[s("mew-blockie",{attrs:{address:t.address,width:"22px",height:"22px"}}),s("div",{staticClass:"pl-1 mew-body font-weight-bold"},[t._v(" "+t._s(t.$t("interface.qr.my-main-account"))+" ")])],1),s("div",{staticClass:"wallet-card-container"},[s("img",{staticClass:"wallet-card",attrs:{src:"https://mewcard.mewapi.io/?address="+t.address,alt:"MEW Card"},on:{load:function(e){return t.animateMewCard()}}}),s("div",{staticClass:"inner-content pa-3 pa-sm-8 d-flex align-center"},[s("div",{staticClass:"white pa-1",staticStyle:{"border-radius":"7px"}},[s("qr-code",{attrs:{data:t.address,height:132,width:132}})],1),s("div",{staticClass:"pl-3"},[s("div",{staticClass:"d-block monospace textDark-text container-qr--addr BalanceCardAddress"},[t._v(" "+t._s(t.getChecksumAddressString)+" ")]),s("div",{staticClass:"d-inline-flex align-center cursor--pointer mt-4 pa-1",on:{click:t.copyAddress}},[s("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-content-copy")]),s("div",{staticClass:"ml-1 white--text"},[t._v("Copy")])],1)])])])])},c=[],i=s("5530"),d=s("1209"),r=s("f1cd"),n=s.n(r),o=s("9b88"),l=s("2f62"),u=s("d6fd"),p={computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(l["d"])("wallet",["address"])),Object(l["c"])("global",["network"])),{},{getChecksumAddressString:function(){return Object(u["b"])(this.address)}}),methods:{copyAddress:function(){n()(this.address),Object(o["d"])("Copied ".concat(this.address," successfully!"),{},o["c"])},getNetwork:function(){return this.network?this.network.type.currencyName:"ETH"},animateMewCard:function(){var t=document.querySelector(".mew-card");t.style.opacity=0,Object(d["a"])({targets:t,opacity:1,delay:1300,duration:500,easing:"easeInOutQuad"})}}},w=p,f=(s("d91f"),s("2e55"),s("2877")),m=Object(f["a"])(w,a,c,!1,null,"660bb0dd",null);e["default"]=m.exports},"2e55":function(t,e,s){"use strict";s("740c")},"4f3a":function(t,e,s){},"740c":function(t,e,s){},d91f:function(t,e,s){"use strict";s("4f3a")}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-180529c2.8e4947f1.js.map