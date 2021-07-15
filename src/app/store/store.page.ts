import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import firebase from 'firebase';
import { Meta, Title } from '@angular/platform-browser';


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

  constructor(private platform: Platform, private actRoute: ActivatedRoute, private nav: NavController, private title: Title) { }

  rounder(x) {
    return Math.floor(x);
  }

  checkit(x) {
    return x.filter(a => a.value.status == true);
  }

  links = [] as any;

  outside(x) {
    window.open(this.links[x]);
  }

  proper2(x) {
    return Math.round(((Math.abs(x) || 0) + Number.EPSILON) * 100) / 100
  }

  ngOnInit() {
    this.title.setTitle('Welcome to User\'s vsnap store!')
  }

  stringornot(x) {
    return (typeof x == "string" ? true : false)
  }

  ionViewWillEnter() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    firebase.database().ref('users/' + this.id).once('value', data => {
      this.user = data.val();
      this.title.setTitle('Welcome to ' + this.user.name + '\'s vsnap store!');
      (data.val().store || []).forEach(element => {
        firebase.database().ref('vouchers/' + element).once('value', data => {
          this.vouchers[data.val().id] = data.val();
          console.log(this.vouchers);
        })
      });
    })
    firebase.database().ref('vendors').once('value', data => {
      this.vendors = data.val();
    })

    firebase.database().ref('link').once('value', data => {
      this.links = data.val();
    })
  }

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
