import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { Meta, Title } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-guild',
  templateUrl: './guild.page.html',
  styleUrls: ['./guild.page.scss'],
})
export class GuildPage implements OnInit {

  constructor(private meta: Meta, public platform: Platform,
    public activatedRoute: ActivatedRoute, public nav: NavController, private title: Title, private iab: InAppBrowser,
    private http: HttpClient,
  ) { }

  load = true;
  complete = false;
  items = {};

  join(){
    window.open('https://register.vsnap.my/influencer');
  }
  
  ngOnInit() {

    // private http: HttpClient,
    // private meta: Meta, 
    // load=true;
    // complete=false;
    // items={};

    this.guild = this.activatedRoute.snapshot.paramMap.get('guild');
    this.user = this.activatedRoute.snapshot.paramMap.get('user');

    this.http.post('https://us-central1-newvsnap.cloudfunctions.net/vsnapsql/getmeta2', { type: "guild", id: this.guild }).subscribe(data => {

      if (Object.keys(data['success']).length) {
        this.load = false;
        this.items = data['success'];

        this.title.setTitle(data['success'].name + '\'s Vsnap Guild Store')
        // this.meta.updateTag({ name: 'description', content: data['success'].description })

        this.meta.updateTag({ itemprop: 'name', content: data['success'].name + '\'s Vsnap Guild Store' })
        this.meta.updateTag({ itemprop: 'description', content: (data['success'].slogan || '') })
        this.meta.updateTag({ itemprop: 'image', content: data['success'].photo || "https://i.imgur.com/cW5MqH2.png" })
        this.meta.updateTag({ property: 'og:url', content: ('https://deal.vsnap.my/guild/' + this.guild + '/' + this.user) })
        this.meta.updateTag({ property: 'og:type', content: 'article' })
        this.meta.updateTag({ property: 'og:description', content: (data['success'].slogan || '') })
        this.meta.updateTag({ property: 'og:title', content: data['success'].name + '\'s Vsnap Guild Store' })
        this.meta.updateTag({ property: 'og:image', content: data['success'].photo || "https://i.imgur.com/cW5MqH2.png" })
        this.meta.updateTag({ property: 'og:image:secure_url', content: data['success'].photo || "https://i.imgur.com/cW5MqH2.png" })
        this.meta.updateTag({ property: 'fb:app_id', content: '2713339858890729' })
        this.meta.updateTag({ property: 'og:image:width', content: '500' })
        this.meta.updateTag({ property: 'og:image:height', content: '500' })

        this.complete = true;
      } else {
        this.load = false;
      }

    })

  }

  guild = "";
  user = "";
  voucher = [];
  guildinfo = {} as any;
  influencer = {} as any;
  links = {};
  outside(x) {
    this.iab.create(this.links[x], '_system');
    // window.open(this.links[x]);
  }
  lengthof(x) {
    return x ? x.length : 0;
  }

  stringornot(x) {
    return (typeof x == "string" ? true : false)
  }

  widther(x) {
    // console.log(this.platform.width() >= x)
    this.puller = (this.platform.width() >= 900 ? 450 : (this.platform.width() < 600 ? 300 : this.platform.width() / 2));
    // console.log(this.puller)
    return this.platform.width() >= x;
  }
  puller = this.platform.width() / 2;
  enter = false;
  rounder(x) {
    return Math.floor(x);
  }
  // http://localhost:8102/guild/-Meec6hYi4TMBw4qaAAl/n2qpB3gxBvf4empWOlmQBynBOUw2
  widtherget() {
    return this.platform.width();
  }

  go(x) {
    this.nav.navigateForward('home/' + x + '/' + this.user);
  }

  keyword = "";

  store(x) {
    this.nav.navigateForward('store/' + x);
  }

  filterer(x) {
    return x ? x.filter(a => ((a['name'] + a['by_name']).toLowerCase()).includes(this.keyword.toLowerCase())) : []
  }

  tomain() {
    this.nav.navigateForward('main?user=' + this.user)
  }

  ionViewWillEnter() {

    this.guild = this.activatedRoute.snapshot.paramMap.get('guild');
    this.user = this.activatedRoute.snapshot.paramMap.get('user') || "Ypgf8VDQJrRhsrP7RREb3n321sf1";

    firebase.database().ref('guild/' + this.guild).once('value', data => {
      if (data.exists()) {

        this.guildinfo = data.val();
        console.log(this.guildinfo);

        (this.guildinfo.store || []).forEach(element => {
          this.http.post('https://api.vsnap.my/getvouchers', { id: element }).subscribe(z => {

            if ( (z['data'].price_vsnap || 0) / (z['data'].price_now || 0) >= 0.1 && z['data'].tag !="CSR2021" && z['data'].status==true ) {
              this.voucher[element] = z['data'] || {};
              console.log(this.voucher)
            }

          }, e => {
            
          })
        });

        this.influencer.id = this.user;
        this.http.post('https://api.vsnap.my/getusers', { id: this.user }).subscribe(a => {

          if (a['data'].guild == this.guild) {
            this.influencer = a['data'] || {};
          } else {
            this.http.post('https://api.vsnap.my/getusers', { id: this.guildinfo.by }).subscribe(a => {
              if (a['data'].guild == this.guild) {
                this.influencer = a['data'] || {};
              } else {
                this.tomain()
              }
            }, e => {
              this.tomain()
            })
          }
        }, e => {
          this.http.post('https://api.vsnap.my/getusers', { id: this.guildinfo.by }).subscribe(a => {
            if (a['data'].guild == this.guild) {
              this.influencer = a['data'] || {};
            } else {
              this.tomain()
            }
          }, e => {
            this.tomain()
          })
        })

      } else {
        this.tomain()

      }

    })



    firebase.database().ref('link').once('value', data => {
      this.links = data.val();
    })

  }

}
