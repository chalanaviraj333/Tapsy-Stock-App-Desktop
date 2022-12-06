import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YearPage } from './year.page';

const routes: Routes = [
  {
    path: '',
    component: YearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YearPageRoutingModule {}
