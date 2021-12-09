import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClickLandingPage } from './click-landing.page';

const routes: Routes = [
  {
    path: '',
    component: ClickLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickLandingPageRoutingModule {}
