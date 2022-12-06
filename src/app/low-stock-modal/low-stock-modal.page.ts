import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseServiceTabTwoService } from '../database-service-tab-two.service';

@Component({
  selector: 'app-low-stock-modal',
  templateUrl: './low-stock-modal.page.html',
  styleUrls: ['./low-stock-modal.page.scss'],
})
export class LowStockModalPage implements OnInit {

  constructor(private modalController: ModalController, public databaseServiceTabTwo: DatabaseServiceTabTwoService) { }

  ngOnInit() {
  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }

  onClickItemModal(selectedProduct: any) {
    console.log(selectedProduct);
  }

}
