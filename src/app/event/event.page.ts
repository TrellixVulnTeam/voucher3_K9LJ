import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  constructor(public platform: Platform, public activatedRoute: ActivatedRoute, public nav: NavController, private title: Title) { }

  widther(x) {
    // console.log(this.platform.width() >= x)
    this.puller = (this.platform.width() >= 900 ? 450 : (this.platform.width() < 600 ? 300 : this.platform.width() / 2));
    // console.log(this.puller)
    return this.platform.width() >= x;
  }

  enter = false;

  item = "";
  user = "";
  voucher = {};
  influencer = {};
  event = "";
  qty = 1;
  selected = 0;
  puller = this.platform.width() / 2;

  var_select = [0, 1];

  // this.voucher['variations'][loop0]['selections'][var_select[loop0]]

  // {price:x , name: x}

  disabled = [true, true, true]

  event_info = {};

  openlink(x, y) {
    let temp = (y == 'Facebook' ? 'https://' : (y == 'Instagram' ? 'https://' : '')) +
      (y == 'Facebook' ? 'www.facebook.com/' : (y == 'Instagram' ? 'www.instagram.com/' : '')) + x;
    window.open(temp);
    // xxx
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

  ngOnInit() {
    this.title.setTitle('Welcome to Vendor \'s vsnap store!')
  }

  ionViewWillEnter() {

    this.event = this.activatedRoute.snapshot.paramMap.get('event');
    this.user = this.activatedRoute.snapshot.paramMap.get('user');

    firebase.database().ref('events/' + this.event).once('value', data => {
      if (data.exists()) {
        this.event_info = data.val();
        this.title.setTitle('Welcome to ' + this.event_info['name'] + '\'s vsnap dropship store!')

        for (const key in (data.val()['vouchers'] || {})) {

          let element = data.val()['vouchers'][key];

          firebase.database().ref('vouchers/' + element).once('value', data2 => {
            this.voucher[element] = data2.val();
          })

        }


      }
    })

    firebase.database().ref('users/' + this.user).once('value', data => {
      this.influencer = data.val();
      console.log(this.influencer)
    })

    firebase.database().ref('link').once('value', data => {
      this.links = data.val();
    })

    // firebase.database().ref('vouchers/').orderByChild('by').equalTo(this.vendor).once('value', data => {
    //   this.voucher = data.val();
    //   console.log(this.vendor);
    // })

    // firebase.database().ref('vendors/' + this.vendor).once('value', data => {
    //   this.vendor_info = data.val();
    //   this.title.setTitle('Welcome to ' + this.vendor_info['name'] + '\'s vsnap store!')
    //   console.log(this.voucher);
    // })


  }

  store(x) {
    this.nav.navigateForward('store/' + x);
  }

  outside(x) {
    window.open(this.links[x]);
  }
}
