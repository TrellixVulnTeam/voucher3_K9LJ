import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home/:item/:user',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'thanks',
    loadChildren: () => import('./thanks/thanks.module').then(m => m.ThanksPageModule)
  },
  {
    path: 'store/:id',
    loadChildren: () => import('./store/store.module').then(m => m.StorePageModule)
  },
  {
    path: 'brand/:vendor/:user',
    loadChildren: () => import('./brand/brand.module').then(m => m.BrandPageModule)
  },
  {
    path: 'order/:id',
    loadChildren: () => import('./order/order.module').then(m => m.OrderPageModule)
  },
  {
    path: 'token',
    loadChildren: () => import('./token/token.module').then(m => m.TokenPageModule)
  },
  {
    path: 'event/:event/:user',
    loadChildren: () => import('./event/event.module').then(m => m.EventPageModule)
  },
  {
    path: 'guild/:guild/:user',
    loadChildren: () => import('./guild/guild.module').then(m => m.GuildPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainPageModule)
  },
  {
    path: 'visit-qr',
    loadChildren: () => import('./visit-qr/visit-qr.module').then( m => m.VisitQrPageModule)
  },
  {
    path: 'click-landing',
    loadChildren: () => import('./click-landing/click-landing.module').then( m => m.ClickLandingPageModule)
  },  {
    path: 'click-preview',
    loadChildren: () => import('./click-preview/click-preview.module').then( m => m.ClickPreviewPageModule)
  },
  {
    path: 'fnbqr',
    loadChildren: () => import('./fnbqr/fnbqr.module').then( m => m.FnbqrPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
