(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "GUC0":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert/dist/sweetalert.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});

/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style='position: fixed;z-index:10000;top:0;display:flex;justify-content: flex-end; \r\n   color: black;' [ngClass]='enter==true ? \"inner22\" : \"innerx22\"'>\r\n  <div class='inside' style='background-color: white;position: relative;min-height:100vh;'>\r\n    <div\r\n      style='z-index: 1000; position: sticky; top: 0px; background-color: white; padding:20px;display:flex;align-items: center;margin-bottom:10px;'>\r\n      <ion-icon (click)='enter=false' style='font-size:20px;margin-right:20px;cursor: pointer;'\r\n        name=\"arrow-back-outline\"></ion-icon>\r\n      <div style='font-size:14px;font-weight: bold;'>Purchase Summary</div>\r\n    </div>\r\n    <div style='width:100%;background-color: white;padding:0px 20px;'>\r\n\r\n      <div style='width:100%;display:flex;padding-bottom:20px;border-bottom:1px solid #eeeeee;margin-bottom:20px;'>\r\n        <img style='width:100px;height:100px;object-fit: cover;margin-right:20px;' src=\"{{voucher['thumbnail']}}\"\r\n          alt=\"\">\r\n        <div style='width:calc( 100% - 120px )'>\r\n          <div style='font-size:14px;'>{{voucher['name']}}</div>\r\n          <div *ngIf=\"voucher.price_now\"\r\n            style='width:100%;text-align: left;font-size:14px;font-weight: bold;margin-top:10px; display: flex; align-items: center;'>\r\n            {{((voucher.price_now + countvar())*qty) | currency:\"RM\"}}\r\n            <span *ngIf=\"var_delivery > -1\"\r\n              style=\"padding: 3px 5px; font-weight: 400; font-size: 10px; color: #f53c3c; border: 1px solid #f53c3c; margin-left: 10px; border-radius: 3px;\">\r\n              +{{ price_delivery | currency:\"RM \"}} delivery fee</span>\r\n          </div>\r\n          <div *ngIf=\"!voucher.price_now\"\r\n            style='width:100%;text-align: left;font-size:14px;font-weight: bold;margin-top:10px;'>\r\n            APPLY FOR FREE</div>\r\n\r\n          <div style='flex-wrap: wrap;display:flex;margin-top:10px;'>\r\n            <div style='font-size:12px;padding:5px 10px;margin-right:5px;margin-bottom:5px;border:1px solid #eeeeee;'>\r\n              {{qty}}&nbsp;unit{{qty>1 ? \"s\" :\"\"}}</div>\r\n            <div *ngFor='let x of var_select;let i = index'\r\n              style='font-size:12px;padding:5px 10px;margin-right:5px;margin-bottom:5px;border:1px solid #eeeeee;'>\r\n              {{voucher['variations'][i].selections[x].name}}&nbsp;(+{{voucher['variations'][i].selections[x].price |\r\n              currency:\"RM\"}})</div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div style='margin-left:0px;margin-bottom:30px;'>\r\n        <div style='font-size:12px;color:#999999;margin-left:0px;margin-bottom:5px;'>Buyer Name (eg. John Smith)</div>\r\n        <ion-input [(ngModel)]=\"name\"\r\n          style='--padding-start:10px;--padding-end:10px;font-size:14px;color:#333333;--background: #f7f9fd;'\r\n          placeholder=\"enter your name\"></ion-input>\r\n      </div>\r\n\r\n      <div style='margin-left:0px;margin-bottom:30px;'>\r\n        <div style='font-size:12px;color:#999999;margin-left:0px;margin-bottom:5px;'>Phone Number (eg. 60123268301)\r\n        </div>\r\n        <ion-input [(ngModel)]=\"contact\" type='tel' maxlength=\"15\"\r\n          style='--padding-start:10px;--padding-end:10px;font-size:14px;color:#333333;--background: #f7f9fd;'\r\n          placeholder=\"enter your phone number\"></ion-input>\r\n      </div>\r\n\r\n      <div style='margin-left:0px;margin-bottom:30px;'>\r\n        <div style='font-size:12px;color:#999999;margin-left:0px;margin-bottom:5px;'>Email Address (eg.\r\n          johnsmith@email.com)</div>\r\n        <ion-input [(ngModel)]=\"email\" type='email'\r\n          style='--padding-start:10px;--padding-end:10px;font-size:14px;color:#333333;--background: #f7f9fd;'\r\n          placeholder=\"enter your email address\"></ion-input>\r\n      </div>\r\n\r\n      <div *ngIf=\"lengthof(delivery)\" style='margin-left:0px;margin-bottom:30px;'>\r\n        <div style='font-size:12px;color:#999999;margin-left:0px;margin-bottom:5px;'>Delivery Place</div>\r\n        <div style='width:100%;display:flex;flex-wrap: wrap; margin-top: 10px;'>\r\n          <div (click)='deliverer(x, i)' *ngFor='let x of deliveryrr; let i = index'\r\n            [ngStyle]='{\"border\":var_delivery == i ? \"1px solid #f53c3c\" : \"1px solid #999999\" ,\r\n            \"color\":var_delivery == i ? \"#f53c3c\" : \"#999999\",\"background-color\":var_delivery == i ? \"rgba(192,82,84, 0.05)\" : \"white\" }'\r\n            style='padding:5px 10px;margin-right:10px;margin-bottom:10px;cursor: pointer;font-size:12px;border-radius:5px;'>\r\n            {{x}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"voucher.address\" style='margin-left:0px;margin-bottom:30px;'>\r\n        <div style='font-size:12px;color:#999999;margin-left:0px;margin-bottom:5px;'>Delivery Address</div>\r\n        <ion-input [(ngModel)]=\"address\"\r\n          style='--padding-start:10px;--padding-end:10px;font-size:14px;color:#333333;--background: #f7f9fd;'\r\n          placeholder=\"enter your delivery address\"></ion-input>\r\n      </div>\r\n\r\n      <div *ngIf=\"voucher.address\" style='width:100%;;display:flex;align-items: center;margin-bottom:30px;'>\r\n\r\n        <div style='margin-left:0px;margin-right:20px;width:calc( ( 100% - 20px ) / 2 );'>\r\n          <div style='font-size:12px;color:#999999;margin-left:0px;margin-bottom:5px;'>Postcode</div>\r\n          <ion-input [(ngModel)]=\"postcode\"\r\n            style='--padding-start:10px;--padding-end:10px;font-size:14px;color:#333333;--background: #f7f9fd;'\r\n            placeholder=\"enter your postcode\"></ion-input>\r\n        </div>\r\n\r\n        <div style='margin-left:0px;width:calc( ( 100% - 20px ) / 2 );'>\r\n          <div style='font-size:12px;color:#999999;margin-left:0px;margin-bottom:5px;'>City</div>\r\n          <ion-input [(ngModel)]=\"city\"\r\n            style='--padding-start:10px;--padding-end:10px;font-size:14px;color:#333333;--background: #f7f9fd;'\r\n            placeholder=\"enter your city\"></ion-input>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div *ngIf=\"voucher.address\" style='width:100%;;display:flex;align-items: center;margin-bottom:30px;'>\r\n\r\n        <div style='margin-left:0px;margin-right:20px;width:calc( ( 100% - 20px ) / 2 );'>\r\n          <div style='font-size:12px;color:#999999;margin-left:0px;margin-bottom:5px;'>State</div>\r\n          <ion-input [(ngModel)]=\"state\"\r\n            style='--padding-start:10px;--padding-end:10px;font-size:14px;color:#333333;--background: #f7f9fd;'\r\n            placeholder=\"enter your state\"></ion-input>\r\n        </div>\r\n      </div> -->\r\n\r\n      <div style='margin-left:0px;margin-bottom:30px;'>\r\n        <div style='font-size:12px;color:#999999;margin-left:0px;margin-bottom:5px;'>Remark</div>\r\n        <ion-textarea [(ngModel)]=\"remark\" type='text' row='6'\r\n          style='--padding-start:10px;--padding-end:10px;font-size:14px;color:#333333;--background: #f7f9fd;'\r\n          placeholder=\"{{voucher.remark}}\"></ion-textarea>\r\n      </div>\r\n\r\n      <div style='font-size:12px;color:#999999;'>Order summary and payment receipt will be sent to your email address\r\n        upon successful payment. Please make sure all the above information is correct.</div>\r\n\r\n      <div style='font-size:12px;color:#999999;margin-top:20px;padding-bottom :30px;'>By placing the order, you've\r\n        agreed to our vsnap's&nbsp;<span (click)=\"outside('refund')\" style='color:#525dc2'>Refund\r\n          Policy</span>&nbsp;and&nbsp;<span (click)=\"outside('terms')\" style='color:#525dc2'>Terms & Conditions</span>\r\n      </div>\r\n\r\n    </div>\r\n    <div (click)=\"buys()\"\r\n      style='z-index: 1000; position: sticky;bottom:0px;left:0;display:flex;justify-content: center;align-items: center;height:80px;width:calc( 100%  );background-color: white;'>\r\n      <div\r\n        style='z-index: 1000; padding:10px 20px;background-color: #f53c3c;color:white;text-align: center;font-size:16px;cursor: pointer;'>\r\n        PLACE ORDER</div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"animer > 5\" style='--background:#f7f9fd;'>\r\n\r\n  <div\r\n    [ngStyle]=\"{'padding-left' : widther(900)==true ? ' calc( ( 100vw - 900px ) / 2 )' : '0px','padding-right' : widther(900)==true ? ' calc( ( 100vw - 900px ) / 2 )' : '0px' }\"\r\n    style='width:100vw;background-color:#f7f9fd;'>\r\n\r\n    <div\r\n      style='width:100%;display:flex;align-items: center;justify-content: space-between;padding:0px 20px;background-color:white;border-bottom:1px solid #eeeeee;height:70px;'>\r\n      <img (click)='tomain()' style='height:30px;object-fit: contain;cursor: pointer;'\r\n        src=\"https://i.imgur.com/pEyI97C.png\" alt=\"\">\r\n      <div *ngIf='user == influencer.id' (click)=\"store(influencer.id)\"\r\n        style='display:flex;align-items: center;justify-content: flex-end;'>\r\n        <img style='height:40px;width:40px;object-fit: cover;border-radius:100%;'\r\n          src=\"{{influencer['photo'] ? (stringornot(influencer['photo']) ? influencer['photo'] : influencer['photo'][0] ) : 'https://i.imgur.com/GvrNqUS.png' }}\"\r\n          alt=\"\">\r\n        <div style='margin-left:10px;cursor: pointer;'>\r\n\r\n          <div\r\n            style='font-size:14px;color:#333333;background-color:white;margin-right:20px;text-align: left;font-weight: bold;'>\r\n            {{influencer['name']}}</div>\r\n          <div style='font-size:12px;color:#999999;margin-top:2px;'>Visit my store ></div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf='widther(600)==true' style='width:100%;display:flex;background-color: white;'>\r\n\r\n      <div style='width:40%;display:flex;justify-content: center;align-items: flex-start;padding:20px;'>\r\n        <ion-slides *ngIf=\"lengthof(voucher['photo']) > 0\"\r\n          style='max-width:calc( 360px - 40px  );max-height:calc( 360px - 40px  );width:calc( 40vw - 40px  );height:calc( 40vw - 40px );'\r\n          pager=\"true\">\r\n          <ion-slide\r\n            *ngFor='let x of (voucher[\"photo\"] || [\"http://www.wpkube.com/wp-content/uploads/2019/02/503-unavailable-error-wpk.jpg\"])'\r\n            style='max-width:calc( 360px - 40px  );max-height:calc( 360px - 40px  );width:calc( 40vw - 40px  );height:calc( 40vw - 40px  );position: relative;background-color: black;'>\r\n            <img style='width:100%;height:100%;object-fit: contain;position: absolute;z-index:10;' src=\"{{x.url}}\"\r\n              alt=\"\">\r\n            <img style='width:100%;height:100%;object-fit: cover;opacity: 0.5;filter: blur(2px);' src=\"{{x.url}}\"\r\n              alt=\"\">\r\n          </ion-slide>\r\n        </ion-slides>\r\n\r\n        <div *ngIf=\"lengthof(voucher['photo']) == 0\"\r\n          style='max-width:calc( 360px - 40px  );max-height:calc( 360px - 40px  );width:calc( 40vw - 40px  );height:calc( 40vw - 40px  );position: relative;background-color: black;'>\r\n          <img style='width:100%;height:100%;object-fit: contain;position: absolute;z-index:10;'\r\n            src=\"{{voucher.thumbnail}}\" alt=\"\">\r\n          <img style='width:100%;height:100%;object-fit: cover;opacity: 0.5;filter: blur(2px);'\r\n            src=\"{{voucher.thumbnail}}\" alt=\"\">\r\n        </div>\r\n      </div>\r\n\r\n      <div style='width:60%;padding:20px 20px;'>\r\n        <div style='font-size:14px;color:#999999;'>{{vendor.name}}'s</div>\r\n        <div\r\n          style='font-size:18px;font-weight: bold;margin-bottom:30px;margin-top:5px;line-height: 35px;;color:#333333;'>\r\n          {{voucher.name}}</div>\r\n\r\n        <div style='margin-left:0px;display:flex;align-items: center;'>\r\n          <div *ngIf=\"voucher.price_now\" style='font-size:16px;color:#f53c3c;font-weight: bold;'>{{((voucher.price_now +\r\n            countvar())*qty) | currency:\"RM\"}}</div>\r\n          <div *ngIf=\"!voucher.price_now\" style='font-size:16px;color:#f53c3c;font-weight: bold;'>APPLY FOR FREE</div>\r\n          <div *ngIf='voucher.price_ori && voucher.price_ori>voucher.price_now'\r\n            style='display:flex;align-items: center;margin-left:10px;'>\r\n            <div style='font-size:12px;color:#999999;text-decoration: line-through;'>&nbsp;{{voucher.price_ori |\r\n              currency:\"RM\"}}&nbsp;</div>\r\n            <!-- <div style='font-size:12px;color:#f53c3c;margin-left:10px;font-weight: bold;'>RM20 OFF</div> -->\r\n          </div>\r\n        </div>\r\n\r\n        <div (click)='donatecsr2021()' *ngIf=\"voucher['tag']=='CSR2021'\"\r\n          style='margin-top:10px;;padding:7px 15px;width:max-content;font-size:14px;color:white;background-color: #8a1515;'>\r\n          Donate to Fight2021</div>\r\n\r\n\r\n        <div *ngFor='let eve of (voucher[\"variations\"] || []);let i = index' style='width:100%;margin-top:15px;'>\r\n          <div style='font-size:12px;color:#999999;margin-bottom:5px;'>{{eve.name}}</div>\r\n          <div style='width:100%;display:flex;flex-wrap: wrap;'>\r\n            <div (click)='var_select[i]=j' *ngFor='let y of eve[\"selections\"];let j = index'\r\n              [ngStyle]='{\"border\":var_select[i]==j ? \"1px solid #f53c3c\" : \"1px solid #999999\" ,\"color\":var_select[i]==j ? \"#f53c3c\" : \"#999999\",\"background-color\":var_select[i]==j ? \"rgba(192,82,84, 0.05)\" : \"white\" }'\r\n              style='padding:5px 10px;margin-right:10px;margin-bottom:10px;cursor: pointer;font-size:12px;border-radius:5px;'>\r\n              {{y.name}}&nbsp;(+&nbsp;{{y.price | currency: \"RM\"}})</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div style='width:100%;margin-top:30px;display:flex;align-items: center;'>\r\n\r\n          <div style='display:flex;align-items: center;justify-content: center;margin-right:20px;'>\r\n            <div (click)=\"qty>1 ? qtyr(-1) : qty\"\r\n              style='cursor: pointer;width:30px;height:30px;border:1px solid #999999;display:flex;justify-content: center;align-items: center;'>\r\n              <div style='font-size:16px;color:#999999'>-</div>\r\n            </div>\r\n            <div\r\n              style='width:50px;height:30px;font-size:14px;color:#333333;text-align: center;display:flex;justify-content: center;align-items: center;'>\r\n              {{qty}}</div>\r\n            <div (click)='qtyr(+1)'\r\n              style='cursor: pointer;;width:30px;height:30px;border:1px solid #999999;display:flex;justify-content: center;align-items: center;'>\r\n              <div style='font-size:16px;color:#999999'>+</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"voucher.status\" (click)='enter=true'\r\n            style='padding:10px 30px;background-color: #f53c3c;color:white;font-size:14px;width: max-content;cursor: pointer;border-radius:5px;'>\r\n            BUY NOW</div>\r\n\r\n          <div *ngIf=\"!voucher.status\"\r\n            style='padding:10px 30px;background-color: #f53c3c;color:white;font-size:14px;width: max-content;cursor: pointer;border-radius:5px;'>\r\n            SOLD OUT</div>\r\n\r\n          <!-- <div style='margin-left:20px;'>\r\n            <div style='font-size:16px;font-weight: bold;'>RM120.00</div>\r\n            <div style='display:flex;align-items: center;margin-top:5px;'>\r\n              <div style='font-size:12px;color:#999999;text-decoration: line-through;'>&nbsp;RM120.00&nbsp;</div>\r\n              <div style='font-size:12px;color:#f53c3c;margin-left:10px;font-weight: bold;'>RM20 OFF</div>\r\n            </div>\r\n          </div> -->\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div *ngIf='widther(600)==false' style='width:100%;background-color: white;'>\r\n\r\n      <div style='width:100%;display:flex;justify-content: center;align-items: flex-start;padding:20px;height:75vw;'>\r\n        <ion-slides *ngIf=\"lengthof(voucher['photo']) > 0\" style='max-width:100%;max-height:100%;width:100%;height:100%'\r\n          pager=\"true\">\r\n          <ion-slide\r\n            *ngFor='let x of (voucher[\"photo\"] || [\"http://www.wpkube.com/wp-content/uploads/2019/02/503-unavailable-error-wpk.jpg\"])'\r\n            style='max-width:100%;max-height:100%;width:100%;height:100%;position: relative;background-color: black;'>\r\n            <img style='width:100%;height:100%;object-fit: contain;position: absolute;z-index:10;' src=\"{{x.url}}\"\r\n              alt=\"\">\r\n            <img style='width:100%;height:100%;object-fit: cover;opacity: 0.5;filter: blur(2px);' src=\"{{x.url}}\"\r\n              alt=\"\">\r\n\r\n          </ion-slide>\r\n\r\n        </ion-slides>\r\n\r\n        <div *ngIf=\"lengthof(voucher['photo']) == 0\"\r\n          style='max-width:100%;max-height:100%;width:100%;height:100%;position: relative;background-color: black;'>\r\n          <img style='width:100%;height:100%;object-fit: contain;position: absolute;z-index:10;'\r\n            src=\"{{voucher.thumbnail}}\" alt=\"\">\r\n          <img style='width:100%;height:100%;object-fit: cover;opacity: 0.5;filter: blur(2px);'\r\n            src=\"{{voucher.thumbnail}}\" alt=\"\">\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div style='width:100%;padding:20px 20px;padding-top:0px;'>\r\n        <div style='font-size:12px;color:#999999;'>{{vendor.name}}'s</div>\r\n        <div style='font-size:14px;font-weight: bold;margin-bottom:10px;margin-top:5px;color:#333333;'>{{voucher.name}}\r\n        </div>\r\n\r\n        <div style='margin-left:0px;display:flex;align-items: center;'>\r\n          <div *ngIf=\"voucher.price_now\" style='font-size:14px;color:#f53c3c;font-weight: bold;'>{{((voucher.price_now +\r\n            countvar())*qty) + price_delivery |\r\n            currency:\"RM\"}}</div>\r\n\r\n          <div *ngIf=\"!voucher.price_now\" style='font-size:14px;color:#f53c3c;font-weight: bold;'>APPLY FOR FREE</div>\r\n\r\n          <div *ngIf='voucher.price_ori && voucher.price_ori>voucher.price_now'\r\n            style='display:flex;align-items: center;margin-left:10px;'>\r\n            <div style='font-size:11px;color:#999999;text-decoration: line-through;'>&nbsp;{{voucher.price_ori |\r\n              currency:\"RM\"}}&nbsp;</div>\r\n            <!-- <div style='font-size:12px;color:#f53c3c;margin-left:10px;font-weight: bold;'>RM20 OFF</div> -->\r\n          </div>\r\n        </div>\r\n        <div *ngFor='let eve of (voucher[\"variations\"] || []);let i = index' style='width:100%;margin-top:15px;'>\r\n          <div style='font-size:12px;color:#999999;margin-bottom:5px;'>{{eve.name}}</div>\r\n          <div style='width:100%;display:flex;flex-wrap: wrap;'>\r\n            <div (click)='var_select[i]=j' *ngFor='let y of eve[\"selections\"];let j = index'\r\n              [ngStyle]='{\"border\":var_select[i]==j ? \"1px solid #f53c3c\" : \"1px solid #999999\"\r\n               ,\"color\":var_select[i]==j ? \"#f53c3c\" : \"#999999\",\"background-color\":var_select[i]==j ? \"rgba(192,82,84, 0.05)\" : \"white\" }'\r\n              style='padding:5px 10px;margin-right:10px;margin-bottom:10px;cursor: pointer;font-size:12px;border-radius:5px;'>\r\n              {{y.name}}&nbsp;(+&nbsp;{{y.price | currency: \"RM\"}})</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div style='width:100%;margin-top:30px;display:flex;align-items: center;'>\r\n\r\n          <div style='display:flex;align-items: center;justify-content: center;margin-right:20px;'>\r\n            <div (click)=\"qty>1 ? qtyr(-1) : qty\"\r\n              style='cursor: pointer;width:25px;height:25px;border:1px solid #999999;display:flex;justify-content: center;align-items: center;'>\r\n              <div style='font-size:16px;color:#999999'>-</div>\r\n            </div>\r\n            <div\r\n              style='width:40px;height:30px;font-size:12px;color:#333333;text-align: center;display:flex;justify-content: center;align-items: center;'>\r\n              {{qty}}</div>\r\n            <div (click)='qtyr(+1)'\r\n              style='cursor: pointer;;width:25px;height:25px;border:1px solid #999999;display:flex;justify-content: center;align-items: center;'>\r\n              <div style='font-size:16px;color:#999999'>+</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div (click)='enter=true'\r\n            style='padding:10px 20px;background-color: #f53c3c;color:white;font-size:12px;width: max-content;cursor: pointer;border-radius:5px;text-align: center;'>\r\n            BUY NOW</div>\r\n\r\n          <!-- <div style='margin-left:20px;'>\r\n            <div style='font-size:16px;font-weight: bold;'>RM120.00</div>\r\n            <div style='display:flex;align-items: center;margin-top:5px;'>\r\n              <div style='font-size:12px;color:#999999;text-decoration: line-through;'>&nbsp;RM120.00&nbsp;</div>\r\n              <div style='font-size:12px;color:#f53c3c;margin-left:10px;font-weight: bold;'>RM20 OFF</div>\r\n            </div>\r\n          </div> -->\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n    <div style='padding:40px 0px;width:100%;background-color: white;padding-top:0px;'>\r\n      <div style='width:100%;border-top:1px solid #eeeeee;padding-bottom:0px;'></div>\r\n\r\n      <div style='width:100%;display:flex;align-items: center;'>\r\n        <div *ngIf='disabled[0]==true' (click)='selected=0'\r\n          [ngStyle]='{\"border-bottom\" : selected==0 ? \"1px solid #f53c3c\" : \"1px solid #eeeeee\" ,\"color\" : selected==0 ? \"#f53c3c\" : \"#999999\" }'\r\n          style='width:calc( 100% / 4 );padding:10px;border-bottom:1px solid #eeeeee;text-align: center;font-size:14px;cursor: pointer;'>\r\n          {{( widther(400)==true ? \"Description\" : \"Desc.\")}}</div>\r\n        <div *ngIf='disabled[1]==true' (click)='selected=1'\r\n          [ngStyle]='{\"border-bottom\" : selected==1 ? \"1px solid #f53c3c\" : \"1px solid #eeeeee\",\"color\" : selected==1 ? \"#f53c3c\" : \"#999999\" }'\r\n          style='width:calc( 100% / 4 );padding:10px;border-bottom:1px solid #eeeeee;text-align: center;font-size:14px;cursor: pointer;'>\r\n          {{( widther(600)==true ? \"Terms & Condition\" : \"T & C\")}}</div>\r\n        <div *ngIf='disabled[2]==true' (click)='selected=2'\r\n          [ngStyle]='{\"border-bottom\" : selected==2 ? \"1px solid #f53c3c\" : \"1px solid #eeeeee\",\"color\" : selected==2 ? \"#f53c3c\" : \"#999999\" }'\r\n          style='width:calc( 100% / 4 );padding:10px;border-bottom:1px solid #eeeeee;text-align: center;font-size:14px;cursor: pointer;'>\r\n          {{( widther(350)==true ? \"About Us\" : \"About\")}}</div>\r\n        <div *ngIf='disabled[3]==true' (click)='selected=3'\r\n          [ngStyle]='{\"border-bottom\" : selected==3 ? \"1px solid #f53c3c\" : \"1px solid #eeeeee\",\"color\" : selected==3 ? \"#f53c3c\" : \"#999999\" }'\r\n          style='width:calc( 100% / 4 );padding:10px;border-bottom:1px solid #eeeeee;text-align: center;font-size:14px;cursor: pointer;'>\r\n          {{( widther(350)==true ? \"Sellable\" : \"Sell.\")}}</div>\r\n      </div>\r\n\r\n      <div *ngIf='selected==0' style='font-size:14px;color:#999999;width:100%;white-space: pre-line;padding:20px 20px;'>\r\n        {{voucher[\"description\"]}}</div>\r\n      <div *ngIf='selected==1' style='font-size:14px;color:#999999;width:100%;white-space: pre-line;padding:20px 20px;'>\r\n        {{voucher[\"tnc\"]}}</div>\r\n      <div *ngIf='selected==2' style='width:100%;padding:20px 20px;'>\r\n        <div style='width:100%;display:flex;align-items: center;justify-content: flex-start;'>\r\n          <img style='height:70px;width:70px;border-radius:100%;object-fit: cover;'\r\n            src=\"{{vendor['photo'] || 'https://media.istockphoto.com/vectors/young-woman-engaged-in-shopping-and-checkout-her-purchases-vector-id1073204892?b=1&k=6&m=1073204892&s=612x612&w=0&h=WQz5o6GHiShCSZhpcQ6G1Fkg8fPV65UKNU7z2sWTEBg='}}\"\r\n            alt=\"\">\r\n          <div style='width:calc( 100% - 70px );padding-left:20px;'>\r\n            <div style='font-size:14px;color:#333333;margin-bottom:10px;margin-top:10px;font-weight: bold;'>\r\n              {{vendor[\"name\"]}}</div>\r\n            <div style='width:calc( 100% );display:flex;flex-wrap: wrap;'>\r\n              <div *ngFor='let x of vendor[\"link\"]' (click)='openlink(x.link, x.name)'\r\n                style='cursor: pointer;;padding:5px 10px;border:1px solid #eeeeee;font-size:12px;margin-right:10px;margin-bottom:10px;'>\r\n                {{x.name}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div *ngIf=\"vendor['description']\" style='font-size:14px;font-weight: bold;color:#333333;padding-top:20px;padding-bottom:10px;'>Company Description</div> -->\r\n        <div *ngIf=\"vendor['description']\"\r\n          style='font-size:14px;color:#999999;width:100%;white-space: pre-line;padding:20px 0px;'>\r\n          {{vendor[\"description\"]}}</div>\r\n\r\n        <div (click)=\"brand(vendor.id)\"\r\n          style='font-size:14px;padding:10px 20px;border:1px solid #f53c3c;color:#f53c3c;width:max-content;margin-top:0px;cursor: pointer;'>\r\n          More from&nbsp;{{vendor[\"name\"]}}&nbsp;></div>\r\n\r\n      </div>\r\n      <div *ngIf='selected==3' style='width:100%;flex-wrap: wrap;display:flex;padding:20px 20px;padding-right:0px;'>\r\n        <div *ngFor='let eve of otherproduct;let i = index' (click)=\"go(eve.id)\"\r\n          style='margin-right:20px;margin-bottom:20px;background-color:white;box-shadow:1px 5px 10px rgba(0,0,0,0.1);position: relative;'\r\n          [ngStyle]='{\"width\" : ( 900 > widtherget()  ? ((widtherget() - 20)/rounder(widtherget() / 200)) - 20 +\"px\" : \"calc( ( 900px - 100px ) / 4 )\")  }'>\r\n          <div style='width:100%;cursor: pointer;'>\r\n            <div style='width:100%;padding-bottom:100%;position: relative;'>\r\n              <img\r\n                style='width:100%;height:100%;top:0;left:0;right:0;bottom:0;position: absolute;z-index:10;object-fit: cover;'\r\n                src=\"{{eve.thumbnail}}\" alt=\"\">\r\n            </div>\r\n            <div style='padding:10px;width:100%;'>\r\n              <div style='border:1px solid #eeeeee;padding:3px 7px;font-size:12px;letter-spacing: .5px;color:#999999;;margin-bottom:3px;max-width:100%;white-space: nowrap;\r\n            overflow: hidden;\r\n            text-overflow: ellipsis;width:max-content'>{{eve.by_name}}</div>\r\n              <div style='font-size:14px;color:#262626;font-weight: bold;'>{{eve.name}}</div>\r\n\r\n              <div style='width:100%;display:flex;justify-content: space-between;align-items: center;'>\r\n\r\n                <div style='margin-top:5px;display:flex;align-items: center'>\r\n                  <div *ngIf=\"eve.price_now\" style='font-size:14px;font-weight: bold;color:#8a1515;'>\r\n                    {{eve.price_now | currency:\"RM\"}}\r\n                  </div>\r\n                  <div *ngIf=\"!eve.price_now\" style='font-size:14px;font-weight: bold;color:#8a1515;'>\r\n                    APPLY FOR FREE\r\n                  </div>\r\n                  <div *ngIf='eve.price_ori > eve.price_now'\r\n                    style='font-size:11px;font-weight: normal;color:#999999;;text-decoration:line-through;margin-left:5px;'>\r\n                    &nbsp;{{eve.price_ori | currency:\"RM\"}}&nbsp;</div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div style='padding:40px;border-top:1px solid #eeeeee;background-color: white;;'>\r\n      <div style='font-size:12px;color:#999999;text-align: center;margin-bottom:10px;'>Become a vsnap influencer or\r\n        become a vsnap vendor?&nbsp; <span (click)='join()' style='text-decoration: underline;'>join us now.</span>\r\n      </div>\r\n\r\n      <div style='font-size:12px;color:#999999;text-align: center;margin-bottom:20px;'>© Copyright 2020- All rights\r\n        reserved - Vsnap by Vsnap Global Sdn Bhd. version 6.1.0</div>\r\n      <div style='text-align: center;display:flex;align-items: center;justify-content: center;'>\r\n        <span (click)=\"outside('terms')\" style='cursor: pointer;;font-size:10px;color:#525dc2;'>Terms &\r\n          Condition</span>&nbsp;•&nbsp;<span (click)=\"outside('privacy')\"\r\n          style='cursor: pointer;font-size:10px;color:#525dc2;'>Privacy Policy</span>&nbsp;•&nbsp;<span\r\n          (click)=\"outside('disclaimer')\"\r\n          style='cursor: pointer;font-size:10px;color:#525dc2;'>Disclaimer</span>&nbsp;•&nbsp;<span\r\n          (click)=\"outside('refund')\" style='cursor: pointer;font-size:10px;color:#525dc2;'>Refund Policy</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<div *ngIf=\"5 > animer\" [ngClass]=\" animer == 0 ? 'loading' : 'loadingx'\" style=\" width: 100vw; height: 100vh;\r\n  position: fixed; display: flex; align-items: center; justify-content: center;\r\n   background-color: white;\">\r\n  <img style=\"object-fit: cover; height: 100%;\" src='assets/clogo.gif'>\r\n</div>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".leftleft {\n  transition: all 0.2s ease;\n  transform: translateY(-320px);\n}\n\n.leftleftx {\n  transition: all 0.2s ease;\n  transform: translateY(0);\n}\n\n.leftleftall {\n  transition: opacity 0.2s ease;\n  opacity: 1;\n  transform: translateX(100vw);\n}\n\n.leftleftallx {\n  transition: opacity 0.2s ease;\n  opacity: 0;\n  transform: translateX(0);\n  animation: goaway 0.2s ease;\n}\n\n@keyframes goaway {\n  0% {\n    opacity: 1;\n    transform: translateX(-100vw);\n  }\n  99% {\n    transform: translateX(-100vw);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(0);\n  }\n}\n\n.inner22 {\n  right: 0;\n  opacity: 1;\n  --background:rgba(0,0,0,0.7);\n  background-color: rgba(0, 0, 0, 0.7);\n  transition: all 0.2s ease;\n}\n\n.innerx22 {\n  right: -100%;\n  opacity: 0;\n  --background: rgba(0,0,0,0);\n  background-color: rgba(0, 0, 0, 0);\n  transition: all 0.2s ease;\n}\n\n.loading {\n  transition: all 0.5s ease;\n  opacity: 1;\n  z-index: 1000000;\n}\n\n.loadingx {\n  transition: all 0.5s ease;\n  opacity: 0;\n  z-index: -1;\n}\n\n.inside {\n  width: 100vw;\n}\n\n@media only screen and (min-width: 600px) {\n  .inside {\n    margin-left: calc( 100vw - 500px );\n    max-width: 500px;\n    width: 500px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFFQSw2QkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFFQSx3QkFBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUFERjs7QUFJQTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDZCQUFBO0VBREo7RUFHQTtJQUNJLDZCQUFBO0VBREo7RUFHQTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFQURKO0FBQ0Y7O0FBSUE7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRkY7O0FBTUE7RUFFRSxZQUFBO0FBSkY7O0FBS0U7RUFIRjtJQUlJLGtDQUFBO0lBQ0EsZ0JBQUE7SUFDRSxZQUFBO0VBRko7QUFDRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0bGVmdHtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgLy8gb3BhY2l0eToxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzIwcHgpO1xyXG59XHJcblxyXG4ubGVmdGxlZnR4e1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAvLyBvcGFjaXR5OjA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4ubGVmdGxlZnRhbGx7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XHJcbn1cclxuXHJcbi5sZWZ0bGVmdGFsbHh7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZTtcclxuICBvcGFjaXR5OjA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIGFuaW1hdGlvbjogZ29hd2F5IC4ycyBlYXNlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdvYXdheXtcclxuICAwJXtcclxuICAgICAgb3BhY2l0eToxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHZ3KTtcclxuICB9XHJcbiAgOTkle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHZ3KTtcclxuICB9XHJcbiAgMTAwJXtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5uZXIyMntcclxuICByaWdodDowO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLS1iYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC43KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG59XHJcblxyXG4uaW5uZXJ4MjJ7XHJcbiAgcmlnaHQ6LTEwMCU7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5sb2FkaW5ne1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHotaW5kZXg6IDEwMDAwMDA7XHJcbn1cclxuXHJcbi5sb2FkaW5neHtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuXHJcbi5pbnNpZGV7XHJcblxyXG4gIHdpZHRoOjEwMHZ3O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpICB7XHJcbiAgICBtYXJnaW4tbGVmdDpjYWxjKCAxMDB2dyAtIDUwMHB4ICk7XHJcbiAgICBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgICAgIHdpZHRoOjUwMHB4O1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ "Zs65");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! localforage */ "oAJy");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert */ "GUC0");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");













let HomePage = class HomePage {
    constructor(actRoute, platform, http, iab, nav, title, meta) {
        this.actRoute = actRoute;
        this.platform = platform;
        this.http = http;
        this.iab = iab;
        this.nav = nav;
        this.title = title;
        this.meta = meta;
        this.qty = 1;
        this.buy = false;
        this.agree = false;
        this.voucher = [];
        this.vendor = [];
        this.contact = '+60';
        this.link = [];
        this.select = [];
        this.delivery = [];
        this.var_select = [];
        this.deliveryrr = [];
        this.disabled = [true, true, true, true];
        this.influencer = [];
        this.links = [];
        this.otherproduct = [];
        this.animer = 0;
        this.puller = this.platform.width() / 2;
        this.today = new Date().getTime();
        this.price_vsnap2 = 0;
        this.enter = false;
        // xxxx for checking
        // checkupline() {
        //   if (this.influencer.referred_by) {
        //     console.log("checkupline")
        //     this.voucher.price_upline = this.proper2((this.price_vsnap || 0) * 0.1);
        //     this.voucher.price_upline_id = this.influencer.referred_by
        //     this.voucher.price_upline_remark = this.influencer.name + " has made a sales of RM" + this.proper2(this.price_now * this.qty).toFixed(2) + " and you received RM" + (this.voucher.price_upline * this.qty).toFixed(2) + "as upline incentive!";
        //     this.voucher.price_upline_logs = firebase.database().ref('pushKey').push(firebase.database.ServerValue.TIMESTAMP).key;
        //     this.checklast();
        //   } else {
        //     console.log("checkupline")
        //     this.checklast();
        //   }
        // } 
        this.price_now = 0;
        this.price_vsnap = 0;
        this.price_comm = 0;
        this.price_ori = 0;
        this.price_bonus = 0;
        this.price_delivery = 0;
        this.price_delivery_remark = '';
    }
    lefter() {
        return this.platform.width() > 800 ? (this.platform.width() - 800) / 2 + 'px' : this.platform.width();
    }
    check() {
        return this.name && this.email && this.contact && (this.voucher.address ? this.address : true);
    }
    calc(x) {
        if (x == '-') {
            if (this.qty > 1) {
                eval('this.qty ' + x + '= 1');
            }
        }
        else {
            eval('this.qty ' + x + '= 1');
        }
    }
    ngOnInit() {
        this.actRoute.queryParams.subscribe(a => {
            this.click_id = a['click_id'] || '';
        });
        this.id = this.actRoute.snapshot.paramMap.get('item');
        this.user = this.actRoute.snapshot.paramMap.get('user') || "yRSIH0mIALf4PsxkwSUFkKnjdMI3";
        this.http.post('https://api2.vsnap.my/getvouchers', { id: this.id }).subscribe(a => {
            console.log(a);
            if (a['data'].id) {
                this.title.setTitle(a['data'].name);
                this.meta.updateTag({ name: 'description', content: (a['data'].description || "Vsnap Exclusive Product on Sale") });
                this.meta.updateTag({ itemprop: 'name', content: a['data'].name + '\'s Vsnap Event Store' });
                this.meta.updateTag({ itemprop: 'description', content: (a['data'].description || "Vsnap Exclusive Product on Sale") });
                this.meta.updateTag({ itemprop: 'image', content: (a['data'].thumbnail || "https://i.imgur.com/cW5MqH2.png") });
                this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/home/' + this.id + '/' + this.user) });
                this.meta.updateTag({ property: 'og:type', content: 'website' });
                this.meta.updateTag({ property: 'og:description', content: (a['data'].description || "Vsnap Exclusive Product on Sale") });
                this.meta.updateTag({ property: 'og:title', content: a['data'].name + '\'s Vsnap Event Store' });
                this.meta.updateTag({ property: 'og:image', content: (a['data'].thumbnail || "https://i.imgur.com/cW5MqH2.png") });
                this.meta.updateTag({ property: 'og:image:secure_url', content: (a['data'].thumbnail || "https://i.imgur.com/cW5MqH2.png") });
                this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' });
                this.meta.updateTag({ property: 'og:image:width', content: '500' });
                this.meta.updateTag({ property: 'og:image:height', content: '500' });
            }
            else {
            }
        }, e => {
        });
    }
    ionViewWillEnter() {
        this.id = this.actRoute.snapshot.paramMap.get('item');
        this.user = this.actRoute.snapshot.paramMap.get('user') || "yRSIH0mIALf4PsxkwSUFkKnjdMI3";
        // this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/getmeta2', { type: "vouchers", id: this.id }).subscribe(data => {
        //   console.log(data);
        //   if (Object.keys(this.voucher).length) {
        //     this.load = false;
        //     this.voucher = this.voucher;
        //     this.complete = true;
        //   } else {
        //   }
        // })
        localforage__WEBPACK_IMPORTED_MODULE_7__["getItem"]('vsnap_userinfo').then((a) => {
            if (a) {
                this.name = a['name'] || "";
                this.address = a['address'] || "";
                this.contact = a['contact'] || "";
                this.email = a['email'] || "";
                this.postcode = a['postcode'] || "";
                this.city = a['city'] || "";
            }
            else {
                this.name = "";
                this.address = "";
                this.contact = "";
                this.email = "";
                this.postcode = "";
                this.city = "";
            }
        }).catch(e => {
            this.name = "";
            this.address = "";
            this.contact = "";
            this.email = "";
            this.postcode = "";
            this.city = "";
        });
        // all firebase here
        firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('link').once('value', data => {
            this.links = data.val();
        });
        firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('link').once('value', data => {
            this.link = data.val();
        });
        this.influencer.id = this.user;
        this.http.post('https://api2.vsnap.my/getusers', { id: this.user }).subscribe(a => {
            if (a['data'].id) {
                this.influencer = a['data'] || {};
            }
            else {
                this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
                    if (a['data'].id) {
                        this.influencer = a['data'] || {};
                    }
                    else {
                        this.tomain();
                    }
                }, e => {
                    this.tomain();
                });
            }
        }, e => {
            this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
                if (a['data'].id) {
                    this.influencer = a['data'] || {};
                }
                else {
                    this.tomain();
                }
            }, e => {
                this.tomain();
            });
        });
        this.http.post('https://api2.vsnap.my/getvouchers', { id: this.id }).subscribe(a => {
            console.log(a);
            if (a['data'].id) {
                this.http.post('https://api2.vsnap.my/datavendorvouchers', { id: a['data'].by }).subscribe(c => {
                    this.otherproduct = c['data'].filter(b => b.id != a['data'].id && b['status']);
                    if (!this.lengthof(this.otherproduct)) {
                        this.disabled[3] = false;
                    }
                });
                this.voucher = a['data'] || {};
                if (!this.voucher.status) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_11___default()({
                        title: 'Sold Out',
                        text: '产品已售罄 Product Sold Out!',
                        buttons: { 'OK': true },
                    });
                    this.nav.navigateBack('main');
                }
                console.log(this.voucher);
                // this.title.setTitle(this.voucher.name )
                // this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/home/' + this.id + '/' + this.user) });
                // this.meta.updateTag({ property: 'og:title', content: this.voucher.name });
                // this.meta.updateTag({ property: 'og:image', content: this.voucher.thumbnail || "https://i.imgur.com/cW5MqH2.png" });
                // this.meta.updateTag({ property: 'og:description', content: (this.voucher.description || 'Vsnap Exclusive Products') });
                this.title.setTitle(this.voucher.name);
                this.meta.updateTag({ name: 'description', content: (this.voucher.description || "Vsnap Exclusive Product on Sale") });
                this.meta.updateTag({ itemprop: 'name', content: this.voucher.name + '\'s Vsnap Event Store' });
                this.meta.updateTag({ itemprop: 'description', content: (this.voucher.description || "Vsnap Exclusive Product on Sale") });
                this.meta.updateTag({ itemprop: 'image', content: (this.voucher.thumbnail || "https://i.imgur.com/cW5MqH2.png") });
                this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/home/' + this.id + '/' + this.user) });
                this.meta.updateTag({ property: 'og:type', content: 'website' });
                this.meta.updateTag({ property: 'og:description', content: (this.voucher.description || "Vsnap Exclusive Product on Sale") });
                this.meta.updateTag({ property: 'og:title', content: this.voucher.name + '\'s Vsnap Event Store' });
                this.meta.updateTag({ property: 'og:image', content: (this.voucher.thumbnail || "https://i.imgur.com/cW5MqH2.png") });
                this.meta.updateTag({ property: 'og:image:secure_url', content: (this.voucher.thumbnail || "https://i.imgur.com/cW5MqH2.png") });
                this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' });
                this.meta.updateTag({ property: 'og:image:width', content: '500' });
                this.meta.updateTag({ property: 'og:image:height', content: '500' });
                this.http.post('https://api2.vsnap.my/dataVendorlogin', { userid: this.voucher.by }).subscribe(c => {
                    if (c['data'][1]) {
                        if (c['data'][1].id) {
                            this.vendor = c['data'][1] || {};
                            this.animer = 6;
                        }
                        else {
                            this.tomain();
                            this.vendor = {};
                        }
                    }
                    else {
                        this.tomain();
                        this.vendor = {};
                    }
                }, e => {
                    this.tomain();
                    this.vendor = {};
                });
                this.http.post('https://api2.vsnap.my/getdelivery', { vendor_id: this.voucher.by }).subscribe((a) => {
                    this.delivery = a['data'];
                    this.delivery.filter(a => {
                        this.deliveryrr = this.deliveryrr.concat(a['state']);
                    });
                    console.log(this.deliveryrr);
                });
                if (this.voucher['description']) {
                    this.selected = 0;
                    if (!this.voucher['tnc']) {
                        this.disabled[1] = false;
                    }
                }
                else if (this.voucher['tnc']) {
                    this.disabled[0] = false;
                    this.selected = 1;
                }
                else {
                    this.disabled[0] = false;
                    this.disabled[1] = false;
                    this.selected = 2;
                }
                if (this.voucher['variations']) {
                    this.var_select = [];
                    this.voucher['variations'].forEach(element => {
                        this.var_select.push(0);
                    });
                    console.log(this.var_select);
                    console.log(this.countvar());
                }
                else {
                    this.var_select = [];
                }
                this.http.post('https://api2.vsnap.my/addstats', { type: "vouchers", type_id: this.voucher.type_id, stat: "share", userid: this.influencer.id }).subscribe(b => { }, e => { });
            }
            else {
                this.tomain();
                this.voucher = {};
            }
        }, e => {
            this.tomain();
        });
    }
    rounder(x) {
        return Math.floor(x);
    }
    widtherget() {
        return this.platform.width();
    }
    go(x) {
        this.nav.navigateForward('home/' + x + '/' + this.user + '?click_id=' + this.click_id);
    }
    outside(x) {
        this.iab.create(this.links[x], '_system');
        // window.open(this.links[x]);
    }
    donatecsr2021() {
        this.iab.create("https://pg.revenuemonster.my/v1/invoice-group/input?invoiceGroupId=1626521195381410810", '_system');
    }
    openlink(x, y) {
        let temp = (y == 'Facebook' ? 'https://' : (y == 'Instagram' ? 'https://' : '')) +
            (y == 'Facebook' ? 'www.facebook.com/' : (y == 'Instagram' ? 'www.instagram.com/' : '')) + x;
        this.iab.create(temp, '_system');
        // window.open(temp);
        // xxx
    }
    store(x) {
        this.nav.navigateForward('store/' + x + '?click_id=' + this.click_id);
    }
    brand(x) {
        this.nav.navigateForward('brand/' + x + '/' + this.user + '?click_id=' + this.click_id);
    }
    proper2(x) {
        return Math.round(((Math.abs(x) || 0) + Number.EPSILON) * 100) / 100;
    }
    tomain() {
        this.nav.navigateForward('main?user=' + this.user + '&click_id=' + this.click_id);
    }
    // ionViewDidEnter() { // all firebase here
    //   firebase.database().ref('link').once('value', data => {
    //     this.links = data.val();
    //   })
    //   firebase.database().ref('link').once('value', data => {
    //     this.link = data.val();
    //   })
    //   this.influencer.id = this.user;
    //   this.http.post('https://api2.vsnap.my/getusers', { id: this.user }).subscribe(a => {
    //     if (a['data'].id) {
    //       this.influencer = a['data'] || {};
    //     } else {
    //       this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
    //         if (a['data'].id) {
    //           this.influencer = a['data'] || {};
    //         } else {
    //           this.tomain()
    //         }
    //       }, e => {
    //         this.tomain()
    //       })
    //     }
    //   }, e => {
    //     this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
    //       if (a['data'].id) {
    //         this.influencer = a['data'] || {};
    //       } else {
    //         this.tomain()
    //       }
    //     }, e => {
    //       this.tomain()
    //     })
    //   })
    //   this.http.post('https://api2.vsnap.my/getvouchers', { id: this.id }).subscribe(a => {
    //     console.log(a);
    //     if (a['data'].id) {
    //       this.http.post('https://api2.vsnap.my/datavendorvouchers', { id: a['data'].by }).subscribe(c => {
    //         this.otherproduct = c['data'].filter(b => b.id != a['data'].id);
    //         if (!this.lengthof(this.otherproduct)) {
    //           this.disabled[3] = false;
    //         }
    //       });
    //       this.voucher = a['data'] || {};
    //       console.log(this.voucher);
    //       this.title.setTitle(this.voucher.name)
    //       // this.meta.updateTag({ name: 'description', content: this.voucher.description })
    //       this.meta.updateTag({ itemprop: 'name', content: this.voucher.name })
    //       this.meta.updateTag({ itemprop: 'description', content: (this.voucher.description || '') })
    //       this.meta.updateTag({ itemprop: 'image', content: this.voucher.thumbnail })
    //       this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/home/' + this.id + '/' + this.user) })
    //       this.meta.updateTag({ property: 'og:type', content: 'website' })
    //       this.meta.updateTag({ property: 'og:description', content: (this.voucher.description || '') })
    //       this.meta.updateTag({ property: 'og:title', content: this.voucher.name })
    //       this.meta.updateTag({ property: 'og:image', content: this.voucher.thumbnail })
    //       this.meta.updateTag({ property: 'og:image:secure_url', content: this.voucher.thumbnail })
    //       this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
    //       this.meta.updateTag({ property: 'og:image:width', content: '500' })
    //       this.meta.updateTag({ property: 'og:image:height', content: '500' })
    //       this.http.post('https://api2.vsnap.my/dataVendorlogin', { userid: this.voucher.by }).subscribe(c => {
    //         if (c['data'][1]) {
    //           if (c['data'][1].id) {
    //             this.vendor = c['data'][1] || {};
    //             this.animer = 6;
    //           } else {
    //             this.tomain()
    //             this.vendor = {};
    //           }
    //         } else {
    //           this.tomain()
    //           this.vendor = {};
    //         }
    //       }, e => {
    //         this.tomain()
    //         this.vendor = {};
    //       })
    //       if (this.voucher['description']) {
    //         this.selected = 0;
    //         if (!this.voucher['tnc']) {
    //           this.disabled[1] = false;
    //         }
    //       } else if (this.voucher['tnc']) {
    //         this.disabled[0] = false;
    //         this.selected = 1;
    //       } else {
    //         this.disabled[0] = false;
    //         this.disabled[1] = false;
    //         this.selected = 2;
    //       }
    //       if (this.voucher['variations']) {
    //         this.var_select = [];
    //         this.voucher['variations'].forEach(element => {
    //           this.var_select.push(0);
    //         });
    //         console.log(this.var_select)
    //         console.log(this.countvar())
    //       } else {
    //         this.var_select = [];
    //       }
    //       this.http.post('https://api2.vsnap.my/addstats', { type: "vouchers", type_id: this.voucher.type_id, stat: "share", userid: this.influencer.id }).subscribe(b => { }, e => { })
    //     } else {
    //       this.tomain()
    //       this.voucher = {};
    //     }
    //   }, e => {
    //     this.tomain()
    //   })
    // }
    stringornot(x) {
        return (typeof x == "string" ? true : false);
    }
    widther(x) {
        // console.log(this.platform.width() >= x)
        this.puller = (this.platform.width() >= 900 ? 450 : (this.platform.width() < 600 ? 300 : this.platform.width() / 2));
        // console.log(this.puller)
        return this.platform.width() >= x;
    }
    lengthof(x) {
        return x ? Object.keys(x).length : 0;
    }
    buys() {
        console.log(this.deliveryrr);
        console.log(this.var_delivery);
        console.log(this.lengthof(this.deliveryrr) > 0 ? this.var_delivery : true);
        // console.log(JSON.stringify((this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), [])));
        sweetalert__WEBPACK_IMPORTED_MODULE_11___default()({
            title: 'Payment In Progress 付款进行中',
            text: 'Please Wait 请稍等',
            buttons: [false],
            closeOnEsc: false,
            closeOnClickOutside: false,
            timer: 10000,
        });
        if (this.voucher.address ? (this.address && this.postcode && this.city && (this.lengthof(this.deliveryrr) > 0 ? this.var_delivery != null : true)) : true) {
            if ((this.voucher.price_now + this.countvar()) == 0) {
                this.price_comm = 0;
                this.price_vsnap2 = 0;
                this.price_vsnap = 0;
                this.price_now = 0;
                this.price_ori = 0;
                this.price_bonus = 0;
                this.free();
            }
            else {
                this.price_bonus = this.proper2(this.voucher.price_bonus); // find ratio dulu, and count ez
                this.price_comm = this.proper2((this.proper2(this.voucher.price_comm + (this.countvar() * (this.voucher.price_comm / this.voucher.price_now))) || 0) / ((this.influencer.vip_expiry || 0) > this.today ? 1 : 2));
                this.price_vsnap2 = this.proper2((this.proper2(this.voucher.price_comm + (this.countvar() * (this.voucher.price_comm / this.voucher.price_now))) || 0) - this.price_comm);
                this.price_vsnap = this.proper2(((this.voucher.price_vsnap || 0) + this.countvar() * ((this.voucher.price_vsnap || 0) / this.voucher.price_now))) || 0;
                this.price_now = this.proper2(((this.voucher.price_now + this.countvar())) || 0);
                this.price_ori = this.proper2(((this.voucher.price_ori || 0) + this.countvar()) || 0);
                this.fpx();
            }
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_11___default()({
                icon: 'error',
                title: 'Error',
                text: '请填写所有资料\nPlease fill up all information! ',
                closeOnEsc: false,
                closeOnClickOutside: false,
                buttons: [false],
                timer: 1500
            });
        }
    }
    countvar() {
        return this.voucher['variations'] ? this.voucher['variations'].reduce((a, b, index) => a + (this.var_select[index] >= 0 ? b['selections'][this.var_select[index]].price : 0), 0) : 0;
    }
    checkguild() {
        if (this.influencer.guild) {
            console.log('guild/' + this.influencer.guild);
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('guild/' + this.influencer.guild).once('value', data => {
                if (data.exists()) {
                    console.log("guild check");
                    let multiplier = data.val().pay_rate ? (data.val().pay_rate[this.vendor.id] ? (data.val().pay_rate[this.vendor.id].rate || 0) :
                        (data.val().pay_rate_default || 0)) : (data.val().pay_rate_default || 0);
                    this.voucher.price_guild = this.proper2((this.price_vsnap || 0) * multiplier) || 0;
                    this.voucher.price_guild_id = this.influencer.guild || "";
                    this.voucher.price_guild_remark = this.influencer.name + " has achieved a sales of RM" + this.proper2(this.price_now * this.qty).toFixed(2) + " and our guild has received a guild incentive of RM" + this.proper2(this.voucher.price_guild * this.qty).toFixed(2) + "!";
                    this.voucher.price_guild_logs = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('pushKey').push(firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database.ServerValue.TIMESTAMP).key;
                    console.log(this.voucher);
                    this.checkvip();
                }
                else {
                    this.voucher.price_guild = 0;
                    this.voucher.price_guild_id = "";
                    console.log("guild uncheck");
                    this.checkvip();
                }
            });
        }
        else {
            this.voucher.price_guild = 0;
            this.voucher.price_guild_id = "";
            console.log("guild uncheck");
            this.checkvip();
        }
    }
    checkvip() {
        // this.influencer.vip > 0 // next phase
        if (this.influencer.vip == 2 && this.influencer.vip_expiry >= new Date().getTime()) {
            console.log("vip check");
            this.voucher.price_vip = this.proper2((this.price_vsnap || 0) * 0.15);
            // this.voucher.price_vip = this.proper2((this.price_vsnap || 0) * this.influencer.vip * 0.125) ; // next phase
            this.voucher.price_vip_remark = "You received " + this.proper2(this.voucher.price_vip * this.qty).toFixed(2) + " as VIP bonus incentive from a sales of RM" + this.proper2(this.price_now * this.qty).toFixed(2) + "!";
            this.voucher.price_vip_logs = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('pushKey').push(firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database.ServerValue.TIMESTAMP).key;
            console.log(this.voucher);
            this.checkmentor();
        }
        else {
            this.voucher.price_vip = 0;
            console.log("vip uncheck");
            this.checkmentor();
        }
    }
    checkmentor() {
        if (this.vendor.referred_by) {
            console.log('guild/' + this.vendor.referred_by);
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('guild/' + this.vendor.referred_by).once('value', data => {
                if (data.exists()) {
                    console.log("vicheckmentorp check");
                    this.voucher.price_mentor = this.proper2((this.price_vsnap || 0) * 0.1);
                    this.voucher.price_mentor_id = this.vendor.referred_by || "";
                    this.voucher.price_mentor_remark = this.vendor.name + " has achieved a sales of RM" + this.proper2(this.price_now * this.qty).toFixed(2) + " and our guild received mentorship incentive of RM" + (this.voucher.price_mentor * this.qty).toFixed(2) + "!";
                    this.voucher.price_mentor_logs = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('pushKey').push(firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database.ServerValue.TIMESTAMP).key;
                    this.checklast();
                }
                else {
                    console.log("vicheckmentorp uncheck");
                    this.voucher.price_mentor = 0;
                    this.voucher.price_mentor_id = "";
                    this.checklast();
                }
            });
        }
        else {
            console.log("vicheckmentorp uncheck");
            this.voucher.price_mentor = 0;
            this.voucher.price_mentor_id = "";
            this.checklast();
        }
    }
    join() {
        window.open('https://register.vsnap.my/influencer?referrer_id=' + this.user);
    }
    deliverer(x, i) {
        this.var_delivery = i;
        let temp = this.delivery.filter(a => a['state'].some(b => b == x))[0];
        this.price_delivery_remark = temp.name;
        let body = temp;
        body.total = this.proper2(((this.voucher.price_now + this.countvar())) || 0) * this.qty;
        body.weight = this.voucher.weight;
        body.qty = this.qty;
        this.http.post('https://api2.vsnap.my/catdelivery', body).subscribe(a => {
            console.log(a['data']);
            this.price_delivery = a['data'];
        }, e => {
            // console.log(e);
        });
    }
    qtyr(x) {
        this.qty += x;
    }
    checklast() {
        // console.log({
        //   address: this.voucher.address || false,
        //   aftersale: this.voucher.aftersale || "",
        //   buyer_address: ((this.address || "") + ' ' + (this.postcode || "") + ' ' + (this.city) || ""),
        //   buyer_contact: this.contact || "",
        //   buyer_name: this.name || "",
        //   buyer_email: this.email || "",
        //   state: this.deliveryrr[this.var_delivery] || "",
        //   by: this.voucher.by || "",
        //   by_name: this.vendor.name || "",
        //   category: this.voucher.category || "",
        //   checklist: this.voucher.list || [],
        //   date: firebase.database.ServerValue.TIMESTAMP,
        //   description: this.voucher.description || "",
        //   following: this.voucher.following || false,
        //   hidden_remark: this.voucher.hidden_remark || "",
        //   id: 'keyer',
        //   link: this.voucher.link || [],
        //   location: this.voucher.location || [],
        //   min_rating: this.voucher.min_rating || 0,
        //   min_vip: this.voucher.min_vip || 0,
        //   name: this.voucher.name || "",
        //   online: this.voucher.online || false,
        //   overwrite: this.voucher.overwrite || false,
        //   photo: this.voucher.photo || [],
        //   price_delivery: this.price_delivery,
        //   price_delivery_remark: this.price_delivery_remark,
        //   price_bonus: this.price_bonus,
        //   price_bonus_remark: 'You have received an Extra Bonus of RM' + (this.proper2(this.price_bonus)).toFixed(2) + ' from vsnap global, Congratulations!',
        //   price_bonus_logs: 'keyer',
        //   price_comm: this.price_comm,
        //   price_vsnap: this.price_vsnap,
        //   price_vsnap2: this.price_vsnap2,
        //   price_now: this.price_now,
        //   price_ori: this.price_ori,
        //   price_guild: this.voucher.price_guild || 0,
        //   price_guild_id: this.influencer.guild || "",
        //   price_guild_logs: this.voucher.price_guild_logs || "",
        //   price_guild_remark: this.voucher.price_guild_remark || "",
        //   price_vip: this.voucher.price_vip || 0,
        //   price_vip_remark: this.voucher.price_vip_remark || "",
        //   price_vip_logs: this.voucher.price_vip_logs || "",
        //   price_mentor: this.voucher.price_mentor || 0,
        //   price_mentor_id: this.voucher.price_mentor_id || "",
        //   price_mentor_remark: this.voucher.price_mentor_remark || "",
        //   price_mentor_logs: this.voucher.price_mentor_logs || "",
        //   qty: this.qty || 1,
        //   thumbnail: this.voucher.thumbnail || "",
        //   tnc: this.voucher.tnc || "",
        //   token: this.voucher.token || 0,
        //   type: 'vouchers',
        //   type_id: this.id || "",
        //   event: this.id || "",
        //   userid: this.user || "",
        //   value_price: this.voucher.value_price || 0,
        //   value_type: this.voucher.value_type || false,
        //   variations: (this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), []),
        //   seller_name: this.influencer.name || "",
        //   seller_email: this.influencer.email || "",
        //   seller_id: this.user || "",
        //   seller_phone: this.influencer.contact || "",
        //   survey: this.voucher.survey || [],
        //   verified: this.voucher.verified || 0,
        //   remark: this.remark || "",
        //   tag: this.voucher.tag || "",
        //   click_id: this.click_id || '',
        // });
        let keyer = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('pushKey').push(firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database.ServerValue.TIMESTAMP).key;
        firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('orders_pending/' + keyer).update({
            address: this.voucher.address || false,
            aftersale: this.voucher.aftersale || "",
            buyer_address: ((this.address || "") + ' ' + (this.postcode || "") + ' ' + (this.city) || ""),
            buyer_contact: this.contact || "",
            buyer_name: this.name || "",
            buyer_email: this.email || "",
            state: this.deliveryrr[this.var_delivery] || "",
            by: this.voucher.by || "",
            by_name: this.vendor.name || "",
            category: this.voucher.category || "",
            checklist: this.voucher.list || [],
            date: firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database.ServerValue.TIMESTAMP,
            description: this.voucher.description || "",
            following: this.voucher.following || false,
            hidden_remark: this.voucher.hidden_remark || "",
            id: keyer,
            link: this.voucher.link || [],
            location: this.voucher.location || [],
            min_rating: this.voucher.min_rating || 0,
            min_vip: this.voucher.min_vip || 0,
            name: this.voucher.name || "",
            online: this.voucher.online || false,
            overwrite: this.voucher.overwrite || false,
            photo: this.voucher.photo || [],
            price_delivery: this.price_delivery,
            price_delivery_remark: this.price_delivery_remark,
            price_bonus: this.price_bonus,
            price_bonus_remark: 'You have received an Extra Bonus of RM' + (this.proper2(this.price_bonus)).toFixed(2) + ' from vsnap global, Congratulations!',
            price_bonus_logs: keyer,
            price_comm: this.price_comm,
            price_vsnap: this.price_vsnap,
            price_vsnap2: this.price_vsnap2,
            price_now: this.price_now,
            price_ori: this.price_ori,
            price_guild: this.voucher.price_guild || 0,
            price_guild_id: this.influencer.guild || "",
            price_guild_logs: this.voucher.price_guild_logs || "",
            price_guild_remark: this.voucher.price_guild_remark || "",
            price_vip: this.voucher.price_vip || 0,
            price_vip_remark: this.voucher.price_vip_remark || "",
            price_vip_logs: this.voucher.price_vip_logs || "",
            price_mentor: this.voucher.price_mentor || 0,
            price_mentor_id: this.voucher.price_mentor_id || "",
            price_mentor_remark: this.voucher.price_mentor_remark || "",
            price_mentor_logs: this.voucher.price_mentor_logs || "",
            qty: this.qty || 1,
            thumbnail: this.voucher.thumbnail || "",
            tnc: this.voucher.tnc || "",
            token: this.voucher.token || 0,
            type: 'vouchers',
            type_id: this.id || "",
            event: this.id || "",
            userid: this.user || "",
            value_price: this.voucher.value_price || 0,
            value_type: this.voucher.value_type || false,
            variations: (this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), []),
            seller_name: this.influencer.name || "",
            seller_email: this.influencer.email || "",
            seller_id: this.user || "",
            seller_phone: this.influencer.contact || "",
            survey: this.voucher.survey || [],
            verified: this.voucher.verified || 0,
            remark: this.remark || "",
            tag: this.voucher.tag || "",
            click_id: this.click_id || '',
        });
        let body = {
            amount: this.proper2(((((this.voucher.price_now + this.countvar())) || 0) * this.qty) + this.price_delivery) * 100,
            // amount: 100,
            orderdescription: 'Order ' + keyer,
            ordertitle: 'Vsnap Order ' + keyer,
            orderid: keyer,
            redirecturl: 'https://deal.vsnap.my/thanks?orderId=' + keyer,
            callbackurl: 'https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/callback2?orderid=' + keyer,
        };
        if (this.email && this.name) {
            console.log(body);
            this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/revenuePaymentAny', body).subscribe(a => {
                console.log(a);
                console.log(JSON.parse(a['message']['body']));
                if (Object.values(a).length) {
                    const browser = this.iab.create(JSON.parse(a['message']['body']).url, '_self');
                    // console.log(a);
                }
                else {
                    sweetalert__WEBPACK_IMPORTED_MODULE_11___default()({
                        icon: 'error',
                        title: 'Error',
                        text: 'Something is wrong, please try again!',
                        closeOnEsc: false,
                        closeOnClickOutside: false,
                        buttons: [false],
                        timer: 1500
                    });
                }
            }, e => {
                // console.log(e);
            });
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_11___default()({
                icon: 'error',
                title: 'Information Incomplete',
                text: 'Please enter all your information correctly.',
                closeOnEsc: false,
                closeOnClickOutside: false,
                buttons: [false],
                timer: 1500
            });
        }
    }
    fpx() {
        let temp = {
            name: this.name,
            address: this.address,
            postcode: this.postcode,
            city: this.city,
            contact: this.contact,
            email: this.email,
        };
        localforage__WEBPACK_IMPORTED_MODULE_7__["setItem"]('vsnap_userinfo', temp);
        console.log("FPX run");
        console.log(this.influencer);
        console.log(this.voucher);
        // price_guild: 0,
        //   price_guild_id: 0,
        //   price_vip: 0,
        //   price_mentor:0,
        //   price_mentor_id: 0,
        if (this.voucher.price_vsnap / this.voucher.price_now >= 0.1) {
            this.checkguild();
        }
        else {
            this.checklast();
        }
    }
    // fpx_billplz() {
    //   let temp = {
    //     name: this.name,
    //     address: this.address,
    //     postcode: this.postcode,
    //     city: this.city,
    //     contact: this.contact,
    //     email: this.email,
    //   }
    //   localforage.setItem('vsnap_userinfo', temp);
    //   let keyer = firebase.database().ref('orders_pending').push({
    //     variations: (this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), []),
    //     address: this.voucher.address || false,
    //     date: firebase.database.ServerValue.TIMESTAMP,
    //     by: this.voucher.by || "",
    //     description: this.voucher.description || "",
    //     name: this.voucher.name || "",
    //     photo: this.voucher.photo || [],
    //     price_comm: this.proper2((this.voucher.price_comm + this.countvar() * (this.voucher.price_comm / this.voucher.price_now))) || 0,
    //     price_vsnap: this.proper2(((this.voucher.price_vsnap || 0) + this.countvar() * ((this.voucher.price_vsnap || 0) / this.voucher.price_now))) || 0,
    //     price_now: this.proper2(((this.voucher.price_now + this.countvar())) || 0),
    //     price_ori: this.proper2(((this.voucher.price_ori || 0) + this.countvar()) || 0),
    //     qty: this.qty || 1,
    //     seller_email: this.influencer.email || "",
    //     seller_id: this.user || "",
    //     seller_name: this.influencer.name || "",
    //     seller_phone: this.influencer.contact || "",
    //     thumbnail: this.voucher.thumbnail || "",
    //     tnc: this.voucher.tnc || "",
    //     type: 'vouchers',
    //     type_id: this.id || "",
    //     buyer_name: this.name || "",
    //     buyer_email: this.email || "",
    //     buyer_contact: this.contact || "",
    //     buyer_address: (this.address + ', ' + this.postcode + ', ' + this.city) || "",
    //     overwrite: this.voucher.overwrite || false,
    //     remark: this.remark || '',
    //   }).key;
    //   let body = {
    //     // amount: this.proper2(((this.voucher.price_now + this.countvar())) || 0) * this.qty * 100,
    //     amount: 100,
    //     description: 'Purchase ' + this.voucher.name + ' x' + (this.qty || 1),
    //     email: this.email,
    //     name: this.name,
    //     order: keyer,
    //   }
    //   if (this.email && this.name) {
    //     this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/billplz2', body).subscribe(a => {
    //       if (Object.values(a).length) {
    //         const browser = this.iab.create(a['url'], '_self');
    //         // console.log(a);
    //       } else {
    //         swal({
    //           icon: 'error',
    //           title: 'Error',
    //           text: 'Something is wrong, please try again!',
    //           closeOnEsc: false,
    //           closeOnClickOutside: false,
    //           buttons: [false],
    //           timer: 1500
    //         });
    //       }
    //     }, e => {
    //       // console.log(e);
    //     })
    //   } else {
    //     swal({
    //       icon: 'error',
    //       title: 'Error',
    //       text: 'Please fill up all information! :)',
    //       closeOnEsc: false,
    //       closeOnClickOutside: false,
    //       buttons: [false],
    //       timer: 1500
    //     });
    //   }
    // }
    // fpx_old() {
    //   let temp = {
    //     name: this.name,
    //     address: this.address + ', ' + this.postcode + ', ' + this.city,
    //     contact: this.contact,
    //     email: this.email,
    //   }
    //   localforage.setItem('vsnap_userinfo', temp);
    //   let key = firebase.database().ref('orders_pending').push({
    //     variations: (this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), []),
    //     address: this.voucher.address || false,
    //     date: firebase.database.ServerValue.TIMESTAMP,
    //     by: this.voucher.by || null,
    //     description: this.voucher.description || null,
    //     name: this.voucher.name || null,
    //     photo: this.voucher.photo || [],
    //     price_comm: this.proper2((this.voucher.price_comm + this.countvar() * (this.voucher.price_comm / this.voucher.price_now))) || 0,
    //     price_vsnap: this.proper2(((this.voucher.price_vsnap || 0) + this.countvar() * ((this.voucher.price_vsnap || 0) / this.voucher.price_now))) || 0,
    //     price_now: this.proper2(((this.voucher.price_now + this.countvar())) || 0),
    //     price_ori: this.proper2(((this.voucher.price_ori || 0) + this.countvar()) || 0),
    //     qty: this.qty || null,
    //     seller_email: this.influencer.email || null,
    //     seller_id: this.user || null,
    //     seller_name: this.influencer.name || null,
    //     seller_phone: this.influencer.contact || null,
    //     thumbnail: this.voucher.thumbnail || null,
    //     tnc: this.voucher.tnc || null,
    //     type: 'vouchers',
    //     type_id: this.id || null,
    //     buyer_name: this.name || null,
    //     buyer_email: this.email || null,
    //     buyer_contact: this.contact || null,
    //     buyer_address: (this.address + ', ' + this.postcode + ', ' + this.city) || null,
    //     overwrite: this.voucher.overwrite || false,
    //     remark: this.remark || '',
    //   }).key;
    //   let body = {
    //     variations: this.lengthof(this.voucher.variations) ? JSON.stringify((this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), [])) : [],
    //     vendor: this.vendor.id,
    //     item: this.id,
    //     user: this.user,
    //     // amount: this.proper2(((this.voucher.price_now + this.countvar())) || 0) * this.qty * 100,
    //     amount: 100,
    //     qty: this.qty || 1,
    //     description: 'Purchase ' + this.voucher.name + ' x' + this.qty || 1,
    //     email: this.email,
    //     name: this.name,
    //     order: key,
    //     address: (this.address + ', ' + this.postcode + ', ' + this.city) || '',
    //     buyername: this.name || '',
    //     buyeremail: this.email || '',
    //     contact: this.contact || '',
    //     addresser: this.voucher.address || false,
    //     vendorfcm: this.vendor.fcm || '',
    //     remark: this.remark || '',
    //   }
    //   if (this.email && this.name) {
    //     this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/billplz', body).subscribe(a => {
    //       if (Object.values(a).length) {
    //         const browser = this.iab.create(a['url'], '_self');
    //         // console.log(a);
    //       } else {
    //         swal({
    //           icon: 'error',
    //           title: 'Error',
    //           text: 'Please check your email ! :(',
    //           closeOnEsc: false,
    //           closeOnClickOutside: false,
    //           buttons: [false],
    //           timer: 1500
    //         });
    //       }
    //     }, e => {
    //       // console.log(e);
    //     })
    //   } else {
    //     swal({
    //       icon: 'error',
    //       title: 'Error',
    //       text: 'Please fill up all information! :)',
    //       closeOnEsc: false,
    //       closeOnClickOutside: false,
    //       buttons: [false],
    //       timer: 1500
    //     });
    //   }
    // }
    free() {
        // let temp = (this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), [])
        // console.log(JSON.parse(temp))
        if (this.email && this.name) {
            let keyer = firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database().ref('pushKey').push(firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].database.ServerValue.TIMESTAMP).key;
            this.http.post('https://api2.vsnap.my/insertafforders', {
                address: this.voucher.address || false,
                aftersale: this.voucher.aftersale || "",
                buyer_address: ((this.address || "") + ' ' + (this.postcode || "") + ' ' + (this.city) || ""),
                buyer_contact: this.contact || "",
                buyer_name: this.name || "",
                buyer_email: this.email || "",
                by: this.voucher.by || "",
                category: this.voucher.category || "",
                checklist: JSON.stringify(this.voucher.list || []),
                date: new Date().getTime(),
                description: this.voucher.description || "",
                following: this.voucher.following || false,
                hidden_remark: this.voucher.hidden_remark || "",
                id: keyer,
                link: JSON.stringify(this.voucher.link || []),
                location: JSON.stringify(this.voucher.location || []),
                min_rating: this.voucher.min_rating || 0,
                min_vip: this.voucher.min_vip || 0,
                name: this.voucher.name || "",
                online: this.voucher.online || false,
                overwrite: this.voucher.overwrite || false,
                photo: JSON.stringify(this.voucher.photo || []),
                price_comm: this.price_comm,
                price_vsnap: this.price_vsnap,
                price_now: this.price_now,
                price_ori: this.price_ori,
                price_guild: this.voucher.price_guild || 0,
                price_guild_id: this.influencer.guild || "",
                price_guild_logs: this.voucher.price_guild_logs || "",
                price_guild_remark: this.voucher.price_guild_remark || "",
                price_vip: this.voucher.price_vip || 0,
                price_vip_remark: this.voucher.price_vip_remark || "",
                price_vip_logs: this.voucher.price_vip_logs || "",
                price_mentor: this.voucher.price_mentor || 0,
                price_mentor_id: this.voucher.price_mentor_id || "",
                price_mentor_remark: this.voucher.price_mentor_remark || "",
                price_mentor_logs: this.voucher.price_mentor_logs || "",
                qty: this.qty || 1,
                thumbnail: this.voucher.thumbnail || "",
                tnc: this.voucher.tnc || "",
                token: this.voucher.token || 0,
                type: 'vouchers',
                type_id: this.id || "",
                userid: this.user || "",
                value_price: this.voucher.value_price || 0,
                value_type: this.voucher.value_type || false,
                variations: JSON.stringify((this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), [])),
                seller_name: this.influencer.name || "",
                seller_email: this.influencer.email || "",
                seller_id: this.user || "",
                seller_phone: this.influencer.contact || "",
                survey: JSON.stringify(this.voucher.survey || []),
                verified: this.voucher.verified || 0,
                remark: this.voucher.remark || "",
                tag: this.voucher.tag || "",
            }).subscribe(a => {
                this.nav.navigateForward('thanks?status=SUCCESS&orderId=' + keyer);
            }, e => {
            });
            // let ids = firebase.database().ref('orders').push({
            //   variations: temp,
            //   address: this.voucher.address || false,
            //   date: firebase.database.ServerValue.TIMESTAMP,
            //   by: this.voucher.by || "",
            //   description: this.voucher.description || "",
            //   tag: this.voucher.tag || "",
            //   name: this.voucher.name || "",
            //   photo: this.voucher.photo || [],
            //   price_comm: this.proper2((this.voucher.price_comm + this.countvar() * (this.voucher.price_comm / this.voucher.price_now))) || 0,
            //   price_vsnap: this.proper2(((this.voucher.price_vsnap || 0) + this.countvar() * ((this.voucher.price_vsnap || 0) / this.voucher.price_now))) || 0,
            //   price_now: this.proper2(((this.voucher.price_now + this.countvar())) || 0),
            //   price_ori: this.proper2(((this.voucher.price_ori || 0) + this.countvar()) || 0),
            //   qty: this.qty || "",
            //   seller_email: this.influencer.email || "",
            //   seller_id: this.user || "",
            //   seller_name: this.influencer.name || "",
            //   seller_phone: this.influencer.contact || "",
            //   thumbnail: this.voucher.thumbnail || "",
            //   tnc: this.voucher.tnc || "",
            //   type: 'vouchers',
            //   type_id: this.id || "",
            //   buyer_name: this.name || "",
            //   buyer_email: this.email || "",
            //   buyer_contact: this.contact || "",
            //   buyer_address: (this.address + ', ' + this.postcode + ', ' + this.city) || "",
            //   overwrite: this.voucher.overwrite || false,
            //   remark: this.remark || '',
            // }).key;
        }
        else {
            sweetalert__WEBPACK_IMPORTED_MODULE_11___default()({
                icon: 'error',
                title: 'Error',
                text: '请填写所有资料\nPlease fill up all information!',
                closeOnEsc: false,
                closeOnClickOutside: false,
                buttons: [false],
                timer: 1500
            });
        }
    }
    lengthof_obj(x) {
        return x ? Object.values(x).length : 0;
    }
    enterlink(x) {
        const browser = this.iab.create(this.link[x], '_tab');
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["Meta"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map