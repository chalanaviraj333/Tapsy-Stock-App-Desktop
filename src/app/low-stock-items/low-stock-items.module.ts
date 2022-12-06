import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LowStockItemsPageRoutingModule } from './low-stock-items-routing.module';

import { LowStockItemsPage } from './low-stock-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LowStockItemsPageRoutingModule
  ],
  declarations: [LowStockItemsPage]
})
export class LowStockItemsPageModule {}
