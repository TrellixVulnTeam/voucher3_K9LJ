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
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private meta: Meta, public platform: Platform,
    public activatedRoute: ActivatedRoute, public nav: NavController, private title: Title, private iab: InAppBrowser,
    private http: HttpClient,
    // private meta: Meta, 
  ) { }

  join() {
    window.open('https://register.vsnap.my/influencer?referrer_id=' + this.user);
  }

  outside(x) {
    this.iab.create(this.links[x], '_system');
    // window.open(this.links[x]);
  }

  click_id;

  ngOnInit() {
    console.log('Do nothing')

    this.title.setTitle('Vsnap Official Store')
    this.meta.updateTag({ name: 'description', content: 'Welcome to Vsnap Official Store' })
    this.meta.updateTag({ itemprop: 'name', content: 'Vsnap Official Store' })
    this.meta.updateTag({ itemprop: 'description', content: 'Welcome to Vsnap Official Store' })
    this.meta.updateTag({ itemprop: 'image', content: "https://i.imgur.com/DgFT4br.png" })
    this.meta.updateTag({ property: 'og:url', content: 'https://deal.vsnap.my/main?user=' + this.user })
    this.meta.updateTag({ property: 'og:type', content: 'website' })
    this.meta.updateTag({ property: 'og:description', content: 'Welcome to Vsnap Official Store' })
    this.meta.updateTag({ property: 'og:title', content: 'Vsnap Official Store' })
    this.meta.updateTag({ property: 'og:image', content: "https://i.imgur.com/DgFT4br.png" })
    this.meta.updateTag({ property: 'og:image:secure_url', content: "https://i.imgur.com/DgFT4br.png" })
    this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
    this.meta.updateTag({ property: 'og:image:width', content: '500' })
    this.meta.updateTag({ property: 'og:image:height', content: '500' })
  }

  ionViewWillEnter() {


    this.activatedRoute.queryParams.subscribe(a => {
      this.click_id = a['click_id'] || '';

      this.user = a['user'] || "yRSIH0mIALf4PsxkwSUFkKnjdMI3";

      this.http.get('https://api2.vsnap.my/getallvouchers').subscribe((s) => {
        this.voucher = (s['data'] || []).filter(x => x.status == true);
        // this.title.setTitle('Vsnap Official Store')
        // this.meta.updateTag({ property: 'og:url', content: 'https://deal.vsnap.my/main?user=' + this.user });
        // this.meta.updateTag({ property: 'og:title', content: 'Vsnap Official Store'});
        // this.meta.updateTag({ property: 'og:image', content: "https://i.imgur.com/DgFT4br.png" });
        // this.meta.updateTag({ property: 'og:description', content: 'Welcome to Vsnap Official Store'  });


        this.title.setTitle('Vsnap Official Store')
        this.meta.updateTag({ name: 'description', content: 'Welcome to Vsnap Official Store' })
        this.meta.updateTag({ itemprop: 'name', content: 'Vsnap Official Store' })
        this.meta.updateTag({ itemprop: 'description', content: 'Welcome to Vsnap Official Store' })
        this.meta.updateTag({ itemprop: 'image', content: "https://i.imgur.com/DgFT4br.png" })
        this.meta.updateTag({ property: 'og:url', content: 'https://deal.vsnap.my/main?user=' + this.user })
        this.meta.updateTag({ property: 'og:type', content: 'website' })
        this.meta.updateTag({ property: 'og:description', content: 'Welcome to Vsnap Official Store' })
        this.meta.updateTag({ property: 'og:title', content: 'Vsnap Official Store' })
        this.meta.updateTag({ property: 'og:image', content: "https://i.imgur.com/DgFT4br.png" })
        this.meta.updateTag({ property: 'og:image:secure_url', content: "https://i.imgur.com/DgFT4br.png" })
        this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
        this.meta.updateTag({ property: 'og:image:width', content: '500' })
        this.meta.updateTag({ property: 'og:image:height', content: '500' })
        console.log(this.voucher)
      }, e => {
        console.log(e)
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
              console.log("something is wrong")
            }
          }, e => {
            console.log("something is wrong")
          })
        }
      }, e => {
        this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
          if (a['data'].id) {
            this.influencer = a['data'] || {};
          } else {
            console.log("something is wrong")
          }
        }, e => {
          console.log("something is wrong")
        })
      })

      firebase.database().ref('link').once('value', data => {
        this.links = data.val();
      })

      this.http.get('https://api2.vsnap.my/get?tablename=category_voucher').subscribe(a => {
        // console.log(a['data'])
        this.category = a['data'].map(a => a.name) || [];
      })

    })

    // this.activatedRoute.queryParams.subscribe(a => {

    //   this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/getmeta2', { type: "users", id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(data => {

    //     if (Object.keys(data['success']).length) {


    //       this.title.setTitle('Vsnap Official Store')

    //       this.meta.updateTag({ itemprop: 'name', content: 'Vsnap Official Store' })
    //       this.meta.updateTag({ itemprop: 'description', content: 'Welcome to Vsnap Official Store' })
    //       this.meta.updateTag({ itemprop: 'image', content: "https://i.imgur.com/DgFT4br.png" })
    //       this.meta.updateTag({ property: 'og:url', content: 'https://deal.vsnap.my/main?user=' + a['user'] })
    //       this.meta.updateTag({ property: 'og:type', content: 'website' })
    //       this.meta.updateTag({ property: 'og:description', content: 'Welcome to Vsnap Official Store' })
    //       this.meta.updateTag({ property: 'og:title', content: 'Vsnap Official Store' })
    //       this.meta.updateTag({ property: 'og:image', content: "https://i.imgur.com/DgFT4br.png" })
    //       this.meta.updateTag({ property: 'og:image:secure_url', content: "https://i.imgur.com/DgFT4br.png" })
    //       this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
    //       this.meta.updateTag({ property: 'og:image:width', content: '500' })
    //       this.meta.updateTag({ property: 'og:image:height', content: '500' })


    //     } else {

    //       this.title.setTitle('Vsnap Official Store')

    //       this.meta.updateTag({ itemprop: 'name', content: 'Vsnap Official Store' })
    //       this.meta.updateTag({ itemprop: 'description', content: 'Welcome to Vsnap Official Store' })
    //       this.meta.updateTag({ itemprop: 'image', content: "https://i.imgur.com/DgFT4br.png" })
    //       this.meta.updateTag({ property: 'og:url', content: 'https://deal.vsnap.my/main?user=' + a['user'] })
    //       this.meta.updateTag({ property: 'og:type', content: 'website' })
    //       this.meta.updateTag({ property: 'og:description', content: 'Welcome to Vsnap Official Store' })
    //       this.meta.updateTag({ property: 'og:title', content: 'Vsnap Official Store' })
    //       this.meta.updateTag({ property: 'og:image', content: "https://i.imgur.com/DgFT4br.png" })
    //       this.meta.updateTag({ property: 'og:image:secure_url', content: "https://i.imgur.com/DgFT4br.png" })
    //       this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
    //       this.meta.updateTag({ property: 'og:image:width', content: '500' })
    //       this.meta.updateTag({ property: 'og:image:height', content: '500' })

    //     }

    //   })

    // })


  }

  guild = "";
  user = "";
  voucher = [] as any;
  guildinfo = {};
  influencer = {} as any;
  links = {};

  lengthof(x) {
    return x ? x.length : 0;
  }

  stringornot(x) {
    return (typeof x == "string" ? true : false)
  }

  widther(x) {
    // console.log(this.platform.width() >= x)
    this.puller = (this.platform.width() >= 900 ? 450 : (this.platform.width() < 600 ? 300 : this.platform.width() / 2));
    // console.log(this.puller)
    return this.platform.width() >= x;
  }
  puller = this.platform.width() / 2;
  enter = false;
  rounder(x) {
    return Math.floor(x);
  }
  // http://localhost:8102/guild/-Meec6hYi4TMBw4qaAAl/n2qpB3gxBvf4empWOlmQBynBOUw2
  widtherget() {
    return this.platform.width();
  }

  go(x) {
    this.nav.navigateForward('home/' + x + '/' + this.user + '?click_id=' + this.click_id);
  }

  keyword = "";
  selected = "All";
  store(x) {
    this.nav.navigateForward('store/' + x + '?click_id=' + this.click_id);
  }

  filterer(x) {
    return x ? x.filter(a => ((a['name'] + a['by_name']).toLowerCase()).includes(this.keyword.toLowerCase()) && this.selected == "All" ? true : (a['category'] == this.selected)) : []
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

  category = [];

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

  // ionViewDidEnter() {

  //   this.activatedRoute.queryParams.subscribe(a => {

  //     this.user = a['user'] || "yRSIH0mIALf4PsxkwSUFkKnjdMI3";

  //     this.http.get('https://api2.vsnap.my/getallvouchers').subscribe((s) => {
  //       this.voucher = (s['data'] || []).filter(x => x.status == true);
  //       console.log(this.voucher)
  //     }, e => {
  //       console.log(e)
  //     })

  //     this.influencer.id = this.user;
  //     this.http.post('https://api2.vsnap.my/getusers', { id: this.user }).subscribe(a => {

  //       if (a['data'].id) {
  //         this.influencer = a['data'] || {};
  //       } else {
  //         this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
  //           if (a['data'].id) {
  //             this.influencer = a['data'] || {};
  //           } else {
  //             console.log("something is wrong")
  //           }
  //         }, e => {
  //           console.log("something is wrong")
  //         })
  //       }
  //     }, e => {
  //       this.http.post('https://api2.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
  //         if (a['data'].id) {
  //           this.influencer = a['data'] || {};
  //         } else {
  //           console.log("something is wrong")
  //         }
  //       }, e => {
  //         console.log("something is wrong")
  //       })
  //     })

  //     firebase.database().ref('link').once('value', data => {
  //       this.links = data.val();
  //     })

  //     this.http.get('https://api2.vsnap.my/get?tablename=category_voucher').subscribe(a => {
  //       // console.log(a['data'])
  //       this.category = a['data'].map(a => a.name) || [];
  //     })

  //   })

  // }

}
