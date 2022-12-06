import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewGarageRemoteDetailsPage } from './view-garage-remote-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewGarageRemoteDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewGarageRemoteDetailsPageRoutingModule {}
