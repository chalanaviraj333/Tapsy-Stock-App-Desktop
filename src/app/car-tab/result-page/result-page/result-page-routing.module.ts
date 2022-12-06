import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultPagePage } from './result-page.page';

const routes: Routes = [
  {
    path: '',
    component: ResultPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultPagePageRoutingModule {}
