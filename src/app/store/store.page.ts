import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import firebase from 'firebase';

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

  constructor(private platform: Platform, private actRoute: ActivatedRoute, private nav: NavController) { }
  
  rounder(x) {
    return Math.floor(x);
  }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    firebase.database().ref('users/' + this.id).once('value', data => {
      this.user = data.val();
    })

    firebase.database().ref('vouchers').once('value', data => {
      this.vouchers = data.val();

      setInterval(() => {
        this.animer += 1;
      }, 100);
    })

    firebase.database().ref('vendors').once('value', data => {
      this.vendors = data.val();
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

  widther() {
    return this.platform.width() > 600 ? false : true;
  }

  go(x) {
    this.nav.navigateForward('home/' + x + '/' + this.id);
  }
}
