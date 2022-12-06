import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsbybrandPageRoutingModule } from './productsbybrand-routing.module';

import { ProductsbybrandPage } from './productsbybrand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsbybrandPageRoutingModule
  ],
  declarations: [ProductsbybrandPage]
})
export class ProductsbybrandPageModule {}
