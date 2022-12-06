import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarBrandPagePageRoutingModule } from './car-brand-page-routing.module';

import { CarBrandPagePage } from './car-brand-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarBrandPagePageRoutingModule
  ],
  declarations: [CarBrandPagePage]
})
export class CarBrandPagePageModule {}
