(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["click-preview-click-preview-module"],{

/***/ "5l2D":
/*!*******************************************************!*\
  !*** ./src/app/click-preview/click-preview.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outsider {\n  width: 100vw;\n}\n@media only screen and (min-width: 1600px) {\n  .outsider {\n    width: 1600px;\n    margin-left: calc( ( 100vw - 1600px ) / 2 );\n    margin-right: calc( ( 100vw - 1600px ) / 2 );\n  }\n}\n.open {\n  transition: all 0.2s ease;\n  transform: scale(1.1);\n}\n.openx {\n  transition: all 0.2s ease;\n  transform: scale(0.9);\n}\n.no-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNsaWNrLXByZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBQTtBQUFKO0FBRUk7RUFKSjtJQUtRLGFBQUE7SUFDQSwyQ0FBQTtJQUNBLDRDQUFBO0VBQ047QUFDRjtBQUdBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQUFKO0FBR0E7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBQUo7QUFJSTtFQUNFLGFBQUE7QUFETiIsImZpbGUiOiJjbGljay1wcmV2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRzaWRlcntcclxuXHJcbiAgICB3aWR0aDoxMDB2dztcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgIHdpZHRoOjE2MDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyggKCAxMDB2dyAtIDE2MDBweCApIC8gMiApO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyggKCAxMDB2dyAtIDE2MDBweCApIC8gMiApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLm9wZW4ge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLm9wZW54IHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbn1cclxuXHJcbi5uby1zY3JvbGxiYXIge1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "ENlF":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/click-preview/click-preview.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- [ngClass]='close==true ? \"inner\" : \"innerx\"' -->\n<div *ngIf=\"close == true\" style='position: fixed;left:0;background-color: rgba(0,0,0,0.85);display:flex;justify-content: center;\nalign-items: center;width:100vw;height:100vh;flex-direction: column; top:0;\n    opacity: 1;\n    transition: all .2s ease;\n    z-index: 10000;'>\n  <div style='width:100%;position: relative;'>\n    <div (click)='close = !close;'\n      style='font-size:10px;padding:5px 10px;border-radius:2px;color:white;background-color: #f53c3c;position: absolute;top:15px;right:15px;z-index:10;font-weight:bold;'>\n      Close</div>\n    <img style='width:100%; height: 50vh; object-fit: contain;' src=\"{{nowphoto}}\" alt=\"\">\n  </div>\n</div>\n\n\n<ion-content style=\"--background: rgb(255, 235, 210)\">\n\n  <div class='outsider'>\n\n    <div\n      style='width:100vw;max-width:1600px;display:flex;align-items: center;justify-content: space-between;padding:15px;position: fixed;z-index:1000;top:0;;background-color: #f7f9fd;'>\n      <img (click)='home()' style='height:35px;' src=\"https://i.imgur.com/pEyI97C.png\" alt=\"\">\n\n      <div (click)='ordernow()' *ngIf=\"data.type != 'register'\"\n        style='cursor: pointer;;padding:7px 15px;border-radius:5px;background-color: #f03030;color:white;font-size:14px;font-weight: bold;letter-spacing: 1px;'>\n        {{data.type == 'food' ? 'Get QR Now' : 'Order Now'}}</div>\n\n      <div (click)='ordernow()' *ngIf=\"data.type == 'register'\"\n        style='cursor: pointer;;padding:7px 15px;border-radius:5px;background-color: #f03030;color:white;font-size:14px;font-weight: bold;letter-spacing: 1px;'>\n        Register Now</div>\n    </div>\n\n    <div style='height:65px;width:100%;background-color: white;'></div>\n\n    <div *ngFor='let eve of contents;let i = index'\n      style='width:100%;display:flex;align-items: center;justify-content: center;'>\n      <img *ngIf='eve.type==\"photo\"' style='width:100%;object-fit: contain;' src=\"{{eve.link}}\" alt=\"\">\n    </div>\n\n    <div *ngIf=\"lengthof(rating) > 0\"\n      style='width:100%;padding-top:30px; background-color: white;padding-bottom: 30px;'>\n\n      <div style='font-size:30px;font-weight: bold;text-align: center;color:#333333;'> Customer Review & Feedback</div>\n      <div style='font-size:14px;color:#999999;text-align: center;margin-top:10px; margin-bottom: 20px;'>Amazing Comment\n        & Rating</div>\n\n      <ion-slides id='slides' #slides (ionSlideWillChange)=\"call()\" class=\"no-scrollbar\"\n        style='width:100%;  display:flex; padding: 30px 0px;' pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide *ngFor='let eve of rating;let i = index' [ngClass]=\"[activeslide==i ? 'open' : 'openx']\"\n          (click)=\"nowphoto = eve.feedback_photo; close = !close\"\n          style='width:100%; display:flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px; box-shadow: 0px 3px 6px rgb(0,0,0,0.1);'>\n          <img style='width: 250px; height: 250px; object-fit: cover;border-radius:10px;' src=\"{{eve.feedback_photo}}\"\n            alt=\"\">\n          <div style=\"padding: 10px 0px 20px 0px\">\n            <div\n              style='font-size:16px;font-weight: bold;color:#333333;letter-spacing: .5px;text-align: center;margin-top:5px;'>\n              {{eve.buyer_name}}\n            </div>\n            <div style='width:100%;display:flex;align-items: center;justify-content: center;margin-top:5px;'>\n\n              <ion-icon [ngStyle]=\"{'color': (eve.feedback_rating > 0 ? '#ffd82a' : '#eeeeee')}\"\n                style='font-size:14px;margin-right:10px;' name=\"star\"></ion-icon>\n              <ion-icon [ngStyle]=\"{'color': (eve.feedback_rating > 1 ? '#ffd82a' : '#eeeeee')}\"\n                style='font-size:14px;margin-right:10px;' name=\"star\"></ion-icon>\n              <ion-icon [ngStyle]=\"{'color': (eve.feedback_rating > 2 ? '#ffd82a' : '#eeeeee')}\"\n                style='font-size:14px;margin-right:10px;' name=\"star\"></ion-icon>\n              <ion-icon [ngStyle]=\"{'color': (eve.feedback_rating > 3 ? '#ffd82a' : '#eeeeee')}\"\n                style='font-size:14px;margin-right:10px;' name=\"star\"></ion-icon>\n              <ion-icon [ngStyle]=\"{'color': (eve.feedback_rating > 4 ? '#ffd82a' : '#eeeeee')}\" style='font-size:14px;'\n                name=\"star\"></ion-icon>\n\n\n            </div>\n            <div\n              style='font-size:14px;font-weight: normal;color:#999999;letter-spacing: .5px;text-align: center; font-style: italic; min-height: 80px;\n            text-align: center;display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; padding: 15px 10px;'>\n              \"{{eve.feedback || 'No Comment'}}\"</div>\n          </div>\n\n        </ion-slide>\n      </ion-slides>\n\n      <!-- <div style='width:100%;display:flex; overflow-x: scroll; padding-left:15px;padding-top:30px;'>\n\n\n        <div *ngFor='let eve of rating;let i = index'\n          style='margin-right:15px;margin-bottom:20px;background-color:white;;position: relative;border-radius:10px;'\n          [ngStyle]='{\"width\" : 984 >= platform.width()  ?  ( ((widtherget() - 15)/rounder(widtherget() / 164)) - 15 +\"px\" ) : (((984 - 90) / 5))+\"px\"  }'>\n          <div style='width:100%;cursor: pointer;'>\n\n            <img\n              [ngStyle]='{\"height\" :984 >= platform.width()  ?  ( ((widtherget() - 15)/rounder(widtherget() / 164)) - 15 +\"px\" ) : (((984 - 90) / 5))+\"px\"  }'\n              style='width:100%;object-fit: cover;border-radius:10px;' src=\"{{eve.feedback_photo}}\" alt=\"\">\n\n            <div\n              style='font-size:16px;font-weight: bold;color:#333333;letter-spacing: .5px;text-align: center;margin-top:5px;'>\n              {{eve.buyer_name}}\n            </div>\n            <div style='width:100%;display:flex;align-items: center;justify-content: center;margin-top:5px;'>\n\n              <ion-icon [ngStyle]=\"{'color': (eve.feedback_rating > 0 ? '#ffd82a' : '#eeeeee')}\"\n                style='font-size:14px;margin-right:10px;' name=\"star\"></ion-icon>\n              <ion-icon [ngStyle]=\"{'color': (eve.feedback_rating > 1 ? '#ffd82a' : '#eeeeee')}\"\n                style='font-size:14px;margin-right:10px;' name=\"star\"></ion-icon>\n              <ion-icon [ngStyle]=\"{'color': (eve.feedback_rating > 2 ? '#ffd82a' : '#eeeeee')}\"\n                style='font-size:14px;margin-right:10px;' name=\"star\"></ion-icon>\n              <ion-icon [ngStyle]=\"{'color': (eve.feedback_rating > 3 ? '#ffd82a' : '#eeeeee')}\"\n                style='font-size:14px;margin-right:10px;' name=\"star\"></ion-icon>\n              <ion-icon [ngStyle]=\"{'color': (eve.feedback_rating > 4 ? '#ffd82a' : '#eeeeee')}\" style='font-size:14px;'\n                name=\"star\"></ion-icon>\n\n\n            </div>\n            <div style='font-size:14px;font-weight: normal;color:#999999;letter-spacing: .5px;text-align: center;margin-top:5px;font-style: italic;text-align: center;display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 3;\n            overflow: hidden;'>\"{{eve.feedback}}\"</div>\n          </div>\n\n        </div>\n\n      </div> -->\n\n    </div>\n\n    <div id='buybuy' *ngIf=\"lengthof(products) > 0 && data.type == 'vouchers'\" #buybuy\n      style='width:100%; background-color: white;padding-top:30px; padding-bottom: 30px;'>\n\n      <div style='font-size:30px;font-weight: bold;text-align: center;color:#333333;'>Purchase offer now!</div>\n      <div style='font-size:14px;color:#999999;text-align: center;margin-top:10px;'>Deals not always wait for you！</div>\n\n      <div style='width:100%;display:flex;flex-wrap: wrap;padding-left:15px;padding-top:30px;'>\n\n        <div *ngFor='let eve of products;let i = index' (click)='detail(eve)'\n          style='margin-right:15px;margin-bottom:20px;background-color:white;;position: relative;'\n          [ngStyle]='{\"width\" : 984 >= platform.width()  ?  ( ((widtherget() - 15)/rounder(widtherget() / 246)) - 15 +\"px\" ) : (((984 - 75) / 4))+\"px\"  }'>\n          <div style='width:100%;cursor: pointer;'>\n\n            <img\n              [ngStyle]='{\"height\" :984 >= platform.width()  ?  ( ((widtherget() - 15)/rounder(widtherget() / 246)) - 15 +\"px\" ) : (((984 - 75) / 4))+\"px\"  }'\n              style='width:100%;object-fit: cover;' src=\"{{eve.thumbnail}}\" alt=\"\">\n\n            <div style='font-size:16px;font-weight: bold;color:#333333;letter-spacing: .5px;padding:10px 15px;padding-bottom:0px; min-height: 48px; display: -webkit-box;\n              -webkit-box-orient: vertical; -webkit-line-clamp: 2;  overflow: hidden;'>\n              {{eve.name}}</div>\n\n            <!-- <div style='font-size:14px;font-weight: normal;color:#999999;letter-spacing: .5px;text-align: left;padding: 0px 15px;display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 2;\n            overflow: hidden;'>I love it so much to the extend that I have to use it everyday!</div> -->\n\n            <div style='width:100%;display:flex;align-items: flex-end;padding:10px 15px;padding-bottom:15px;'>\n              <div style='font-size:16px;color:#f03030;font-weight: bold;letter-spacing: 1px;'>{{eve.price_now |\n                currency:\"RM\"}}\n              </div>\n              <div *ngIf=\"eve.price_ori > eve.price_now\"\n                style='font-size:14px;color:#999999;letter-spacing: 1px;text-decoration: line-through;margin-left:5px;'>\n                {{eve.price_ori | currency:\"RM\"}}</div>\n            </div>\n            <div\n              style='width:100%;padding:7px 15px;text-align: center;background-color: #f03030;display:flex;align-items: center;justify-content: center;'>\n\n              <div style='color:white;font-size:16px;font-weight: bold;letter-spacing: 1px;'>Buy Now</div>\n              <ion-icon style='color:white;font-size:18px;font-weight: bold;letter-spacing: 1px;margin-left:10px;'\n                name=\"cart\"></ion-icon>\n            </div>\n          </div>\n\n\n\n        </div>\n      </div>\n\n    </div>\n\n    <div id='buybuy' *ngIf=\"data.type == 'food'\" #buybuy\n      style='width:100%;background-color: #f7f9fd;padding:30px 0px;  display: flex; flex-direction: column; align-items: center;'>\n\n      <div style='font-size:30px;font-weight: bold;text-align: center;color:#333333;'>Show This QR Code to Vendor</div>\n      <div style='font-size:14px;color:#999999;text-align: center;margin-top:10px; margin-bottom: 20px;'>To Recieve\n        Special Offer！</div>\n\n      <div\n        style=\"padding: 15px; background: white; border-radius: 10px; margin: 20px 0px; box-shadow: 0px 3px 6px rgb(0,0,0,0.1);\">\n        <img style='width: 90vw ;object-fit: cover; max-width: 300px;' src=\"{{qr}}\" alt=\"\">\n      </div>\n      <!-- \n      <div style='width:100%;display:flex;flex-wrap: wrap;padding-left:15px;padding-top:30px;'>\n\n        <div *ngFor='let eve of products;let i = index' (click)='detail(eve)'\n          style='margin-right:15px;margin-bottom:20px;background-color:white;;position: relative;'\n          [ngStyle]='{\"width\" : 984 >= platform.width()  ?  ( ((widtherget() - 15)/rounder(widtherget() / 246)) - 15 +\"px\" ) : (((984 - 75) / 4))+\"px\"  }'>\n          <div style='width:100%;cursor: pointer;'>\n\n            <img\n              [ngStyle]='{\"height\" :984 >= platform.width()  ?  ( ((widtherget() - 15)/rounder(widtherget() / 246)) - 15 +\"px\" ) : (((984 - 75) / 4))+\"px\"  }'\n              style='width:100%;object-fit: cover;' src=\"{{eve.thumbnail}}\" alt=\"\">\n\n            <div style='font-size:16px;font-weight: bold;color:#333333;letter-spacing: .5px;padding:10px 15px;padding-bottom:0px; min-height: 48px; display: -webkit-box;\n              -webkit-box-orient: vertical; -webkit-line-clamp: 2;  overflow: hidden;'>\n              {{eve.name}}</div>\n\n\n            <div style='width:100%;display:flex;align-items: flex-end;padding:10px 15px;padding-bottom:15px;'>\n              <div style='font-size:16px;color:#f03030;font-weight: bold;letter-spacing: 1px;'>{{eve.price_now |\n                currency:\"RM\"}}\n              </div>\n              <div *ngIf=\"eve.price_ori > eve.price_now\"\n                style='font-size:14px;color:#999999;letter-spacing: 1px;text-decoration: line-through;margin-left:5px;'>\n                {{eve.price_ori | currency:\"RM\"}}</div>\n            </div>\n            <div\n              style='width:100%;padding:7px 15px;text-align: center;background-color: #f03030;display:flex;align-items: center;justify-content: center;'>\n\n              <div style='color:white;font-size:16px;font-weight: bold;letter-spacing: 1px;'>Buy Now</div>\n              <ion-icon style='color:white;font-size:18px;font-weight: bold;letter-spacing: 1px;margin-left:10px;'\n                name=\"cart\"></ion-icon>\n            </div>\n          </div>\n\n\n\n        </div>\n      </div> -->\n\n    </div>\n\n    <div id='buybuy' *ngIf=\"data.type == 'register'\" #buybuy\n      style='width:100%;background-color: #fffaf6;padding:30px 0px;  display: flex; flex-direction: column; align-items: center;'>\n\n      <div style=\"width: 80vw; max-width: 300px; height: 80vw; max-height: 300px; border-radius: 10000px; \">\n\n        <script src=\"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js\"></script>\n        <lottie-player src=\"https://assets6.lottiefiles.com/packages/lf20_9xrenieu.json\" speed=\"1\" style=\"width: 100%; \"\n          loop autoplay></lottie-player>\n\n      </div>\n\n      <div style='font-size:30px;font-weight: bold;text-align: center;color:#333333; margin-top: -30px;'>Become\n        a Redhood Influencer</div>\n      <div style='font-size:14px;color:#999999;text-align: center;margin-top:10px; margin-bottom: 20px;'>To <b>Recieve\n          many reward</b>\n        and <b>More offer</b>！</div>\n\n      <div (click)='join()' style=\"padding: 10px 15px; background-color: white; box-shadow: 0px 3px 6px rgb(0,0,0,0.1); font-size: 16px;\n         border-radius: 100px; background-color: #F68D44; color: white; font-weight: bold; cursor: pointer;\">\n        Join us now!</div>\n\n    </div>\n\n    <div id='buybuy' *ngIf=\"data.type == 'custom'\" #buybuy\n      style='width:100%;background-color: #fffaf6;padding:30px 0px;  display: flex; flex-direction: column; align-items: center;'>\n      <div style='font-size:30px;font-weight: bold;text-align: center;color:#333333; margin-top: -30px;'>{{data.type_title}}</div>\n      <div style='font-size:14px;color:#999999;text-align: center;margin-top:10px; margin-bottom: 20px;'>{{data.type_remark}}</div>\n      <div (click)='gooo(data.type_link)' style=\"padding: 10px 15px; background-color: white; box-shadow: 0px 3px 6px rgb(0,0,0,0.1); font-size: 16px; border-radius: 100px; background-color: #F68D44; color: white; font-weight: bold; cursor: pointer;\">{{data.type_button}}</div>\n    </div>\n\n    <!-- Footer -->\n\n    <div style='padding:40px;border-top:1px solid #eeeeee;background-color: white;;'>\n      <div style='font-size:12px;color:#999999;text-align: center;margin-bottom:10px;'>Become a Redhood\n        Influencer?&nbsp;\n        <span (click)='join()' style='text-decoration: underline; cursor: pointer;'>join us now.</span>\n      </div>\n\n      <div style='font-size:12px;color:#999999;text-align: center;margin-bottom:20px;'>©️ Copyright 2020- All rights\n        reserved - Redhood by Redhood Global Sdn Bhd. version 6.1.0</div>\n      <div style='text-align: center;display:flex;align-items: center;justify-content: center;'>\n        <span (click)=\"outside('terms')\" style='cursor: pointer;;font-size:10px;color:#525dc2;'>Terms &\n          Condition</span>&nbsp;•&nbsp;<span (click)=\"outside('privacy')\"\n          style='cursor: pointer;font-size:10px;color:#525dc2;'>Privacy Policy</span>&nbsp;•&nbsp;<span\n          (click)=\"outside('disclaimer')\"\n          style='cursor: pointer;font-size:10px;color:#525dc2;'>Disclaimer</span>&nbsp;•&nbsp;<span\n          (click)=\"outside('refund')\" style='cursor: pointer;font-size:10px;color:#525dc2;'>Refund Policy</span>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "EgA8":
/*!*******************************************************!*\
  !*** ./src/app/click-preview/click-preview.module.ts ***!
  \*******************************************************/
/*! exports provided: ClickPreviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickPreviewPageModule", function() { return ClickPreviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _click_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./click-preview-routing.module */ "qMeC");
/* harmony import */ var _click_preview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./click-preview.page */ "YnKm");







let ClickPreviewPageModule = class ClickPreviewPageModule {
};
ClickPreviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _click_preview_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClickPreviewPageRoutingModule"]
        ],
        declarations: [_click_preview_page__WEBPACK_IMPORTED_MODULE_6__["ClickPreviewPage"]]
    })
], ClickPreviewPageModule);



/***/ }),

/***/ "YnKm":
/*!*****************************************************!*\
  !*** ./src/app/click-preview/click-preview.page.ts ***!
  \*****************************************************/
/*! exports provided: ClickPreviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickPreviewPage", function() { return ClickPreviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_click_preview_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./click-preview.page.html */ "ENlF");
/* harmony import */ var _click_preview_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./click-preview.page.scss */ "5l2D");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! localforage */ "oAJy");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_9__);










let ClickPreviewPage = class ClickPreviewPage {
    constructor(platform, nav, iab, actRoute, http) {
        this.platform = platform;
        this.nav = nav;
        this.iab = iab;
        this.actRoute = actRoute;
        this.http = http;
        this.qr = '';
        this.slideOpts = {
            initialSlide: 1,
            speed: 200,
            slidesPerView: this.platform.width() / 250,
            centeredSlides: true,
            spaceBetween: 40,
        };
        this.timer = 0;
        this.notcount = false;
        this.data = [];
        this.products = [];
        this.rating = [];
        this.links = [];
        this.activeslide = 0;
        this.logsid = '';
        this.close = false;
        this.contents = [];
    }
    join() {
        window.open('https://register.vsnap.my/influencer?referrer_id=' + this.user);
    }
    call() {
        this.slides.getActiveIndex().then(index => {
            console.log(index);
            this.activeslide = (index);
        });
    }
    outside(x) {
        this.iab.create(this.links[x], '_system');
        // window.open(this.links[x]);
    }
    ordernow() {
        // this.nav.navigateForward('brand/' + this.nowbrand + '/' + this.user);
        document.getElementById('buybuy').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    gooo(x) {
        // this.http.post('https://api2.vsnap.my/updateclicklogs', { click_id:'custom' , logs_pool_id: this.logsid }).subscribe(p2 => {
        //   console.log("got the button");
        // });
        window.open(x + '?userid=' + this.data.userid + '&uniqueid=' + this.uniquekey + '&logsid=' + this.logsid);
    }
    to(x) {
        this.nav.navigateForward('store/' + x.userid);
    }
    detail(x) {
        this.nav.navigateForward('home/' + x.id + '/' + this.user);
    }
    dataer() {
        firebase__WEBPACK_IMPORTED_MODULE_8__["default"].database().ref('link').once('value', data => {
            this.links = data.val();
        });
        this.actRoute.queryParams.subscribe(a => {
            this.id = a['id'];
            // this.user = a['user']
            console.log(this.id);
            // console.log(this.user);
            this.qr = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + this.id + ',' + this.user;
            this.http.post('https://api2.vsnap.my/getclickvouchers', { id: this.id }).subscribe(x => {
                console.log(x['data']);
                this.data = x['data']; // get landing_photo
                this.nowbrand = x['data'].by;
                this.contents = x['data'].landing_photo || [];
                // console.log({ type_id: x['data'][0].type_id });
                this.http.post('https://api2.vsnap.my/getclickrating', { type_id: x['data'].type_id }).subscribe(a => {
                    console.log(a['data']);
                    this.rating = a['data'].filter(a => a['feedback_rating'] > 3);
                });
                this.http.post('https://api2.vsnap.my/datavendorvouchers', { id: x['data'].by }).subscribe(a => {
                    this.products = a['data'].filter(a => a['status']) || [];
                    console.log(this.products);
                });
                // if (!this.notcount) {
                //   setInterval(() => {
                //     this.timer += 1;
                //     if (this.timer == 3) {
                //       console.log('first insert')
                //       let temp = {
                //         userid: this.user,
                //         type_id: x['data'][0].type_id,
                //         click_order_id: x['data'][0].click_order_id,
                //         unique_id: this.uniquekey,
                //         time: this.timer,
                //       }
                //       this.http.post('https://api2.vsnap.my/insertclicklogs', temp).subscribe(p => {
                //         console.log(p['data']);
                //         this.logsid = p['data'].logs_pool_id
                //         console.log(this.logsid)
                //       })
                //     } else if (this.timer == 10 || this.timer == 15 || this.timer == 30 || this.timer == 60) {
                //       this.http.post('https://api2.vsnap.my/updateclicklogs', { time: this.timer, logs_pool_id: this.logsid }).subscribe(p2 => {
                //         console.log(this.timer);
                //         console.log(p2)
                //       });
                //     }
                //     // console.log(123)
                //   }, 1000);
                //   let temp = {
                //     userid: this.user,
                //     type_id: x['data'][0].type_id,
                //     click_order_id: x['data'][0].click_order_id,
                //     unique_id: this.uniquekey,
                //     time: this.timer,
                //   }
                //   console.log(temp);
                //   // setTimeout(() => {
                //   //   this.http.post('https://api2.vsnap.my/insertclicklogs', temp).subscribe(p => {
                //   //     console.log(p['data']);
                //   //     setTimeout(() => {
                //   //       this.http.post('https://api2.vsnap.my/updateclicklogs', { time: this.timer, logs_pool_id: p['data'].logs_pool_id }).subscribe(x => {
                //   //         console.log('1');
                //   //       });
                //   //     }, 15000);
                //   //     setTimeout(() => {
                //   //       this.http.post('https://api2.vsnap.my/updateclicklogs', { time: this.timer, logs_pool_id: p['data'].logs_pool_id }).subscribe(x => {
                //   //         console.log('2');
                //   //       });
                //   //     }, 20000);
                //   //     setTimeout(() => {
                //   //       this.http.post('https://api2.vsnap.my/updateclicklogs', { time: this.timer, logs_pool_id: p['data'].logs_pool_id }).subscribe(x => {
                //   //         console.log('3');
                //   //       });
                //   //     }, 30000);
                //   //     setTimeout(() => {
                //   //       this.http.post('https://api2.vsnap.my/updateclicklogs', { time: this.timer, logs_pool_id: p['data'].logs_pool_id }).subscribe(x => {
                //   //         console.log('4');
                //   //       });
                //   //     }, 60000);
                //   //   });
                //   // }, 10000);
                // } else {
                //   console.log('Storage Permission Denied');
                // }
            }, e => {
                console.log(e);
            });
        });
    }
    storager() {
        localforage__WEBPACK_IMPORTED_MODULE_9__["getItem"]('unique_key').then((a) => {
            if (a) {
                this.uniquekey = a;
                console.log('1.' + a);
                this.dataer();
            }
            else {
                let keyer = firebase__WEBPACK_IMPORTED_MODULE_8__["default"].database().ref('pushKey').push(firebase__WEBPACK_IMPORTED_MODULE_8__["default"].database.ServerValue.TIMESTAMP).key;
                localforage__WEBPACK_IMPORTED_MODULE_9__["setItem"]('unique_key', keyer);
                this.uniquekey = keyer;
                console.log('2.' + a);
                this.dataer();
            }
        }).catch(e => {
            this.notcount = true;
            this.dataer();
        });
    }
    ionViewWillEnter() {
        this.storager();
    }
    ngOnInit() {
        // this.rating = [{
        //   feedback_photo: 'https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg',
        //   buyer_name: 'TW Lai',
        //   feedback_rating: 5,
        //   feedback: 'Nice and good product',
        // }, {
        //   feedback_photo: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
        //   buyer_name: 'TW Lai',
        //   feedback_rating: 5,
        //   feedback: 'Nice and good product',
        // }, {
        //   feedback_photo: 'https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg',
        //   buyer_name: 'TW Lai',
        //   feedback_rating: 5,
        //   feedback: 'Nice and good product',
        // }, {
        //   feedback_photo: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
        //   buyer_name: 'TW Lai',
        //   feedback_rating: 5,
        //   feedback: 'Nice and good product',
        // }, {
        //   feedback_photo: 'https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg',
        //   buyer_name: 'TW Lai',
        //   feedback_rating: 5,
        //   feedback: 'Nice and good product',
        // }, {
        //   feedback_photo: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
        //   buyer_name: 'TW Lai',
        //   feedback_rating: 5,
        //   feedback: 'Nice and good product',
        // }]
    }
    back() {
        this.nav.pop();
    }
    order() {
        // console.log(document.getElementById('buybuy').scrollTop,document.getElementById('buybuy').offsetTop,document.getElementById('buybuy').clientTop)
        this.content.scrollToPoint(0, document.getElementById('buybuy').offsetTop, 300);
    }
    home() {
        // console.log(document.getElementById('buybuy').scrollTop,document.getElementById('buybuy').offsetTop,document.getElementById('buybuy').clientTop)
        this.content.scrollToPoint(0, 0, 300);
    }
    lengthof(x) {
        return Object.keys(x || {}).length;
    }
    rounder(x) {
        return Math.floor(x);
    }
    widtherget() {
        return this.platform.width();
    }
};
ClickPreviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ClickPreviewPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], { static: false },] }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['slides',] }]
};
ClickPreviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-click-preview',
        template: _raw_loader_click_preview_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_click_preview_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClickPreviewPage);



/***/ }),

/***/ "qMeC":
/*!***************************************************************!*\
  !*** ./src/app/click-preview/click-preview-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ClickPreviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickPreviewPageRoutingModule", function() { return ClickPreviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _click_preview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./click-preview.page */ "YnKm");




const routes = [
    {
        path: '',
        component: _click_preview_page__WEBPACK_IMPORTED_MODULE_3__["ClickPreviewPage"]
    }
];
let ClickPreviewPageRoutingModule = class ClickPreviewPageRoutingModule {
};
ClickPreviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClickPreviewPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=click-preview-click-preview-module.js.map