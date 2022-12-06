import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarModelPagePage } from './car-model-page.page';

const routes: Routes = [
  {
    path: '',
    component: CarModelPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarModelPagePageRoutingModule {}
