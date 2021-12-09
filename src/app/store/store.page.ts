import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import firebase from 'firebase';
import { Meta, Title } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  id;
  user = [] as any;
  vouchers = [] as any;
  vendors = [] as any;
  animer = 0;

  constructor(private platform: Platform, private actRoute: ActivatedRoute, private nav: NavController, private title: Title, private iab: InAppBrowser,
    private http: HttpClient,
    private meta: Meta,
  ) { }

  join() {
    window.open('https://register.vsnap.my/influencer?referrer_id=' + this.user);
  }

  rounder(x) {
    return Math.floor(x);
  }

  checkit(x) {
    return x ? Object.values(x).filter(a => a['thumbnail'] != "" && (((a['name'] + a['by_name']).toLowerCase()).includes(this.keyword.toLowerCase()))) : []
    // return x.filter(a => a.thumbnail != "");
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.page += 1;
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
    }, 500);
  }

  countpage(arr, step) {
    if (arr) {
      return Math.ceil(arr.length / step);
    } else {
      return 1;
    }
  }

  page = 1;

  pager(arr, step, infinite, page) {

    // return new Promise((resolve, reject)=>{


    //   resolve('')
    // })

    if (arr) {

      if (arr.length > step * page) {

        return (infinite == true ? arr.filter((a, index) => index >= 0 && index < step * page) : arr.filter((a, index) => index >= step * (page - 1) && index < step * page));

      } else {
        return (infinite == true ? arr : arr.filter((a, index) => ((arr.length % step) == 0 ? index >= arr.length - step : index >= arr.length - (arr.length % step))));
      }

    }

  }

  links = [] as any;

  donatecsr2021() {
    this.iab.create("https://pg.revenuemonster.my/v1/invoice-group/input?invoiceGroupId=1626521195381410810", '_system');
  }

  outside(x) {
    // window.open(this.links[x]);
    this.iab.create(this.links[x], '_system');
  }

  proper2(x) {
    return Math.round(((Math.abs(x) || 0) + Number.EPSILON) * 100) / 100
  }

  load = true;
  complete = false;
  items = {};


  ngOnInit() {
    console.log('Do nothing')
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.http.post('https://api2.vsnap.my/getusers', { id: this.id }).subscribe(a => {

      if (a['data'].id) {

        // this.title.setTitle(a['data'].name + '\'s Vsnap Influencer Store');
        // this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/store/' + this.id) });
        // this.meta.updateTag({ property: 'og:title', content: a['data'].name + '\'s Vsnap Influencer Store' });
        // this.meta.updateTag({ property: 'og:image', content: (a['data'].photo ? (a['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
        // this.meta.updateTag({ property: 'og:description', content: ('Welcome to ' + a['data'].name + '\'s Vsnap Influencer Store') });

        this.title.setTitle(a['data'].name + '\'s Vsnap Influencer Store');
        this.meta.updateTag({ name: 'description', content: ('Welcome to ' + a['data'].name + '\'s Vsnap Influencer Store') });
        this.meta.updateTag({ itemprop: 'name', content: a['data'].name + '\'s Vsnap Influencer Store' });
        this.meta.updateTag({ itemprop: 'description', content: ('Welcome to ' + a['data'].name + '\'s Vsnap Influencer Store') });
        this.meta.updateTag({ itemprop: 'image', content: (a['data'].photo ? (a['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
        this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/store/' + this.id) });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:description', content: ('Welcome to ' + a['data'].name + '\'s Vsnap Influencer Store') });
        this.meta.updateTag({ property: 'og:title', content: a['data'].name + '\'s Vsnap Influencer Store' });
        this.meta.updateTag({ property: 'og:image', content: (a['data'].photo ? (a['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
        this.meta.updateTag({ property: 'og:image:secure_url', content: (a['data'].photo ? (a['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
        this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' });
        this.meta.updateTag({ property: 'og:image:width', content: '500' });
        this.meta.updateTag({ property: 'og:image:height', content: '500' });

      } else {
        this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(z => {
          if (z['data'].id) {

            this.title.setTitle(z['data'].name + '\'s Vsnap Influencer Store');
            this.meta.updateTag({ name: 'description', content: ('Welcome to ' + z['data'].name + '\'s Vsnap Influencer Store') });
            this.meta.updateTag({ itemprop: 'name', content: z['data'].name + '\'s Vsnap Influencer Store' });
            this.meta.updateTag({ itemprop: 'description', content: ('Welcome to ' + z['data'].name + '\'s Vsnap Influencer Store') });
            this.meta.updateTag({ itemprop: 'image', content: (z['data'].photo ? (z['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
            this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/store/' + this.id) });
            this.meta.updateTag({ property: 'og:type', content: 'website' });
            this.meta.updateTag({ property: 'og:description', content: ('Welcome to ' + z['data'].name + '\'s Vsnap Influencer Store') });
            this.meta.updateTag({ property: 'og:title', content: z['data'].name + '\'s Vsnap Influencer Store' });
            this.meta.updateTag({ property: 'og:image', content: (z['data'].photo ? (z['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
            this.meta.updateTag({ property: 'og:image:secure_url', content: (z['data'].photo ? (z['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
            this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' });
            this.meta.updateTag({ property: 'og:image:width', content: '500' });
            this.meta.updateTag({ property: 'og:image:height', content: '500' });

            
          } else {
          }
        }, e => {
        })
      }
    }, e => {
      this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
        if (a['data'].id) {
          this.title.setTitle(a['data'].name + '\'s Vsnap Influencer Store');
          this.meta.updateTag({ name: 'description', content: ('Welcome to ' + a['data'].name + '\'s Vsnap Influencer Store') });
          this.meta.updateTag({ itemprop: 'name', content: a['data'].name + '\'s Vsnap Influencer Store' });
          this.meta.updateTag({ itemprop: 'description', content: ('Welcome to ' + a['data'].name + '\'s Vsnap Influencer Store') });
          this.meta.updateTag({ itemprop: 'image', content: (a['data'].photo ? (a['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
          this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/store/' + this.id) });
          this.meta.updateTag({ property: 'og:type', content: 'website' });
          this.meta.updateTag({ property: 'og:description', content: ('Welcome to ' + a['data'].name + '\'s Vsnap Influencer Store') });
          this.meta.updateTag({ property: 'og:title', content: a['data'].name + '\'s Vsnap Influencer Store' });
          this.meta.updateTag({ property: 'og:image', content: (a['data'].photo ? (a['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
          this.meta.updateTag({ property: 'og:image:secure_url', content: (a['data'].photo ? (a['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
          this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' });
          this.meta.updateTag({ property: 'og:image:width', content: '500' });
          this.meta.updateTag({ property: 'og:image:height', content: '500' });
          
        } else {
        }
      }, e => {
      })
    })
  }

  ionViewWillEnter() {

    // private http: HttpClient,
    // private meta: Meta, 
    // load=true;
    // complete=false;
    // items={};

    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.user.id = this.user;
    this.http.post('https://api2.vsnap.my/getusers', { id: this.id }).subscribe(a => {

      if (a['data'].id) {
        this.user = a['data'] || {};

        // this.title.setTitle(a['data'].name + '\'s Vsnap Influencer Store');
        // this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/store/' + this.id) });
        // this.meta.updateTag({ property: 'og:title', content: a['data'].name + '\'s Vsnap Influencer Store' });
        // this.meta.updateTag({ property: 'og:image', content: (a['data'].photo ? (a['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
        // this.meta.updateTag({ property: 'og:description', content: ('Welcome to ' + a['data'].name + '\'s Vsnap Influencer Store') });

        this.title.setTitle(a['data'].name + '\'s Vsnap Influencer Store');
        this.meta.updateTag({ name: 'description', content: ('Welcome to ' + a['data'].name + '\'s Vsnap Influencer Store') });
        this.meta.updateTag({ itemprop: 'name', content: a['data'].name + '\'s Vsnap Influencer Store' });
        this.meta.updateTag({ itemprop: 'description', content: ('Welcome to ' + a['data'].name + '\'s Vsnap Influencer Store') });
        this.meta.updateTag({ itemprop: 'image', content: (a['data'].photo ? (a['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
        this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/store/' + this.id) });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:description', content: ('Welcome to ' + a['data'].name + '\'s Vsnap Influencer Store') });
        this.meta.updateTag({ property: 'og:title', content: a['data'].name + '\'s Vsnap Influencer Store' });
        this.meta.updateTag({ property: 'og:image', content: (a['data'].photo ? (a['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
        this.meta.updateTag({ property: 'og:image:secure_url', content: (a['data'].photo ? (a['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
        this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' });
        this.meta.updateTag({ property: 'og:image:width', content: '500' });
        this.meta.updateTag({ property: 'og:image:height', content: '500' });

        (this.user.store || []).forEach((element, index) => {
          this.http.post('https://api2.vsnap.my/getvouchers', { id: element }).subscribe(z => {

            if (z['data'].status == true) {
              this.vouchers[index] = z['data'] || {};
              console.log(this.vouchers)
            }

          }, e => {

          })
        });

      } else {
        this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(z => {
          if (z['data'].id) {
            this.user = z['data'] || {};
            this.title.setTitle(z['data'].name + '\'s Vsnap Influencer Store');
            this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/store/' + this.id) });
            this.meta.updateTag({ property: 'og:title', content: z['data'].name + '\'s Vsnap Influencer Store' });
            this.meta.updateTag({ property: 'og:image', content: (z['data'].photo ? (z['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
            this.meta.updateTag({ property: 'og:description', content: ('Welcome to ' + z['data'].name + '\'s Vsnap Influencer Store') });
            (this.user.store || []).forEach((element, index) => {
              this.http.post('https://api2.vsnap.my/getvouchers', { id: element }).subscribe(z => {

                if (z['data'].status == true) {
                  this.vouchers[index] = z['data'] || {};
                  console.log(this.vouchers)
                }

              }, e => {

              })
            });
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
          this.user = a['data'] || {};
          this.title.setTitle(a['data'].name + '\'s Vsnap Influencer Store');
          this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/store/' + this.id) });
          this.meta.updateTag({ property: 'og:title', content: a['data'].name + '\'s Vsnap Influencer Store' });
          this.meta.updateTag({ property: 'og:image', content: (a['data'].photo ? (a['data'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") });
          this.meta.updateTag({ property: 'og:description', content: ('Welcome to ' + a['data'].name + '\'s Vsnap Influencer Store') });
          (this.user.store || []).forEach(element => {
            this.http.post('https://api2.vsnap.my/getvouchers', { id: element }).subscribe(z => {

              if (z['data'].status == true) {
                this.vouchers[element] = z['data'] || {};
                console.log(this.vouchers)
              }

            }, e => {

            })
          });
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

    // this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/getmeta2', { type: "users/", id: this.id }).subscribe(data => {

    //   if (Object.keys(data['success']).length) {
    //     this.load = false;
    //     this.items = data['success'];

    //     this.title.setTitle(data['success'].name + '\'s Vsnap Influencer Store')
    //     this.meta.updateTag({ itemprop: 'name', content: data['success'].name + '\'s Vsnap Influencer Store' })
    //     this.meta.updateTag({ itemprop: 'description', content: ('Welcome to ' + data['success'].name + '\'s Vsnap Influencer Store') })
    //     this.meta.updateTag({ itemprop: 'image', content: (data['success'].photo ? (data['success'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") })
    //     this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/store/' + this.id) })
    //     this.meta.updateTag({ property: 'og:type', content: 'website' })
    //     this.meta.updateTag({ property: 'og:description', content: ('Welcome to ' + data['success'].name + '\'s Vsnap Influencer Store') })
    //     this.meta.updateTag({ property: 'og:title', content: data['success'].name + '\'s Vsnap Influencer Store' })
    //     this.meta.updateTag({ property: 'og:image', content: (data['success'].photo ? (data['success'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") })
    //     this.meta.updateTag({ property: 'og:image:secure_url', content: (data['success'].photo ? (data['success'].photo[0] || "https://i.imgur.com/cW5MqH2.png") : "https://i.imgur.com/cW5MqH2.png") })
    //     this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
    //     this.meta.updateTag({ property: 'og:image:width', content: '500' })
    //     this.meta.updateTag({ property: 'og:image:height', content: '500' })

    //     this.complete = true;
    //   } else {
    //     this.load = false;
    //   }

    // })
  }

  stringornot(x) {
    return (typeof x == "string" ? true : false)
  }

  keyword = "";

  tomain() {
    this.nav.navigateForward('main?user=' + this.id)
  }

  // ionViewWillEnter() {
  //   this.id = this.actRoute.snapshot.paramMap.get('id');

  //   this.user.id = this.user;
  //   this.http.post('https://api2.vsnap.my/getusers', { id: this.id }).subscribe(a => {

  //     if (a['data'].id) {
  //       this.user = a['data'] || {};
  //       this.title.setTitle(this.user.name + '\'s vsnap store');
  //       (this.user.store || []).forEach((element,index) => {
  //         this.http.post('https://api2.vsnap.my/getvouchers', { id: element }).subscribe(z => {

  //           if (z['data'].status == true) {
  //             this.vouchers[index] = z['data'] || {};
  //             console.log(this.vouchers)
  //           }

  //         }, e => {

  //         })
  //       });

  //     } else {
  //       this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
  //         if (a['data'].id) {
  //           this.user = a['data'] || {};
  //           this.title.setTitle(this.user.name + '\'s vsnap store');
  //           (this.user.store || []).forEach((element,index) => {
  //             this.http.post('https://api2.vsnap.my/getvouchers', { id: element }).subscribe(z => {

  //               if (z['data'].status == true) {
  //                 this.vouchers[index] = z['data'] || {};
  //                 console.log(this.vouchers)
  //               }

  //             }, e => {

  //             })
  //           });
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
  //         this.user = a['data'] || {};
  //         this.title.setTitle(this.user.name + '\'s vsnap store');
  //         (this.user.store || []).forEach(element => {
  //           this.http.post('https://api2.vsnap.my/getvouchers', { id: element }).subscribe(z => {

  //             if (z['data'].status == true) {
  //               this.vouchers[element] = z['data'] || {};
  //               console.log(this.vouchers)
  //             }

  //           }, e => {

  //           })
  //         });
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
  // }

  lengthof(x) {
    return x ? Object.keys(x).length : 0;
  }

  lefter() {
    return this.platform.width() > 800 ? (this.platform.width() - 800) / 2 + 'px' : this.platform.width();
  }

  widtherget() {
    return this.platform.width();
  }

  gettimes() {
    return this.platform.width() > 600 ? 'calc( 100vw / 3 )' : 'calc( 100vw / 1.5 )';
  }

  puller = this.platform.width() / 2;

  widther(x) {
    // console.log(this.platform.width() >= x)
    this.puller = (this.platform.width() >= 900 ? 450 : (this.platform.width() < 600 ? 300 : this.platform.width() / 2));
    // console.log(this.puller)
    return this.platform.width() >= x;
  }

  go(x) {
    this.nav.navigateForward('home/' + x + '/' + this.id);
  }
}
