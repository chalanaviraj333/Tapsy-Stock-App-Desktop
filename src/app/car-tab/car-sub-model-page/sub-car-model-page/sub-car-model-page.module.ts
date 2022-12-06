import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubCarModelPagePageRoutingModule } from './sub-car-model-page-routing.module';

import { SubCarModelPagePage } from './sub-car-model-page.page';
import { CarYearModelComponent } from '../../car-model-year-modal/car-year-model/car-year-model.component';
import { CarSubModelComponent } from '../../car-model-year-modal/car-sub-model/car-sub-model.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubCarModelPagePageRoutingModule
  ],
  declarations: [SubCarModelPagePage, CarYearModelComponent, CarSubModelComponent]
})
export class SubCarModelPagePageModule {}
