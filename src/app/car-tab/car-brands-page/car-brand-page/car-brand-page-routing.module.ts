import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarBrandPagePage } from './car-brand-page.page';

const routes: Routes = [
  {
    path: '',
    component: CarBrandPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarBrandPagePageRoutingModule {}
