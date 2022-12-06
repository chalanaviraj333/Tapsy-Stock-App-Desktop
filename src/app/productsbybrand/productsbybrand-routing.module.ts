import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsbybrandPage } from './productsbybrand.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsbybrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsbybrandPageRoutingModule {}
