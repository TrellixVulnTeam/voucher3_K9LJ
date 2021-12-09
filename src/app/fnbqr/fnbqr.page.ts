import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-fnbqr',
  templateUrl: './fnbqr.page.html',
  styleUrls: ['./fnbqr.page.scss'],
})
export class FnbqrPage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(public nav: NavController, private activatedRoute: ActivatedRoute, private http: HttpClient, private toastctrl: ToastController
  ) { }

  vendor = {} as any;
  emenu = [] as any;
  photos = [] as any;
  vendor_acc = [] as any;
  qr = ''
  user = {} as any;
  userid = ''
  id = ''
  close = false;
  nowphoto = [] as any;
  currentIndex

  checkslide(event) {
    this.slides.getActiveIndex().then((index: number) => {
      this.currentIndex = index;
    });
  }

  openpic(x, y) {
    this.nowphoto = x.map(a => a['photo']);
    this.currentIndex = y;
    this.close = true;
    this.slides.slideTo(y, 10);
    this.close = true;
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(zxc => {

      console.log(zxc['id'])


      this.id = zxc['id']

      console.log(zxc['userid'])


      this.userid = zxc['userid']

      this.http.post('https://api2.vsnap.my/getvendors', { id: zxc['id'] }).subscribe((s) => {
        this.vendor = s['data'] || {}

        // this.vendor['tnc_text'] = "现在我要测试"
        console.log(this.vendor)

      }, e => { })

      this.http.post('https://api2.vsnap.my/getemenu', { id: zxc['id'] }).subscribe((s) => {

        console.log(s['data'])
        this.emenu = s['data'] || []

        this.photos = ((this.emenu.map(a => a.products)).reduce((c, d) => c.concat(d), [])).map(b => b.photo)

        this.lengthof(this.photos) > 0 ? this.photos : this.photos = ["https://image.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148692632.jpg"]

        console.log(this.photos)
        console.log(this.emenu)



      }, e => { })

      this.http.post('https://api2.vsnap.my/getvendor_acc', { id: zxc['id'] }).subscribe((s) => {
        this.vendor_acc = s['data'] || []
        console.log(this.vendor_acc)

      }, e => { })

      this.http.post('https://api2.vsnap.my/getusers', { id: zxc['userid'] }).subscribe((s) => {
        this.user = s['data'] || []
        console.log(this.user)

      }, e => { })

      this.qr = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + zxc['id'] + ',' + zxc['userid']

      console.log(this.qr)


    })

  }

  tab = 0;

  menu() {
    this.tab = 1;
  }

  back() {
    this.nav.pop();
  }

  lengthof(x) {
    return Object.keys(x || {}).length
  }

  outlet() {
    this.tab = 3;
  }

  tnc() {
    this.tab = 4;
  }

  async copy(y) {

    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (y));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');

    const toast = await this.toastctrl.create({
      message: '商家号码已在你的剪贴板',
      duration: 2000
    });
    toast.present();


  }

  async copy2() {

    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', ('点击一下连接以享有' + this.vendor['name'] + '的特别折扣\n' + "https://deal.vsnap.my/fnbqr?id=" + this.id + '&userid=' + this.userid + '\n只在 RedHood'));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');

    const toast = await this.toastctrl.create({
      message: '网址已在你的剪贴板',
      duration: 2000
    });
    toast.present();


  }

    opengps(x) {
    
      window.open(x)

  }

}