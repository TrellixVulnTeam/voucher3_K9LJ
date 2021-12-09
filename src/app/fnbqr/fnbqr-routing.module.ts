import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FnbqrPage } from './fnbqr.page';

const routes: Routes = [
  {
    path: '',
    component: FnbqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FnbqrPageRoutingModule {}
