import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltertabthreePagePageRoutingModule } from './filtertabthree-page-routing.module';

import { FiltertabthreePagePage } from './filtertabthree-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltertabthreePagePageRoutingModule
  ],
  declarations: [FiltertabthreePagePage]
})
export class FiltertabthreePagePageModule {}
