import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitQrPage } from './visit-qr.page';

const routes: Routes = [
  {
    path: '',
    component: VisitQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitQrPageRoutingModule {}
