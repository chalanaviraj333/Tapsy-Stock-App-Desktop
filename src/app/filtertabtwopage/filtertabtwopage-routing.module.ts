import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltertabtwopagePage } from './filtertabtwopage.page';

const routes: Routes = [
  {
    path: '',
    component: FiltertabtwopagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltertabtwopagePageRoutingModule {}
