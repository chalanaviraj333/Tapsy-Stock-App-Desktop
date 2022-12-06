import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarModelPagePageRoutingModule } from './car-model-page-routing.module';

import { CarModelPagePage } from './car-model-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarModelPagePageRoutingModule
  ],
  declarations: [CarModelPagePage]
})
export class CarModelPagePageModule {}
