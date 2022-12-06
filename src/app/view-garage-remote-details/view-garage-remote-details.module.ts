import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewGarageRemoteDetailsPageRoutingModule } from './view-garage-remote-details-routing.module';

import { ViewGarageRemoteDetailsPage } from './view-garage-remote-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewGarageRemoteDetailsPageRoutingModule
  ],
  declarations: [ViewGarageRemoteDetailsPage]
})
export class ViewGarageRemoteDetailsPageModule {}
