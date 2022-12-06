import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllGarageRemotesPageRoutingModule } from './all-garage-remotes-routing.module';

import { AllGarageRemotesPage } from './all-garage-remotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllGarageRemotesPageRoutingModule
  ],
  declarations: [AllGarageRemotesPage]
})
export class AllGarageRemotesPageModule {}
