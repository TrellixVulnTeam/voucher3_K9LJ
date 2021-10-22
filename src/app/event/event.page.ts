import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { Meta, Title } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  constructor(public platform: Platform, public activatedRoute: ActivatedRoute, public nav: NavController, private title: Title, private iab: InAppBrowser,
    private http: HttpClient,
    private meta: Meta,
  ) { }

  join(){
    window.open('https://register.vsnap.my/influencer');
  }
  
  widther(x) {
    // console.log(this.platform.width() >= x)
    this.puller = (this.platform.width() >= 900 ? 450 : (this.platform.width() < 600 ? 300 : this.platform.width() / 2));
    // console.log(this.puller)
    return this.platform.width() >= x;
  }
  puller = this.platform.width() / 2;
  enter = false;

  item = "";
  user = "";
  voucher = {} as any;
  influencer = {} as any;
  event = "";
  qty = 1;
  selected = 0;


  var_select = [0, 1];

  // this.voucher['variations'][loop0]['selections'][var_select[loop0]]

  // {price:x , name: x}

  disabled = [true, true, true]

  event_info = {} as any;

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
    return Math.round(((Math.abs(x) || 0) + Number.EPSILON) * 100) / 100
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
    return (typeof x == "string" ? true : false)
  }

  go(x) {
    this.nav.navigateForward('home/' + x + '/' + this.user);
  }

  links = [] as any;
  // load = true;
  complete = false;
  items = {};

  ngOnInit(){
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

        this.title.setTitle(x['data'].name + '\'s Vsnap Event Store')
        this.meta.updateTag({ name: 'description', content: (x['data'].description || "Welcome to "+x['data'].name+"'s Vsnap Event Store") })
        this.meta.updateTag({ itemprop: 'name', content: x['data'].name + '\'s Vsnap Event Store'})
        this.meta.updateTag({ itemprop: 'description', content: (x['data'].description || "Welcome to "+x['data'].name+"'s Vsnap Event Store") })
        this.meta.updateTag({ itemprop: 'image', content: (x['data'].thumbnail || "https://i.imgur.com/cW5MqH2.png") })
        this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/event/' + this.event + '/' + this.user) })
        this.meta.updateTag({ property: 'og:type', content: 'website' })
        this.meta.updateTag({ property: 'og:description', content: (x['data'].description || "Welcome to "+x['data'].name+"'s Vsnap Event Store") })
        this.meta.updateTag({ property: 'og:title', content: x['data'].name + '\'s Vsnap Event Store' })
        this.meta.updateTag({ property: 'og:image', content: (x['data'].thumbnail || "https://i.imgur.com/cW5MqH2.png") })
        this.meta.updateTag({ property: 'og:image:secure_url', content: (x['data'].thumbnail || "https://i.imgur.com/cW5MqH2.png") })
        this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
        this.meta.updateTag({ property: 'og:image:width', content: '500' })
        this.meta.updateTag({ property: 'og:image:height', content: '500' })  

      } else {
        // this.tomain()
      }

    }, e => {
      // this.tomain()
    })
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

        this.title.setTitle(this.event_info.name + '\'s Vsnap Event Store')
        this.meta.updateTag({ name: 'description', content: (this.event_info.description || "Welcome to "+this.event_info.name+"'s Vsnap Event Store") })
        this.meta.updateTag({ itemprop: 'name', content: this.event_info.name + '\'s Vsnap Event Store'})
        this.meta.updateTag({ itemprop: 'description', content: (this.event_info.description || "Welcome to "+this.event_info.name+"'s Vsnap Event Store") })
        this.meta.updateTag({ itemprop: 'image', content: (this.event_info.thumbnail || "https://i.imgur.com/cW5MqH2.png") })
        this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/event/' + this.event + '/' + this.user) })
        this.meta.updateTag({ property: 'og:type', content: 'website' })
        this.meta.updateTag({ property: 'og:description', content: (this.event_info.description || "Welcome to "+this.event_info.name+"'s Vsnap Event Store") })
        this.meta.updateTag({ property: 'og:title', content: this.event_info.name + '\'s Vsnap Event Store' })
        this.meta.updateTag({ property: 'og:image', content: (this.event_info.thumbnail || "https://i.imgur.com/cW5MqH2.png") })
        this.meta.updateTag({ property: 'og:image:secure_url', content: (this.event_info.thumbnail || "https://i.imgur.com/cW5MqH2.png") })
        this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
        this.meta.updateTag({ property: 'og:image:width', content: '500' })
        this.meta.updateTag({ property: 'og:image:height', content: '500' })  

        for (const key in (this.event_info['vouchers'] || {})) {

          let element = this.event_info['vouchers'][key];


          this.http.post('https://api2.vsnap.my/getvouchers', { id: element }).subscribe(z => {

            if (z['data'].id) {
              this.voucher[element] = z['data'] || {};
            }

          }, e => {
            
          })

        }

      } else {
        this.tomain()
      }

    }, e => {
      this.tomain()
    })

    this.influencer.id = this.user;
    this.http.post('https://api2.vsnap.my/getusers', { id: this.user }).subscribe(a => {

      if (a['data'].id) {
        this.influencer = a['data'] || {};
      } else {
        this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
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
      this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
        if (a['data'].id) {
          this.influencer = a['data'] || {};
        } else {
          this.tomain()
        }
      }, e => {
        this.tomain()
      })
    })

    firebase.database().ref('link').once('value', data => {
      this.links = data.val();
    })

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
    this.nav.navigateForward('main?user=' + this.user)
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
}
