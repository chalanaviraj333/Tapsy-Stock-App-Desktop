import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultSubModelPageRoutingModule } from './result-sub-model-routing.module';

import { ResultSubModelPage } from './result-sub-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultSubModelPageRoutingModule
  ],
  declarations: [ResultSubModelPage]
})
export class ResultSubModelPageModule {}
