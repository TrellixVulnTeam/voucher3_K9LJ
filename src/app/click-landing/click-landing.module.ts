import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClickLandingPageRoutingModule } from './click-landing-routing.module';

import { ClickLandingPage } from './click-landing.page';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClickLandingPageRoutingModule
  ],
  declarations: [ClickLandingPage]
})
export class ClickLandingPageModule {}
