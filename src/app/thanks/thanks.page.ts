import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.page.html',
  styleUrls: ['./thanks.page.scss'],
})
export class ThanksPage implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private http: HttpClient) { }
  qr;
  id;
  paid;
  addresser = 'false';
  remark;
  name;
  contact;
  address;
  email;
  userid;
  vendor;
  items = [] as any;


  ngOnInit() {
    this.actRoute.queryParams.subscribe(a => {
      this.id = a['items'];
      this.paid = a['billplz[paid]'];
      this.addresser = a['addresser'];
      this.address = a['address'];
      this.name = a['name'];
      this.contact = a['contact'];
      this.email = a['email'];
      this.userid = a['userid'];
      this.vendor = a['vendor'];

      console.log(this.id);

      firebase.database().ref('vouchers/' + this.id).once('value', data => {
        this.items = data.val();
      })

      if (this.paid == 'true' || this.paid == true) {
        firebase.database().ref('users/' + this.userid).once('value', data => {
          if (data.exists() && data.val().fcm) {
            let body2 = {
              title: 'Ticket sold!',
              body: 'Ticket sold to ' + a['name'] + '!',
              fcmkey: data.val().fcm,
              path: '',
              type: '',
              id: '',
            }

            this.http.post('https://us-central1-newvsnap.cloudfunctions.net/nergigante/fcm', body2).subscribe(data2 => {
              console.log(data2);
            }, e => {
              console.log(e);
            });
          }

          firebase.database().ref('vendors/' + this.vendor).once('value', data2 => {

            if (data2.exists() && data2.val().fcm) {
              let body3 = {
                title: 'Ticket sold!',
                body: 'Ticket sold to ' + a['name'] + ' by ' + data2.val().name + '!',
                fcmkey: data2.val().fcm || '',
                path: '',
                type: '',
                id: '',
              }

              this.http.post('https://us-central1-newvsnap.cloudfunctions.net/nergigante/fcm', body3).subscribe(data3 => {
                console.log(data3);
              }, e => {
                console.log(e);
              });
            }
          })
        })
      }

      this.qr = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + a['order'] + ',' + 'consumer'
    });
  }
}
