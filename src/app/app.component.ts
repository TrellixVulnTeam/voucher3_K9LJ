import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import firebase from "firebase/app";
import { FIREBASE_CONFIG } from './app.firebase.config';
import * as localforage from 'localforage'
import Storage from './StorageModel'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform : Platform
  ) {
    this.InitFirebase()

    // this.storage.set('hello', 'asd123')
  }


  InitFirebase(){
    if (firebase.apps.length == 0) {
      firebase.initializeApp(FIREBASE_CONFIG);
      return firebase
    }else {
      return firebase.app(); // if already initialized, use that one
    }
  }


}

