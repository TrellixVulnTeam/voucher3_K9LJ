import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase';
import { Meta, Title } from '@angular/platform-browser';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.page.html',
  styleUrls: ['./thanks.page.scss'],
})
export class ThanksPage implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private http: HttpClient,
    private title: Title,
    private meta: Meta,
    private nav: NavController,
    public platform: Platform
  ) { }

  // qr;
  // id;
  orderid = "";
  paid;
  order = {} as any;
  qr = "";
  items = {} as any;

  ngOnInit() {

  }

  theheight = 1000;
  animer = 0;

  proper2(x) {
    return Math.round(((Math.abs(x) || 0) + Number.EPSILON) * 100) / 100
  }

  typeof(x) {
    return typeof x;
  }

  ionViewWillEnter() {
    this.qr = 'https://i.pinimg.com/originals/39/ee/de/39eede5b8818d7c02d2340a53a652961.gif'

    this.actRoute.queryParams.subscribe(a => {
      this.orderid = this.typeof(a['orderId']) == 'string' ? a['orderId'] : a['orderId'][0];

      this.paid = (a['status'] == "SUCCESS");

      if (this.paid == 'true' || this.paid == true) {
        this.title.setTitle('Thanks For Your Purchase!');
        // console.log(a['order']);

        this.http.post('https://api.vsnap.my/getafforders', { id: this.orderid }).subscribe(data => {
          this.order = data['data']
          console.log(this.order)

          this.http.post('https://api.vsnap.my/getvouchers', { id: data['data']['type_id'] }).subscribe(data2 => {
            this.items = data2['data'];
            console.log(this.items)
            this.animer = 6;
            setInterval(() => {
              this.theheight = (document.getElementById('heighter').clientHeight);
            }, 500);

          })
        })


      } else {
        this.title.setTitle('Fail to purchase!');
        this.animer = 6;

        setInterval(() => {
          this.theheight = (document.getElementById('heighter').clientHeight);
        }, 500);
      }

      this.qr = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + a['order'] + ',' + 'consumer'
    });
  }

  track(x) {
    this.nav.navigateForward('order/' + x);
  }

  getvar(x) {
    return x ? x.reduce((a, b) => a + ", " + b['name'], "") : '';
  }
}
