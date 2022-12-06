import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllGarageRemotesPage } from './all-garage-remotes.page';

const routes: Routes = [
  {
    path: '',
    component: AllGarageRemotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllGarageRemotesPageRoutingModule {}
