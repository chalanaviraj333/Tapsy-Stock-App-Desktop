import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoteshellPagePageRoutingModule } from './remoteshell-page-routing.module';

import { RemoteshellPagePage } from './remoteshell-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoteshellPagePageRoutingModule
  ],
  declarations: [RemoteshellPagePage]
})
export class RemoteshellPagePageModule {}
