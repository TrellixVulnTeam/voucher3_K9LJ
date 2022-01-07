import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { IonContent, IonSlides } from '@ionic/angular/directives/proxies';
import swal from 'sweetalert'
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase';
import * as localforage from 'localforage';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;
  @ViewChild('slides2') slides2: IonSlides;
  @ViewChild('content', { static: false }) content: IonContent
  constructor(private actRoute: ActivatedRoute, private http: HttpClient, private platform: Platform, private nav: NavController) { }

  tab = 1

  campaign: any = {
    delivery_type: 'Delivery',
    age: { upper: 40, lower: 16 },
    marital: ["Any"],
    race: ["Any"],
    gender: "Any",
    influencers: [],
    photo: [],
    check_list: [],
    capacity: 0, pool: 0,
    halal: false,
  }

  keyword1 = ''
  keyword2 = ''
  ready = false
  date = { start: '', end: '' }

  ngOnInit() {



  }

  uniquekey;

  notcount = false;

  data = {}

  rating = []

  timer = 0

  dataer() {

    firebase.database().ref('link').once('value', data => {
      this.links = data.val();
    })

    this.actRoute.queryParams.subscribe(a => {

      this.id = a['id']
      this.user = a['user'] || 'yRSIH0mIALf4PsxkwSUFkKnjdMI3'

      this.http.post('https://api2.vsnap.my/getclickvouchers2new', { click_id: this.id }).subscribe(x => {

        if (x['data']) {
          console.log(x)
          this.data = x['data']
          this.contents = x['data']['landing_customize']
          this.ready = true
          this.getVouchers(this.data['by'] || '')

          this.http.post('https://api2.vsnap.my/getclickrating2', { type_id: this.data['type_id'] }).subscribe(a => {
            console.log(a['data']);
            this.rating = a['data'].filter(a => a['feedback_rating'] > 2);
          });
        }

        // if (!this.notcount) {

        //   setInterval(() => {
        //     this.timer += 1;

        //     if (this.timer == 10) {
        //       console.log('first insert')

        //       let temp = {
        //         userid: this.user,
        //         type_id: this.data['type_id'],
        //         click_order_id: this.data['click_order_id'],
        //         unique_id: this.uniquekey,
        //         time: this.timer,
        //       }

        //       console.log(temp)

        //       this.http.post('https://api2.vsnap.my/insertclicklogs2', temp).subscribe(p => {
        //         console.log(p['data']);
        //         this.logsid = p['data'].logs_pool_id

        //         console.log(this.logsid)

        //       })

        //     }

        //     // if (this.timer == 3) {
        //     //   console.log('first insert')

        //     //   let temp = {
        //     //     userid: this.user,
        //     //     type_id: x['data'][0].type_id,
        //     //     click_order_id: x['data'][0].click_order_id,
        //     //     unique_id: this.uniquekey,
        //     //     time: this.timer,
        //     //   }

        //     //   console.log(temp)

        //     //   this.http.post('https://api2.vsnap.my/insertclicklogs', temp).subscribe(p => {
        //     //     console.log(p['data']);
        //     //     this.logsid = p['data'].logs_pool_id

        //     //     console.log(this.logsid)

        //     //   })

        //     // } 

        //     else if (this.timer == 20 || this.timer == 40 || this.timer == 60 || this.timer == 80) {

        //       this.http.post('https://api2.vsnap.my/updateclicklogs2', { time: this.timer, logs_pool_id: this.logsid }).subscribe(p2 => {
        //         console.log(this.timer);
        //         console.log(p2)
        //       });

        //     }

        //     // console.log(123)
        //   }, 1000);



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

  getVouchers(by) {
    this.http.post('https://api2.vsnap.my/datavendorvouchers', { id: by }).subscribe((a) => {
      // this.bento.swalclose()
      this.products = this.lengthof(a['data']) ? a['data'] : []
      console.log(a['data']);

    })
  }

  activeslide = 1;
  activeslide2 = 1;


  call(x) {
    this.slides.getActiveIndex().then(index => {
      // console.log(index);
      this.activeslide = index;

    });
  }

  call2(x) {
    this.slides2.getActiveIndex().then(index => {
      this.activeslide2 = index;
    });
  }

  contents: any = {}

  slideOpts = {
    initialSlide: 1,
    speed: 200,
    slidesPerView: (this.platform.width() >= 900 ? 900 : this.platform.width()) / (this.platform.width() >= 900 ? 450 : this.platform.width() * 0.5),
    centeredSlides: true,
    spaceBetween: (this.platform.width() >= 900 ? 90 : this.platform.width() * 0.1),
  };

  slideOpts2 = {
    initialSlide: 1,
    speed: 200,
    slidesPerView: (this.platform.width() >= 900 ? 900 : this.platform.width()) / (this.platform.width() >= 900 ? 300 : this.platform.width() / 3),
    centeredSlides: true,
    spaceBetween: (this.platform.width() >= 900 ? 45 : this.platform.width() * 0.05),
  };

  products = [
    {
      id: "",
      name: "Ball Pen of Real Good",
      photo: [{ url: "https://i.pinimg.com/originals/b8/3e/c9/b83ec9d8ac7a6f2dfaa93fa4f150e3b6.gif" }],
      price_now: 30,
      price_ori: 50,
    },
    {
      id: "",
      name: "Ball Pen of Real Good",
      photo: [{ url: "https://i.pinimg.com/originals/b8/3e/c9/b83ec9d8ac7a6f2dfaa93fa4f150e3b6.gif" }],
      price_now: 30,
      price_ori: 50,
    },
    {
      id: "",
      name: "Ball Pen of Real Good",
      photo: [{ url: "https://i.pinimg.com/originals/b8/3e/c9/b83ec9d8ac7a6f2dfaa93fa4f150e3b6.gif" }],
      price_now: 30,
      price_ori: 50,
    },
  ]

  imagec
  imagectype
  base64img

  fileChange(event, maxsize, location) {
    if (event.target.files && event.target.files[0] && event.target.files[0].size < (10485768)) {


      swal({
        buttons: [false],
        title: 'Uploading!',
        text: 'Please wait...',
        closeOnClickOutside: false,
        closeOnEsc: false,
      });


      this.imagectype = event.target.files[0].type;
      const can = document.createElement('canvas');
      const ctx = can.getContext('2d');
      const thisImage = new Image;

      const maxW = maxsize;
      const maxH = maxsize;
      thisImage.onload = (a) => {
        const iw = thisImage.width;
        const ih = thisImage.height;
        const scale = Math.min((maxW / iw), (maxH / ih));
        const iwScaled = iw * scale;
        const ihScaled = ih * scale;
        can.width = iwScaled;
        can.height = ihScaled;
        ctx.save();
        ctx.drawImage(thisImage, 0, 0, iwScaled, ihScaled);
        ctx.restore();

        this.imagec = can.toDataURL();

        const imgggg = this.imagec.replace(';base64,', 'thisisathingtoreplace;');
        const imgarr = imgggg.split('thisisathingtoreplace;');
        this.base64img = imgarr[1];
        event.target.value = '';


        this.http.post('https://img.vsnap.my/upload', { image: this.imagec, folder: 'vsnap', userid: 'New User' }).subscribe((link) => {
          // this.bento.swalclose()
          swal.close()
          console.log(link['imageURL'])
          eval(location + " = link['imageURL'] ")
        })
        swal.close()

      };
      thisImage.src = URL.createObjectURL(event.target.files[0]);
      // eval('this.'+el+'.nativeElement.value = null;')
    } else {
      alert('Your Current Image Too Large, ' + event.target.files[0].size / (10241024) + 'MB! (Please choose file lesser than 8MB)');
    }
  }

  fileChange2(event, maxsize) {
    if (event.target.files && event.target.files[0] && event.target.files[0].size < (10485768)) {


      swal({
        buttons: [false],
        title: 'Uploading!',
        text: 'Please wait...',
        closeOnClickOutside: false,
        closeOnEsc: false,
      });


      this.imagectype = event.target.files[0].type;
      const can = document.createElement('canvas');
      const ctx = can.getContext('2d');
      const thisImage = new Image;

      const maxW = maxsize;
      const maxH = maxsize;
      thisImage.onload = (a) => {
        const iw = thisImage.width;
        const ih = thisImage.height;
        const scale = Math.min((maxW / iw), (maxH / ih));
        const iwScaled = iw * scale;
        const ihScaled = ih * scale;
        can.width = iwScaled;
        can.height = ihScaled;
        ctx.save();
        ctx.drawImage(thisImage, 0, 0, iwScaled, ihScaled);
        ctx.restore();

        this.imagec = can.toDataURL();

        const imgggg = this.imagec.replace(';base64,', 'thisisathingtoreplace;');
        const imgarr = imgggg.split('thisisathingtoreplace;');
        this.base64img = imgarr[1];
        event.target.value = '';

        this.http.post('https://img.vsnap.my/upload', { image: this.imagec, folder: 'vsnap', userid: 'New User' }).subscribe((link) => {
          // this.bento.swalclose()
          swal.close()
          console.log(link['imageURL'])
          this.campaign.photo.push({ url: link['imageURL'] })
        })
        swal.close()

      };
      thisImage.src = URL.createObjectURL(event.target.files[0]);
      // eval('this.'+el+'.nativeElement.value = null;')
    } else {
      alert('Your Current Image Too Large, ' + event.target.files[0].size / (10241024) + 'MB! (Please choose file lesser than 8MB)');
    }
  }


  scrollTo() {
    this.content.scrollToBottom(400)
  }

  lengthof(x) {
    return Object.keys(x || {}).length
  }




  finder(arr, x) {
    return this.lengthof(arr) ? arr.filter(a => (a['id'] == x))[0] : []
  }


  ionViewDidEnter() {

  }


  reducer(arr, key) {
    return this.lengthof(arr) ? (arr || []).reduce((a, b) => (a + (b[key] || 0)), 0) : 0
  }

  checkconsole() {

    console.log(this.campaign)

  }


  links

  id
  user

  logsid = null

  detail(x) {

    // if (this.logsid) {
    //   this.http.post('https://api2.vsnap.my/updateclicklogs2', { click_id: x.id, logs_pool_id: this.logsid }).subscribe(p2 => {
    //     console.log("got the button");
    //   });
    // }


    this.nav.navigateForward('home/' + x.id + '/' + this.user + '?logsid=' + this.logsid + '&click_id=' + this.id); // click_id

  }


  gooo(x) {

    // if (this.logsid) {
    //   this.http.post('https://api2.vsnap.my/updateclicklogs', { click_id: x.link, logs_pool_id: this.logsid }).subscribe(p2 => {
    //     console.log("got the button");
    //   });

    // }

    window.open(x.link);
  }



}
