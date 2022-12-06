import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltertabtwopagePageRoutingModule } from './filtertabtwopage-routing.module';

import { FiltertabtwopagePage } from './filtertabtwopage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltertabtwopagePageRoutingModule
  ],
  declarations: [FiltertabtwopagePage]
})
export class FiltertabtwopagePageModule {}
