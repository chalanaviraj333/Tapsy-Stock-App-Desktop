import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnotesPage } from './addnotes.page';

const routes: Routes = [
  {
    path: '',
    component: AddnotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnotesPageRoutingModule {}
