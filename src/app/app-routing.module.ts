import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'addnotes',
    loadChildren: () => import('./addnotes/addnotes.module').then( m => m.AddnotesPageModule)
  },
  {
    path: 'remotedetailsmodal',
    loadChildren: () => import('./remotedetailsmodal/remotedetailsmodal.module').then( m => m.RemotedetailsmodalPageModule)
  },
  {
    path: 'productsbybrand',
    loadChildren: () => import('./productsbybrand/productsbybrand.module').then( m => m.ProductsbybrandPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'filtertabtwopage',
    loadChildren: () => import('./filtertabtwopage/filtertabtwopage.module').then( m => m.FiltertabtwopagePageModule)
  },
  {
    path: 'filtertabthree-page',
    loadChildren: () => import('./filtertabthree-page/filtertabthree-page.module').then( m => m.FiltertabthreePagePageModule)
  },
  {
    path: 'low-stock-modal',
    loadChildren: () => import('./low-stock-modal/low-stock-modal.module').then( m => m.LowStockModalPageModule)
  },
  {
    path: 'view-garage-remote-details',
    loadChildren: () => import('./view-garage-remote-details/view-garage-remote-details.module').then( m => m.ViewGarageRemoteDetailsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
