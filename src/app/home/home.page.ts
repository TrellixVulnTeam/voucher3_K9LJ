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
    return this.name && this.email && this.contact && (this.items.address ? this.address : true);
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

  complete = false;

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('item');
    this.user = this.actRoute.snapshot.paramMap.get('user')


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

    this.http.post('https://us-central1-newvsnap.cloudfunctions.net/nergigante/getmeta', { id: this.id }).subscribe(data => {

      if (Object.keys(data['success']).length) {
        this.load = false;
        this.items = data['success'];

        this.title.setTitle(data['success'].name)
        // this.meta.updateTag({ name: 'description', content: data['success'].description })

        this.meta.updateTag({ itemprop: 'name', content: data['success'].name })
        this.meta.updateTag({ itemprop: 'description', content: (data['success'].description || '') })
        this.meta.updateTag({ itemprop: 'image', content: data['success'].thumbnail })
        this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/home/' + this.id + '/' + this.user) })
        this.meta.updateTag({ property: 'og:type', content: 'article' })
        this.meta.updateTag({ property: 'og:description', content: (data['success'].description || '') })
        this.meta.updateTag({ property: 'og:title', content: data['success'].name })
        this.meta.updateTag({ property: 'og:image', content: data['success'].thumbnail })
        this.meta.updateTag({ property: 'og:image:secure_url', content: data['success'].thumbnail })
        this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
        this.meta.updateTag({ property: 'og:image:width', content: '500' })
        this.meta.updateTag({ property: 'og:image:height', content: '500' })

        this.complete = true;
      } else {
        this.load = false;
      }

    })
  }

  item
  users
  voucher = [] as any;
  selected
  disabled = [true, true, true];
  influencer = [] as any;
  links = [] as any;

  outside(x) {
    window.open(this.links[x]);
  }

  openlink(x, y) {
    let temp = (y == 'Facebook' ? 'https://' : (y == 'Instagram' ? 'https://' : '')) +
      (y == 'Facebook' ? 'www.facebook.com/' : (y == 'Instagram' ? 'www.instagram.com/' : '')) + x;
    window.open(temp);
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

  ionViewDidEnter() { // all firebase here
    firebase.database().ref('vouchers/' + this.id + '/share/' + this.user).transaction(a => {
      return a ? a + 1 : a = 1;
    }).then(c => {
      if (c.snapshot.exists() && c.committed) {
        console.log('added')
      }
    })

    firebase.database().ref('link').once('value', data => {
      this.links = data.val();
    })

    firebase.database().ref('vouchers/' + this.id).once('value', data => {
      this.voucher = data.val();
      // console.log(this.voucher);

      if (this.voucher['description']) {
        this.selected = 0;
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
        // console.log(this.var_select)
      } else {
        this.var_select = [];
      }
    }).then(() => {
      firebase.database().ref('vendors/' + this.voucher['by']).once('value', data => {
        this.vendor = data.val();
        this.animer = 6;
        // console.log(this.vendor);
      })
    })
    firebase.database().ref('users/' + this.user).once('value', data => {
      this.influencer = data.val();
      // console.log(this.influencer)
    })
    firebase.database().ref('link').once('value', data => {
      this.link = data.val();
    })

  }

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

  buys() {
    // console.log(JSON.stringify((this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), [])));

    swal({
      title: 'Payment In Progress 付款进行中',
      text: 'Please Wait 请稍等',
      buttons: [false],
      closeOnEsc: false,
      closeOnClickOutside: false,
      timer: 3000,
    })


    if (this.items.address ? (this.address && this.postcode && this.city) : true) {
      if (this.items.price_now == 0) {
        this.free()
      } else {
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
    // if(this.voucher['variations']){

    //   let holder = 0;

    //   for(let i = 0 ; i < this.voucher['variations'].length ; i ++ ){

    //     holder += this.voucher['variations'][i].selections[this.var_select]

    //   }

    // }else{
    //   return 0
    // }

    return this.voucher['variations'] ? this.voucher['variations'].reduce((a, b, index) => a + b['selections'][this.var_select[index]].price, 0) : 0;
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

    let keyer = firebase.database().ref('orders_pending').push({
      variations: (this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), []),
      address: this.voucher.address || false,
      date: firebase.database.ServerValue.TIMESTAMP,
      by: this.voucher.by || "",
      description: this.voucher.description || "",
      name: this.voucher.name || "",
      photo: this.voucher.photo || [],
      price_comm: this.proper2(( this.voucher.price_comm +  this.countvar()*(this.voucher.price_comm/this.voucher.price_now)  )) || 0,
      price_vsnap: this.proper2(( (this.voucher.price_vsnap||0) +  this.countvar()*((this.voucher.price_vsnap||0)/this.voucher.price_now)  )) || 0,
      price_now: this.proper2(((this.voucher.price_now + this.countvar())) || 0),
      price_ori: this.proper2(((this.voucher.price_ori||0) + this.countvar()) || 0),
      qty: this.qty || 1,
      seller_email: this.influencer.email || "",
      seller_id: this.user || "",
      seller_name: this.influencer.name || "",
      seller_phone: this.influencer.contact || "",
      thumbnail: this.voucher.thumbnail || "",
      tnc: this.voucher.tnc || "",
      type: 'vouchers',
      type_id: this.id || "",
      buyer_name: this.name || "",
      buyer_email: this.email || "",
      buyer_contact: this.contact || "",
      buyer_address: (this.address + ', ' + this.postcode + ', ' + this.city) || "",
      overwrite: this.voucher.overwrite || false,
      remark: this.remark || '',
    }).key;

    let body = {
      amount: this.proper2(((this.voucher.price_now + this.countvar())) || 0) * this.qty * 100,
      orderdescription: 'Purchase ' + this.items.name + ' x' + (this.qty || 1),
      ordertitle: 'Vsnap Order ' + keyer,
      orderid: keyer,
    }

    // orderid
    // ordertitle
    // orderdescription
    // amount

    if (this.email && this.name) {
      console.log(body)
      this.http.post('https://us-central1-newvsnap.cloudfunctions.net/nergigante/revenuePayment', body).subscribe(a => {
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

  fpx_billplz() {
    let temp = {
      name: this.name,
      address: this.address,
      postcode: this.postcode,
      city: this.city,
      contact: this.contact,
      email: this.email,
    }


    localforage.setItem('vsnap_userinfo', temp);

    let keyer = firebase.database().ref('orders_pending').push({
      variations: (this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), []),
      address: this.voucher.address || false,
      date: firebase.database.ServerValue.TIMESTAMP,
      by: this.voucher.by || "",
      description: this.voucher.description || "",
      name: this.voucher.name || "",
      photo: this.voucher.photo || [],
      price_comm: this.proper2(( this.voucher.price_comm +  this.countvar()*(this.voucher.price_comm/this.voucher.price_now)  )) || 0,
      price_vsnap: this.proper2(( (this.voucher.price_vsnap||0) +  this.countvar()*((this.voucher.price_vsnap||0)/this.voucher.price_now)  )) || 0,
      price_now: this.proper2(((this.voucher.price_now + this.countvar())) || 0),
      price_ori: this.proper2(((this.voucher.price_ori||0) + this.countvar()) || 0),
      qty: this.qty || 1,
      seller_email: this.influencer.email || "",
      seller_id: this.user || "",
      seller_name: this.influencer.name || "",
      seller_phone: this.influencer.contact || "",
      thumbnail: this.voucher.thumbnail || "",
      tnc: this.voucher.tnc || "",
      type: 'vouchers',
      type_id: this.id || "",
      buyer_name: this.name || "",
      buyer_email: this.email || "",
      buyer_contact: this.contact || "",
      buyer_address: (this.address + ', ' + this.postcode + ', ' + this.city) || "",
      overwrite: this.voucher.overwrite || false,
      remark: this.remark || '',
    }).key;

    let body = {
      amount: this.proper2(((this.voucher.price_now + this.countvar())) || 0) * this.qty * 100,
      description: 'Purchase ' + this.items.name + ' x' + (this.qty || 1),
      email: this.email,
      name: this.name,
      order: keyer,
    }

    if (this.email && this.name) {
      this.http.post('https://us-central1-newvsnap.cloudfunctions.net/nergigante/billplz2', body).subscribe(a => {
        if (Object.values(a).length) {
          const browser = this.iab.create(a['url'], '_self');
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
        title: 'Error',
        text: 'Please fill up all information! :)',
        closeOnEsc: false,
        closeOnClickOutside: false,
        buttons: [false],
        timer: 1500
      });
    }
  }

  fpx_old() {
    let temp = {
      name: this.name,
      address: this.address + ', ' + this.postcode + ', ' + this.city,
      contact: this.contact,
      email: this.email,
    }


    localforage.setItem('vsnap_userinfo', temp);

    let key = firebase.database().ref('orders_pending').push({
      variations: (this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), []),
      address: this.voucher.address || false,
      date: firebase.database.ServerValue.TIMESTAMP,
      by: this.voucher.by || null,
      description: this.voucher.description || null,
      name: this.voucher.name || null,
      photo: this.voucher.photo || [],
      price_comm: this.proper2(( this.voucher.price_comm +  this.countvar()*(this.voucher.price_comm/this.voucher.price_now)  )) || 0,
      price_vsnap: this.proper2(( (this.voucher.price_vsnap||0) +  this.countvar()*((this.voucher.price_vsnap||0)/this.voucher.price_now)  )) || 0,
      price_now: this.proper2(((this.voucher.price_now + this.countvar())) || 0),
      price_ori: this.proper2(((this.voucher.price_ori||0) + this.countvar()) || 0),
      qty: this.qty || null,
      seller_email: this.influencer.email || null,
      seller_id: this.user || null,
      seller_name: this.influencer.name || null,
      seller_phone: this.influencer.contact || null,
      thumbnail: this.voucher.thumbnail || null,
      tnc: this.voucher.tnc || null,
      type: 'vouchers',
      type_id: this.id || null,
      buyer_name: this.name || null,
      buyer_email: this.email || null,
      buyer_contact: this.contact || null,
      buyer_address: (this.address + ', ' + this.postcode + ', ' + this.city) || null,
      overwrite: this.voucher.overwrite || false,
      remark: this.remark || '',
    }).key;

    let body = {
      variations: this.lengthof(this.voucher.variations) ? JSON.stringify((this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), [])) : [],
      vendor: this.vendor.id,
      item: this.id,
      user: this.user,
      amount: this.proper2(((this.voucher.price_now + this.countvar())) || 0) * this.qty * 100,
      qty: this.qty || 1,
      description: 'Purchase ' + this.items.name + ' x' + this.qty || 1,
      email: this.email,
      name: this.name,
      order: key,
      address: (this.address + ', ' + this.postcode + ', ' + this.city) || '',
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
          // console.log(a);
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
        // console.log(e);
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
    let temp = (this.voucher.variations || []).reduce((a, b, i) => a.concat(b['selections'][this.var_select[i]]), [])
    // console.log(JSON.parse(temp))

    if (this.email && this.name) {

      let ids = firebase.database().ref('orders').push({
        variations: temp,
        address: this.voucher.address || false,
        date: firebase.database.ServerValue.TIMESTAMP,
        by: this.voucher.by || "",
        description: this.voucher.description || "",
        name: this.voucher.name || "",
        photo: this.voucher.photo || [],
        price_comm: this.proper2(( this.voucher.price_comm +  this.countvar()*(this.voucher.price_comm/this.voucher.price_now)  )) || 0,
        price_vsnap: this.proper2(( (this.voucher.price_vsnap||0) +  this.countvar()*((this.voucher.price_vsnap||0)/this.voucher.price_now)  )) || 0,
        price_now: this.proper2(((this.voucher.price_now + this.countvar())) || 0),
        price_ori: this.proper2(((this.voucher.price_ori||0) + this.countvar()) || 0),
        qty: this.qty || "",
        seller_email: this.influencer.email || "",
        seller_id: this.user || "",
        seller_name: this.influencer.name || "",
        seller_phone: this.influencer.contact || "",
        thumbnail: this.voucher.thumbnail || "",
        tnc: this.voucher.tnc || "",
        type: 'vouchers',
        type_id: this.id || "",
        buyer_name: this.name || "",
        buyer_email: this.email || "",
        buyer_contact: this.contact || "",
        buyer_address: (this.address + ', ' + this.postcode + ', ' + this.city) || "",
        overwrite: this.voucher.overwrite || false,
        remark: this.remark || '',
      }).key;

      firebase.database().ref('orders/' + ids).update({
        id: ids,
      }).then(a => {
        // console.log(2);

        this.nav.navigateForward('thanks?status=SUCCESS&orderId=' + ids);
      });
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
