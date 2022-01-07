(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "/UQe":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style='--background:#f7f9fd;'>\n\n  <div\n    [ngStyle]=\"{'padding-left' : widther(900)==true ? ' calc( ( 100vw - 900px ) / 2 )' : '0px','padding-right' : widther(900)==true ? ' calc( ( 100vw - 900px ) / 2 )' : '0px' }\"\n    style='width:100vw;background-color:#f7f9fd;'>\n\n    <div\n      style='width:100%;display:flex;align-items: center;justify-content: space-between;padding:0px 20px;background-color:white;border-bottom:1px solid #eeeeee;height:70px;'>\n      <img  *ngIf='widther(400)==true' style='height:30px;object-fit: contain;cursor: pointer;'\n        src=\"https://i.imgur.com/pEyI97C.png\" alt=\"\">\n      <img  *ngIf='widther(400)==false' style='height:40px;width:40px;;object-fit: contain;cursor: pointer;'\n        src=\"https://i.imgur.com/vCmo9nR.png\" alt=\"\">\n\n      <div *ngIf=\"user == influencer['id']\" (click)=\"store(influencer['id'])\" style='display:flex;align-items: center;justify-content: flex-end;'>\n        <img style='height:40px;width:40px;object-fit: cover;border-radius:100%;'\n          src=\"{{influencer['photo'] ? (stringornot(influencer['photo']) ? influencer['photo'] : influencer['photo'][0] ) : 'https://i.imgur.com/GvrNqUS.png' }}\"\n          alt=\"\">\n        <div style='margin-left:10px;cursor: pointer;'>\n          <div\n            style='font-size:14px;color:#333333;background-color:white;margin-right:20px;text-align: left;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;max-width:90px;'>\n            {{influencer['name']}}</div>\n          <div style='font-size:12px;color:#999999;margin-top:2px;'>Visit my store ></div>\n        </div>\n\n      </div>\n    </div>\n\n\n    <div style=\"width: calc( 100% );padding:15px 15px;padding-bottom:5px;\">\n      <div style='width:100%;display:flex;align-items: center;'>\n        <div\n        style=\"width:calc( 100% - 100px );display: flex;align-items: center;border:1px solid #dddddd;padding:6px 10px;border-radius: 3px;height: 35px;background-color:white;\">\n        <ion-icon slot=\"start\" name=\"search\" style=\"font-size: 18px;margin-right: 10px;color:#c7c7c7;\"></ion-icon>\n        <ion-input type=\"text\" class=\"ion-no-padding\" [(ngModel)]=\"keyword\" placeholder=\"Search Products\"\n          style=\"width:calc(100% - 18px - 10px - 18px - 15px);margin-right: 15px;font-size: 12px;letter-spacing: .5px;\"></ion-input>\n        <ion-icon name=\"close-circle-sharp\" style=\"color:#c7c7c7;font-size: 18px;\" *ngIf=\"keyword!=''\"\n          (click)=\"keyword=''\"></ion-icon>\n      </div>\n\n        <div style='width:100px;display:flex;justify-content: flex-end;align-items: center;'>\n          \n          <ion-icon (click)=\"page>1 ? page = page - 1 : page\" [ngClass]='[ page >1 ? \"blacker\" : \"blackerx\" ]' name=\"caret-back-outline\"></ion-icon>\n\n          <div style='padding:0px 10px;font-size:15px;color:#333333;font-weight: bold;'>{{countpage(filterer(voucher),20) >= page ? page : countpage(filterer(voucher),20)}}/{{countpage(filterer(voucher),20)}}</div>\n\n        <ion-icon (click)=\"page>= countpage(filterer(voucher),20) ? page : page = page + 1\"  [ngClass]='[ page >= countpage(filterer(voucher),20) ? \"blackerx\" : \"blacker\" ]' name=\"caret-forward-outline\"></ion-icon>\n\n      </div>\n      </div>\n      \n\n      <div style='width:100%;display:flex;flex-wrap: wrap;padding-left:10px;padding-top:15px;'>\n        <div [ngClass]='[ selected==\"All\" ? \"high\" : \"highx\" ]' (click)='selected=\"All\"' >All</div>\n        <div [ngClass]='[ selected==eve  ? \"high\" : \"highx\" ]' (click)='selected=eve' *ngFor='let eve of category; let i = index' >{{eve}}</div>\n      </div>\n    </div>\n\n    <div style='width:100%;display:flex;flex-wrap: wrap;padding-left:20px;background-color:white;'>\n      <div *ngFor='let eve of pager(filterer(voucher), 20, false, page );let i = index' (click)=\"go(eve.id)\"\n        style='margin-right:20px;margin-bottom:20px;background-color:white;box-shadow:1px 5px 10px rgba(0,0,0,0.1);position: relative;'\n        [ngStyle]='{\"width\" : ( 900 > widtherget()  ? ((widtherget() - 20)/rounder(widtherget() / 200)) - 20 +\"px\" : \"calc( ( 900px - 100px ) / 4 )\")  }'>\n        <div style='width:100%;cursor: pointer;'>\n          <div style='width:100%;padding-bottom:100%;position: relative;'>\n            <!-- <div style='height:30px;width:30px;border-radius:100%;display:flex;justify-content: center;align-items: center;cursor: pointer;background-color:Rgba(255,255,255,0.5);position: absolute;z-index:20;top:10px;right:10px;'>\n              <ion-icon  style='font-size:20px;' name=\"share-outline\"></ion-icon>\n            </div> -->\n            <img\n              style='width:100%;height:100%;top:0;left:0;right:0;bottom:0;position: absolute;z-index:10;object-fit: cover;'\n              src=\"{{eve.thumbnail}}\" alt=\"\">\n          </div>\n          <div style='padding:10px;width:100%;'>\n            <div style='border:1px solid #eeeeee;padding:3px 7px;font-size:12px;letter-spacing: .5px;color:#999999;;margin-bottom:3px;max-width:100%;white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;width:max-content'>{{eve.by_name}}</div>\n            <div style='font-size:14px;color:#262626;font-weight: bold;'>{{eve.name}}</div>\n\n            <div style='width:100%;display:flex;justify-content: space-between;align-items: center;'>\n\n              <div style='margin-top:5px;display:flex;align-items: center'>\n                <div *ngIf=\"eve.price_now\" style='font-size:14px;font-weight: bold;color:#8a1515;'>\n                  {{eve.price_now | currency:\"RM\"}}\n                </div>\n                <div *ngIf=\"!eve.price_now\" style='font-size:14px;font-weight: bold;color:#8a1515;'>\n                  APPLY FOR FREE\n                </div>\n                <div *ngIf='eve.price_ori > eve.price_now'\n                  style='font-size:11px;font-weight: normal;color:#999999;;text-decoration:line-through;margin-left:5px;'>\n                  &nbsp;{{eve.price_ori | currency:\"RM\"}}&nbsp;</div>\n              </div>\n\n\n\n            </div>\n\n            <!-- <div style='width:100%;display:flex;align-items: center;margin-top:5px;'>\n              \n              <div style='margin-right:20px;display:flex;justify-content: center;align-items: center;border-radius:5px;'>\n                <ion-icon style='color:#737373;;font-size:12px;margin-right:3px;' name=\"fast-food\"></ion-icon>\n                <div style='color:#737373;;font-size:12px;letter-spacing: 1px;'>fdg</div>\n              </div>\n\n            </div> -->\n\n            <!-- <div *ngIf='eve.value.status==false' style='color:#8a1515;font-size:14px;font-weight: bold;position: absolute;bottom:10px;right:10px;'>Sold Out</div> -->\n\n\n\n          </div>\n\n        </div>\n\n\n\n\n      </div>\n\n      <div style='width:100%;' *ngIf='lengthof(filterer(voucher))==0'>\n        <div\n          style='width:calc( 100% - 40px );margin:20px;padding:20px;display:flex;justify-content: center;align-items: center;background-color: white;flex-direction: column;'>\n          <img style='width:200px;' src=\"https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif\"\n            alt=\"\">\n          <div style='font-size:16px;font-weight: bold;color:#666666;text-align: center;'>Nothing Here</div>\n          <div style='padding-top:5px;font-size:14px;font-weight: normal;color:#666666;text-align: center;'>There are no\n            items in this list.</div>\n        </div>\n      </div>\n\n    </div>\n    <div style='padding:40px;border-top:1px solid #eeeeee;background-color: white;;'>\n      <div style='font-size:12px;color:#999999;text-align: center;margin-bottom:20px;'>© Copyright 2020- All rights\n        reserved - Vsnap by Vsnap Global Sdn Bhd. version 4.1.0</div>\n      <div style='text-align: center;display:flex;align-items: center;justify-content: center;'>\n        <span (click)=\"outside('terms')\" style='cursor: pointer;;font-size:10px;color:#525dc2;'>Terms &\n          Condition</span>&nbsp;•&nbsp;<span (click)=\"outside('privacy')\"\n          style='cursor: pointer;font-size:10px;color:#525dc2;'>Privacy Policy</span>&nbsp;•&nbsp;<span\n          (click)=\"outside('disclaimer')\"\n          style='cursor: pointer;font-size:10px;color:#525dc2;'>Disclaimer</span>&nbsp;•&nbsp;<span\n          (click)=\"outside('refund')\" style='cursor: pointer;font-size:10px;color:#525dc2;'>Refund Policy</span>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "3hl/":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "Rmbw");




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainPageRoutingModule);



/***/ }),

/***/ "8QZa":
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".high {\n  background-color: #f53c3c;\n  color: white;\n  width: -webkit-max-content;\n  width: max-content;\n  padding: 7px 15px;\n  font-size: 12px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n.highx {\n  background-color: #eeeeee;\n  color: #999999;\n  width: -webkit-max-content;\n  width: max-content;\n  padding: 7px 15px;\n  font-size: 12px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n.blacker {\n  color: #f53c3c;\n  font-size: 18px;\n}\n\n.blackerx {\n  color: #999999;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtFQUFrQixpQkFBQTtFQUFpQixlQUFBO0VBQ25DLGtCQUFBO0VBQWtCLG1CQUFBO0VBQW1CLGtCQUFBO0VBQWtCLGVBQUE7QUFNM0Q7O0FBSEE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUFBLGtCQUFBO0VBQWtCLGlCQUFBO0VBQWlCLGVBQUE7RUFDbkMsa0JBQUE7RUFBa0IsbUJBQUE7RUFBbUIsa0JBQUE7RUFBa0IsZUFBQTtBQVczRDs7QUFSQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBV0o7O0FBUEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQVVKIiwiZmlsZSI6Im1haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZ2h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUzYzNjO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB3aWR0aDptYXgtY29udGVudDtwYWRkaW5nOjdweCAxNXB4O2ZvbnQtc2l6ZToxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7bWFyZ2luLWJvdHRvbToxMHB4O2JvcmRlci1yYWRpdXM6M3B4O2N1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhpZ2h4e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICAgIGNvbG9yOiM5OTk5OTk7XHJcbiAgICB3aWR0aDptYXgtY29udGVudDtwYWRkaW5nOjdweCAxNXB4O2ZvbnQtc2l6ZToxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7bWFyZ2luLWJvdHRvbToxMHB4O2JvcmRlci1yYWRpdXM6M3B4O2N1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJsYWNrZXJ7XHJcbiAgICBjb2xvcjojZjUzYzNjO1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcblxyXG59XHJcblxyXG4uYmxhY2tlcnh7XHJcbiAgICBjb2xvcjojOTk5OTk5O1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "Rmbw":
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main.page.html */ "/UQe");
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.page.scss */ "8QZa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/database */ "Zs65");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");












let MainPage = class MainPage {
    constructor(meta, platform, activatedRoute, nav, title, iab, http) {
        this.meta = meta;
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.nav = nav;
        this.title = title;
        this.iab = iab;
        this.http = http;
        this.guild = "";
        this.user = "";
        this.voucher = [];
        this.guildinfo = {};
        this.influencer = {};
        this.links = {};
        this.puller = this.platform.width() / 2;
        this.enter = false;
        this.keyword = "";
        this.selected = "All";
        this.category = [];
        this.page = 1;
    }
    outside(x) {
        this.iab.create(this.links[x], '_system');
        // window.open(this.links[x]);
    }
    ngOnInit() {
        // this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/getmeta', { id: this.id }).subscribe(data => {
        //   this.meta.updateTag({ itemprop: 'name', content: data['success'].name })
        //   this.meta.updateTag({ itemprop: 'description', content: (data['success'].description || '') })
        //   this.meta.updateTag({ itemprop: 'image', content: data['success'].thumbnail })
        // });
        this.activatedRoute.queryParams.subscribe(a => {
            this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/getmeta2', { type: "users", id: "Ypgf8VDQJrRhsrP7RREb3n321sf1" }).subscribe(data => {
                if (Object.keys(data['success']).length) {
                    this.title.setTitle('Vsnap Official Store');
                    this.meta.updateTag({ itemprop: 'name', content: 'Vsnap Official Store' });
                    this.meta.updateTag({ itemprop: 'description', content: 'Welcome to Vsnap Official Store' });
                    this.meta.updateTag({ itemprop: 'image', content: "https://i.imgur.com/cW5MqH2.png" });
                    this.meta.updateTag({ property: 'og:url', content: 'https://deal.vsnap.my/main?user=' + a['user'] });
                    this.meta.updateTag({ property: 'og:type', content: 'article' });
                    this.meta.updateTag({ property: 'og:description', content: 'Welcome to Vsnap Official Store' });
                    this.meta.updateTag({ property: 'og:title', content: 'Vsnap Official Store' });
                    this.meta.updateTag({ property: 'og:image', content: "https://i.imgur.com/cW5MqH2.png" });
                    this.meta.updateTag({ property: 'og:image:secure_url', content: "https://i.imgur.com/cW5MqH2.png" });
                    this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' });
                    this.meta.updateTag({ property: 'og:image:width', content: '500' });
                    this.meta.updateTag({ property: 'og:image:height', content: '500' });
                }
                else {
                    this.title.setTitle('Vsnap Official Store');
                    this.meta.updateTag({ itemprop: 'name', content: 'Vsnap Official Store' });
                    this.meta.updateTag({ itemprop: 'description', content: 'Welcome to Vsnap Official Store' });
                    this.meta.updateTag({ itemprop: 'image', content: "https://i.imgur.com/cW5MqH2.png" });
                    this.meta.updateTag({ property: 'og:url', content: 'https://deal.vsnap.my/main?user=' + a['user'] });
                    this.meta.updateTag({ property: 'og:type', content: 'article' });
                    this.meta.updateTag({ property: 'og:description', content: 'Welcome to Vsnap Official Store' });
                    this.meta.updateTag({ property: 'og:title', content: 'Vsnap Official Store' });
                    this.meta.updateTag({ property: 'og:image', content: "https://i.imgur.com/cW5MqH2.png" });
                    this.meta.updateTag({ property: 'og:image:secure_url', content: "https://i.imgur.com/cW5MqH2.png" });
                    this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' });
                    this.meta.updateTag({ property: 'og:image:width', content: '500' });
                    this.meta.updateTag({ property: 'og:image:height', content: '500' });
                }
            });
        });
    }
    lengthof(x) {
        return x ? x.length : 0;
    }
    stringornot(x) {
        return (typeof x == "string" ? true : false);
    }
    widther(x) {
        // console.log(this.platform.width() >= x)
        this.puller = (this.platform.width() >= 900 ? 450 : (this.platform.width() < 600 ? 300 : this.platform.width() / 2));
        // console.log(this.puller)
        return this.platform.width() >= x;
    }
    rounder(x) {
        return Math.floor(x);
    }
    // http://localhost:8102/guild/-Meec6hYi4TMBw4qaAAl/n2qpB3gxBvf4empWOlmQBynBOUw2
    widtherget() {
        return this.platform.width();
    }
    go(x) {
        this.nav.navigateForward('home/' + x + '/' + this.user);
    }
    store(x) {
        this.nav.navigateForward('store/' + x);
    }
    filterer(x) {
        return x ? x.filter(a => ((a['name'] + a['by_name']).toLowerCase()).includes(this.keyword.toLowerCase()) && this.selected == "All" ? true : (a['category'] == this.selected)) : [];
    }
    countpage(arr, step) {
        if (arr) {
            return Math.ceil(arr.length / step);
        }
        else {
            return 1;
        }
    }
    pager(arr, step, infinite, page) {
        // return new Promise((resolve, reject)=>{
        //   resolve('')
        // })
        if (arr) {
            if (arr.length > step * page) {
                return (infinite == true ? arr.filter((a, index) => index >= 0 && index < step * page) : arr.filter((a, index) => index >= step * (page - 1) && index < step * page));
            }
            else {
                return (infinite == true ? arr : arr.filter((a, index) => ((arr.length % step) == 0 ? index >= arr.length - step : index >= arr.length - (arr.length % step))));
            }
        }
    }
    ionViewDidEnter() {
        this.activatedRoute.queryParams.subscribe(a => {
            this.user = a['user'] || "Ypgf8VDQJrRhsrP7RREb3n321sf1";
            firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('vouchers/').once('value', data => {
                this.voucher = Object.values(data.val()).filter(a => a['status'] == true);
                this.voucher.forEach((element, i) => {
                    firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('vendors/' + element.by).once('value', vend => {
                        this.voucher[i].by_name = vend.val()['name'];
                    });
                });
                // console.log(this.voucher)
            });
            firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('users/' + this.user).once('value', data => {
                if (data.exists()) {
                    this.influencer = data.val();
                    console.log(this.influencer);
                }
                else {
                    firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('users/' + "Ypgf8VDQJrRhsrP7RREb3n321sf1").once('value', data3 => {
                        this.influencer = data3.val();
                    });
                }
            });
            firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('link').once('value', data => {
                this.links = data.val();
            });
            firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('category_voucher').once('value', data => {
                this.category = data.val();
            });
        });
    }
};
MainPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Meta"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] }
];
MainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main',
        template: _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MainPage);



/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "3hl/");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "Rmbw");







let MainPageModule = class MainPageModule {
};
MainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"]
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })
], MainPageModule);



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map