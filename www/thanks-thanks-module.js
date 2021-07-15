(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thanks-thanks-module"],{

/***/ "0ShF":
/*!*************************************************!*\
  !*** ./src/app/thanks/thanks-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ThanksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksPageRoutingModule", function() { return ThanksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _thanks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thanks.page */ "P6la");




const routes = [
    {
        path: '',
        component: _thanks_page__WEBPACK_IMPORTED_MODULE_3__["ThanksPage"]
    }
];
let ThanksPageRoutingModule = class ThanksPageRoutingModule {
};
ThanksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThanksPageRoutingModule);



/***/ }),

/***/ "AG0g":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thanks/thanks.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: rgba(0, 0, 0, .3); \">\n\n  <div *ngIf=\"(paid == 'true' ||  paid == true)  && order.address == false\" style=\"width: 100vw; \">\n\n    <div [ngStyle]=\"{'padding-top' : ' calc( ( 100vh - '+theheight +'px ) / 2 )'}\"></div>\n\n    <div #heighter id=\"heighter\" class='stuff'>\n\n      <div\n        style=\"margin-top:30px;width: 100%; height: 100px; background: #ffffff; border-radius: 10px; background-image: radial-gradient(circle at left bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0), radial-gradient(circle at right bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0);\">\n\n        <div\n          style=\"width: 100%; height: 100px; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n          <div\n            style=\"width: calc(100% - 50px); height: 100px; display: flex; flex-direction: column; align-items: center; border-bottom: 3px dashed #eeeeee; position: relative;\">\n\n            <div\n              style=\"width: 60px; height: 60px; padding: 5px; background-color: #ffffff; border-radius: 100%; position: absolute; top: -30px;\">\n\n              <div\n                style=\"width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #ff9900; border-radius: 100%;\">\n                <ion-icon style=\"font-size: 45px; color: #ffffff;\" name=\"checkmark\"></ion-icon>\n              </div>\n\n            </div>\n\n            <div style=\"display: flex; flex-direction: column; align-items: center; margin-top: 30px;\">\n              <h3 style=\"font-weight: 600; margin: 0px 0px 3px 0px;\">Thank You!</h3>\n              <h6 style=\"font-weight: 600; color: #cccccc; margin: 0;\">Your purchase was successful</h6>\n            </div>\n\n\n          </div>\n        </div>\n\n      </div>\n\n      <div\n        style=\"margin-bottom:30px;margin-top: -1px; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px 0px; background: #ffffff; border-radius: 10px; background-image:\n         radial-gradient(circle at left top, rgba(0, 0, 0, 0.3) 15px, transparent 0), radial-gradient(circle at right top, rgba(0, 0, 0, 0.3) 15px, transparent 0);\">\n\n        <div style=\"width: calc(100% - 50px); max-width: 400px; \">\n\n          <div style=\"text-align: start;\">\n            <div style=\"display: flex; align-items: center; \">\n              <ion-icon style='font-size:18px;color:#00b871;margin-right:10px;' name=\"cube-outline\"></ion-icon>\n              <div style=\"font-size: 14px; font-weight: 500;\">Order Detail</div>\n            </div>\n            <div style=\"margin-left:28px;margin-top: 10px; font-size: 12px; color: #333333;line-height: 25px;\">\n              {{order.name}} ({{order.qty}}&nbsp;units{{getvar(order.variations||[])}}) - {{order.price_now * order.qty\n              |\n              currency:'RM\n              '}}</div>\n            <div style=\"margin-left:28px;margin-top: 10px; font-size: 12px; color: #333333;\">Order ID: {{order.id}}\n            </div>\n          </div>\n\n          <div\n            style=\"position: relative; margin-top: 10px; display: flex; align-items: center; justify-content: center; height: 200px; width: 100%\">\n            <img style='width:100%;height:100%;object-fit: contain;position: absolute;z-index:10;' src=\"{{qr}}\">\n            <img style='width: calc( 100% - 50px) ;height:100%;object-fit: cover;'\n              src=\"https://i.pinimg.com/originals/39/ee/de/39eede5b8818d7c02d2340a53a652961.gif\">\n          </div>\n          <!-- <img style=\"width: 100%; height: 100%; object-fit: contain; margin-top: 10px;\" src=\"{{qr}}\" alt=\"\"> -->\n        </div>\n\n        <div style=\"width: 100%; display: flex; flex-direction: column; align-items: center; margin-top: 10px;\">\n          <div style=\"width: calc(100% - 50px); font-size: 14px; font-weight: 500; color: #cccccc; text-align: center;\">\n            You can redeem the product at our outlet.</div>\n        </div>\n\n        <div style=\"display: flex; align-items: center;justify-content: center;width:100%;\">\n          <div (click)=\"track(order.id)\"\n            style=\"cursor: pointer; font-size: 14px; padding: 10px 20px; border: 1px solid #00b871; color: #00b871; font-weight: 300; width: max-content; margin: 10px 0px;\">\n            Track your order</div>\n        </div>\n\n\n        <div *ngIf=\"items.aftersale\" style=\"text-align: start;width:100%; padding: 20px;\">\n          <div style=\"margin-top: 30px; font-weight: 500; font-size: 14px; display: flex; align-items: center;\">\n            <ion-icon style='font-size:18px;color:#00b871;margin-right:10px;' name=\"information-circle-outline\">\n            </ion-icon>\n            Note to buyer\n          </div>\n\n          <div style=\" margin-top: 5px;  font-size: 12px;width:100%;  white-space: pre-wrap;\">\n            - {{items.aftersale}}</div>\n        </div>\n\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div *ngIf=\"(paid == 'true' || paid == true) && (order.address == true)\" style=\"width: 100vw; \">\n\n    <div [ngStyle]=\"{'padding-top' : ' calc( ( 100vh - '+theheight +'px ) / 2 )'}\"></div>\n\n    <div #heighter id=\"heighter\" class='stuff'>\n\n      <div\n        style=\"width: 100%; height: 100px; background: #ffffff; border-radius: 10px; background-image: radial-gradient(circle at left bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0), radial-gradient(circle at right bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0);\">\n\n        <div\n          style=\"width: 100%; height: 100px; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n          <div\n            style=\"width: calc(100% - 50px); height: 100px; display: flex; flex-direction: column; align-items: center; border-bottom: 3px dashed #eeeeee; position: relative;\">\n\n            <div\n              style=\"width: 60px; height: 60px; padding: 5px; background-color: #ffffff; border-radius: 100%; position: absolute; top: -30px;\">\n\n              <div\n                style=\"width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #ff9900; border-radius: 100%;\">\n                <ion-icon style=\"font-size: 45px; color: #ffffff;\" name=\"checkmark\"></ion-icon>\n              </div>\n\n            </div>\n\n            <div style=\"display: flex; flex-direction: column; align-items: center; margin-top: 30px;\">\n              <h3 style=\"font-weight: 600; margin: 0px 0px 3px 0px;\">Thank You!</h3>\n              <h6 style=\"font-weight: 600; color: #d7d7d7; margin: 0;\">Your purchase was successful</h6>\n            </div>\n\n\n          </div>\n        </div>\n\n      </div>\n\n      <div\n        style=\"margin-top: -1px; width: 100%; background: #ffffff; border-radius: 10px;\n         background-image: radial-gradient(circle at left top, rgba(0, 0, 0, 0.3) 15px, transparent 0),\n          radial-gradient(circle at right top, rgba(0, 0, 0, 0.3) 15px, transparent 0); padding: 30px; text-align: center;\">\n\n        <div style=\"text-align: start;\">\n          <div style=\"display: flex; align-items: center; \">\n            <ion-icon style='font-size:18px;color:#00b871;margin-right:10px;' name=\"cube-outline\"></ion-icon>\n            <div style=\"font-size: 14px; font-weight: 500;\">Order Detail</div>\n          </div>\n          <div style=\"margin-left:28px;margin-top: 10px; font-size: 12px; color: #333333;line-height: 25px;\">\n            {{order.name}} ({{order.qty}}&nbsp;units{{getvar(order.variations||[])}}) - {{order.price_now * order.qty |\n            currency:'RM\n            '}}</div>\n          <div style=\"margin-left:28px;margin-top: 10px; font-size: 12px; color: #333333;\">Order ID: {{order.id}}</div>\n        </div>\n\n        <img style=\"width: 100%;\" src=\"assets/1.png\">\n\n\n        <div style=\" font-size: 14px; font-weight: 500; color: #cccccc; text-align: center; margin-top: 20px;\">\n          Merchant will deliver your product as soon as possible.</div>\n\n        <div style=\"display: flex; align-items: center;justify-content: center;\">\n          <div (click)=\"track(order.id)\"\n            style=\"cursor: pointer; font-size: 14px; padding: 10px 20px; border: 1px solid #00b871; color: #00b871; font-weight: 300; width: max-content; margin: 10px 0px;\">\n            Track your order</div>\n        </div>\n\n        <div *ngIf=\"items.aftersale\" style=\"text-align: start;\">\n          <div style=\"margin-top: 30px; font-weight: 500; font-size: 14px; display: flex; align-items: center;\">\n            <ion-icon style='font-size:18px;color:#00b871;margin-right:10px;' name=\"information-circle-outline\">\n            </ion-icon>\n            Note to buyer\n          </div>\n\n          <div style=\"margin-left:28px; margin-top: 5px;  font-size: 12px; white-space: pre-wrap;\">\n            - {{items.aftersale}}</div>\n        </div>\n\n\n        <!-- <div style=\"font-weight: 500; display: flex; align-items: center;\">\n          <ion-icon style=\"margin-right: 10px; font-size: 25px;\" name=\"person-circle-outline\"></ion-icon>\n          <div style=\"width: calc(100% - 20px);\"> {{name}}</div>\n        </div>\n\n        <div style=\"margin-top: 30px; font-weight: 500; display: flex; align-items: center;\">\n          <ion-icon style=\"margin-right: 10px; font-size: 25px;\" name=\"call-outline\"></ion-icon>\n\n          <div style=\"width: calc(100% - 20px);\"> {{contact}}</div>\n        </div>\n\n        <div style=\"margin-top: 30px; font-weight: 500; display: flex; align-items: center;\">\n          <ion-icon style=\"margin-right: 10px; font-size: 25px;\" name=\"mail-outline\"></ion-icon>\n\n          <div style=\"width: calc(100% - 20px);\"> {{email}}</div>\n        </div>\n\n        <div style=\"margin-top: 30px; font-weight: 500; display: flex; align-items: center;\">\n          <ion-icon style=\"margin-right: 10px; font-size: 25px;\" name=\"home-outline\"></ion-icon>\n          <div style=\"width: calc(100% - 20px);\"> {{address}}</div>\n        </div> -->\n\n        <!-- <div *ngIf=\"items.aftersale\" style=\"margin-top: 30px; font-weight: 500; font-size: 12px;\"><span\n            style=\"color: red;\">*</span> Instruction:</div>\n\n        <div *ngIf=\"items.aftersale\" style=\" margin-top: 5px; font-weight: 500;\">\n          - {{items.aftersale}}</div> -->\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div *ngIf=\"(paid == 'false' || paid == false) && order.id \" style=\"width: 100vw;\">\n\n    <div [ngStyle]=\"{'padding-top' : ' calc( ( 100vh - '+theheight +'px ) / 2 )'}\"></div>\n\n    <div #heighter id=\"heighter\" class='stuff'>\n\n      <div\n        style=\"width: 100%; height: 100px; background: #ffffff; border-radius: 10px; background-image: radial-gradient(circle at left bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0), radial-gradient(circle at right bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0);\">\n\n        <div\n          style=\"width: 100%; height: 100px; display: flex; flex-direction: column; align-items: center; justify-content: center;\">\n          <div\n            style=\"width: calc(100% - 50px); height: 100px; display: flex; flex-direction: column; align-items: center; border-bottom: 3px dashed #eeeeee; position: relative;\">\n\n            <div\n              style=\"width: 60px; height: 60px; padding: 5px; background-color: #ffffff; border-radius: 100%; position: absolute; top: -30px;\">\n\n              <div\n                style=\"width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #e05555; border-radius: 100%;\">\n                <ion-icon style=\"font-size: 45px; color: #ffffff;\" name=\"close\"></ion-icon>\n              </div>\n\n            </div>\n\n            <div style=\"display: flex; flex-direction: column; align-items: center; margin-top: 30px;\">\n              <h3 style=\"font-weight: 600; margin: 0px 0px 3px 0px;\">Sorry!</h3>\n              <h6 style=\"font-weight: 600; color: #d7d7d7; margin: 0;\">Your purchase was unsuccessful</h6>\n            </div>\n\n\n          </div>\n        </div>\n\n      </div>\n\n      <div style=\"margin-top: -1px; width: 100%; background: #ffffff; border-radius: 10px;\n         background-image: radial-gradient(circle at left top, rgba(0, 0, 0, 0.3) 15px, transparent 0),\n          radial-gradient(circle at right top, rgba(0, 0, 0, 0.3) 15px, transparent 0); padding: 40px 30px;\">\n\n        <img style=\"width: 100%;\" src=\"assets/1.png\">\n\n        <div style=\" font-size: 14px; font-weight: 500; color: #cccccc; text-align: center; margin-top: 20px;\">\n          You have cancelled your transaction.</div>\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<div *ngIf=\"5 > animer\" [ngClass]=\" animer == 0 ? 'loading' : 'loadingx'\" style=\" width: 100vw; height: 100vh;\n  position: fixed; display: flex; align-items: center; justify-content: center;\n   background-color: white;\">\n  <img style=\"object-fit: cover; height: 100%;\" src='assets/clogo.gif'>\n</div>");

/***/ }),

/***/ "P6la":
/*!***************************************!*\
  !*** ./src/app/thanks/thanks.page.ts ***!
  \***************************************/
/*! exports provided: ThanksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksPage", function() { return ThanksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_thanks_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./thanks.page.html */ "AG0g");
/* harmony import */ var _thanks_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thanks.page.scss */ "QDSg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let ThanksPage = class ThanksPage {
    constructor(actRoute, http, title, meta, nav, platform) {
        this.actRoute = actRoute;
        this.http = http;
        this.title = title;
        this.meta = meta;
        this.nav = nav;
        this.platform = platform;
        // qr;
        // id;
        this.orderid = "";
        this.order = {};
        this.qr = "";
        this.items = {};
        this.theheight = 0;
        // heighting(){
        //   // console.log((document.getElementById('heighter').clientHeight))
        //   return 
        // }
        this.animer = 0;
    }
    // remark; 
    // name;
    // contact;
    // address;
    // email;
    // userid;
    // vendor;
    // items = [] as any;
    // order = [] as any;
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.qr = 'https://i.pinimg.com/originals/39/ee/de/39eede5b8818d7c02d2340a53a652961.gif';
        this.title.setTitle('Thanks For Your Purchase!');
        // this.meta.updateTag({ itemprop: 'description', content: (data['success'].description || '') })
        this.actRoute.queryParams.subscribe(a => {
            this.orderid = a['orderid'];
            this.paid = a['billplz[paid]'];
            console.log(this.paid);
            if (this.paid == 'true' || this.paid == true) {
                // console.log(a['order']);
                firebase__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('orders/' + this.orderid).once('value', data => {
                    if (data.exists()) {
                        // console.log(data.val());
                        this.order = data.val();
                        console.log(data.val().address);
                        this.animer = 6;
                        // this.theheight = (document.getElementById('heighter').clientHeight);
                        setInterval(() => {
                            this.theheight = (document.getElementById('heighter').clientHeight);
                        }, 500);
                        firebase__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('vouchers/' + data.val().type_id).once('value', data => {
                            this.items = data.val();
                        });
                    }
                });
            }
            else {
                setInterval(() => {
                    this.theheight = (document.getElementById('heighter').clientHeight);
                }, 500);
            }
            this.qr = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + a['order'] + ',' + 'consumer';
        });
    }
    track(x) {
        this.nav.navigateForward('order/' + x);
    }
    getvar(x) {
        return x ? x.reduce((a, b) => a + ", " + b['name'], "") : '';
    }
};
ThanksPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Meta"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] }
];
ThanksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-thanks',
        template: _raw_loader_thanks_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_thanks_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ThanksPage);



/***/ }),

/***/ "QDSg":
/*!*****************************************!*\
  !*** ./src/app/thanks/thanks.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stuff {\n  width: calc(100% - 40px);\n  margin-left: 20px;\n  max-width: 300px;\n}\n@media only screen and (min-width: 340px) {\n  .stuff {\n    margin-left: calc( ( 100vw - 300px ) / 2 );\n  }\n}\n.leftleft {\n  transition: all 0.2s ease;\n  transform: translateY(-320px);\n}\n.leftleftx {\n  transition: all 0.2s ease;\n  transform: translateY(0);\n}\n.leftleftall {\n  transition: opacity 0.2s ease;\n  opacity: 1;\n  transform: translateX(100vw);\n}\n.leftleftallx {\n  transition: opacity 0.2s ease;\n  opacity: 0;\n  transform: translateX(0);\n  animation: goaway 0.2s ease;\n}\n@keyframes goaway {\n  0% {\n    opacity: 1;\n    transform: translateX(-100vw);\n  }\n  99% {\n    transform: translateX(-100vw);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(0);\n  }\n}\n.inner22 {\n  right: 0;\n  opacity: 1;\n  --background:rgba(0,0,0,0.7);\n  background-color: rgba(0, 0, 0, 0.7);\n  transition: all 0.2s ease;\n}\n.innerx22 {\n  right: -100%;\n  opacity: 0;\n  --background: rgba(0,0,0,0);\n  background-color: rgba(0, 0, 0, 0);\n  transition: all 0.2s ease;\n}\n.loading {\n  transition: all 0.5s ease;\n  opacity: 1;\n  z-index: 1000000;\n}\n.loadingx {\n  transition: all 0.5s ease;\n  opacity: 0;\n  z-index: -1;\n}\n.inside {\n  width: 100vw;\n}\n@media only screen and (min-width: 600px) {\n  .inside {\n    margin-left: calc( 100vw - 500px );\n    max-width: 500px;\n    width: 500px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRoYW5rcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBSko7SUFNUSwwQ0FBQTtFQUVOO0FBQ0Y7QUFJQTtFQUNJLHlCQUFBO0VBRUEsNkJBQUE7QUFGSjtBQUtFO0VBQ0UseUJBQUE7RUFFQSx3QkFBQTtBQUhKO0FBTUU7RUFDRSw2QkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBQUhKO0FBTUU7RUFDRSw2QkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBSEo7QUFNRTtFQUNFO0lBQ0ksVUFBQTtJQUNBLDZCQUFBO0VBSE47RUFLRTtJQUNJLDZCQUFBO0VBSE47RUFLRTtJQUNJLFVBQUE7SUFDQSx3QkFBQTtFQUhOO0FBQ0Y7QUFNRTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FBSko7QUFPRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0FBSko7QUFPRTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSko7QUFPRTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFKSjtBQVFFO0VBRUUsWUFBQTtBQU5KO0FBT0k7RUFIRjtJQUlJLGtDQUFBO0lBQ0EsZ0JBQUE7SUFDRSxZQUFBO0VBSk47QUFDRiIsImZpbGUiOiJ0aGFua3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0dWZme1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM0MHB4KSAge1xyXG5cclxuICAgICAgICBtYXJnaW4tbGVmdDpjYWxjKCAoIDEwMHZ3IC0gMzAwcHggKSAvIDIgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4ubGVmdGxlZnR7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICAvLyBvcGFjaXR5OjE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMyMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgLmxlZnRsZWZ0eHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICAgIC8vIG9wYWNpdHk6MDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgXHJcbiAgLmxlZnRsZWZ0YWxse1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xyXG4gIH1cclxuICBcclxuICAubGVmdGxlZnRhbGx4e1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZTtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIGFuaW1hdGlvbjogZ29hd2F5IC4ycyBlYXNlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGdvYXdheXtcclxuICAgIDAle1xyXG4gICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHZ3KTtcclxuICAgIH1cclxuICAgIDk5JXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHZ3KTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmlubmVyMjJ7XHJcbiAgICByaWdodDowO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbm5lcngyMntcclxuICAgIHJpZ2h0Oi0xMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkaW5ne1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDAwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkaW5neHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmluc2lkZXtcclxuICBcclxuICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6Y2FsYyggMTAwdncgLSA1MDBweCApO1xyXG4gICAgICBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgICAgICAgd2lkdGg6NTAwcHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "WBR6":
/*!*****************************************!*\
  !*** ./src/app/thanks/thanks.module.ts ***!
  \*****************************************/
/*! exports provided: ThanksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksPageModule", function() { return ThanksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _thanks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thanks-routing.module */ "0ShF");
/* harmony import */ var _thanks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thanks.page */ "P6la");







let ThanksPageModule = class ThanksPageModule {
};
ThanksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _thanks_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThanksPageRoutingModule"]
        ],
        declarations: [_thanks_page__WEBPACK_IMPORTED_MODULE_6__["ThanksPage"]]
    })
], ThanksPageModule);



/***/ })

}]);
//# sourceMappingURL=thanks-thanks-module.js.map