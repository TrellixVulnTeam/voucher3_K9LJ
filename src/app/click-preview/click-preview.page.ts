import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonContent, IonSlides, NavController, Platform } from '@ionic/angular';
import firebase from 'firebase';
import * as localforage from 'localforage';

@Component({
  selector: 'app-click-preview',
  templateUrl: './click-preview.page.html',
  styleUrls: ['./click-preview.page.scss'],
})
export class ClickPreviewPage implements OnInit {

  constructor(public platform: Platform, public nav: NavController, private iab: InAppBrowser,
    private actRoute: ActivatedRoute, private http: HttpClient) { }
  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild('slides') slides: IonSlides;

  qr = '';

  slideOpts = {
    initialSlide: 1,
    speed: 200,
    slidesPerView: this.platform.width() / 250,
    centeredSlides: true,
    spaceBetween: 40,
    // loop: true,
    // autoplay: true,
  };

  id;
  user
  timer = 0;
  uniquekey;
  notcount = false;
  data = [] as any;
  products = [] as any;
  nowbrand;
  rating = [] as any;
  links = [] as any;
  activeslide = 0;

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




  to(x) {
    this.nav.navigateForward('store/' + x.userid);
  }

  detail(x) {
    this.nav.navigateForward('home/' + x.id + '/' + this.user);
  }

  logsid = ''
  close = false
  nowphoto
  dataer() {

    firebase.database().ref('link').once('value', data => {
      this.links = data.val();
    })

    this.actRoute.queryParams.subscribe(a => {
      this.id = a['id']
      // this.user = a['user']
      console.log(this.id);
      // console.log(this.user);

      this.qr = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + this.id + ',' + this.user

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
          console.log(this.products)
        })

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

        console.log(e)
      })

    })
  }

  storager() {
    localforage.getItem('unique_key').then((a) => {
      if (a) {
        this.uniquekey = a
        console.log('1.' + a);
        this.dataer();
      } else {
        let keyer = firebase.database().ref('pushKey').push(firebase.database.ServerValue.TIMESTAMP).key
        localforage.setItem('unique_key', keyer);
        this.uniquekey = keyer
        console.log('2.' + a);
        this.dataer();
      }
    }).catch(e => {
      this.notcount = true;
      this.dataer();

    })
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
    this.content.scrollToPoint(0, document.getElementById('buybuy').offsetTop, 300)
  }

  home() {
    // console.log(document.getElementById('buybuy').scrollTop,document.getElementById('buybuy').offsetTop,document.getElementById('buybuy').clientTop)
    this.content.scrollToPoint(0, 0, 300)
  }


  contents = [
  ] as any;

  lengthof(x) {
    return Object.keys(x || {}).length
  }

  rounder(x) {
    return Math.floor(x);
  }

  widtherget() {
    return this.platform.width();
  }


}