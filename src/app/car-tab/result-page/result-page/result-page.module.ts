import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultPagePageRoutingModule } from './result-page-routing.module';

import { ResultPagePage } from './result-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultPagePageRoutingModule
  ],
  declarations: [ResultPagePage]
})
export class ResultPagePageModule {}
