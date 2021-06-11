import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, InAppBrowser, Stripe],
  bootstrap: [AppComponent],
})
export class AppModule {}
