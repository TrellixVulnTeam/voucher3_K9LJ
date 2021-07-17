(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["brand-brand-module"],{

/***/ "TCA4":
/*!***********************************************!*\
  !*** ./src/app/brand/brand-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BrandPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandPageRoutingModule", function() { return BrandPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _brand_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brand.page */ "TOms");




const routes = [
    {
        path: '',
        component: _brand_page__WEBPACK_IMPORTED_MODULE_3__["BrandPage"]
    }
];
let BrandPageRoutingModule = class BrandPageRoutingModule {
};
BrandPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BrandPageRoutingModule);



/***/ }),

/***/ "TOms":
/*!*************************************!*\
  !*** ./src/app/brand/brand.page.ts ***!
  \*************************************/
/*! exports provided: BrandPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandPage", function() { return BrandPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_brand_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./brand.page.html */ "evbf");
/* harmony import */ var _brand_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brand.page.scss */ "sD7z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/database */ "Zs65");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");










let BrandPage = class BrandPage {
    constructor(platform, activatedRoute, nav, title) {
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.nav = nav;
        this.title = title;
        this.enter = false;
        this.item = "";
        this.user = "";
        this.voucher = {};
        this.influencer = {};
        this.vendor = "";
        this.qty = 1;
        this.selected = 0;
        this.puller = this.platform.width() / 2;
        this.var_select = [0, 1];
        // this.voucher['variations'][loop0]['selections'][var_select[loop0]]
        // {price:x , name: x}
        this.disabled = [true, true, true];
        this.vendor_info = {};
        this.links = [];
    }
    widther(x) {
        // console.log(this.platform.width() >= x)
        this.puller = (this.platform.width() >= 900 ? 450 : (this.platform.width() < 600 ? 300 : this.platform.width() / 2));
        // console.log(this.puller)
        return this.platform.width() >= x;
    }
    openlink(x, y) {
        let temp = (y == 'Facebook' ? 'https://' : (y == 'Instagram' ? 'https://' : '')) +
            (y == 'Facebook' ? 'www.facebook.com/' : (y == 'Instagram' ? 'www.instagram.com/' : '')) + x;
        window.open(temp);
        // xxx
    }
    checkit(x) {
        return x.filter(a => a.value.status == true);
    }
    lengthof(x) {
        return x ? x.length : 0;
    }
    rounder(x) {
        return Math.floor(x);
    }
    widtherget() {
        return this.platform.width();
    }
    stringornot(x) {
        return (typeof x == "string" ? true : false);
    }
    go(x) {
        this.nav.navigateForward('home/' + x + '/' + this.user);
    }
    ngOnInit() {
        this.title.setTitle('Welcome to Vendor \'s vsnap store!');
    }
    ionViewWillEnter() {
        this.vendor = this.activatedRoute.snapshot.paramMap.get('vendor');
        this.user = this.activatedRoute.snapshot.paramMap.get('user');
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('vouchers/').orderByChild('by').equalTo(this.vendor).once('value', data => {
            this.voucher = data.val();
            console.log(this.vendor);
        });
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('vendors/' + this.vendor).once('value', data => {
            this.vendor_info = data.val();
            this.title.setTitle('Welcome to ' + this.vendor_info['name'] + '\'s vsnap store!');
            console.log(this.voucher);
        });
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('users/' + this.user).once('value', data => {
            this.influencer = data.val();
            console.log(this.influencer);
        });
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('link').once('value', data => {
            this.links = data.val();
        });
    }
    store(x) {
        this.nav.navigateForward('store/' + x);
    }
    outside(x) {
        window.open(this.links[x]);
    }
};
BrandPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"] }
];
BrandPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-brand',
        template: _raw_loader_brand_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_brand_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BrandPage);



/***/ }),

/***/ "ZQTp":
/*!***************************************!*\
  !*** ./src/app/brand/brand.module.ts ***!
  \***************************************/
/*! exports provided: BrandPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandPageModule", function() { return BrandPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _brand_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brand-routing.module */ "TCA4");
/* harmony import */ var _brand_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brand.page */ "TOms");







let BrandPageModule = class BrandPageModule {
};
BrandPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _brand_routing_module__WEBPACK_IMPORTED_MODULE_5__["BrandPageRoutingModule"]
        ],
        declarations: [_brand_page__WEBPACK_IMPORTED_MODULE_6__["BrandPage"]]
    })
], BrandPageModule);



/***/ }),

/***/ "evbf":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brand/brand.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style='--background:#f7f9fd;'>\n\n  <div\n    [ngStyle]=\"{'padding-left' : widther(900)==true ? ' calc( ( 100vw - 900px ) / 2 )' : '0px','padding-right' : widther(900)==true ? ' calc( ( 100vw - 900px ) / 2 )' : '0px' }\"\n    style='width:100vw;background-color:#f7f9fd;'>\n\n    <div\n      style='width:100%;display:flex;align-items: center;justify-content: space-between;padding:0px 20px;background-color:white;border-bottom:1px solid #eeeeee;height:70px;'>\n      <img *ngIf='widther(400)==true' style='height:30px;object-fit: contain;cursor: pointer;'\n        src=\"https://i.imgur.com/pEyI97C.png\" alt=\"\">\n      <img *ngIf='widther(400)==false' style='height:40px;width:40px;;object-fit: contain;cursor: pointer;'\n        src=\"https://i.imgur.com/vCmo9nR.png\" alt=\"\">\n\n      <div (click)=\"store(influencer['id'])\" style='display:flex;align-items: center;justify-content: flex-end;'>\n        <img style='height:40px;width:40px;object-fit: cover;border-radius:100%;'\n          src=\"{{influencer['photo'] ? (stringornot(influencer['photo']) ? influencer['photo'] : influencer['photo'][0] ) : 'https://i.imgur.com/GvrNqUS.png' }}\"\n          alt=\"\">\n        <div style='margin-left:10px;cursor: pointer;'>\n          <div\n            style='font-size:14px;color:#333333;background-color:white;margin-right:20px;text-align: left;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;max-width:90px;'>\n            {{influencer['name']}}</div>\n          <div style='font-size:12px;color:#999999;margin-top:2px;'>Visit my store ></div>\n        </div>\n\n      </div>\n    </div>\n\n    <div style='width:100%;display:flex;justify-content: flex-start;background-color: white;padding:20px;'>\n      <img style='height:60px;width:60px;border-radius:100%;object-fit: cover;' src=\"{{vendor_info['photo']}}\" alt=\"\">\n      <div style='margin-left:20px;'>\n        <div style='font-size:15px;font-weight: bold;color:#333333;margin-top:10px;'>{{vendor_info['name']}}</div>\n        <div style='width:calc( 100% );display:flex;flex-wrap: wrap;margin-top:10px;'>\n          <div (click)='openlink(x.link, x.name)' *ngFor='let x of vendor_info[\"links\"]'\n            style='cursor: pointer;;padding:5px 10px;border:1px solid #eeeeee;font-size:12px;margin-right:10px;margin-bottom:10px;'>\n            {{x.name}}</div>\n        </div>\n      </div>\n    </div>\n\n    <div style='width:100%;display:flex;flex-wrap: wrap;padding-left:20px;background-color:white;'>\n      <div *ngFor='let eve of checkit(voucher|keyvalue);let i = index' (click)=\"go(eve.value.id)\"\n        style='margin-right:20px;margin-bottom:20px;background-color:white;box-shadow:1px 5px 10px rgba(0,0,0,0.1);position: relative;'\n        [ngStyle]='{\"width\" : ( 900 > widtherget()  ? ((widtherget() - 20)/rounder(widtherget() / 200)) - 20 +\"px\" : \"calc( ( 900px - 100px ) / 4 )\")  }'>\n        <div style='width:100%;cursor: pointer;'>\n          <div style='width:100%;padding-bottom:100%;position: relative;'>\n            <!-- <div style='height:30px;width:30px;border-radius:100%;display:flex;justify-content: center;align-items: center;cursor: pointer;background-color:Rgba(255,255,255,0.5);position: absolute;z-index:20;top:10px;right:10px;'>\n              <ion-icon  style='font-size:20px;' name=\"share-outline\"></ion-icon>\n            </div> -->\n            <img\n              style='width:100%;height:100%;top:0;left:0;right:0;bottom:0;position: absolute;z-index:10;object-fit: cover;'\n              src=\"{{eve.value.thumbnail}}\" alt=\"\">\n          </div>\n          <div style='padding:10px;width:100%;'>\n            <div style='font-size:14px;color:#262626;font-weight: bold;'>{{eve.value.name}}</div>\n\n            <div style='width:100%;display:flex;justify-content: space-between;align-items: center;'>\n\n              <div style='margin-top:5px;display:flex;align-items: center'>\n                <div *ngIf=\"eve.value.price_now\" style='font-size:14px;font-weight: bold;color:#8a1515;'>\n                  {{eve.value.price_now | currency:\"RM\"}}\n                </div>\n                <div *ngIf=\"!eve.value.price_now\" style='font-size:14px;font-weight: bold;color:#8a1515;'>\n                  APPLY FOR FREE\n                </div>\n                <div *ngIf='eve.value.price_ori > eve.value.price_now'\n                  style='font-size:11px;font-weight: normal;color:#999999;;text-decoration:line-through;margin-left:5px;'>\n                  &nbsp;{{eve.value.price_ori | currency:\"RM\"}}&nbsp;</div>\n              </div>\n\n\n\n            </div>\n\n            <!-- <div style='width:100%;display:flex;align-items: center;margin-top:5px;'>\n              \n              <div style='margin-right:20px;display:flex;justify-content: center;align-items: center;border-radius:5px;'>\n                <ion-icon style='color:#737373;;font-size:12px;margin-right:3px;' name=\"fast-food\"></ion-icon>\n                <div style='color:#737373;;font-size:12px;letter-spacing: 1px;'>fdg</div>\n              </div>\n\n            </div> -->\n\n            <!-- <div *ngIf='eve.value.status==false' style='color:#8a1515;font-size:14px;font-weight: bold;position: absolute;bottom:10px;right:10px;'>Sold Out</div> -->\n\n\n\n          </div>\n\n        </div>\n\n\n\n\n      </div>\n\n      <div style='width:100%;' *ngIf='lengthof(voucher|keyvalue)==0'>\n        <div\n          style='width:calc( 100% - 40px );margin:20px;padding:20px;display:flex;justify-content: center;align-items: center;background-color: white;flex-direction: column;'>\n          <img style='width:200px;' src=\"https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif\"\n            alt=\"\">\n          <div style='font-size:16px;font-weight: bold;color:#666666;text-align: center;'>Nothing Here</div>\n          <div style='padding-top:5px;font-size:14px;font-weight: normal;color:#666666;text-align: center;'>There are no\n            items in this list.</div>\n        </div>\n      </div>\n\n    </div>\n    <div style='padding:40px;border-top:1px solid #eeeeee;background-color: white;;'>\n      <div style='font-size:12px;color:#999999;text-align: center;margin-bottom:20px;'>© Copyright 2020- All rights\n        reserved - Vsnap by Vsnap Global Sdn Bhd. version 3.1.0</div>\n      <div style='text-align: center;display:flex;align-items: center;justify-content: center;'>\n        <span (click)=\"outside('terms')\" style='cursor: pointer;;font-size:10px;color:#525dc2;'>Terms &\n          Condition</span>&nbsp;•&nbsp;<span (click)=\"outside('privacy')\"\n          style='cursor: pointer;font-size:10px;color:#525dc2;'>Privacy Policy</span>&nbsp;•&nbsp;<span\n          (click)=\"outside('disclaimer')\"\n          style='cursor: pointer;font-size:10px;color:#525dc2;'>Disclaimer</span>&nbsp;•&nbsp;<span\n          (click)=\"outside('refund')\" style='cursor: pointer;font-size:10px;color:#525dc2;'>Refund Policy</span>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "sD7z":
/*!***************************************!*\
  !*** ./src/app/brand/brand.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=brand-brand-module.js.map