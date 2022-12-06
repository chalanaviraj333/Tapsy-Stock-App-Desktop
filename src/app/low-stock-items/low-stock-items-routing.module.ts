import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LowStockItemsPage } from './low-stock-items.page';

const routes: Routes = [
  {
    path: '',
    component: LowStockItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LowStockItemsPageRoutingModule {}
