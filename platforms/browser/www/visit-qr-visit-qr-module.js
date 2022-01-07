(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visit-qr-visit-qr-module"],{

/***/ "5Kne":
/*!*********************************************!*\
  !*** ./src/app/visit-qr/visit-qr.module.ts ***!
  \*********************************************/
/*! exports provided: VisitQrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitQrPageModule", function() { return VisitQrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _visit_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visit-qr-routing.module */ "Tfhx");
/* harmony import */ var _visit_qr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visit-qr.page */ "fq3S");







let VisitQrPageModule = class VisitQrPageModule {
};
VisitQrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _visit_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitQrPageRoutingModule"]
        ],
        declarations: [_visit_qr_page__WEBPACK_IMPORTED_MODULE_6__["VisitQrPage"]]
    })
], VisitQrPageModule);



/***/ }),

/***/ "SlPQ":
/*!*********************************************!*\
  !*** ./src/app/visit-qr/visit-qr.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdC1xci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Tfhx":
/*!*****************************************************!*\
  !*** ./src/app/visit-qr/visit-qr-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: VisitQrPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitQrPageRoutingModule", function() { return VisitQrPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _visit_qr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visit-qr.page */ "fq3S");




const routes = [
    {
        path: '',
        component: _visit_qr_page__WEBPACK_IMPORTED_MODULE_3__["VisitQrPage"]
    }
];
let VisitQrPageRoutingModule = class VisitQrPageRoutingModule {
};
VisitQrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VisitQrPageRoutingModule);



/***/ }),

/***/ "aq7Z":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visit-qr/visit-qr.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div\n    style=\"display: flex; align-items: center; justify-content: center; background-color: #f7f9fd; min-height: 100vh;\">\n\n    <div style=\"width: 600px; height: 100vh;\">\n\n      <div\n        style='width:100%;display:flex;align-items: center;justify-content: space-between;padding:0px 20px;background-color:white;border-bottom:1px solid #eeeeee;height:70px;'>\n\n        <div style=\"display: flex; align-items: center;\">\n          <img (click)='tomain()' style='height:20px;object-fit: contain;cursor: pointer;'\n            src=\"https://i.imgur.com/pEyI97C.png\" alt=\"\">\n        </div>\n\n        <div (click)=\"store(influencer.id)\" style='display:flex;align-items: center;justify-content: flex-end;'>\n          <img style='height:30px;width:30px;object-fit: cover;border-radius:100%;'\n            src=\"{{influencer['photo'] ? (stringornot(influencer['photo']) ? influencer['photo'] : influencer['photo'][0] ) : 'https://i.imgur.com/GvrNqUS.png' }}\"\n            alt=\"\">\n          <div style='margin-left:10px;'>\n            <div\n              style='font-size:14px;color:#333333;background-color:white;margin-right:20px;text-align: left;font-weight: bold;'>\n              {{influencer['name']}}</div>\n            <div style='font-size:12px;color:#999999;margin-top:2px;'>Visit my store ></div>\n          </div>\n        </div>\n      </div>\n\n      <div\n        style=\"padding: 10px; display: flex; align-items: center; justify-content: center; flex-direction: column; width: 100%; background-color: #fafafa;\">\n\n        <div style=\"width: 100%; text-align: center; margin-top: 30px; font-size: 30px; font-weight: 500;\">\n          vendors[promote_text]</div>\n\n        <div\n          style=\"width: 50%; margin: 40px 0px; position: relative; display: flex; align-items: center; justify-content: center;\">\n          <img src=\"https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif\"\n            style=\"width: 70%; height: 203px; object-fit: cover;\" alt=\"\">\n          <img src=\"{{image}}\" style=\"width: 70%;  position: absolute;\">\n        </div>\n\n      </div>\n\n      <div style=\"width: 100%;background:white;margin-bottom:100px;\">\n        <div style=\"width: 100%; display: flex; align-items: center; text-align: center;background: white;\">\n          <div (click)=\"tab = 0\" *ngIf=\"vendors.tnc\"\n            [ngStyle]=\"{'border-bottom': tab==0? '2px solid #F68D44' : '1px solid #eeeeee','color': tab==0? '#F68D44' : '#999999','font-weight': tab==0? '500' : '400'}\"\n            style=\"width: calc((100% ) / 3);padding:10px 0px;font-size: 12px; letter-spacing: 0.5px;\">\n            Terms & Cons.\n          </div>\n          <div (click)=\"tab = 1\"\n            [ngStyle]=\"{'border-bottom': tab==1? '2px solid #F68D44' : '1px solid #eeeeee','color': tab==1? '#F68D44' : '#999999','font-weight': tab==1? '500' : '400'}\"\n            style=\"width: calc((100% ) / 3);padding:10px 0px;font-size: 12px; letter-spacing: 0.5px;\">\n            Abouts.\n          </div>\n          <div (click)=\"tab = 2\"\n            [ngStyle]=\"{'border-bottom': tab==2? '2px solid #F68D44' : '1px solid #eeeeee','color': tab==2? '#F68D44' : '#999999','font-weight': tab==2? '500' : '400'}\"\n            style=\"width: calc((100% ) / 3);padding:10px 0px;font-size: 12px; letter-spacing: 0.5px;\">\n            Menu\n          </div>\n          <div (click)=\"tab = 3\"\n            [ngStyle]=\"{'border-bottom': tab==3? '2px solid #F68D44' : '1px solid #eeeeee','color': tab==3? '#F68D44' : '#999999','font-weight': tab==3? '500' : '400'}\"\n            style=\"width: calc((100% ) / 3);padding:10px 0px;font-size: 12px; letter-spacing: 0.5px;\">\n            Locations\n          </div>\n        </div>\n\n        <!-- *ngIf=\"data.description\" -->\n        <div style=\"padding: 10px;\">\n          <div *ngIf=\"tab==0\"\n            style=\"white-space: pre-line;letter-spacing: 0.5px;line-height: 1.7;font-size: 12px;margin-bottom: 20px;color:#666666\">\n            {{vendors.tnc}}\n          </div>\n\n          <div *ngIf='tab==1' style='width:100%;padding:20px 20px;'>\n            <div style='width:100%;display:flex;align-items: center;justify-content: flex-start;'>\n\n              <img style='height:70px;width:70px;border-radius:100%;object-fit: cover;'\n                src=\"{{vendors['photo'] || 'https://media.istockphoto.com/vectors/young-woman-engaged-in-shopping-and-checkout-her-purchases-vector-id1073204892?b=1&k=6&m=1073204892&s=612x612&w=0&h=WQz5o6GHiShCSZhpcQ6G1Fkg8fPV65UKNU7z2sWTEBg='}}\"\n                alt=\"\">\n              <div style='width:calc( 100% - 70px );padding-left:20px;'>\n                <div style='font-size:14px;color:#333333;margin-bottom:10px;margin-top:10px;font-weight: bold;'>\n                  {{vendors[\"name\"] || '123'}}</div>\n                <div style='width:calc( 100% );display:flex;flex-wrap: wrap;'>\n                  <div *ngFor='let x of vendors[\"link\"]'\n                    style='cursor: pointer;;padding:5px 10px;border:1px solid #eeeeee;font-size:12px;margin-right:10px;margin-bottom:10px;'>\n                    {{x.name}}</div>\n                </div>\n              </div>\n            </div>\n            <!-- <div *ngIf=\"vendor['description']\" style='font-size:14px;font-weight: bold;color:#333333;padding-top:20px;padding-bottom:10px;'>Company Description</div> -->\n            <div *ngIf=\"vendors['description']\"\n              style='font-size:14px;color:#999999;width:100%;white-space: pre-line;padding:20px 0px;'>\n              {{vendors[\"description\"] || '123'}}</div>\n\n            <div (click)=\"brand(vendor.id)\"\n              style=' font-size:14px;padding:10px 20px;border:1px solid #f53c3c;color:#f53c3c;width:max-content;margin-top:20px;cursor: pointer;'>\n              More from&nbsp;{{vendors[\"name\"] || '123'}}&nbsp;></div>\n\n          </div>\n\n          <div *ngIf=\"tab==2\">\n            <div *ngFor=\"let x of menu\">\n\n              <div style=\"margin: 10px 0px; font-weight: 600;\">{{x.name}}</div>\n\n              <div *ngFor=\"let y of x.products\"\n                style=\"display: flex; align-items: center; padding-bottom: 10px; border-bottom: 1px solid #eeeeee;\">\n\n                <img src=\"{{y.photo}}\"\n                  style=\"background-color: black; border-radius: 10px; height: 25%; width: 25%; object-fit: cover;\">\n                <div style=\"padding-left: 10px;\">\n                  <div style=\"font-size: 14px; font-weight: 500;\">{{y.name}}</div>\n\n                  <div style=\"margin-top: 10px; font-size: 12px; color: #f68d44;\">{{ (y.price / 100) | currency:'RM '\n                    }}&nbsp;\n                    <!-- <span style=\"text-decoration: line-through; color: #999999;\">RM15.00</span> -->\n                  </div>\n                </div>\n\n              </div>\n\n            </div>\n          </div>\n\n          <div *ngIf=\"tab==3\"\n            style=\"white-space: pre-line;letter-spacing: 0.5px;line-height: 1.7;font-size: 12px;margin-bottom: 20px;color:#666666\">\n            <div *ngFor=\"let x of locations\" style=\"border-bottom: 1px solid #eeeeee; padding: 10px;\">\n              <div style=\"font-weight: bold;\">{{x.name}}</div>\n              <div>+{{condis(x.contact)}}</div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "fq3S":
/*!*******************************************!*\
  !*** ./src/app/visit-qr/visit-qr.page.ts ***!
  \*******************************************/
/*! exports provided: VisitQrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitQrPage", function() { return VisitQrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visit_qr_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visit-qr.page.html */ "aq7Z");
/* harmony import */ var _visit_qr_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visit-qr.page.scss */ "SlPQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let VisitQrPage = class VisitQrPage {
    constructor(actRoute, http, nav) {
        this.actRoute = actRoute;
        this.http = http;
        this.nav = nav;
        this.tab = 0;
        this.influencer = [];
        this.locations = [];
        this.vendors = [];
        this.menu = [];
    }
    condis(x) {
        if (((x || '').toString()).substring(0, 1) == '6') {
            return x;
        }
        else if (((x || '').toString()).substring(0, 1) == '0') {
            return '6' + x;
        }
        else {
            return '60' + x;
        }
    }
    brand(x) {
        this.nav.navigateForward('brand/' + x + '/' + this.user);
    }
    store(x) {
        this.nav.navigateForward('store/' + x);
    }
    ngOnInit() {
        this.actRoute.queryParams.subscribe(a => {
            this.vendor = a['vendor'];
            this.user = a['user'];
            this.image = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + a['vendor'] + ',' + a['user'];
            this.http.post('https://api2.vsnap.my/getemenu', { id: a['vendor'] }).subscribe(b => {
                this.menu = b['data'] || [];
            });
            this.http.get('https://api2.vsnap.my/geteat').subscribe(a => {
                this.locations = a ? (a['data']).filter(c => c['vendor_id'] == this.vendor) : {};
            });
            this.http.post('https://api2.vsnap.my/getvendors', { id: this.vendor }).subscribe(data3 => {
                this.vendors = data3['data'];
                this.tab = this.vendors.tnc ? 0 : 1;
            });
        });
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
    }
    tomain() {
        this.nav.navigateForward('main?user=' + this.user);
    }
    stringornot(x) {
        return (typeof x == "string" ? true : false);
    }
    back() {
        this.nav.pop();
    }
};
VisitQrPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
VisitQrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-visit-qr',
        template: _raw_loader_visit_qr_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visit_qr_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VisitQrPage);



/***/ })

}]);
//# sourceMappingURL=visit-qr-visit-qr-module.js.map