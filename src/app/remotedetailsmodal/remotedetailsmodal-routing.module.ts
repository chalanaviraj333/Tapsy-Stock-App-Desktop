import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemotedetailsmodalPage } from './remotedetailsmodal.page';

const routes: Routes = [
  {
    path: '',
    component: RemotedetailsmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemotedetailsmodalPageRoutingModule {}
