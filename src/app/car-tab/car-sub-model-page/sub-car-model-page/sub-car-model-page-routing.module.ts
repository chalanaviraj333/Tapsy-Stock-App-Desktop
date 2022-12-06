import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubCarModelPagePage } from './sub-car-model-page.page';

const routes: Routes = [
  {
    path: '',
    component: SubCarModelPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubCarModelPagePageRoutingModule {}
