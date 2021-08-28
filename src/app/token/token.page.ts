import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-token',
  templateUrl: './token.page.html',
  styleUrls: ['./token.page.scss'],
})
export class TokenPage implements OnInit {

  constructor(
    private iab: InAppBrowser,
    private actRoute: ActivatedRoute,
    private title: Title,
  ) { }

  paid = false;
  theheight = 1000;

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.actRoute.queryParams.subscribe(a => {
      this.paid = (a['status'] == "SUCCESS");
      if (this.paid) {
        this.title.setTitle('Thanks For Your Purchase!');
      } else {
        this.title.setTitle('Order Cancelled!');
      }
    });

    setInterval(() => {
      this.theheight = (document.getElementById('heighter').clientHeight);
    }, 500);
  }

  open() {
    window.open('https://vsnap.page.link/naxz');
  }

  proper2(x) {
    return Math.round(((Math.abs(x) || 0) + Number.EPSILON) * 100) / 100
  }

}
