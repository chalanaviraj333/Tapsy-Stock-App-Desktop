import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoteshellPagePage } from './remoteshell-page.page';

const routes: Routes = [
  {
    path: '',
    component: RemoteshellPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoteshellPagePageRoutingModule {}
