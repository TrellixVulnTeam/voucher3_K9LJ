(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["token-token-module"],{

/***/ "VdSr":
/*!***************************************!*\
  !*** ./src/app/token/token.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stuff {\n  width: calc(100% - 40px);\n  margin-left: 20px;\n  max-width: 300px;\n}\n@media only screen and (min-width: 340px) {\n  .stuff {\n    margin-left: calc( ( 100vw - 300px ) / 2 );\n  }\n}\n.leftleft {\n  transition: all 0.2s ease;\n  transform: translateY(-320px);\n}\n.leftleftx {\n  transition: all 0.2s ease;\n  transform: translateY(0);\n}\n.leftleftall {\n  transition: opacity 0.2s ease;\n  opacity: 1;\n  transform: translateX(100vw);\n}\n.leftleftallx {\n  transition: opacity 0.2s ease;\n  opacity: 0;\n  transform: translateX(0);\n  animation: goaway 0.2s ease;\n}\n@keyframes goaway {\n  0% {\n    opacity: 1;\n    transform: translateX(-100vw);\n  }\n  99% {\n    transform: translateX(-100vw);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(0);\n  }\n}\n.inner22 {\n  right: 0;\n  opacity: 1;\n  --background:rgba(0,0,0,0.7);\n  background-color: rgba(0, 0, 0, 0.7);\n  transition: all 0.2s ease;\n}\n.innerx22 {\n  right: -100%;\n  opacity: 0;\n  --background: rgba(0,0,0,0);\n  background-color: rgba(0, 0, 0, 0);\n  transition: all 0.2s ease;\n}\n.loading {\n  transition: all 0.5s ease;\n  opacity: 1;\n  z-index: 1000000;\n}\n.loadingx {\n  transition: all 0.5s ease;\n  opacity: 0;\n  z-index: -1;\n}\n.inside {\n  width: 100vw;\n}\n@media only screen and (min-width: 600px) {\n  .inside {\n    margin-left: calc( 100vw - 500px );\n    max-width: 500px;\n    width: 500px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQUk7RUFKSjtJQU1RLDBDQUFBO0VBRU47QUFDRjtBQUNBO0VBQ0kseUJBQUE7RUFFQSw2QkFBQTtBQUNKO0FBRUU7RUFDRSx5QkFBQTtFQUVBLHdCQUFBO0FBQUo7QUFHRTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FBQUo7QUFHRTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUdFO0VBQ0U7SUFDSSxVQUFBO0lBQ0EsNkJBQUE7RUFBTjtFQUVFO0lBQ0ksNkJBQUE7RUFBTjtFQUVFO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VBQU47QUFDRjtBQUdFO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUFESjtBQUlFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUFESjtBQUlFO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQURKO0FBS0U7RUFFRSxZQUFBO0FBSEo7QUFJSTtFQUhGO0lBSUksa0NBQUE7SUFDQSxnQkFBQTtJQUNFLFlBQUE7RUFETjtBQUNGIiwiZmlsZSI6InRva2VuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHVmZntcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNDBweCkgIHtcclxuXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6Y2FsYyggKCAxMDB2dyAtIDMwMHB4ICkgLyAyICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sZWZ0bGVmdHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgIC8vIG9wYWNpdHk6MTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzIwcHgpO1xyXG4gIH1cclxuICBcclxuICAubGVmdGxlZnR4e1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgLy8gb3BhY2l0eTowO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICBcclxuICAubGVmdGxlZnRhbGx7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWZ0bGVmdGFsbHh7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlO1xyXG4gICAgb3BhY2l0eTowO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgYW5pbWF0aW9uOiBnb2F3YXkgLjJzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZ29hd2F5e1xyXG4gICAgMCV7XHJcbiAgICAgICAgb3BhY2l0eToxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xyXG4gICAgfVxyXG4gICAgOTkle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaW5uZXIyMntcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC43KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmlubmVyeDIye1xyXG4gICAgcmlnaHQ6LTEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLmxvYWRpbmd7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogMTAwMDAwMDtcclxuICB9XHJcbiAgXHJcbiAgLmxvYWRpbmd4e1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuaW5zaWRle1xyXG4gIFxyXG4gICAgd2lkdGg6MTAwdnc7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSAge1xyXG4gICAgICBtYXJnaW4tbGVmdDpjYWxjKCAxMDB2dyAtIDUwMHB4ICk7XHJcbiAgICAgIG1heC13aWR0aDo1MDBweDtcclxuICAgICAgICB3aWR0aDo1MDBweDtcclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ "W+Oc":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/token/token.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div *ngIf=\"paid\"\n    style=\"width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; background: rgba(0, 0, 0, .3); position: fixed; top: 0;\">\n\n    <div style=\"width: calc(100% - 40px); max-width: 300px; height: calc(100vh / 1.5); max-height: 500px;\">\n\n      <div\n        style=\"width: 100%; height: 100px; background: #ffffff; border-radius: 10px; background-image: radial-gradient(circle at left bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0), radial-gradient(circle at right bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0);\">\n\n        <div\n          style=\"width: 100%; height: 100px; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n          <div\n            style=\"width: calc(100% - 50px); height: 100px; display: flex; flex-direction: column; align-items: center; border-bottom: 3px dashed #eeeeee; position: relative;\">\n\n            <div\n              style=\"width: 60px; height: 60px; padding: 5px; background-color: #ffffff; border-radius: 100%; position: absolute; top: -30px;\">\n\n              <div\n                style=\"width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #ff9900; border-radius: 100%;\">\n                <ion-icon style=\"font-size: 45px; color: #ffffff;\" name=\"checkmark\"></ion-icon>\n              </div>\n\n            </div>\n\n            <div style=\"display: flex; flex-direction: column; align-items: center; margin-top: 30px;\">\n              <h3 style=\"font-weight: 600; margin: 0px 0px 3px 0px;\">Thank You!</h3>\n              <h6 style=\"font-weight: 600; color: #cccccc; margin: 0;\">Your purchase was successful</h6>\n            </div>\n\n\n          </div>\n        </div>\n\n      </div>\n\n      <div\n        style=\"margin-top: -1px; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px 0px; background: #ffffff; border-radius: 10px; background-image:\n       radial-gradient(circle at left top, rgba(0, 0, 0, 0.3) 15px, transparent 0), radial-gradient(circle at right top, rgba(0, 0, 0, 0.3) 15px, transparent 0);\">\n\n        <div style=\"width: calc(100% - 50px); max-width: 300px; max-height: 300px;\">\n          <img style=\"width: 100%;\" src=\"assets/1.png\">\n        </div>\n\n        <div style=\"width: 100%; display: flex; flex-direction: column; align-items: center; margin-top: 10px;\">\n          <!-- <div (click)=\"open()\" style=\"cursor: pointer; padding: 10px 15px; border-radius: 5px; font-size: 14px; font-weight: 500; color: white;\n             text-align: center; background-color: #ff9900; margin-bottom: 15px;\">\n            Return to Vsnap</div> -->\n\n          <div style=\"width: calc(100% - 50px); font-size: 14px; font-weight: 500; color: #cccccc; text-align: center;\">\n            Close this browser return to vsnap application.</div>\n        </div>\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div *ngIf=\"!paid\" style=\"width: 100vw;  background: rgba(0, 0, 0, .3); height: 100vh;\">\n\n    <div [ngStyle]=\"{'padding-top' : ' calc( ( 100vh - '+theheight +'px ) / 2 )'}\"></div>\n\n    <div #heighter id=\"heighter\" class='stuff'>\n\n      <div\n        style=\"width: 100%; height: 100px; background: #ffffff; border-radius: 10px; background-image: radial-gradient(circle at left bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0), radial-gradient(circle at right bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0);\">\n\n        <div\n          style=\"width: 100%; height: 100px; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n          <div\n            style=\"width: calc(100% - 50px); height: 100px; display: flex; flex-direction: column; align-items: center; border-bottom: 3px dashed #eeeeee; position: relative;\">\n\n            <div\n              style=\"width: 60px; height: 60px; padding: 5px; background-color: #ffffff; border-radius: 100%; position: absolute; top: -30px;\">\n\n              <div\n                style=\"width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #e05555; border-radius: 100%;\">\n                <ion-icon style=\"font-size: 45px; color: #ffffff;\" name=\"close\"></ion-icon>\n              </div>\n\n            </div>\n\n            <div style=\"display: flex; flex-direction: column; align-items: center; margin-top: 30px;\">\n              <h3 style=\"font-weight: 600; margin: 0px 0px 3px 0px;\">Sorry!</h3>\n              <h6 style=\"font-weight: 600; color: #d7d7d7; margin: 0;\">Your purchase was unsuccessful</h6>\n            </div>\n\n\n          </div>\n        </div>\n\n      </div>\n\n      <div style=\"margin-top: -1px; width: 100%; background: #ffffff; border-radius: 10px;\n         background-image: radial-gradient(circle at left top, rgba(0, 0, 0, 0.3) 15px, transparent 0),\n          radial-gradient(circle at right top, rgba(0, 0, 0, 0.3) 15px, transparent 0); padding: 40px 30px;\">\n\n        <img style=\"width: 100%;\" src=\"assets/1.png\">\n\n        <div style=\" font-size: 14px; font-weight: 500; color: #cccccc; text-align: center; margin-top: 20px;\">\n          You have cancelled your transaction.</div>\n      </div>\n\n    </div>\n\n  </div>\n\n\n</ion-content>");

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");







let TokenPage = class TokenPage {
    constructor(iab, actRoute, title) {
        this.iab = iab;
        this.actRoute = actRoute;
        this.title = title;
        this.paid = false;
        this.theheight = 1000;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.actRoute.queryParams.subscribe(a => {
            this.paid = (a['status'] == "SUCCESS");
            if (this.paid) {
                this.title.setTitle('Thanks For Your Purchase!');
            }
            else {
                this.title.setTitle('Order Cancelled!');
            }
        });
        setInterval(() => {
            this.theheight = (document.getElementById('heighter').clientHeight);
        }, 500);
    }
    open() {
        window.open('https://vsnap.page.link/naxz');
    }
    proper2(x) {
        return Math.round(((Math.abs(x) || 0) + Number.EPSILON) * 100) / 100;
    }
};
TokenPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
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