import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltertabthreePagePage } from './filtertabthree-page.page';

const routes: Routes = [
  {
    path: '',
    component: FiltertabthreePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltertabthreePagePageRoutingModule {}
