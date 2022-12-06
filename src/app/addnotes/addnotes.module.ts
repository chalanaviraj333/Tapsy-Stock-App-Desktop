import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnotesPageRoutingModule } from './addnotes-routing.module';

import { AddnotesPage } from './addnotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnotesPageRoutingModule
  ],
  declarations: [AddnotesPage]
})
export class AddnotesPageModule {}
