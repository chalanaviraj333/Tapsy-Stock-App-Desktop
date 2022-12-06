import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LowStockTabPageRoutingModule } from './low-stock-tab-routing.module';

import { LowStockTabPage } from './low-stock-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LowStockTabPageRoutingModule
  ],
  declarations: [LowStockTabPage]
})
export class LowStockTabPageModule {}
