(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-event-module"],{

/***/ "c9qh":
/*!*************************************!*\
  !*** ./src/app/event/event.page.ts ***!
  \*************************************/
/*! exports provided: EventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPage", function() { return EventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_event_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./event.page.html */ "l4rC");
/* harmony import */ var _event_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.page.scss */ "fuew");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/database */ "Zs65");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");












let EventPage = class EventPage {
    constructor(platform, activatedRoute, nav, title, iab, http, meta) {
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.nav = nav;
        this.title = title;
        this.iab = iab;
        this.http = http;
        this.meta = meta;
        this.puller = this.platform.width() / 2;
        this.enter = false;
        this.item = "";
        this.user = "";
        this.voucher = {};
        this.influencer = {};
        this.event = "";
        this.qty = 1;
        this.selected = 0;
        this.var_select = [0, 1];
        // this.voucher['variations'][loop0]['selections'][var_select[loop0]]
        // {price:x , name: x}
        this.disabled = [true, true, true];
        this.event_info = {};
        this.links = [];
        // load = true;
        this.complete = false;
        this.items = {};
    }
    join() {
        window.open('https://register.vsnap.my/influencer');
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
        // window.open(temp);
        this.iab.create(temp, '_system');
        // xxx
    }
    donatecsr2021() {
        this.iab.create("https://pg.revenuemonster.my/v1/invoice-group/input?invoiceGroupId=1626521195381410810", '_system');
    }
    proper2(x) {
        return Math.round(((Math.abs(x) || 0) + Number.EPSILON) * 100) / 100;
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
        this.event = this.activatedRoute.snapshot.paramMap.get('event');
        this.user = this.activatedRoute.snapshot.paramMap.get('user') || "yRSIH0mIALf4PsxkwSUFkKnjdMI3";
        this.http.post('https://api2.vsnap.my/getevents', { id: this.event }).subscribe(x => {
            if (x['data']) {
                // this.event_info = x['data'];
                // this.title.setTitle(this.event_info.name + '\'s Vsnap Event Store')
                // this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/event/' + this.event + '/' + this.user) });
                // this.meta.updateTag({ property: 'og:title', content: this.event_info.name + '\'s Vsnap Event Store' });
                // this.meta.updateTag({ property: 'og:image', content:this.event_info.thumbnail || "https://i.imgur.com/cW5MqH2.png" });
                // this.meta.updateTag({ property: 'og:description', content: (this.event_info.description || '') });
                this.title.setTitle(x['data'].name + '\'s Vsnap Event Store');
                this.meta.updateTag({ name: 'description', content: (x['data'].description || "Welcome to " + x['data'].name + "'s Vsnap Event Store") });
                this.meta.updateTag({ itemprop: 'name', content: x['data'].name + '\'s Vsnap Event Store' });
                this.meta.updateTag({ itemprop: 'description', content: (x['data'].description || "Welcome to " + x['data'].name + "'s Vsnap Event Store") });
                this.meta.updateTag({ itemprop: 'image', content: (x['data'].thumbnail || "https://i.imgur.com/cW5MqH2.png") });
                this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/event/' + this.event + '/' + this.user) });
                this.meta.updateTag({ property: 'og:type', content: 'website' });
                this.meta.updateTag({ property: 'og:description', content: (x['data'].description || "Welcome to " + x['data'].name + "'s Vsnap Event Store") });
                this.meta.updateTag({ property: 'og:title', content: x['data'].name + '\'s Vsnap Event Store' });
                this.meta.updateTag({ property: 'og:image', content: (x['data'].thumbnail || "https://i.imgur.com/cW5MqH2.png") });
                this.meta.updateTag({ property: 'og:image:secure_url', content: (x['data'].thumbnail || "https://i.imgur.com/cW5MqH2.png") });
                this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' });
                this.meta.updateTag({ property: 'og:image:width', content: '500' });
                this.meta.updateTag({ property: 'og:image:height', content: '500' });
            }
            else {
                // this.tomain()
            }
        }, e => {
            // this.tomain()
        });
    }
    ionViewWillEnter() {
        // private http: HttpClient,
        // private meta: Meta, 
        // load=true;
        // complete=false;
        // items={};
        // this.event = this.activatedRoute.snapshot.paramMap.get('event');
        // this.user = this.activatedRoute.snapshot.paramMap.get('user');
        this.event = this.activatedRoute.snapshot.paramMap.get('event');
        this.user = this.activatedRoute.snapshot.paramMap.get('user') || "yRSIH0mIALf4PsxkwSUFkKnjdMI3";
        this.http.post('https://api2.vsnap.my/getevents', { id: this.event }).subscribe(x => {
            if (x['data']) {
                this.event_info = x['data'];
                // this.title.setTitle(this.event_info.name + '\'s Vsnap Event Store')
                // this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/event/' + this.event + '/' + this.user) });
                // this.meta.updateTag({ property: 'og:title', content: this.event_info.name + '\'s Vsnap Event Store' });
                // this.meta.updateTag({ property: 'og:image', content:this.event_info.thumbnail || "https://i.imgur.com/cW5MqH2.png" });
                // this.meta.updateTag({ property: 'og:description', content: (this.event_info.description || '') });
                this.title.setTitle(this.event_info.name + '\'s Vsnap Event Store');
                this.meta.updateTag({ name: 'description', content: (this.event_info.description || "Welcome to " + this.event_info.name + "'s Vsnap Event Store") });
                this.meta.updateTag({ itemprop: 'name', content: this.event_info.name + '\'s Vsnap Event Store' });
                this.meta.updateTag({ itemprop: 'description', content: (this.event_info.description || "Welcome to " + this.event_info.name + "'s Vsnap Event Store") });
                this.meta.updateTag({ itemprop: 'image', content: (this.event_info.thumbnail || "https://i.imgur.com/cW5MqH2.png") });
                this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/event/' + this.event + '/' + this.user) });
                this.meta.updateTag({ property: 'og:type', content: 'website' });
                this.meta.updateTag({ property: 'og:description', content: (this.event_info.description || "Welcome to " + this.event_info.name + "'s Vsnap Event Store") });
                this.meta.updateTag({ property: 'og:title', content: this.event_info.name + '\'s Vsnap Event Store' });
                this.meta.updateTag({ property: 'og:image', content: (this.event_info.thumbnail || "https://i.imgur.com/cW5MqH2.png") });
                this.meta.updateTag({ property: 'og:image:secure_url', content: (this.event_info.thumbnail || "https://i.imgur.com/cW5MqH2.png") });
                this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' });
                this.meta.updateTag({ property: 'og:image:width', content: '500' });
                this.meta.updateTag({ property: 'og:image:height', content: '500' });
                for (const key in (this.event_info['vouchers'] || {})) {
                    let element = this.event_info['vouchers'][key];
                    this.http.post('https://api2.vsnap.my/getvouchers', { id: element }).subscribe(z => {
                        if (z['data'].id) {
                            this.voucher[element] = z['data'] || {};
                        }
                    }, e => {
                    });
                }
            }
            else {
                this.tomain();
            }
        }, e => {
            this.tomain();
        });
        this.influencer.id = this.user;
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
        firebase_app__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('link').once('value', data => {
            this.links = data.val();
        });
        // firebase.database().ref('vouchers/').orderByChild('by').equalTo(this.vendor).once('value', data => {
        //   this.voucher = data.val();
        //   console.log(this.vendor);
        // })
        // firebase.database().ref('vendors/' + this.vendor).once('value', data => {
        //   this.event_info = data.val();
        //   this.title.setTitle('Welcome to ' + this.event_info['name'] + '\'s vsnap store!')
        //   console.log(this.voucher);
        // })
    }
    tomain() {
        this.nav.navigateForward('main?user=' + this.user);
    }
    // ionViewWillEnter() {
    //   this.event = this.activatedRoute.snapshot.paramMap.get('event');
    //   this.user = this.activatedRoute.snapshot.paramMap.get('user');
    //   this.http.post('https://api2.vsnap.my/getevents', { id: this.event }).subscribe(x => {
    //     if (x['data']) {
    //       this.event_info = x['data'];
    //       this.title.setTitle(this.event_info['name'])
    //       for (const key in (this.event_info['vouchers'] || {})) {
    //         let element = this.event_info['vouchers'][key];
    //         this.http.post('https://api2.vsnap.my/getvouchers', { id: element }).subscribe(z => {
    //           if (z['data'].id) {
    //             this.voucher[element] = z['data'] || {};
    //           }
    //         }, e => {
    //         })
    //       }
    //     } else {
    //       this.tomain()
    //     }
    //   }, e => {
    //     this.tomain()
    //   })
    //   this.influencer.id = this.user;
    //   this.http.post('https://api2.vsnap.my/getusers', { id: this.user }).subscribe(a => {
    //     if (a['data'].id) {
    //       this.influencer = a['data'] || {};
    //     } else {
    //       this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
    //         if (a['data'].id) {
    //           this.influencer = a['data'] || {};
    //         } else {
    //           this.tomain()
    //         }
    //       }, e => {
    //         this.tomain()
    //       })
    //     }
    //   }, e => {
    //     this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
    //       if (a['data'].id) {
    //         this.influencer = a['data'] || {};
    //       } else {
    //         this.tomain()
    //       }
    //     }, e => {
    //       this.tomain()
    //     })
    //   })
    //   firebase.database().ref('link').once('value', data => {
    //     this.links = data.val();
    //   })
    //   // firebase.database().ref('vouchers/').orderByChild('by').equalTo(this.vendor).once('value', data => {
    //   //   this.voucher = data.val();
    //   //   console.log(this.vendor);
    //   // })
    //   // firebase.database().ref('vendors/' + this.vendor).once('value', data => {
    //   //   this.event_info = data.val();
    //   //   this.title.setTitle('Welcome to ' + this.event_info['name'] + '\'s vsnap store!')
    //   //   console.log(this.voucher);
    //   // })
    // }
    store(x) {
        this.nav.navigateForward('store/' + x);
    }
    outside(x) {
        this.iab.create(this.links[x], '_system');
        // window.open(this.links[x]);
    }
};
EventPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Meta"] }
];
EventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-event',
        template: _raw_loader_event_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_event_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EventPage);



/***/ }),

/***/ "fuew":
/*!***************************************!*\
  !*** ./src/app/event/event.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "kwau":
/*!***********************************************!*\
  !*** ./src/app/event/event-routing.module.ts ***!
  \***********************************************/
/*! exports provided: EventPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageRoutingModule", function() { return EventPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event.page */ "c9qh");




const routes = [
    {
        path: '',
        component: _event_page__WEBPACK_IMPORTED_MODULE_3__["EventPage"]
    }
];
let EventPageRoutingModule = class EventPageRoutingModule {
};
EventPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventPageRoutingModule);



/***/ }),

/***/ "l4rC":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style='--background:#f7f9fd;'>\n\n  <div\n    [ngStyle]=\"{'padding-left' : widther(900)==true ? ' calc( ( 100vw - 900px ) / 2 )' : '0px','padding-right' : widther(900)==true ? ' calc( ( 100vw - 900px ) / 2 )' : '0px' }\"\n    style='width:100vw;background-color:#f7f9fd;'>\n\n    <div\n      style='width:100%;display:flex;align-items: center;justify-content: space-between;padding:0px 20px;background-color:white;border-bottom:1px solid #eeeeee;height:70px;'>\n      <img (click)='tomain()' *ngIf='widther(400)==true' style='height:30px;object-fit: contain;cursor: pointer;'\n        src=\"https://i.imgur.com/pEyI97C.png\" alt=\"\">\n      <img (click)='tomain()' *ngIf='widther(400)==false'\n        style='height:40px;width:40px;;object-fit: contain;cursor: pointer;' src=\"https://i.imgur.com/vCmo9nR.png\"\n        alt=\"\">\n\n      <div *ngIf='user == influencer[\"id\"]' (click)=\"store(influencer['id'])\"\n        style='display:flex;align-items: center;justify-content: flex-end;'>\n        <img style='height:40px;width:40px;object-fit: cover;border-radius:100%;'\n          src=\"{{influencer['photo'] ? (stringornot(influencer['photo']) ? influencer['photo'] : influencer['photo'][0] ) : 'https://i.imgur.com/GvrNqUS.png' }}\"\n          alt=\"\">\n        <div style='margin-left:10px;cursor: pointer;'>\n          <div\n            style='font-size:14px;color:#333333;background-color:white;margin-right:20px;text-align: left;font-weight: bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;max-width:90px;'>\n            {{influencer['name']}}</div>\n          <div style='font-size:12px;color:#999999;margin-top:2px;'>Visit my store ></div>\n        </div>\n\n      </div>\n    </div>\n\n    <div style='width:100%;display:flex;justify-content: flex-start;background-color: white;padding:20px;'>\n      <img style='height:60px;width:60px;border-radius:100%;object-fit: cover;' src=\"{{event_info['thumbnail']}}\"\n        alt=\"\">\n      <div style='margin-left:20px;'>\n        <div style='font-size:15px;font-weight: bold;color:#333333;margin-top:10px;'>{{event_info['name']}}</div>\n        <div style='font-size:12px;color:#999999;white-space: pre-line;margin-top:10px;margin-bottom:10px;'>\n          {{event_info['description']}}</div>\n        <div style='width:calc( 100% );display:flex;flex-wrap: wrap;margin-top:10px;'>\n          <div (click)='openlink(x.link, x.name)' *ngFor='let x of event_info[\"link\"]'\n            style='cursor: pointer;;padding:5px 10px;border:1px solid #eeeeee;font-size:12px;margin-right:10px;margin-bottom:10px;'>\n            {{x.name}}</div>\n        </div>\n        <div (click)='donatecsr2021()' *ngIf=\"event_info['tag']=='CSR2021'\"\n          style='margin-top:10px;;padding:7px 15px;width:max-content;font-size:14px;color:white;background-color: #8a1515;'>\n          Donate to Fight2021</div>\n\n      </div>\n\n    </div>\n\n\n\n    <div style='width:100%;display:flex;flex-wrap: wrap;padding-left:20px;background-color:white;'>\n      <div *ngFor='let eve of checkit(voucher|keyvalue);let i = index' (click)=\"go(eve.value.id)\"\n        style='margin-right:20px;margin-bottom:20px;background-color:white;box-shadow:1px 5px 10px rgba(0,0,0,0.1);position: relative;'\n        [ngStyle]='{\"width\" : ( 900 > widtherget()  ? ((widtherget() - 20)/rounder(widtherget() / 200)) - 20 +\"px\" : \"calc( ( 900px - 100px ) / 4 )\")  }'>\n        <div style='width:100%;cursor: pointer;'>\n          <div style='width:100%;padding-bottom:100%;position: relative;'>\n            <!-- <div style='height:30px;width:30px;border-radius:100%;display:flex;justify-content: center;align-items: center;cursor: pointer;background-color:Rgba(255,255,255,0.5);position: absolute;z-index:20;top:10px;right:10px;'>\n              <ion-icon  style='font-size:20px;' name=\"share-outline\"></ion-icon>\n            </div> -->\n            <img\n              style='width:100%;height:100%;top:0;left:0;right:0;bottom:0;position: absolute;z-index:10;object-fit: cover;'\n              src=\"{{eve.value.thumbnail}}\" alt=\"\">\n          </div>\n          <div style='padding:10px;width:100%;'>\n            <div style='font-size:14px;color:#262626;font-weight: bold;'>{{eve.value.name}}</div>\n\n            <div style='width:100%;display:flex;justify-content: space-between;align-items: center;'>\n\n              <div style='margin-top:5px;display:flex;align-items: center'>\n                <div *ngIf=\"eve.value.price_now\" style='font-size:14px;font-weight: bold;color:#8a1515;'>\n                  {{eve.value.price_now | currency:\"RM\"}}\n                </div>\n                <div *ngIf=\"!eve.value.price_now\" style='font-size:14px;font-weight: bold;color:#8a1515;'>\n                  APPLY FOR FREE\n                </div>\n                <div *ngIf='eve.value.price_ori > eve.value.price_now'\n                  style='font-size:11px;font-weight: normal;color:#999999;;text-decoration:line-through;margin-left:5px;'>\n                  &nbsp;{{eve.value.price_ori | currency:\"RM\"}}&nbsp;</div>\n              </div>\n\n\n\n            </div>\n\n            <!-- <div style='width:100%;display:flex;align-items: center;margin-top:5px;'>\n              \n              <div style='margin-right:20px;display:flex;justify-content: center;align-items: center;border-radius:5px;'>\n                <ion-icon style='color:#737373;;font-size:12px;margin-right:3px;' name=\"fast-food\"></ion-icon>\n                <div style='color:#737373;;font-size:12px;letter-spacing: 1px;'>fdg</div>\n              </div>\n\n            </div> -->\n\n            <!-- <div *ngIf='eve.value.status==false' style='color:#8a1515;font-size:14px;font-weight: bold;position: absolute;bottom:10px;right:10px;'>Sold Out</div> -->\n\n\n\n          </div>\n\n        </div>\n\n\n\n\n      </div>\n\n      <div style='width:100%;' *ngIf='lengthof(checkit(voucher|keyvalue))==0'>\n        <div\n          style='width:calc( 100% - 40px );margin:20px;padding:20px;display:flex;justify-content: center;align-items: center;background-color: white;flex-direction: column;'>\n          <img style='width:200px;' src=\"https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif\"\n            alt=\"\">\n          <div style='font-size:16px;font-weight: bold;color:#666666;text-align: center;'>Nothing Here</div>\n          <div style='padding-top:5px;font-size:14px;font-weight: normal;color:#666666;text-align: center;'>There are no\n            items in this list.</div>\n        </div>\n      </div>\n\n    </div>\n    <div style='padding:40px;border-top:1px solid #eeeeee;background-color: white;;'>\n      <div style='font-size:12px;color:#999999;text-align: center;margin-bottom:10px;'>Become a vsnap influencer or\n        become a vsnap vendor?&nbsp; <span (click)='join()' style='text-decoration: underline;'>join us now.</span> </div>\n      <div style='font-size:12px;color:#999999;text-align: center;margin-bottom:20px;'>© Copyright 2020- All rights\n        reserved - Vsnap by Vsnap Global Sdn Bhd. version 6.1.0</div>\n      <div style='text-align: center;display:flex;align-items: center;justify-content: center;'>\n        <span (click)=\"outside('terms')\" style='cursor: pointer;;font-size:10px;color:#525dc2;'>Terms &\n          Condition</span>&nbsp;•&nbsp;<span (click)=\"outside('privacy')\"\n          style='cursor: pointer;font-size:10px;color:#525dc2;'>Privacy Policy</span>&nbsp;•&nbsp;<span\n          (click)=\"outside('disclaimer')\"\n          style='cursor: pointer;font-size:10px;color:#525dc2;'>Disclaimer</span>&nbsp;•&nbsp;<span\n          (click)=\"outside('refund')\" style='cursor: pointer;font-size:10px;color:#525dc2;'>Refund Policy</span>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "zB96":
/*!***************************************!*\
  !*** ./src/app/event/event.module.ts ***!
  \***************************************/
/*! exports provided: EventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageModule", function() { return EventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _event_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-routing.module */ "kwau");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event.page */ "c9qh");







let EventPageModule = class EventPageModule {
};
EventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _event_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventPageRoutingModule"]
        ],
        declarations: [_event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]]
    })
], EventPageModule);



/***/ })

}]);
//# sourceMappingURL=event-event-module.js.map