import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitQrPageRoutingModule } from './visit-qr-routing.module';

import { VisitQrPage } from './visit-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitQrPageRoutingModule
  ],
  declarations: [VisitQrPage]
})
export class VisitQrPageModule {}
