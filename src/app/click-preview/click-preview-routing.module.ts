import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClickPreviewPage } from './click-preview.page';

const routes: Routes = [
  {
    path: '',
    component: ClickPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickPreviewPageRoutingModule {}
