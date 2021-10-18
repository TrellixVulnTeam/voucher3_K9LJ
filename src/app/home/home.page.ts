import { Component, Inject, OnInit } from '@angular/core';
import firebase from "firebase/app";
import "firebase/database"
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import * as localforage from 'localforage'
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  qty = 1;
  buy = false;
  agree = false;
  id;
  user;
  voucher = [] as any;
  vendor = [] as any;
  name;
  email;
  address;
  contact = '+60';
  postcode
  city
  remark;
  link = [] as any;
  select = [] as any;

  constructor(
    private actRoute: ActivatedRoute,
    private platform: Platform,
    private http: HttpClient,
    private iab: InAppBrowser,
    private nav: NavController,
    private title: Title,
    private meta: Meta,
  ) { }

  lefter() {
    return this.platform.width() > 800 ? (this.platform.width() - 800) / 2 + 'px' : this.platform.width();
  }

  check() {
    return this.name && this.email && this.contact && (this.voucher.address ? this.address : true);
  }

  calc(x) {
    if (x == '-') {
      if (this.qty > 1) {
        eval('this.qty ' + x + '= 1');
      }
    } else {
      eval('this.qty ' + x + '= 1');
    }
  }

  var_select = [] as any;



  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('item');
    this.user = this.actRoute.snapshot.paramMap.get('user') || "yRSIH0mIALf4PsxkwSUFkKnjdMI3";
    this.http.post('https://api.vsnap.my/getvouchers', { id: this.id }).subscribe(a => {
      console.log(a);
      if (a['data'].id) {
        this.title.setTitle(a['data'].name)
        this.meta.updateTag({ name: 'description', content: (a['data'].description || "Vsnap Exclusive Product on Sale") })
        this.meta.updateTag({ itemprop: 'name', content: a['data'].name + '\'s Vsnap Event Store' })
        this.meta.updateTag({ itemprop: 'description', content: (a['data'].description || "Vsnap Exclusive Product on Sale") })
        this.meta.updateTag({ itemprop: 'image', content: (a['data'].thumbnail || "https://i.imgur.com/cW5MqH2.png") })
        this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/home/' + this.id + '/' + this.user) })
        this.meta.updateTag({ property: 'og:type', content: 'website' })
        this.meta.updateTag({ property: 'og:description', content: (a['data'].description || "Vsnap Exclusive Product on Sale") })
        this.meta.updateTag({ property: 'og:title', content: a['data'].name + '\'s Vsnap Event Store' })
        this.meta.updateTag({ property: 'og:image', content: (a['data'].thumbnail || "https://i.imgur.com/cW5MqH2.png") })
        this.meta.updateTag({ property: 'og:image:secure_url', content: (a['data'].thumbnail || "https://i.imgur.com/cW5MqH2.png") })
        this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
        this.meta.updateTag({ property: 'og:image:width', content: '500' })
        this.meta.updateTag({ property: 'og:image:height', content: '500' })


      } else {

      }

    }, e => {

    })
  }

  ionViewWillEnter() {
    this.id = this.actRoute.snapshot.paramMap.get('item');
    this.user = this.actRoute.snapshot.paramMap.get('user') || "yRSIH0mIALf4PsxkwSUFkKnjdMI3";


    // this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/getmeta2', { type: "vouchers", id: this.id }).subscribe(data => {
    //   console.log(data);

    //   if (Object.keys(this.voucher).length) {
    //     this.load = false;
    //     this.voucher = this.voucher;
    //     this.complete = true;
    //   } else {
    //   }

    // })

    localforage.getItem('vsnap_userinfo').then((a) => {
      if (a) {
        this.name = a['name'] || "";
        this.address = a['address'] || "";
        this.contact = a['contact'] || "";
        this.email = a['email'] || "";
        this.postcode = a['postcode'] || "";
        this.city = a['city'] || "";
      } else {
        this.name = "";
        this.address = "";
        this.contact = "";
        this.email = "";
        this.postcode = "";
        this.city = "";
      }
    }).catch(e => {
      this.name = "";
      this.address = "";
      this.contact = "";
      this.email = "";
      this.postcode = "";
      this.city = "";
    })


    // all firebase here

    firebase.database().ref('link').once('value', data => {
      this.links = data.val();
    })

    firebase.database().ref('link').once('value', data => {
      this.link = data.val();
    })

    this.influencer.id = this.user;
    this.http.post('https://api.vsnap.my/getusers', { id: this.user }).subscribe(a => {

      if (a['data'].id) {
        this.influencer = a['data'] || {};
      } else {
        this.http.post('https://api.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
          if (a['data'].id) {
            this.influencer = a['data'] || {};
          } else {
            this.tomain()
          }
        }, e => {
          this.tomain()
        })
      }
    }, e => {
      this.http.post('https://api.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
        if (a['data'].id) {
          this.influencer = a['data'] || {};
        } else {
          this.tomain()
        }
      }, e => {
        this.tomain()
      })
    })

    this.http.post('https://api.vsnap.my/getvouchers', { id: this.id }).subscribe(a => {
      console.log(a);

      if (a['data'].id) {

        this.http.post('https://api.vsnap.my/datavendorvouchers', { id: a['data'].by }).subscribe(c => {
          this.otherproduct = c['data'].filter(b => b.id != a['data'].id);
          if (!this.lengthof(this.otherproduct)) {
            this.disabled[3] = false;
          }
        });

        this.voucher = a['data'] || {};
        if (!this.voucher.status) {
          swal({
            title: 'Sold Out',
            text: '产品已售罄 Product Sold Out!',
            buttons: { 'OK': true },
          });
          this.nav.navigateBack('main');
        }
        console.log(this.voucher);
        // this.title.setTitle(this.voucher.name )
        // this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/home/' + this.id + '/' + this.user) });
        // this.meta.updateTag({ property: 'og:title', content: this.voucher.name });
        // this.meta.updateTag({ property: 'og:image', content: this.voucher.thumbnail || "https://i.imgur.com/cW5MqH2.png" });
        // this.meta.updateTag({ property: 'og:description', content: (this.voucher.description || 'Vsnap Exclusive Products') });


        this.title.setTitle(this.voucher.name)
        this.meta.updateTag({ name: 'description', content: (this.voucher.description || "Vsnap Exclusive Product on Sale") })
        this.meta.updateTag({ itemprop: 'name', content: this.voucher.name + '\'s Vsnap Event Store' })
        this.meta.updateTag({ itemprop: 'description', content: (this.voucher.description || "Vsnap Exclusive Product on Sale") })
        this.meta.updateTag({ itemprop: 'image', content: (this.voucher.thumbnail || "https://i.imgur.com/cW5MqH2.png") })
        this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/home/' + this.id + '/' + this.user) })
        this.meta.updateTag({ property: 'og:type', content: 'website' })
        this.meta.updateTag({ property: 'og:description', content: (this.voucher.description || "Vsnap Exclusive Product on Sale") })
        this.meta.updateTag({ property: 'og:title', content: this.voucher.name + '\'s Vsnap Event Store' })
        this.meta.updateTag({ property: 'og:image', content: (this.voucher.thumbnail || "https://i.imgur.com/cW5MqH2.png") })
        this.meta.updateTag({ property: 'og:image:secure_url', content: (this.voucher.thumbnail || "https://i.imgur.com/cW5MqH2.png") })
        this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
        this.meta.updateTag({ property: 'og:image:width', content: '500' })
        this.meta.updateTag({ property: 'og:image:height', content: '500' })

        this.http.post('https://api.vsnap.my/dataVendorlogin', { userid: this.voucher.by }).subscribe(c => {
          if (c['data'][1]) {
            if (c['data'][1].id) {
              this.vendor = c['data'][1] || {};
              this.animer = 6;
            } else {
              this.tomain()
              this.vendor = {};
            }
          } else {
            this.tomain()
            this.vendor = {};
          }

        }, e => {
          this.tomain()
          this.vendor = {};
        })

        if (this.voucher['description']) {
          this.selected = 0;
          if (!this.voucher['tnc']) {
            this.disabled[1] = false;
          }
        } else if (this.voucher['tnc']) {
          this.disabled[0] = false;
          this.selected = 1;
        } else {
          this.disabled[0] = false;
          this.disabled[1] = false;
          this.selected = 2;
        }
        if (this.voucher['variations']) {
          this.var_select = [];
          this.voucher['variations'].forEach(element => {
            this.var_select.push(0);
          });
          console.log(this.var_select)
          console.log(this.countvar())
        } else {
          this.var_select = [];
        }

        this.http.post('https://api.vsnap.my/addstats', { type: "vouchers", type_id: this.voucher.type_id, stat: "share", userid: this.influencer.id }).subscribe(b => { }, e => { })


      } else {
        this.tomain()
        this.voucher = {};
      }

    }, e => {
      this.tomain()
    })


  }

  rounder(x) {
    return Math.floor(x);
  }

  widtherget() {
    return this.platform.width();
  }

  go(x) {
    this.nav.navigateForward('home/' + x + '/' + this.user);
  }

  item
  users
  selected
  disabled = [true, true, true, true];
  influencer = [] as any;
  links = [] as any;
  otherproduct = [] as any;

  outside(x) {
    this.iab.create(this.links[x], '_system');
    // window.open(this.links[x]);
  }

  donatecsr2021() {
    this.iab.create("https://pg.revenuemonster.my/v1/invoice-group/input?invoiceGroupId=1626521195381410810", '_system');
  }

  openlink(x, y) {
    let temp = (y == 'Facebook' ? 'https://' : (y == 'Instagram' ? 'https://' : '')) +
      (y == 'Facebook' ? 'www.facebook.com/' : (y == 'Instagram' ? 'www.instagram.com/' : '')) + x;
    this.iab.create(temp, '_system')
    // window.open(temp);
    // xxx
  }


  store(x) {
    this.nav.navigateForward('store/' + x);
  }

  brand(x) {
    this.nav.navigateForward('brand/' + x + '/' + this.user);
  }

  proper2(x) {
    return Math.round(((Math.abs(x) || 0) + Number.EPSILON) * 100) / 100
  }

  tomain() {
    this.nav.navigateForward('main?user=' + this.user)
  }

  // ionViewDidEnter() { // all firebase here

  //   firebase.database().ref('link').once('value', data => {
  //     this.links = data.val();
  //   })

  //   firebase.database().ref('link').once('value', data => {
  //     this.link = data.val();
  //   })

  //   this.influencer.id = this.user;
  //   this.http.post('https://api.vsnap.my/getusers', { id: this.user }).subscribe(a => {

  //     if (a['data'].id) {
  //       this.influencer = a['data'] || {};
  //     } else {
  //       this.http.post('https://api.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
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
  //     this.http.post('https://api.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
  //       if (a['data'].id) {
  //         this.influencer = a['data'] || {};
  //       } else {
  //         this.tomain()
  //       }
  //     }, e => {
  //       this.tomain()
  //     })
  //   })

  //   this.http.post('https://api.vsnap.my/getvouchers', { id: this.id }).subscribe(a => {
  //     console.log(a);

  //     if (a['data'].id) {

  //       this.http.post('https://api.vsnap.my/datavendorvouchers', { id: a['data'].by }).subscribe(c => {
  //         this.otherproduct = c['data'].filter(b => b.id != a['data'].id);
  //         if (!this.lengthof(this.otherproduct)) {
  //           this.disabled[3] = false;
  //         }
  //       });

  //       this.voucher = a['data'] || {};
  //       console.log(this.voucher);

  //       this.title.setTitle(this.voucher.name)
  //       // this.meta.updateTag({ name: 'description', content: this.voucher.description })

  //       this.meta.updateTag({ itemprop: 'name', content: this.voucher.name })
  //       this.meta.updateTag({ itemprop: 'description', content: (this.voucher.description || '') })
  //       this.meta.updateTag({ itemprop: 'image', content: this.voucher.thumbnail })
  //       this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/home/' + this.id + '/' + this.user) })
  //       this.meta.updateTag({ property: 'og:type', content: 'website' })
  //       this.meta.updateTag({ property: 'og:description', content: (this.voucher.description || '') })
  //       this.meta.updateTag({ property: 'og:title', content: this.voucher.name })
  //       this.meta.updateTag({ property: 'og:image', content: this.voucher.thumbnail })
  //       this.meta.updateTag({ property: 'og:image:secure_url', content: this.voucher.thumbnail })
  //       this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
  //       this.meta.updateTag({ property: 'og:image:width', content: '500' })
  //       this.meta.updateTag({ property: 'og:image:height', content: '500' })

  //       this.http.post('https://api.vsnap.my/dataVendorlogin', { userid: this.voucher.by }).subscribe(c => {
  //         if (c['data'][1]) {
  //           if (c['data'][1].id) {
  //             this.vendor = c['data'][1] || {};
  //             this.animer = 6;
  //           } else {
  //             this.tomain()
  //             this.vendor = {};
  //           }
  //         } else {
  //           this.tomain()
  //           this.vendor = {};
  //         }

  //       }, e => {
  //         this.tomain()
  //         this.vendor = {};
  //       })

  //       if (this.voucher['description']) {
  //         this.selected = 0;
  //         if (!this.voucher['tnc']) {
  //           this.disabled[1] = false;
  //         }
  //       } else if (this.voucher['tnc']) {
  //         this.disabled[0] = false;
  //         this.selected = 1;
  //       } else {
  //         this.disabled[0] = false;
  //         this.disabled[1] = false;
  //         this.selected = 2;
  //       }
  //       if (this.voucher['variations']) {
  //         this.var_select = [];
  //         this.voucher['variations'].forEach(element => {
  //           this.var_select.push(0);
  //         });
  //         console.log(this.var_select)
  //         console.log(this.countvar())
  //       } else {
  //         this.var_select = [];
  //       }

  //       this.http.post('https://api.vsnap.my/addstats', { type: "vouchers", type_id: this.voucher.type_id, stat: "share", userid: this.influencer.id }).subscribe(b => { }, e => { })


  //     } else {
  //       this.tomain()
  //       this.voucher = {};
  //     }

  //   }, e => {
  //     this.tomain()
  //   })

  // }

  stringornot(x) {
    return (typeof x == "string" ? true : false)
  }

  animer = 0;

  puller = this.platform.width() / 2;

  widther(x) {
    // console.log(this.platform.width() >= x)
    this.puller = (this.platform.width() >= 900 ? 450 : (this.platform.width() < 600 ? 300 : this.platform.width() / 2));
    // console.log(this.puller)
    return this.platform.width() >= x;
  }

  lengthof(x) {
    return x ? Object.keys(x).length : 0;
  }
  today = new Date().getTime();
  price_vsnap2 = 0 as any;
  buys() {
    // console.log(JSON.stringify((this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), [])));

    swal({
      title: 'Payment In Progress 付款进行中',
      text: 'Please Wait 请稍等',
      buttons: [false],
      closeOnEsc: false,
      closeOnClickOutside: false,
      timer: 10000,
    })

    if (this.voucher.address ? (this.address && this.postcode && this.city) : true) {
      if ((this.voucher.price_now + this.countvar()) == 0) {
        this.price_comm = 0;
        this.price_vsnap2 = 0;
        this.price_vsnap = 0;
        this.price_now = 0;
        this.price_ori = 0;
        this.price_bonus = 0;
        this.free()
      } else {
        this.price_bonus = this.proper2(this.voucher.price_bonus); // find ratio dulu, and count ez
        this.price_comm = this.proper2((this.proper2(this.voucher.price_comm + (this.countvar() * (this.voucher.price_comm / this.voucher.price_now))) || 0) / ((this.influencer.vip_expiry || 0) > this.today ? 1 : 2));
        this.price_vsnap2 = this.proper2((this.proper2(this.voucher.price_comm + (this.countvar() * (this.voucher.price_comm / this.voucher.price_now))) || 0) - this.price_comm);
        this.price_vsnap = this.proper2(((this.voucher.price_vsnap || 0) + this.countvar() * ((this.voucher.price_vsnap || 0) / this.voucher.price_now))) || 0;
        this.price_now = this.proper2(((this.voucher.price_now + this.countvar())) || 0);
        this.price_ori = this.proper2(((this.voucher.price_ori || 0) + this.countvar()) || 0);
        this.fpx()
      }
    } else {
      swal({
        icon: 'error',
        title: 'Error',
        text: '请填写所有资料\nPlease fill up all information!',
        closeOnEsc: false,
        closeOnClickOutside: false,
        buttons: [false],
        timer: 1500
      });
    }
  }

  enter = false;

  countvar() {
    return this.voucher['variations'] ? this.voucher['variations'].reduce((a, b, index) => a + (this.var_select[index] >= 0 ? b['selections'][this.var_select[index]].price : 0), 0) : 0;
  }

  checkguild() {
    if (this.influencer.guild) {

      console.log('guild/' + this.influencer.guild);


      firebase.database().ref('guild/' + this.influencer.guild).once('value', data => {
        if (data.exists()) {
          console.log("guild check")
          let multiplier = data.val().pay_rate ? (data.val().pay_rate[this.vendor.id] ? (data.val().pay_rate[this.vendor.id].rate || 0) :
            (data.val().pay_rate_default || 0)) : (data.val().pay_rate_default || 0)
          this.voucher.price_guild = this.proper2((this.price_vsnap || 0) * multiplier) || 0;
          this.voucher.price_guild_id = this.influencer.guild || "";
          this.voucher.price_guild_remark = this.influencer.name + " has achieved a sales of RM" + this.proper2(this.price_now * this.qty).toFixed(2) + " and our guild has received a guild incentive of RM" + this.proper2(this.voucher.price_guild * this.qty).toFixed(2) + "!";
          this.voucher.price_guild_logs = firebase.database().ref('pushKey').push(firebase.database.ServerValue.TIMESTAMP).key;

          console.log(this.voucher)
          this.checkvip();

        } else {
          this.voucher.price_guild = 0;
          this.voucher.price_guild_id = "";
          console.log("guild uncheck")
          this.checkvip();
        }
      })

    } else {
      this.voucher.price_guild = 0;
      this.voucher.price_guild_id = "";
      console.log("guild uncheck")
      this.checkvip();
    }
  }

  checkvip() {
    // this.influencer.vip > 0 // next phase
    if (this.influencer.vip == 2 && this.influencer.vip_expiry >= new Date().getTime()) {
      console.log("vip check")
      this.voucher.price_vip = this.proper2((this.price_vsnap || 0) * 0.15);
      // this.voucher.price_vip = this.proper2((this.price_vsnap || 0) * this.influencer.vip * 0.125) ; // next phase
      this.voucher.price_vip_remark = "You received " + this.proper2(this.voucher.price_vip * this.qty).toFixed(2) + " as VIP bonus incentive from a sales of RM" + this.proper2(this.price_now * this.qty).toFixed(2) + "!";
      this.voucher.price_vip_logs = firebase.database().ref('pushKey').push(firebase.database.ServerValue.TIMESTAMP).key;
      console.log(this.voucher)
      this.checkmentor();
    } else {
      this.voucher.price_vip = 0;
      console.log("vip uncheck")
      this.checkmentor();
    }
  }

  checkmentor() {
    if (this.vendor.referred_by) {
      console.log('guild/' + this.vendor.referred_by);

      firebase.database().ref('guild/' + this.vendor.referred_by).once('value', data => {

        if (data.exists()) {
          console.log("vicheckmentorp check")
          this.voucher.price_mentor = this.proper2((this.price_vsnap || 0) * 0.1);
          this.voucher.price_mentor_id = this.vendor.referred_by || "";
          this.voucher.price_mentor_remark = this.vendor.name + " has achieved a sales of RM" + this.proper2(this.price_now * this.qty).toFixed(2) + " and our guild received mentorship incentive of RM" + (this.voucher.price_mentor * this.qty).toFixed(2) + "!";
          this.voucher.price_mentor_logs = firebase.database().ref('pushKey').push(firebase.database.ServerValue.TIMESTAMP).key;
          this.checklast();

        } else {
          console.log("vicheckmentorp uncheck")
          this.voucher.price_mentor = 0;
          this.voucher.price_mentor_id = "";
          this.checklast();
        }

      })
    } else {
      console.log("vicheckmentorp uncheck")
      this.voucher.price_mentor = 0;
      this.voucher.price_mentor_id = "";
      this.checklast();
    }
  }

  // xxxx for checking
  // checkupline() {
  //   if (this.influencer.referred_by) {
  //     console.log("checkupline")
  //     this.voucher.price_upline = this.proper2((this.price_vsnap || 0) * 0.1);
   //     this.voucher.price_upline_id = this.influencer.referred_by

  //     this.voucher.price_upline_remark = this.influencer.name + " has made a sales of RM" + this.proper2(this.price_now * this.qty).toFixed(2) + " and you received RM" + (this.voucher.price_upline * this.qty).toFixed(2) + "as upline incentive!";
  //     this.voucher.price_upline_logs = firebase.database().ref('pushKey').push(firebase.database.ServerValue.TIMESTAMP).key;
  //     this.checklast();
  //   } else {
  //     console.log("checkupline")
  //     this.checklast();
  //   }
  // } 

  price_now = 0;
  price_vsnap = 0;
  price_comm = 0;
  price_ori = 0;
  price_bonus = 0;

  join() {
    window.open('https://register.vsnap.my/influencer');
  }

  checklast() {
    console.log('last coming')
    let keyer = firebase.database().ref('pushKey').push(firebase.database.ServerValue.TIMESTAMP).key;

    firebase.database().ref('orders_pending/' + keyer).update({
      address: this.voucher.address || false,
      aftersale: this.voucher.aftersale || "",
      buyer_address: ((this.address || "") + ' ' + (this.postcode || "") + ' ' + (this.city) || ""),
      buyer_contact: this.contact || "",
      buyer_name: this.name || "",
      buyer_email: this.email || "",
      by: this.voucher.by || "",
      by_name: this.vendor.name || "",
      category: this.voucher.category || "",
      checklist: this.voucher.list || [],
      date: firebase.database.ServerValue.TIMESTAMP,
      description: this.voucher.description || "",
      following: this.voucher.following || false,
      hidden_remark: this.voucher.hidden_remark || "",
      id: keyer,
      link: this.voucher.link || [],
      location: this.voucher.location || [],
      min_rating: this.voucher.min_rating || 0,
      min_vip: this.voucher.min_vip || 0,
      name: this.voucher.name || "",
      online: this.voucher.online || false,
      overwrite: this.voucher.overwrite || false,
      photo: this.voucher.photo || [],
      price_bonus: this.price_bonus,
      price_bonus_remark: 'You have received an Extra Bonus of RM' + (this.proper2(this.price_bonus)).toFixed(2) + ' from vsnap global, Congratulations!',
      price_bonus_logs: keyer,
      price_comm: this.price_comm,
      price_vsnap: this.price_vsnap,
      price_vsnap2: this.price_vsnap2,
      price_now: this.price_now,
      price_ori: this.price_ori,
      price_guild: this.voucher.price_guild || 0,
      price_guild_id: this.voucher.price_guild_id || "",
      price_guild_logs: this.voucher.price_guild_logs || "",
      price_guild_remark: this.voucher.price_guild_remark || "",
      price_vip: this.voucher.price_vip || 0,
      price_vip_remark: this.voucher.price_vip_remark || "",
      price_vip_logs: this.voucher.price_vip_logs || "",
      price_mentor: this.voucher.price_mentor || 0,
      price_mentor_id: this.voucher.price_mentor_id || "",
      price_mentor_remark: this.voucher.price_mentor_remark || "",
      price_mentor_logs: this.voucher.price_mentor_logs || "",
      qty: this.qty || 1,
      thumbnail: this.voucher.thumbnail || "",
      tnc: this.voucher.tnc || "",
      token: this.voucher.token || 0,
      type: 'vouchers',
      type_id: this.id || "",
      event: this.id || "",
      userid: this.user || "",
      value_price: this.voucher.value_price || 0,
      value_type: this.voucher.value_type || false,
      variations: (this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), []),
      seller_name: this.influencer.name || "",
      seller_email: this.influencer.email || "",
      seller_id: this.user || "",
      seller_phone: this.influencer.contact || "",
      survey: this.voucher.survey || [],
      verified: this.voucher.verified || 0,
      remark: this.remark || "",
      tag: this.voucher.tag || "",
    });

    let body = {
      amount: this.proper2(((this.voucher.price_now + this.countvar())) || 0) * this.qty * 100,
      // amount: 100,
      orderdescription: ('Purchase ' + this.voucher.name + ' x' + (this.qty || 1)).replace(/[^a-zA-Z ]/g, ""),
      ordertitle: 'Vsnap Order ' + keyer,
      orderid: keyer,
      redirecturl: 'https://deal.vsnap.my/thanks?orderId=' + keyer,
      callbackurl: 'https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/callback2?orderid=' + keyer,
    }

    // orderid
    // ordertitle
    // orderdescription
    // amount

    if (this.email && this.name) {
      console.log(body)
      this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/revenuePaymentAny', body).subscribe(a => {
        console.log(a)

        console.log(JSON.parse(a['message']['body']))
        if (Object.values(a).length) {
          const browser = this.iab.create(JSON.parse(a['message']['body']).url, '_self');
          // console.log(a);
        } else {
          swal({
            icon: 'error',
            title: 'Error',
            text: 'Something is wrong, please try again!',
            closeOnEsc: false,
            closeOnClickOutside: false,
            buttons: [false],
            timer: 1500
          });
        }

      }, e => {
        // console.log(e);
      })
    } else {
      swal({
        icon: 'error',
        title: 'Information Incomplete',
        text: 'Please enter all your information correctly.',
        closeOnEsc: false,
        closeOnClickOutside: false,
        buttons: [false],
        timer: 1500
      });
    }
  }

  fpx() {
    let temp = {
      name: this.name,
      address: this.address,
      postcode: this.postcode,
      city: this.city,
      contact: this.contact,
      email: this.email,
    }

    localforage.setItem('vsnap_userinfo', temp);

    console.log("FPX run")
    console.log(this.influencer)
    console.log(this.voucher)
    // price_guild: 0,
    //   price_guild_id: 0,
    //   price_vip: 0,
    //   price_mentor:0,
    //   price_mentor_id: 0,

    if (this.voucher.price_vsnap / this.voucher.price_now >= 0.1) {
      this.checkguild();
    } else {
      this.checklast();
    }

  }

  // fpx_billplz() {
  //   let temp = {
  //     name: this.name,
  //     address: this.address,
  //     postcode: this.postcode,
  //     city: this.city,
  //     contact: this.contact,
  //     email: this.email,
  //   }


  //   localforage.setItem('vsnap_userinfo', temp);

  //   let keyer = firebase.database().ref('orders_pending').push({
  //     variations: (this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), []),
  //     address: this.voucher.address || false,
  //     date: firebase.database.ServerValue.TIMESTAMP,
  //     by: this.voucher.by || "",
  //     description: this.voucher.description || "",
  //     name: this.voucher.name || "",
  //     photo: this.voucher.photo || [],
  //     price_comm: this.proper2((this.voucher.price_comm + this.countvar() * (this.voucher.price_comm / this.voucher.price_now))) || 0,
  //     price_vsnap: this.proper2(((this.voucher.price_vsnap || 0) + this.countvar() * ((this.voucher.price_vsnap || 0) / this.voucher.price_now))) || 0,
  //     price_now: this.proper2(((this.voucher.price_now + this.countvar())) || 0),
  //     price_ori: this.proper2(((this.voucher.price_ori || 0) + this.countvar()) || 0),
  //     qty: this.qty || 1,
  //     seller_email: this.influencer.email || "",
  //     seller_id: this.user || "",
  //     seller_name: this.influencer.name || "",
  //     seller_phone: this.influencer.contact || "",
  //     thumbnail: this.voucher.thumbnail || "",
  //     tnc: this.voucher.tnc || "",
  //     type: 'vouchers',
  //     type_id: this.id || "",
  //     buyer_name: this.name || "",
  //     buyer_email: this.email || "",
  //     buyer_contact: this.contact || "",
  //     buyer_address: (this.address + ', ' + this.postcode + ', ' + this.city) || "",
  //     overwrite: this.voucher.overwrite || false,
  //     remark: this.remark || '',
  //   }).key;

  //   let body = {
  //     // amount: this.proper2(((this.voucher.price_now + this.countvar())) || 0) * this.qty * 100,
  //     amount: 100,
  //     description: 'Purchase ' + this.voucher.name + ' x' + (this.qty || 1),
  //     email: this.email,
  //     name: this.name,
  //     order: keyer,
  //   }

  //   if (this.email && this.name) {
  //     this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/billplz2', body).subscribe(a => {
  //       if (Object.values(a).length) {
  //         const browser = this.iab.create(a['url'], '_self');
  //         // console.log(a);
  //       } else {
  //         swal({
  //           icon: 'error',
  //           title: 'Error',
  //           text: 'Something is wrong, please try again!',
  //           closeOnEsc: false,
  //           closeOnClickOutside: false,
  //           buttons: [false],
  //           timer: 1500
  //         });
  //       }

  //     }, e => {
  //       // console.log(e);
  //     })
  //   } else {
  //     swal({
  //       icon: 'error',
  //       title: 'Error',
  //       text: 'Please fill up all information! :)',
  //       closeOnEsc: false,
  //       closeOnClickOutside: false,
  //       buttons: [false],
  //       timer: 1500
  //     });
  //   }
  // }

  // fpx_old() {
  //   let temp = {
  //     name: this.name,
  //     address: this.address + ', ' + this.postcode + ', ' + this.city,
  //     contact: this.contact,
  //     email: this.email,
  //   }


  //   localforage.setItem('vsnap_userinfo', temp);

  //   let key = firebase.database().ref('orders_pending').push({
  //     variations: (this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), []),
  //     address: this.voucher.address || false,
  //     date: firebase.database.ServerValue.TIMESTAMP,
  //     by: this.voucher.by || null,
  //     description: this.voucher.description || null,
  //     name: this.voucher.name || null,
  //     photo: this.voucher.photo || [],
  //     price_comm: this.proper2((this.voucher.price_comm + this.countvar() * (this.voucher.price_comm / this.voucher.price_now))) || 0,
  //     price_vsnap: this.proper2(((this.voucher.price_vsnap || 0) + this.countvar() * ((this.voucher.price_vsnap || 0) / this.voucher.price_now))) || 0,
  //     price_now: this.proper2(((this.voucher.price_now + this.countvar())) || 0),
  //     price_ori: this.proper2(((this.voucher.price_ori || 0) + this.countvar()) || 0),
  //     qty: this.qty || null,
  //     seller_email: this.influencer.email || null,
  //     seller_id: this.user || null,
  //     seller_name: this.influencer.name || null,
  //     seller_phone: this.influencer.contact || null,
  //     thumbnail: this.voucher.thumbnail || null,
  //     tnc: this.voucher.tnc || null,
  //     type: 'vouchers',
  //     type_id: this.id || null,
  //     buyer_name: this.name || null,
  //     buyer_email: this.email || null,
  //     buyer_contact: this.contact || null,
  //     buyer_address: (this.address + ', ' + this.postcode + ', ' + this.city) || null,
  //     overwrite: this.voucher.overwrite || false,
  //     remark: this.remark || '',
  //   }).key;

  //   let body = {
  //     variations: this.lengthof(this.voucher.variations) ? JSON.stringify((this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), [])) : [],
  //     vendor: this.vendor.id,
  //     item: this.id,
  //     user: this.user,
  //     // amount: this.proper2(((this.voucher.price_now + this.countvar())) || 0) * this.qty * 100,
  //     amount: 100,
  //     qty: this.qty || 1,
  //     description: 'Purchase ' + this.voucher.name + ' x' + this.qty || 1,
  //     email: this.email,
  //     name: this.name,
  //     order: key,
  //     address: (this.address + ', ' + this.postcode + ', ' + this.city) || '',
  //     buyername: this.name || '',
  //     buyeremail: this.email || '',
  //     contact: this.contact || '',
  //     addresser: this.voucher.address || false,
  //     vendorfcm: this.vendor.fcm || '',
  //     remark: this.remark || '',
  //   }

  //   if (this.email && this.name) {
  //     this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/billplz', body).subscribe(a => {
  //       if (Object.values(a).length) {
  //         const browser = this.iab.create(a['url'], '_self');
  //         // console.log(a);
  //       } else {
  //         swal({
  //           icon: 'error',
  //           title: 'Error',
  //           text: 'Please check your email ! :(',
  //           closeOnEsc: false,
  //           closeOnClickOutside: false,
  //           buttons: [false],
  //           timer: 1500
  //         });
  //       }

  //     }, e => {
  //       // console.log(e);
  //     })
  //   } else {
  //     swal({
  //       icon: 'error',
  //       title: 'Error',
  //       text: 'Please fill up all information! :)',
  //       closeOnEsc: false,
  //       closeOnClickOutside: false,
  //       buttons: [false],
  //       timer: 1500
  //     });
  //   }
  // }

  free() {
    // let temp = (this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), [])
    // console.log(JSON.parse(temp))

    if (this.email && this.name) {

      let keyer = firebase.database().ref('pushKey').push(firebase.database.ServerValue.TIMESTAMP).key;

      this.http.post('https://api.vsnap.my/insertafforders', {
        address: this.voucher.address || false,
        aftersale: this.voucher.aftersale || "",
        buyer_address: ((this.address || "") + ' ' + (this.postcode || "") + ' ' + (this.city) || ""),
        buyer_contact: this.contact || "",
        buyer_name: this.name || "",
        buyer_email: this.email || "",
        by: this.voucher.by || "",
        category: this.voucher.category || "",
        checklist: JSON.stringify(this.voucher.list || []),
        date: new Date().getTime(),
        description: this.voucher.description || "",
        following: this.voucher.following || false,
        hidden_remark: this.voucher.hidden_remark || "",
        id: keyer,
        link: JSON.stringify(this.voucher.link || []),
        location: JSON.stringify(this.voucher.location || []),
        min_rating: this.voucher.min_rating || 0,
        min_vip: this.voucher.min_vip || 0,
        name: this.voucher.name || "",
        online: this.voucher.online || false,
        overwrite: this.voucher.overwrite || false,
        photo: JSON.stringify(this.voucher.photo || []),
        price_comm: this.price_comm,
        price_vsnap: this.price_vsnap,
        price_now: this.price_now,
        price_ori: this.price_ori,
        price_guild: this.voucher.price_guild || 0,
        price_guild_id: this.voucher.price_guild_id || "",
        price_guild_logs: this.voucher.price_guild_logs || "",
        price_guild_remark: this.voucher.price_guild_remark || "",
        price_vip: this.voucher.price_vip || 0,
        price_vip_remark: this.voucher.price_vip_remark || "",
        price_vip_logs: this.voucher.price_vip_logs || "",
        price_mentor: this.voucher.price_mentor || 0,
        price_mentor_id: this.voucher.price_mentor_id || "",
        price_mentor_remark: this.voucher.price_mentor_remark || "",
        price_mentor_logs: this.voucher.price_mentor_logs || "",
        qty: this.qty || 1,
        thumbnail: this.voucher.thumbnail || "",
        tnc: this.voucher.tnc || "",
        token: this.voucher.token || 0,
        type: 'vouchers',
        type_id: this.id || "",
        userid: this.user || "",
        value_price: this.voucher.value_price || 0,
        value_type: this.voucher.value_type || false,
        variations: JSON.stringify((this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), [])),
        seller_name: this.influencer.name || "",
        seller_email: this.influencer.email || "",
        seller_id: this.user || "",
        seller_phone: this.influencer.contact || "",
        survey: JSON.stringify(this.voucher.survey || []),
        verified: this.voucher.verified || 0,
        remark: this.voucher.remark || "",
        tag: this.voucher.tag || "",
      }).subscribe(a => {
        this.nav.navigateForward('thanks?status=SUCCESS&orderId=' + keyer);
      }, e => {

      })

      // let ids = firebase.database().ref('orders').push({
      //   variations: temp,
      //   address: this.voucher.address || false,
      //   date: firebase.database.ServerValue.TIMESTAMP,
      //   by: this.voucher.by || "",
      //   description: this.voucher.description || "",
      //   tag: this.voucher.tag || "",
      //   name: this.voucher.name || "",
      //   photo: this.voucher.photo || [],
      //   price_comm: this.proper2((this.voucher.price_comm + this.countvar() * (this.voucher.price_comm / this.voucher.price_now))) || 0,
      //   price_vsnap: this.proper2(((this.voucher.price_vsnap || 0) + this.countvar() * ((this.voucher.price_vsnap || 0) / this.voucher.price_now))) || 0,
      //   price_now: this.proper2(((this.voucher.price_now + this.countvar())) || 0),
      //   price_ori: this.proper2(((this.voucher.price_ori || 0) + this.countvar()) || 0),
      //   qty: this.qty || "",
      //   seller_email: this.influencer.email || "",
      //   seller_id: this.user || "",
      //   seller_name: this.influencer.name || "",
      //   seller_phone: this.influencer.contact || "",
      //   thumbnail: this.voucher.thumbnail || "",
      //   tnc: this.voucher.tnc || "",
      //   type: 'vouchers',
      //   type_id: this.id || "",
      //   buyer_name: this.name || "",
      //   buyer_email: this.email || "",
      //   buyer_contact: this.contact || "",
      //   buyer_address: (this.address + ', ' + this.postcode + ', ' + this.city) || "",
      //   overwrite: this.voucher.overwrite || false,
      //   remark: this.remark || '',
      // }).key;

    } else {
      swal({
        icon: 'error',
        title: 'Error',
        text: '请填写所有资料\nPlease fill up all information!',
        closeOnEsc: false,
        closeOnClickOutside: false,
        buttons: [false],
        timer: 1500
      });
    }
  }

  lengthof_obj(x) {
    return x ? Object.values(x).length : 0;
  }

  enterlink(x) {
    const browser = this.iab.create(this.link[x], '_tab');
  }

}
