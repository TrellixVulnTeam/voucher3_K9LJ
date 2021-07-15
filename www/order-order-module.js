(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "+p+5":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-routing.module */ "DM6G");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.page */ "uX05");







let OrderPageModule = class OrderPageModule {
};
OrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderPageRoutingModule"]
        ],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]]
    })
], OrderPageModule);



/***/ }),

/***/ "DM6G":
/*!***********************************************!*\
  !*** ./src/app/order/order-routing.module.ts ***!
  \***********************************************/
/*! exports provided: OrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageRoutingModule", function() { return OrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.page */ "uX05");




const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_3__["OrderPage"]
    }
];
let OrderPageRoutingModule = class OrderPageRoutingModule {
};
OrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderPageRoutingModule);



/***/ }),

/***/ "u6Jy":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div\n    [ngStyle]=\"{'padding-left' : widther(900)==true ? ' calc( ( 100vw - 900px ) / 2 )' : '0px','padding-right' : widther(900)==true ? ' calc( ( 100vw - 900px ) / 2 )' : '0px' }\"\n    style='width:100vw;background-color:#f7f9fd;position: relative;'>\n\n\n\n    <div style='background-color:white;position: sticky;top:0;left:0;z-index: 9999;border-bottom:1px solid #eeeeee;'>\n      <div style='width:100%;padding:15px 15px;display:flex;justify-content: space-between;align-items: center;'>\n        <div style='display:flex;justify-content: space-between;align-items: center;width:100%;'>\n          <ion-icon style='color:#f53c3c;font-size:20px;opacity: 0;' name=\"arrow-back\"></ion-icon>\n          <div style='font-size:16px;color:#333333;'>Order Summary</div>\n          <ion-icon style='color:#f53c3c;font-size:20px;opacity: 0;' name=\"arrow-back\"></ion-icon>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf='ok==0'\n      style='width:100%;height:calc( 100vh - 50px );display:flex;justify-content: center;align-items: center;background-color: white;;'>\n      <img style='width:100%;' src=\"https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif\" alt=\"\">\n    </div>\n\n    <div *ngIf='ok==-1'\n      style='width:100%;height:calc( 100vh - 50px );display:flex;justify-content: center;align-items: center;background-color: white;'>\n      <img style='width:100%;padding:40px;'\n        src=\"https://i1.wp.com/media.giphy.com/media/8L0Pky6C83SzkzU55a/source.gif?w=525&ssl=1\" alt=\"\">\n    </div>\n\n    <div *ngIf='ok==1' style='position: relative;width:100%;background-color:white;;'>\n\n\n      <div style='width:100%;padding:15px;display:flex;background-color: #00b871;'>\n        <ion-icon style='font-size:17px;color:white;margin-right:10px;' name=\"document-text-outline\"></ion-icon>\n        <div>\n          <div style='font-size:14px;color:white;'>Sales Order</div>\n          <div *ngIf='type==\"vouchers\" && order.address==true && !order.used'\n            style='font-size:12px;color:white;margin-top:10px;opacity: 0.8;'>shipment is pending for delivery.</div>\n          <div *ngIf='type==\"vouchers\" && order.address==true && order.used'\n            style='font-size:12px;color:white;margin-top:10px;opacity: 0.8;'>Shipment is in progress of delivery or has\n            been delivered.</div>\n          <div *ngIf='type==\"vouchers\" && !order.address && !order.used'\n            style='font-size:12px;color:white;margin-top:10px;opacity: 0.8;'>Buyer hasn't come for redemption.</div>\n          <div *ngIf='type==\"vouchers\" && !order.Address && order.used && toint(order.qty) > lengthof(order.used)'\n            style='font-size:12px;color:white;margin-top:10px;opacity: 0.8;'>Buyer has partially redeemed the order.\n          </div>\n          <div *ngIf='type==\"vouchers\" && !order.address && order.used &&  !(toint(order.qty) > lengthof(order.used))'\n            style='font-size:12px;color:white;margin-top:10px;opacity: 0.8;'>Buyer has fully redeemed the order.</div>\n\n          <div style='font-size:12px;color:white;margin-top:10px;opacity: 0.8;'>Order placed on&nbsp;{{order.date |\n            date:\"dd MMMM yyyy, hh:mmaa\"}}</div>\n        </div>\n      </div>\n      <div style=\"padding: 5px; background-color: #f7f9fd;\"></div>\n      <div style='width:100%;padding:15px;padding-bottom:0px;'>\n        <div style='width:100%;display:flex;position: relative;padding-bottom:15px;'>\n          <img style='object-fit: cover;height:80px;width:80px;;' src=\"{{order.thumbnail}}\" alt=\"\">\n          <div style='margin-left:15px;'>\n            <div style='font-size:14px;color:#333333;'>{{order.name}}</div>\n            <div style='width:100%;display:flex;flex-wrap: wrap;'>\n              <div *ngFor='let x of (order.variations || [])'\n                style='font-size:12px;color:#333333;margin-top:10px;border:1px solid #333333;border-radius:5px;width:max-content;padding:2px 5px;margin-right:5px;'>\n                {{x.name}}</div>\n            </div>\n          </div>\n          <div style='position: absolute;z-index:100;bottom:15px;right:0px;'>\n            <div style='text-align: right;color:#666666;font-size:12px;'>x&nbsp;{{order.qty}} <span\n                style='color:#f53c3c;'\n                *ngIf='((order.used && toint(order.qty) > lengthof(order.used || []) ) )'>&nbsp;({{toint(order.qty) -\n                lengthof(order.used || [])}}&nbsp;left)</span></div>\n            <!-- <div *ngIf='type==\"vouchers\"' style='text-align: right;color:#333333;font-size:13px;margin-top:10px;'>{{toint(order.qty) * (order.price_now ) | currency :\"RM\"}}</div> -->\n          </div>\n        </div>\n\n        <div\n          style='width:100%;display:flex;justify-content: space-between;align-items: center;padding-bottom:15px;border-bottom:1px solid #eeeeee;'>\n\n          <div style='font-size:12px;color:#333333;'>{{order.address==true ? \"Delivery\" : \"QR Redemption\"}}</div>\n\n        </div>\n\n        <div *ngIf='type==\"vouchers\"' style='width:100%;'>\n          <!-- <div style='padding:10px 0px;display:flex;justify-content: space-between;align-items: center;border-bottom:1px solid #eeeeee;'>\n        <div style='color:#666666;font-size:12px;'>Sold by <span style='font-weight: bold;color:#f53c3c;'>{{user.name}} [LV&nbsp;{{user.verified || 1}}]</span></div>\n        <div style='background-color: #f53c3c;color:White;padding:7px 15px;text-align: center;font-size:14px;border-radius: 2px;'>Influencer Detail</div>\n      </div> -->\n          <div style='padding:10px 0px;display:flex;justify-content: space-between;align-items: center;'>\n            <div style='color:#666666;font-size:14px;'>Order ID</div>\n            <div style='font-size:14px;color:#333333;font-weight: bold;'>\n              #{{order.date|date:\"YYMMdd\"}}{{last(order.id,8)}}</div>\n          </div>\n        </div>\n\n      </div>\n      <div style=\"padding: 5px; background-color: #f7f9fd;\"></div>\n      <!-- u there? -->\n      <div *ngIf='order.address' style='width:100%;'>\n        <!-- IF address == true , this will show , no, all these old data, new data should have address true or false in all orders, or u havent add this / wait ah -->\n        <div style='width:100%;padding:15px;display:flex;'>\n          <ion-icon style='font-size:18px;color:#00b871;margin-right:15px;' name=\"location-outline\"></ion-icon>\n          <div style='width:calc( 100% - 15px - 18px );'>\n            <div style='display:flex;justify-content: space-between;align-items: center; margin-bottom:15px;'>\n              <div style='font-size:14px;font-weight: bold;color:#333333;'>Delivery Address</div>\n            </div>\n            <div style='font-size:12px;color:#666666;'>{{order.buyer_name}}</div>\n            <div style='font-size:12px;color:#666666;margin-top:5px;'>{{order.buyer_email}}</div>\n            <div style='font-size:12px;color:#666666;margin-top:5px;'>{{order.buyer_contact}}</div>\n            <div *ngIf=\"order.address\" style='font-size:12px;color:#666666;margin-top:5px;'>{{order.buyer_address ||\n              \"N/A\" }}</div>\n          </div>\n        </div>\n\n        <div style='width:100%;border-bottom:1px solid #eeeeee;'></div>\n\n        <div style='width:100%;padding:15px;display:flex;'>\n          <ion-icon style='font-size:18px;color:#00b871;margin-right:15px;' name=\"cube-outline\"></ion-icon>\n          <div style='width:calc( 100% - 15px - 18px );'>\n            <div style='display:flex;justify-content: space-between;align-items: center; margin-bottom:15px;'>\n              <div style='font-size:14px;font-weight: bold;color:#333333;'>Shipping Information</div>\n            </div>\n            <div *ngIf='order.tracking_company && order.tracking_number' style='font-size:12px;color:#666666;'>\n              {{order.tracking_company || \"\"}} {{order.tracking_company && order.tracking_number ? \" - \" :\"\"}}\n              {{order.tracking_number || \"\"}}</div>\n            <div *ngIf='!(order.tracking_company && order.tracking_number)' style='font-size:12px;color:#666666;'>No\n              shipping information provided</div>\n\n          </div>\n        </div>\n\n      </div>\n\n\n      <div *ngIf='order.address==true' style=\"padding: 5px; background-color: #f7f9fd;\"></div>\n      <div *ngIf='type == \"vouchers\"' style='width:100%;'>\n\n        <div style='width:100%;padding:15px;display:flex;'>\n          <ion-icon style='font-size:18px;color:#00b871;margin-right:15px;' name=\"card-outline\"></ion-icon>\n          <div style='width:calc( 100% - 15px - 18px );'>\n            <div style='display:flex;justify-content: space-between;align-items: center; margin-bottom:15px;'>\n              <div style='font-size:14px;font-weight: bold;color:#333333;'>Payment Information</div>\n              <!-- <div style='font-size:12px;color:#00b871;text-align: right;'>COPY</div> -->\n            </div>\n            <div style='margin-bottom:10px;display:flex;width:100%;justify-content: space-between;align-items: center;'>\n              <div style='font-size:12px;color:#666666;'>Merchandise Subtotal</div>\n              <div style='font-size:12px;color:#666666;'>{{ toint(order.qty) * (order.price_now ) | currency:\"RM\" }}\n              </div>\n            </div>\n\n            <div style='width:100%;border-bottom:1px solid #eeeeee;'></div>\n\n            <div style='margin-top:15px;display:flex;width:100%;justify-content: space-between;align-items: center;'>\n              <div style='font-size:12px;color:#333333;font-weight: bold;'>Total Paid</div>\n              <div style='font-size:12px;color:#f53c3c;font-weight: bold;'>{{toint(order.qty) * (order.price_now ) |\n                currency :\"RM\"}}</div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n      <div *ngIf='type == \"vouchers\"' style=\"padding: 5px; background-color: #f7f9fd;\"></div>\n\n      <!-- CHANGE TO MERCHANT -->\n      <!-- Photo, name, description 2 lines, go merchant page buy, contact merchant -->\n      <div style=\"width:100%; background-color: white;padding:20px;\">\n        <div style='width:100%;display:flex;justify-content: flex-start;background-color: white;padding:20px;'>\n          <img style='height:60px;width:60px;border-radius:100%;object-fit: cover;' src=\"{{vendor_info['photo']}}\" alt=\"\">\n          <div style='margin-left:20px;'>\n            <div style='font-size:15px;font-weight: bold;color:#333333;margin-top:10px;'>{{vendor_info['name']}}</div>\n            <div style='width:calc( 100% );display:flex;flex-wrap: wrap;margin-top:10px;'>\n              <div (click)='openlink(x.link, x.name)' *ngFor='let x of vendor_info[\"links\"]'\n                style='cursor: pointer;;padding:5px 10px;border:1px solid #eeeeee;font-size:12px;margin-right:10px;margin-bottom:10px;'>\n                {{x.name}}</div>\n            </div>\n          </div>\n        </div>\n        <div (click)=\"brand(vendor_info.id)\"\n          style='font-size:14px;padding:10px 20px;border:1px solid #c25254;color:#c25254;width:max-content;margin-top:0px;cursor: pointer;'>\n          More from&nbsp;{{vendor_info[\"name\"]}}&nbsp;></div>\n      </div>\n\n      <div style=\"padding: 5px; background-color: #f7f9fd;\"></div>\n\n      <!-- QR Code Information -->\n      <!-- QR Code -->\n      <!-- After Sales Instruction -->\n\n      <div *ngIf=\"!order.address\" style='width:100%;padding:15px;display:flex;'>\n        <ion-icon style='font-size:18px;color:#00b871;margin-right:15px;' name=\"card-outline\"></ion-icon>\n        <div style='width:calc( 100% - 15px - 18px );'>\n          <div style='display:flex;justify-content: space-between;align-items: center; margin-bottom:15px;'>\n            <div style='font-size:14px;font-weight: bold;color:#333333;'>Redemption Information</div>\n            <!-- <div style='font-size:12px;color:#00b871;text-align: right;'>COPY</div> -->\n          </div>\n\n          <div style='width:100%;display:flex;flex-wrap: wrap;'>\n            <div [ngStyle]='{\"height\": widther(303) ? \"200px\" : \"calc( 100vw - 40px - 15px - 20px - 32px )\" }'\n              style=\"position: relative;;width: 100%;max-width:200px;margin-right:40px;margin-bottom:20px;display:flex;justify-content: center;align-items: center;\">\n              <img style='width:100%;height:100%;object-fit: contain;position: absolute;z-index:10;' src=\"{{qr}}\">\n              <img style='width:100%;height:100%;object-fit: cover;'\n                src=\"https://i.pinimg.com/originals/39/ee/de/39eede5b8818d7c02d2340a53a652961.gif\">\n              <!-- <div style='font-size:12px;color:#333333;margin-top:10px;text-align: center;font-weight: bold;'>QR Code for Redemption purposes</div> -->\n            </div>\n\n            <div *ngIf=\"items.aftersale\" [ngStyle]='{\"width\" : widther(500) ? \"calc( 100% - 240px )\" : \"100%\"}' style='padding-right:20px;'>\n              <div style='color:#333333;font-size:14px;font-weight: bold;margin-bottom:20px;'>Note to Buyer</div>\n              <div style='font-size:12px;color:#666666;line-height: 25px;;'>{{items.aftersale}}</div>\n            </div>\n\n          </div>\n\n\n\n\n        </div>\n      </div>\n\n      <div *ngIf=\"!order.address\"  style=\"padding: 5px; background-color: #f7f9fd;\"></div>\n\n      <div *ngIf='order.used' style='width:100%;padding:15px;display:flex;'>\n        <ion-icon style='font-size:18px;color:#00b871;margin-right:15px;' name=\"laptop-outline\"></ion-icon>\n        <div style='width:calc( 100% - 15px - 18px );'>\n          <div style='display:flex;justify-content: space-between;align-items: center; margin-bottom:15px;'>\n            <div style='font-size:14px;font-weight: bold;color:#333333;'>Redemption History</div>\n            <!-- <div style='font-size:12px;color:#00b871;text-align: right;'>COPY</div> -->\n          </div>\n          <div *ngFor='let x of (order.used | keyvalue) ; let i = index'\n            style='margin-bottom:10px;width:100%;display:flex;justify-content: space-between;'>\n            <div style='font-size:12px;color:#666666;width:30px;'>{{i+1}}.</div>\n            <div style='font-size:12px;color:#666666;'>Fulfilment made on&nbsp;{{( x.value > 0 ? x.value : x.value['date']\n              ) | date:\"dd MMM yyyy, hh:mmaa\"}}<span *ngIf='!(x.value > 0)'>&nbsp;by&nbsp;{{x.value['by_name']}} <span\n                  *ngIf=\"x.value['pay_rate']\">0'>&nbsp;with a transaction fee\n                  of&nbsp;{{(x.value['pay_rate']*100).toFixed(1)}}%</span> </span> </div>\n          </div>\n\n        </div>\n      </div>\n      <div *ngIf='order.used' style=\"padding: 5px; background-color: #f7f9fd;\"></div>\n\n\n\n    </div>\n\n\n  </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "uX05":
/*!*************************************!*\
  !*** ./src/app/order/order.page.ts ***!
  \*************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order.page.html */ "u6Jy");
/* harmony import */ var _order_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.page.scss */ "wIiX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/database */ "Zs65");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");










let OrderPage = class OrderPage {
    constructor(nav, modal, toastController, title, routerOutlet, alertController, actRoute, platform) {
        this.nav = nav;
        this.modal = modal;
        this.toastController = toastController;
        this.title = title;
        this.routerOutlet = routerOutlet;
        this.alertController = alertController;
        this.actRoute = actRoute;
        this.platform = platform;
        this.comment = [];
        this.order = {};
        this.user = {};
        this.vendor = {};
        this.vendor_acc = {};
        this.settings = {};
        this.whatsapp = {}; //
        this.type = "vouchers";
        this.id = "";
        this.subject = {};
        this.event_parti = {};
        this.eventtype = 'events';
        this.users = {};
        this.puller = this.platform.width() / 2;
        this.events = {};
        this.experience = {};
        this.vouchers = {};
        this.datefix = 1623314696295;
        this.orderid = "";
        this.ok = 0;
        this.vendor_info = [];
        this.items = [];
        this.orders = [];
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
    widtherget() {
        return this.platform.width();
    }
    presentToast(x) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: x,
                duration: 2000,
                position: 'top',
            });
            toast.present();
        });
    }
    numbertodigit(x) {
        return Math.floor(x) + Math.round((x - Math.floor(x)) * 100) / 100;
    }
    lengthof(x) {
        return (x ? Object.keys(x).length : 0);
    }
    brand(x) {
        // console.log();
        this.nav.navigateForward('brand/' + x + '/' + this.orders.seller_id);
    }
    ionViewWillEnter() {
        this.orderid = this.actRoute.snapshot.paramMap.get('id');
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('orders/' + this.orderid).once('value', data => {
            if (data.exists()) {
                this.title.setTitle(new Date(data.val().date).toLocaleDateString() + ' ' + data.val().name);
                this.orders = data.val();
                this.qr = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + data.val().id + ',' + 'consumer';
                firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('vendors/' + data.val().by).once('value', data => {
                    this.vendor_info = data.val();
                });
                firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('vouchers/' + data.val().type_id).once('value', data => {
                    this.items = data.val();
                });
                this.order = data.val();
                this.ok = 1;
            }
            else {
                this.ok = -1;
            }
        });
    }
    ngOnInit() {
    }
    toint(x) {
        return parseInt(x);
    }
    last(x, y) {
        return ((x.split("").reverse().join("").substring(0, y)).split("").reverse().join("")).toUpperCase();
    }
    back() {
        this.nav.pop();
    }
    shipment() {
        // ask tracking
        // push used
        // transaction vendor commission
    }
    lengthof2(x) {
        return (x ? (x).length : 0);
    }
};
OrderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRouterOutlet"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
OrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order',
        template: _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderPage);



/***/ }),

/***/ "wIiX":
/*!***************************************!*\
  !*** ./src/app/order/order.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex {\n  flex-wrap: wrap;\n}\n\n.xflex {\n  flex-wrap: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoib3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXh7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi54ZmxleHtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=order-order-module.js.map