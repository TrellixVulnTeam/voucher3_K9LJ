exports.ids=[59],exports.modules={Q2Bp:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_backdrop",function(){return Backdrop});var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("wEJo"),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("E/Mt"),_gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("y08P");const Backdrop=class{constructor(hostRef){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.o)(this,hostRef),this.ionBackdropTap=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionBackdropTap",7),this.blocker=_gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_2__.a.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}connectedCallback(){this.stopPropagation&&this.blocker.block()}disconnectedCallback(){this.blocker.unblock()}onMouseDown(ev){this.emitTap(ev)}emitTap(ev){this.stopPropagation&&(ev.preventDefault(),ev.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){const mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c,{tabindex:"-1","aria-hidden":"true",class:{[mode]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};Backdrop.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}};