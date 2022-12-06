import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultSubModelPage } from './result-sub-model.page';

const routes: Routes = [
  {
    path: '',
    component: ResultSubModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultSubModelPageRoutingModule {}
