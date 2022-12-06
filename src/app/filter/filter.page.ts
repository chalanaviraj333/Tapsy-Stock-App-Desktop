import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseServiceService } from '../database-service.service';

export interface selectedData {
  selectedCategory: string;
  selectedFrequncy: string;
  selectedChip: string;
  selectedBlade: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  private selectedData: selectedData = this.databaseService.selectedData;

  constructor(private modalController: ModalController, public databaseService: DatabaseServiceService) { }

  ngOnInit() {
    
  }


  _onClickDismiss() {
    this.modalController.dismiss();
  }


  onSelectProductCategory(event) {
    this.selectedData.selectedCategory = event.target.value;

    this.databaseService.filterProducts(this.selectedData);
    }

  onSelectFrequency(event) {
    this.selectedData.selectedFrequncy = event.target.value;

    this.databaseService.filterProducts(this.selectedData);
    
  }

  onSelectChip(event) {
    this.selectedData.selectedChip = event.target.value;

    this.databaseService.filterProducts(this.selectedData);
    
  }

  onSelectBlade(event) {
    this.selectedData.selectedBlade = event.target.value;

    this.databaseService.filterProducts(this.selectedData);
  }

  onClickClear(clickValue: string) {
    if (clickValue == 'category') {
      this.selectedData.selectedCategory = '';

      this.databaseService.filterProducts(this.selectedData);
    } else if (clickValue == 'frequency') {
      this.selectedData.selectedFrequncy = '';

      this.databaseService.filterProducts(this.selectedData);
    } else if (clickValue == 'chip') {
      this.selectedData.selectedChip = '';

      this.databaseService.filterProducts(this.selectedData);
    } else if (clickValue == 'blade') {
      this.selectedData.selectedBlade = '';

      this.databaseService.filterProducts(this.selectedData);
    }
  }

}
