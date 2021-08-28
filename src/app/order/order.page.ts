import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonRouterOutlet, ModalController, NavController, Platform, ToastController } from '@ionic/angular';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import swal from 'sweetalert';
import { Title } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(public nav: NavController, public modal: ModalController, private toastController: ToastController, private title: Title,
    public routerOutlet: IonRouterOutlet, public alertController: AlertController, private actRoute: ActivatedRoute, public platform: Platform, private iab: InAppBrowser,
    public http:HttpClient) { }

  comment = []
  order = {} as any;
  user = {};
  vendor = {};
  vendor_acc = {};
  settings = {};
  whatsapp = {};//
  type = "vouchers";
  id = "";
  subject = {};
  event_parti = {};
  eventtype = 'events';
  users = {};
  puller = this.platform.width() / 2;
  qr;

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

  widtherget() {
    return this.platform.width();
  }

  async presentToast(x) {
    const toast = await this.toastController.create({
      message: x,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  numbertodigit(x) {
    return Math.floor(x) + Math.round((x - Math.floor(x)) * 100) / 100
  }

  lengthof(x) {
    return (x ? Object.keys(x).length : 0)
  }

  events = {};
  experience = {};
  vouchers = {};

  datefix = 1623314696295;
  orderid = "";

  ok = 0;
  vendor_info = [] as any;
  items = [] as any;
  orders = [] as any;

  brand(x) {
    // console.log();

    this.nav.navigateForward('brand/' + x + '/' + this.orders.seller_id);
  }

  ionViewWillEnter() {

    this.orderid = this.actRoute.snapshot.paramMap.get('id');

    this.http.post('https://api.vsnap.my/getafforders', { id: this.orderid }).subscribe(data => {

    if(data['data']){
      this.order = data['data']
      this.title.setTitle('Order Summary for ' +  this.orders.name)
      this.qr = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + this.orders.id + ',' + this.orders.type;

      this.http.post('https://api.vsnap.my/getvouchers', { id: data['data']['type_id'] }).subscribe(data2 => {
        this.items = data2['data'];
        console.log(this.items)
      })

      this.http.post('https://api.vsnap.my/getvendors', { id: data['data']['by'] }).subscribe(data3 => {
        this.vendor_info = data3['data'];
        console.log(this.vendor_info)
      })
        this.ok = 1;
    }else{
      this.ok = -1
    }
      

    },e=>{
      this.ok = -1
    })

  }

  proper2(x) {
    return Math.round(((Math.abs(x) || 0) + Number.EPSILON) * 100) / 100
  }

  ngOnInit() {

  }

  toint(x) {
    return parseInt(x);
  }

  last(x, y) {
    return ((x.split("").reverse().join("").substring(0, y)).split("").reverse().join("")).toUpperCase()
  }

  back() {
    this.nav.pop();
  }

  shipment() {
    // ask tracking
    // push used
    // transaction vendor commission
  }

  lengthof2(x) {
    return (x ? (x).length : 0)
  }

}
