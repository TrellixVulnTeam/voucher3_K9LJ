import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import firebase from 'firebase';

@Component({
  selector: 'app-visit-qr',
  templateUrl: './visit-qr.page.html',
  styleUrls: ['./visit-qr.page.scss'],
})
export class VisitQrPage implements OnInit {


  tab = 0;
  influencer = [] as any;
  locations = [] as any;
  vendors = [] as any;
  menu = [] as any;
  image;

  constructor(
    private actRoute: ActivatedRoute,
    private http: HttpClient,
    private nav: NavController,
  ) { }

  condis(x) {
    if (((x || '').toString()).substring(0, 1) == '6') {
      return x
    } else if (((x || '').toString()).substring(0, 1) == '0') {
      return '6' + x
    } else {
      return '60' + x
    }
  }

  user
  vendor

  brand(x) {
    this.nav.navigateForward('brand/' + x + '/' + this.user);
  }
  
  store(x) {
    this.nav.navigateForward('store/' + x);
  }

  ngOnInit() {

    this.actRoute.queryParams.subscribe(a => {
      this.vendor = a['vendor'];
      this.user = a['user'];

      this.image = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + a['vendor'] + ',' + a['user'];

      this.http.post('https://api.vsnap.my/getemenu', { id: a['vendor'] }).subscribe(b => {
        this.menu = b['data'] || [];
      })

      this.http.get('https://api.vsnap.my/geteat').subscribe(a => {
        this.locations = a ? (a['data']).filter(c => c['vendor_id'] == this.vendor) : {};
      })

      this.http.post('https://api.vsnap.my/getvendors', { id: this.vendor }).subscribe(data3 => {
        this.vendors = data3['data'];
        this.tab = this.vendors.tnc ? 0 : 1;
      })
    })

    this.http.post('https://api.vsnap.my/getusers', { id: this.user }).subscribe(a => {

      if (a['data'].id) {
        this.influencer = a['data'] || {};
      } else {
        this.http.post('https://api.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
          if (a['data'].id) {
            this.influencer = a['data'] || {};
          } else {
            this.tomain()
          }
        }, e => {
          this.tomain()
        })
      }
    }, e => {
      this.http.post('https://api.vsnap.my/getusers', { id: "yRSIH0mIALf4PsxkwSUFkKnjdMI3" }).subscribe(a => {
        if (a['data'].id) {
          this.influencer = a['data'] || {};
        } else {
          this.tomain()
        }
      }, e => {
        this.tomain()
      })
    })

  }

  tomain() {
    this.nav.navigateForward('main?user=' + this.user)
  }

  stringornot(x) {
    return (typeof x == "string" ? true : false)
  }

  back() {
    this.nav.pop();
  }
}
