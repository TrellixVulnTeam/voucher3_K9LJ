(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["token-token-module"],{

/***/ "VdSr":
/*!***************************************!*\
  !*** ./src/app/token/token.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2tlbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "W+Oc":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/token/token.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div\n    style=\"width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; background: rgba(0, 0, 0, .3); position: fixed; top: 0;\">\n\n    <div style=\"width: calc(100% - 40px); max-width: 300px; height: calc(100vh / 1.5); max-height: 500px;\">\n\n      <div\n        style=\"width: 100%; height: 100px; background: #ffffff; border-radius: 10px; background-image: radial-gradient(circle at left bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0), radial-gradient(circle at right bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0);\">\n\n        <div\n          style=\"width: 100%; height: 100px; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n          <div\n            style=\"width: calc(100% - 50px); height: 100px; display: flex; flex-direction: column; align-items: center; border-bottom: 3px dashed #eeeeee; position: relative;\">\n\n            <div\n              style=\"width: 60px; height: 60px; padding: 5px; background-color: #ffffff; border-radius: 100%; position: absolute; top: -30px;\">\n\n              <div\n                style=\"width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #ff9900; border-radius: 100%;\">\n                <ion-icon style=\"font-size: 45px; color: #ffffff;\" name=\"checkmark\"></ion-icon>\n              </div>\n\n            </div>\n\n            <div style=\"display: flex; flex-direction: column; align-items: center; margin-top: 30px;\">\n              <h3 style=\"font-weight: 600; margin: 0px 0px 3px 0px;\">Thank You!</h3>\n              <h6 style=\"font-weight: 600; color: #cccccc; margin: 0;\">Your purchase was successful</h6>\n            </div>\n\n\n          </div>\n        </div>\n\n      </div>\n\n      <div\n        style=\"margin-top: -1px; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px 0px; background: #ffffff; border-radius: 10px; background-image:\n       radial-gradient(circle at left top, rgba(0, 0, 0, 0.3) 15px, transparent 0), radial-gradient(circle at right top, rgba(0, 0, 0, 0.3) 15px, transparent 0);\">\n\n        <div style=\"width: calc(100% - 50px); max-width: 300px; max-height: 300px;\">\n          <img style=\"width: 100%;\" src=\"assets/1.png\">\n        </div>\n\n        <div style=\"width: 100%; display: flex; flex-direction: column; align-items: center; margin-top: 10px;\">\n          <div (click)=\"open()\"\n            style=\"cursor: pointer; padding: 10px 15px; border-radius: 5px; font-size: 14px; font-weight: 500; color: white;\n             text-align: center; background-color: #ff9900; margin-bottom: 15px;\">\n            Return to Vsnap</div>\n\n          <div style=\"width: calc(100% - 50px); font-size: 14px; font-weight: 500; color: #cccccc; text-align: center;\">\n            Click this button to return into Vsnap application.</div>\n        </div>\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "aGSS":
/*!***********************************************!*\
  !*** ./src/app/token/token-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TokenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenPageRoutingModule", function() { return TokenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _token_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.page */ "enIc");




const routes = [
    {
        path: '',
        component: _token_page__WEBPACK_IMPORTED_MODULE_3__["TokenPage"]
    }
];
let TokenPageRoutingModule = class TokenPageRoutingModule {
};
TokenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TokenPageRoutingModule);



/***/ }),

/***/ "enIc":
/*!*************************************!*\
  !*** ./src/app/token/token.page.ts ***!
  \*************************************/
/*! exports provided: TokenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenPage", function() { return TokenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_token_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./token.page.html */ "W+Oc");
/* harmony import */ var _token_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.page.scss */ "VdSr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");





let TokenPage = class TokenPage {
    constructor(iab) {
        this.iab = iab;
    }
    ngOnInit() {
    }
    open() {
        window.open('https://vsnap.page.link/naxz');
    }
    proper2(x) {
        return Math.round(((Math.abs(x) || 0) + Number.EPSILON) * 100) / 100;
    }
};
TokenPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
];
TokenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-token',
        template: _raw_loader_token_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_token_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TokenPage);



/***/ }),

/***/ "qWfp":
/*!***************************************!*\
  !*** ./src/app/token/token.module.ts ***!
  \***************************************/
/*! exports provided: TokenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenPageModule", function() { return TokenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _token_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token-routing.module */ "aGSS");
/* harmony import */ var _token_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token.page */ "enIc");







let TokenPageModule = class TokenPageModule {
};
TokenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _token_routing_module__WEBPACK_IMPORTED_MODULE_5__["TokenPageRoutingModule"]
        ],
        declarations: [_token_page__WEBPACK_IMPORTED_MODULE_6__["TokenPage"]]
    })
], TokenPageModule);



/***/ })

}]);
//# sourceMappingURL=token-token-module.js.map