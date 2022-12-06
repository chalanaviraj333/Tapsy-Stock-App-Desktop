import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsbybrandPage } from './productsbybrand/productsbybrand.page';

@Injectable({
  providedIn: 'root'
})
export class MainModalViewServiceService {

  constructor(public modalController: ModalController) { }

  async onClickViewBrandProducts(selectedbrand: string) {
    const modal = await this.modalController.create({
      component: ProductsbybrandPage,
      componentProps: {
        "selectedBrand": selectedbrand
      },
      cssClass: 'view-brand-products-class',
      swipeToClose: true,
    });
    return await modal.present();

  }
}
