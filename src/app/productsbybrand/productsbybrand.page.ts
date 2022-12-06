import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseServiceService } from '../database-service.service';
import { ModalserviceService } from '../modalservice.service';


@Component({
  selector: 'app-productsbybrand',
  templateUrl: './productsbybrand.page.html',
  styleUrls: ['./productsbybrand.page.scss'],
})
export class ProductsbybrandPage implements OnInit {

  @Input() selectedBrand: string;


  constructor(private modalController: ModalController, public databaseService: DatabaseServiceService, private modalService: ModalserviceService) { }

  ngOnInit() {
    this.databaseService.getBrandedProducts(this.selectedBrand);

  }

  _onClickDismiss() {
    this.databaseService.closebrandedProductsPage();
  }

  onClickFilter() {
    this.modalService.onClickFilter();
  }

  onClickItemModal(selectedProduct: any) {
    this.modalService.onClickViewItem(selectedProduct);
  }

}
