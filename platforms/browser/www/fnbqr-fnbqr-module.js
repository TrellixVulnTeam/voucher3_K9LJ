(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fnbqr-fnbqr-module"],{

/***/ "3LVQ":
/*!***************************************!*\
  !*** ./src/app/fnbqr/fnbqr.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner {\n  top: 0;\n  opacity: 1;\n  transition: all 0.2s ease;\n  z-index: 100;\n}\n\n.innerx {\n  top: 100%;\n  opacity: 0;\n  transition: all 0.2s ease;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZuYnFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLE1BQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6ImZuYnFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaW5uZXJ7XHJcbiAgICB0b3A6MDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5pbm5lcnh7XHJcbiAgICB0b3A6MTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "GIb6":
/*!***********************************************!*\
  !*** ./src/app/fnbqr/fnbqr-routing.module.ts ***!
  \***********************************************/
/*! exports provided: FnbqrPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FnbqrPageRoutingModule", function() { return FnbqrPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fnbqr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fnbqr.page */ "HaNV");




const routes = [
    {
        path: '',
        component: _fnbqr_page__WEBPACK_IMPORTED_MODULE_3__["FnbqrPage"]
    }
];
let FnbqrPageRoutingModule = class FnbqrPageRoutingModule {
};
FnbqrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FnbqrPageRoutingModule);



/***/ }),

/***/ "HaNV":
/*!*************************************!*\
  !*** ./src/app/fnbqr/fnbqr.page.ts ***!
  \*************************************/
/*! exports provided: FnbqrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FnbqrPage", function() { return FnbqrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fnbqr_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fnbqr.page.html */ "JfZl");
/* harmony import */ var _fnbqr_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fnbqr.page.scss */ "3LVQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let FnbqrPage = class FnbqrPage {
    constructor(nav, activatedRoute, http, toastctrl) {
        this.nav = nav;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastctrl = toastctrl;
        this.vendor = {};
        this.emenu = [];
        this.photos = [];
        this.vendor_acc = [];
        this.qr = '';
        this.user = {};
        this.userid = '';
        this.id = '';
        this.close = false;
        this.nowphoto = [];
        this.tab = 0;
    }
    checkslide(event) {
        this.slides.getActiveIndex().then((index) => {
            this.currentIndex = index;
        });
    }
    openpic(x, y) {
        this.nowphoto = x.map(a => a['photo']);
        this.currentIndex = y;
        this.close = true;
        this.slides.slideTo(y, 10);
        this.close = true;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(zxc => {
            console.log(zxc['id']);
            this.id = zxc['id'];
            console.log(zxc['userid']);
            this.userid = zxc['userid'];
            this.http.post('https://api2.vsnap.my/getvendors', { id: zxc['id'] }).subscribe((s) => {
                this.vendor = s['data'] || {};
                // this.vendor['tnc_text'] = "现在我要测试"
                console.log(this.vendor);
            }, e => { });
            this.http.post('https://api2.vsnap.my/getemenu', { id: zxc['id'] }).subscribe((s) => {
                console.log(s['data']);
                this.emenu = s['data'] || [];
                this.photos = ((this.emenu.map(a => a.products)).reduce((c, d) => c.concat(d), [])).map(b => b.photo);
                this.lengthof(this.photos) > 0 ? this.photos : this.photos = ["https://image.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148692632.jpg"];
                console.log(this.photos);
                console.log(this.emenu);
            }, e => { });
            this.http.post('https://api2.vsnap.my/getvendor_acc', { id: zxc['id'] }).subscribe((s) => {
                this.vendor_acc = s['data'] || [];
                console.log(this.vendor_acc);
            }, e => { });
            this.http.post('https://api2.vsnap.my/getusers', { id: zxc['userid'] }).subscribe((s) => {
                this.user = s['data'] || [];
                console.log(this.user);
            }, e => { });
            this.qr = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + zxc['id'] + ',' + zxc['userid'];
            console.log(this.qr);
        });
    }
    menu() {
        this.tab = 1;
    }
    back() {
        this.nav.pop();
    }
    lengthof(x) {
        return Object.keys(x || {}).length;
    }
    outlet() {
        this.tab = 3;
    }
    tnc() {
        this.tab = 4;
    }
    copy(y) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            document.addEventListener('copy', (e) => {
                e.clipboardData.setData('text/plain', (y));
                e.preventDefault();
                document.removeEventListener('copy', null);
            });
            document.execCommand('copy');
            const toast = yield this.toastctrl.create({
                message: '商家号码已在你的剪贴板',
                duration: 2000
            });
            toast.present();
        });
    }
    copy2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            document.addEventListener('copy', (e) => {
                e.clipboardData.setData('text/plain', ('点击一下连接以享有' + this.vendor['name'] + '的特别折扣\n' + "https://deal.vsnap.my/fnbqr?id=" + this.id + '&userid=' + this.userid + '\n只在 RedHood'));
                e.preventDefault();
                document.removeEventListener('copy', null);
            });
            document.execCommand('copy');
            const toast = yield this.toastctrl.create({
                message: '网址已在你的剪贴板',
                duration: 2000
            });
            toast.present();
        });
    }
    opengps(x) {
        window.open(x);
    }
};
FnbqrPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
FnbqrPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['slides', { static: true },] }]
};
FnbqrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-fnbqr',
        template: _raw_loader_fnbqr_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fnbqr_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FnbqrPage);



/***/ }),

/***/ "JfZl":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fnbqr/fnbqr.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style='--background:#e6e3ff'>\n\n  <div [ngClass]='close==true ? \"inner\" : \"innerx\"' style='position: fixed;left:0;background-color: rgba(0,0,0,0.85);display:flex;justify-content: center;\n    align-items: center;width:100vw;height:100vh;z-index:10000;flex-direction: column;'>\n    <div style='width:100%;position: relative;'>\n      <div (click)='close = !close;'\n        style='font-size:10px;padding:5px 10px;border-radius:2px;color:white;background-color: #f53c3c;position: absolute;top:15px;right:15px;z-index:10;font-weight:bold;'>\n        Close</div>\n      <ion-slides (ionSlideDidChange)='checkslide($event)' #slides zoom=\"true\" pager=\"true\"\n        style='width:100%;height:100%;display:flex;justify-content: center;align-items: center;'>\n        <ion-slide *ngFor='let each of (nowphoto || []); let i = index'\n          style='display:flex;justify-content: center;align-items: center;width:100%;height:100%;'>\n          <img style='width:100%;object-fit: contain;' src=\"{{each}}\" alt=\"\">\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- <div style='width:100vw;display:flex;align-items: center;justify-content: center;padding:10px 15px;'>\n      <div\n        style='width:100%;padding:10px 20px;display:flex;align-items: center;justify-content: center;background-color: #f53c3c;border-radius:5px;box-shadow:1px 5px 10px rgba(0,0,0,0.1)'>\n        <div (click)='downloadimage()' style='font-size:14px;color:white;font-weight: bold;letter-spacing: .5px;'>\n          下载图片</div>\n      </div>\n    </div> -->\n  </div>\n\n\n  <!-- <div\n    style=\"position:fixed;top:0;left:0;height:50px;display:flex;align-items:center;z-index: 1002;width: 100vw;background:transparent;justify-content: space-between;\">\n    <div\n      style='margin-left:15px;height:25px;width:25px;display:flex;justify-content: center;align-items: center;border-radius:100%;background-color: rgba(255,255,255,0.5);'>\n      <ion-icon (click)='back()' style='color:black;font-size:20px;margin-right:3px;' name=\"chevron-back-outline\">\n      </ion-icon>\n    </div>\n  </div> -->\n\n  <div class='paddingcon' style='position: relative;'>\n\n    <!-- <div style='font-size:18px;color:white;font-weight: bold;text-align: center;'>xxxx</div> -->\n\n    <div *ngIf='tab==0'\n      style='width:calc( 100% - 60px );background-color: rgba(255,255,255,1);min-height:calc( 100vh - 150px );margin:75px 30px;border-radius:10px;box-shadow:1px 5px 10px rgba(0,0,0,0.1);'>\n\n      <img style='width:100%;height:120px;object-fit: cover;border-top-left-radius: 10px;border-top-right-radius: 10px;'\n        src=\"{{photos[0]}}\" alt=\"\">\n\n      <div style='font-size:12px;color:#999999;letter-spacing: .5px;padding:10px 15px;padding-bottom:5px;'>Vendor Name :\n        {{vendor.name}}</div>\n\n      <div style='font-size:16px;font-weight: bold;color:#333333;letter-spacing: 1px;padding:0px 15px;'>\n        {{vendor.promote_text || 'Let Merchant set this QR Code to Recieve extral Reward'}}</div>\n\n      <div style='width:100%;display:flex;align-items: center;justify-content: space-between;padding:15px;'>\n        <div style='color:#00b871;font-size:12px;letter-spacing: .5px;'>Available</div>\n        <div style='font-size:12px;color:#999999;letter-spacing: .5px;'>Referred by :&nbsp;{{user.name}}</div>\n\n      </div>\n      <div style='width:100%;border-bottom:1px dashed #eeeeee;'></div>\n\n      <img style='margin:15px;width:calc( 100% - 50px )' src=\"{{qr}}\" alt=\"\">\n\n      <div style='font-size:12px;color:#999999;padding:0px 15px;text-align: center;letter-spacing: .5px;;'>Kindly\n        present your QR code to the shop keeper in order to activate your promotion.</div>\n\n      <div style='padding:15px;width:100%;display:flex;align-items: center;flex-wrap: wrap;justify-content: center;'>\n        <div (click)='menu()'\n          style='background-color: #00b871;padding:7px 15px;border-radius:5px;font-size:14px;color:white;letter-spacing: .5px;margin-right:7px;margin-bottom:7px;;'>\n          Service Menu</div>\n        <div (click)='copy2()'\n          style='background-color: #00b871;padding:7px 15px;border-radius:5px;font-size:14px;color:white;letter-spacing: .5px;margin-right:7px;margin-bottom:7px;;'>\n          Share to Friends</div>\n        <div (click)='outlet()'\n          style='background-color: #00b871;padding:7px 15px;border-radius:5px;font-size:14px;color:white;letter-spacing: .5px;margin-right:7px;margin-bottom:7px;;'>\n          Get Direction</div>\n        <div *ngIf=\"vendor.tnc_text\" (click)='tnc()'\n          style='background-color: #00b871;padding:7px 15px;border-radius:5px;font-size:14px;color:white;letter-spacing: .5px;margin-right:7px;margin-bottom:7px;;'>\n          Term of Use</div>\n\n      </div>\n\n    </div>\n\n    <div *ngIf='tab==1'\n      style='width:calc( 100% - 60px );background-color: rgba(255,255,255,1);min-height:calc( 100vh - 200px );margin:100px 30px;border-radius:10px;box-shadow:1px 5px 10px rgba(0,0,0,0.1);padding:15px;'>\n      <div style='display:flex;align-items: center;padding-bottom:10px;'>\n        <ion-icon (click)='tab=0;' style='font-size:14px;color:#333333;margin-right:10px;' name=\"arrow-back-outline\">\n        </ion-icon>\n        <div style='font-size:14px;font-weight: bold;color:#333333;letter-spacing: .5px;'>电子目录</div>\n      </div>\n\n      <div *ngFor=\"let x of emenu\">\n\n        <div style='font-size:16px;font-weight: bold;color:#333333;letter-spacing: .5px; margin-top: 10px;'>{{x.name}}\n        </div>\n        <div *ngFor=\"let y of x.products; let i = index\" (click)=\"openpic(x.products, i)\"\n          style='width:100%;display:flex;padding:10px 0px;border-bottom:1px solid #eeeeee;'>\n          <img style='height:70px;width:70px;border-radius:5px;' src=\"{{y.photo}}\" alt=\"\">\n          <div style='width:calc( 100% - 70px );padding-left:10px;'>\n            <div style='font-size:12px;letter-spacing: .5px;color:#333333;'>{{y.name}}</div>\n            <div style='font-size:11px;color:#999999;letter-spacing: .5px;margin-top:2px;display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 2;\n            overflow: hidden;'>{{y.description || '商家没留下详情哦'}}</div>\n            <div style='margin-top:5px;font-size:12px;font-weight: bold;letter-spacing: .5px;'>{{y.price | currency :\n              \"RM \"}}</div>\n          </div>\n        </div>\n\n      </div>\n\n\n    </div>\n\n    <div *ngIf='tab==3'\n      style='width:calc( 100% - 60px );background-color: rgba(255,255,255,1);min-height:calc( 100vh - 200px );margin:100px 30px;border-radius:10px;box-shadow:1px 5px 10px rgba(0,0,0,0.1);padding:15px;'>\n      <div style='display:flex;align-items: center;'>\n        <ion-icon (click)='tab=0;' style='font-size:14px;color:#333333;margin-right:10px;' name=\"arrow-back-outline\">\n        </ion-icon>\n        <div style='font-size:14px;font-weight: bold;color:#333333;letter-spacing: .5px;'>所有分店</div>\n      </div>\n\n      <div *ngFor=\"let x of vendor_acc\"\n        style='width:100%;display:flex;border-bottom:1px solid #eeeeee;padding-bottom:8px;padding-top:15px;'>\n        <div style='width:calc( 100% );'>\n          <div style='font-size:12px;letter-spacing: .5px;color:#333333;'>{{x.name}}</div>\n          <div style='font-size:11px;color:#999999;letter-spacing: .5px;margin-top:3px;'>{{x.address}}</div>\n          <div style='display:flex;width:100%;flex-wrap: wrap;margin-top:7px;'>\n            <div *ngIf=\"x.gps\" (click)=\"opengps(x.gps)\"\n              style='padding:3px 7px;font-size:12px;border:1px solid #eeeeee;border-radius:5px;color:#999999;margin-right:7px;margin-bottom:7px;'>\n              Open Map</div>\n            <div *ngIf=\"x.contact\" (click)=\"copy(x.contact)\"\n              style='padding:3px 7px;font-size:12px;border:1px solid #eeeeee;border-radius:5px;color:#999999;margin-right:7px;margin-bottom:7px;'>\n              {{x.contact}}</div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div *ngIf='tab==4'\n      style='width:calc( 100% - 60px );background-color: rgba(255,255,255,1);min-height:calc( 100vh - 200px );margin:100px 30px;border-radius:10px;box-shadow:1px 5px 10px rgba(0,0,0,0.1);padding:15px;'>\n      <div style='display:flex;align-items: center;'>\n        <ion-icon (click)='tab=0;' style='font-size:14px;color:#333333;margin-right:10px;' name=\"arrow-back-outline\">\n        </ion-icon>\n        <div style='font-size:14px;font-weight: bold;color:#333333;letter-spacing: .5px;'>优惠条规</div>\n      </div>\n      <div style='width:100%;display:flex;padding-bottom:8px;padding-top:15px; font-size: 12px;'>\n\n        <div style=\"white-space: pre-line; font-size: 12px;\">{{vendor.tnc_text}}</div>\n\n      </div>\n    </div>\n\n  </div>\n  <!-- <img style='height:100vh;width:100%;object-fit: cover;position: fixed;z-index:-1;top:0;left:0;opacity: 0.5;' src=\"https://wallpaperaccess.com/full/2750138.jpg\" alt=\"\"> -->\n</ion-content>");

/***/ }),

/***/ "py0n":
/*!***************************************!*\
  !*** ./src/app/fnbqr/fnbqr.module.ts ***!
  \***************************************/
/*! exports provided: FnbqrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FnbqrPageModule", function() { return FnbqrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fnbqr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fnbqr-routing.module */ "GIb6");
/* harmony import */ var _fnbqr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fnbqr.page */ "HaNV");







let FnbqrPageModule = class FnbqrPageModule {
};
FnbqrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fnbqr_routing_module__WEBPACK_IMPORTED_MODULE_5__["FnbqrPageRoutingModule"]
        ],
        declarations: [_fnbqr_page__WEBPACK_IMPORTED_MODULE_6__["FnbqrPage"]]
    })
], FnbqrPageModule);



/***/ })

}]);
//# sourceMappingURL=fnbqr-fnbqr-module.js.map