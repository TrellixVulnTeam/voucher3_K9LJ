import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClickPreviewPageRoutingModule } from './click-preview-routing.module';

import { ClickPreviewPage } from './click-preview.page';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClickPreviewPageRoutingModule
  ],
  declarations: [ClickPreviewPage]
})
export class ClickPreviewPageModule {}
