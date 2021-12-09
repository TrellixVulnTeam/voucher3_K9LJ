import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FnbqrPageRoutingModule } from './fnbqr-routing.module';

import { FnbqrPage } from './fnbqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FnbqrPageRoutingModule
  ],
  declarations: [FnbqrPage]
})
export class FnbqrPageModule {}
