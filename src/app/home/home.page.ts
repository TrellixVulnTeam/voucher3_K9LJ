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

  qtys = 1;
  load = true;
  buy = false;
  agree = false;
  id;
  user;
  items = [] as any;
  vendor = [] as any;
  name;
  email;
  address;
  contact = '+60';
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
    return this.name && this.email && this.contact && (this.items.address ? this.address : true);
  }

  calc(x) {
    if (x == '-') {
      if (this.qtys > 1) {
        eval('this.qtys ' + x + '= 1');
      }
    } else {
      eval('this.qtys ' + x + '= 1');
    }
  }

  complete = false;

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('item');
    this.user = this.actRoute.snapshot.paramMap.get('user');

    localforage.getItem('vsnap_userinfo').then((a) => {
      if (a) {
        this.name = a['name'] || "";
        this.address = a['address'] || "";
        this.contact = a['contact'] || "";
        this.email = a['email'] || "";
      } else {
        this.name = "";
        this.address = "";
        this.contact = "";
        this.email = "";
      }
    }).catch(e => {
      this.name = "";
      this.address = "";
      this.contact = "";
      this.email = "";
    })

    this.http.post('https://us-central1-newvsnap.cloudfunctions.net/nergigante/getmeta', { id: this.id }).subscribe(data => {

      if (Object.keys(data['success']).length) {
        this.load = false;
        this.items = data['success'];

        this.title.setTitle(data['success'].name)
        // this.meta.updateTag({ name: 'description', content: data['success'].description })

        this.meta.updateTag({ itemprop: 'name', content: data['success'].name })
        this.meta.updateTag({ itemprop: 'description', content: (data['success'].description || '') })
        this.meta.updateTag({ itemprop: 'image', content: data['success'].thumbnail })
        this.meta.updateTag({ property: 'og:url', content: ('testing-sitenew.web.app/home/' + this.id + '/' + this.user) })
        this.meta.updateTag({ property: 'og:type', content: 'article' })
        this.meta.updateTag({ property: 'og:description', content: (data['success'].description || '') })
        this.meta.updateTag({ property: 'og:title', content: data['success'].name })
        this.meta.updateTag({ property: 'og:image', content:  data['success'].thumbnail })
        this.meta.updateTag({ property: 'og:image:secure_url', content:  data['success'].thumbnail })
        this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729'})
        this.meta.updateTag({ property: 'og:image:width', content: '500'})
        this.meta.updateTag({ property: 'og:image:height', content: '500'})
         
        this.complete = true;
      } else {
        this.load = false;
      }

    })
  }

  ionViewDidEnter() { // all firebase here
    let temp = false;

    setInterval(() => {
      if (temp == false && this.complete == true) {
        temp = true
        firebase.database().ref('vendors/' + this.items.by).once('value', data2 => {
          if (data2.exists()) {
            console.log(1);
            this.vendor = data2.val();
          }
        }).then(() => {
          firebase.database().ref('vouchers/' + this.id + '/view/' + this.user).transaction(a => a ? a += 1 : a = 1)
          firebase.database().ref('vouchers/' + this.id + '/stat/view/').transaction(a => a ? a += 1 : a = 1);
        })
      }
    }, 1000);

    firebase.database().ref('link').once('value', data => {
      this.link = data.val();
    })

  }

  lengthof(x) {
    return x ? x.length : 0;
  }

  buys() {

    swal({
      title: 'Payment In Progress 付款进行中',
      text: 'Please Wait 请稍等',
      buttons: [false],
      closeOnEsc: false,
      closeOnClickOutside: false,
      timer: 3000,
    })

    if (this.items.price_now == 0) {
      this.free()
    } else {
      this.fpx()
    }

  }

  fpx() {
    let temp = {
      name: this.name,
      address: this.address,
      contact: this.contact,
      email: this.email,
    }

    // this.nativeStorage.setItem('vsnap_userinfo', temp)

    localforage.setItem('vsnap_userinfo', temp);

    let key = firebase.database().ref('orders_pending').push({
      date: firebase.database.ServerValue.TIMESTAMP,
      email: this.email,
      name: this.name,
      contact: this.contact || '',
      address: this.address || '',
      item: this.id,
      user: this.user,
    }).key;

    let body = {
      vendor: this.vendor.id,
      item: this.id,
      user: this.user,
      amount: (this.items.price_now * this.qtys) * 100,
      qty: this.qtys || 1,
      description: 'Purchase ' + this.items.name + ' x' + this.qtys || 1,
      email: this.email,
      name: this.name,
      order: key,
      address: this.address || '',
      buyername: this.name || '',
      buyeremail: this.email || '',
      contact: this.contact || '',
      addresser: this.items.address || false,
      vendorfcm: this.vendor.fcm || '',
      remark: this.remark || '',
    }

    if (this.email && this.name) {
      this.http.post('https://us-central1-newvsnap.cloudfunctions.net/nergigante/billplz', body).subscribe(a => {
        if (Object.values(a).length) {
          const browser = this.iab.create(a['url'], '_self');
          console.log(a);
        } else {
          swal({
            icon: 'error',
            title: 'Error',
            text: 'Please check your email ! :(',
            closeOnEsc: false,
            closeOnClickOutside: false,
            buttons: [false],
            timer: 1500
          });
        }

      }, e => {
        console.log(e);
      })
    } else {
      swal({
        icon: 'error',
        title: 'Error',
        text: 'Please fill up all information! :)',
        closeOnEsc: false,
        closeOnClickOutside: false,
        buttons: [false],
        timer: 1500
      });
    }
  }

  free() {
    if (this.email && this.name) {
      firebase.database().ref('vouchers/' + this.id + '/bought/' + this.user).transaction(a => (a || 0) + this.qtys);
      firebase.database().ref('vouchers/' + this.id + '/stat/bought/').transaction(a => (a || 0) + this.qtys);
      firebase.database().ref('users/' + this.user).once('value', data2 => {
        firebase.database().ref('vouchers/' + this.id).once('value', data => {
          let ids = firebase.database().ref('orders').push({
            address: this.address || null,
            date: firebase.database.ServerValue.TIMESTAMP,
            by: data.val().by || null,
            description: data.val().description || null,
            name: data.val().name || null,
            photo: data.val().photo || null,
            price_comm: data.val().price_comm || 0,
            price_now: data.val().price_now || 0,
            price_ori: data.val().price_ori || 0,
            qty: this.qtys || null,
            seller_email: data2.val().email || null,
            seller_id: this.user || null,
            seller_name: data2.val().name || null,
            seller_phone: data2.val().contact || null,
            thumbnail: data.val().thumbnail || null,
            tnc: data.val().tnc || null,
            type: 'vouchers',
            type_id: this.id || null,
            buyer_name: this.name || null,
            buyer_email: this.email || null,
            buyer_contact: this.contact || null,
            remark: this.remark || '',
          }).key;

          firebase.database().ref('orders/' + ids).update({
            id: ids,
          });

          this.nav.navigateForward('thanks?billplz[paid]=true&items=' + this.id + '&name=' + this.name + '&email=' + this.email + '&contact=' + this.contact +
            '&addresser=' + this.items.address + '&address=' + this.address + '&userid=' + this.user + '&vendor=' + data.val().by)
          // firebase.database().ref('users/' + user + '/earn').transaction(a => a += (data.val().price_comm * qty));
        })
      })
    } else {
      swal({
        icon: 'error',
        title: 'Error',
        text: 'Please fill up all information! :)',
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
