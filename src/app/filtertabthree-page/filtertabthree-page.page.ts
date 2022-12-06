import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseServiceTabThreeService } from '../database-service-tab-three.service';

interface selectedData {
  selectedButton: string;
  selectedBlade: string;
}

@Component({
  selector: 'app-filtertabthree-page',
  templateUrl: './filtertabthree-page.page.html',
  styleUrls: ['./filtertabthree-page.page.scss'],
})
export class FiltertabthreePagePage implements OnInit {

  private selectedData: selectedData = this.databaseTabThreeService.selectedData;

  constructor(private modalController: ModalController, public databaseTabThreeService: DatabaseServiceTabThreeService
    ) { }

  ngOnInit() {
    
  }


  _onClickDismiss() {
    this.modalController.dismiss();
  }


  onSelectBlade(event) {
    this.selectedData.selectedBlade = event.target.value;

    this.databaseTabThreeService.filterProducts(this.selectedData);
  }

  onSelectButtons(event) {
    this.selectedData.selectedButton = event.target.value;

    this.databaseTabThreeService.filterProducts(this.selectedData);
  }

  onClickClear(clickValue: string) {
    if (clickValue == 'blade') {
      this.selectedData.selectedBlade = '';

      this.databaseTabThreeService.filterProducts(this.selectedData);
      
    } else if (clickValue == 'button') {
      this.selectedData.selectedButton = '';

      this.databaseTabThreeService.filterProducts(this.selectedData);
    } 
  }

}
