(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fb30e60"],{"28b3":function(t,e,n){},"302e":function(t,e,n){"use strict";var o=n("5530"),i=(n("b0c0"),n("9911"),n("ac1f"),n("00b4"),n("faac")),a=n.n(i),s=n("2f62");e["a"]={name:"EnkryptMarketingMixing",data:function(){return{extensionLinks:{chrome:{link:"https://chrome.google.com/webstore/detail/enkrypt/kkpllkodjeloidieedojogacfhpaihoh",img:n("6a8e")},firefox:{link:"https://chrome.google.com/webstore/detail/enkrypt/kkpllkodjeloidieedojogacfhpaihoh",img:n("7e66")},opera:{link:"https://addons.opera.com/en/extensions/details/enkrypt/",img:n("57a7")},default:{link:"https://chrome.google.com/webstore/detail/enkrypt/kkpllkodjeloidieedojogacfhpaihoh",img:n("6a8e")}}}},computed:Object(o["a"])(Object(o["a"])({},Object(s["d"])("popups",["enkryptLandingPopup"])),{},{browser:function(){var t=a.a.name.toLowerCase();return"chrome"!==t&&"firefox"!==t&&"opera"!==t?"default":t},text:function(){return"default"!==this.browser?"Install for ".concat(a.a.name):"Download Now"},browserLogo:function(){return this.extensionLinks[this.browser].img},browserLink:function(){return this.extensionLinks[this.browser].link},isMobile:function(){return this.$vuetify.breakpoint.mdAndDown}}),methods:{openEnkrypt:function(){window.open("https://www.enkrypt.com","_blank")},openMewWallet:function(){if(this.isMobile){var t=navigator.userAgent||navigator.vendor||window.opera,e=/android/i.test(t),n=/iPad|iPhone|iPod/.test(t)&&!window.MSStream;e?window.location.href="https://play.google.com/store/apps/details?id=com.myetherwallet.mewwallet":n&&(window.location.href="https://itunes.apple.com/app/id1464614025")}else window.open("https://www.mewwallet.com/","_blank")},openHelpCenter:function(){window.open("https://www.enkrypt.com","_blank")}}}},3982:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"enkrypt-not-found-snackbar"},[o("mew-popup",{staticClass:"popup",attrs:{show:t.show,"has-buttons":!1,"has-title":!1,"has-padding":!1,"left-btn":t.leftBtn,"max-width":"360","has-body-content":""}},[o("div",{staticClass:"enkrypt-not-found-content-container pb-6 px-6 height--full width--full d-flex flex-column"},[o("div",{staticClass:"d-flex align-center"},[o("img",{attrs:{alt:"enkrypt logo",src:n("8caf"),height:"20px"}})]),o("div",{staticClass:"mew-heading-4 mt-5"},[t._v(" Please install Enkrypt or enable it in your "),o("br"),t._v(" browser ")]),o("div",[o("mew-button",{staticClass:"extension-btn mt-5 text-transform--none",staticStyle:{"border-radius":"40px !important"},attrs:{"has-full-width":!0,"btn-size":"large","color-theme":"#7E44F2"},nativeOn:{click:function(e){return t.downloadAndClose.apply(null,arguments)}}},[o("img",{staticClass:"mr-3",attrs:{width:"25px",height:"25px",src:t.browserLogo}}),t._v(" "+t._s(t.text)+" ")])],1)])])],1)},i=[],a=n("302e"),s={mixins:[a["a"]],props:{show:{type:Boolean,default:!1}},data:function(){return{}},computed:{leftBtn:function(){return{text:"Cancel",color:"basic",method:this.emitClose}}},mounted:function(){},methods:{emitClose:function(){this.$emit("closeEnkryptMissingSnackbar")},downloadAndClose:function(){this.openEnkrypt(),this.emitClose()}}},r=s,l=(n("ca7c7"),n("d4a2"),n("2877")),c=Object(l["a"])(r,o,i,!1,null,"dc8b95b4",null);e["default"]=c.exports},"3b46":function(t,e,n){},"57a7":function(t,e,n){t.exports=n.p+"img/icon-opera.b4b964d2.svg"},"6a8e":function(t,e,n){t.exports=n.p+"img/icon-chrome.d60a042e.svg"},"7e66":function(t,e,n){t.exports=n.p+"img/icon-firefox.8d650c53.svg"},ca7c7:function(t,e,n){"use strict";n("28b3")},d4a2:function(t,e,n){"use strict";n("3b46")}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-2fb30e60.9a4cd279.js.map