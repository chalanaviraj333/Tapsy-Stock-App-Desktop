import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LowStockModalPageRoutingModule } from './low-stock-modal-routing.module';

import { LowStockModalPage } from './low-stock-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LowStockModalPageRoutingModule
  ],
  declarations: [LowStockModalPage]
})
export class LowStockModalPageModule {}
