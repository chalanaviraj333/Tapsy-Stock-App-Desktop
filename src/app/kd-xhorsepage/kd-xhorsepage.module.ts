import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KdXhorsepagePageRoutingModule } from './kd-xhorsepage-routing.module';

import { KdXhorsepagePage } from './kd-xhorsepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KdXhorsepagePageRoutingModule
  ],
  declarations: [KdXhorsepagePage]
})
export class KdXhorsepagePageModule {}
