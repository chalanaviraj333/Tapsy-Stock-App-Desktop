import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseServiceTabTwoService } from '../database-service-tab-two.service';
import { selectedData } from '../database-service.service';

@Component({
  selector: 'app-filtertabtwopage',
  templateUrl: './filtertabtwopage.page.html',
  styleUrls: ['./filtertabtwopage.page.scss'],
})
export class FiltertabtwopagePage implements OnInit {

  private selectedData: selectedData = this.databaseTabTwoService.selectedData;

  constructor(private modalController: ModalController, public databaseTabTwoService: DatabaseServiceTabTwoService
    ) { }

  ngOnInit() {
    
  }


  _onClickDismiss() {
    this.modalController.dismiss();
  }


  onSelectProductCategory(event) {
    this.selectedData.selectedCategory = event.target.value;

    this.databaseTabTwoService.filterProducts(this.selectedData);
    }

  onSelectFrequency(event) {
    this.selectedData.selectedFrequncy = event.target.value;

    this.databaseTabTwoService.filterProducts(this.selectedData);
    
  }

  onSelectChip(event) {
    this.selectedData.selectedChip = event.target.value;

    this.databaseTabTwoService.filterProducts(this.selectedData);
    
  }

  onSelectBlade(event) {
    this.selectedData.selectedBlade = event.target.value;

    this.databaseTabTwoService.filterProducts(this.selectedData);
  }

  onClickClear(clickValue: string) {
    if (clickValue == 'category') {
      this.selectedData.selectedCategory = '';

      this.databaseTabTwoService.filterProducts(this.selectedData);
    } else if (clickValue == 'frequency') {
      this.selectedData.selectedFrequncy = '';

      this.databaseTabTwoService.filterProducts(this.selectedData);
    } else if (clickValue == 'chip') {
      this.selectedData.selectedChip = '';

      this.databaseTabTwoService.filterProducts(this.selectedData);
    } else if (clickValue == 'blade') {
      this.selectedData.selectedBlade = '';

      this.databaseTabTwoService.filterProducts(this.selectedData);
    }
  }

}
