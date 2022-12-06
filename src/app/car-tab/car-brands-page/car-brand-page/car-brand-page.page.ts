import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonSearchbar } from '@ionic/angular';
import { DatabaseServiceService } from 'src/app/database-service.service';
import { MainModalViewServiceService } from 'src/app/main-modal-view-service.service';

@Component({
  selector: 'app-car-brand-page',
  templateUrl: './car-brand-page.page.html',
  styleUrls: ['./car-brand-page.page.scss'],
})
export class CarBrandPagePage implements OnInit {

  @ViewChild('search', { static: false }) search: IonSearchbar;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  public hideButton: boolean = false;

  constructor(
    private router: Router, private mainModalControlService: MainModalViewServiceService, public databaseService: DatabaseServiceService
  ) {

  }

  ngOnInit() {
    this.databaseService.getAllCarBrands();
    // this.databaseService.getAllCarModelsWithoutFilter();
  }

  onClick(selectedcarbrand) {
    this.router.navigateByUrl('tabs/car-brand-page/car-model-page/' + selectedcarbrand);
  }

  _ionChange(event) {
    const val = event.target.value;
    this.databaseService.performSearchCarBrand(val);

  }


  logScrollStart() {
    setTimeout(() => {
      this.hideButton = true;
    }, 500);
  }

  ScrollToTop(){
    this.content.scrollToTop(1500);
    setTimeout(() => {
      this.hideButton = false;
    }, 4000);
    
  }

  onClickViewBrandProducts(selectedbrand: string) {
    this.mainModalControlService.onClickViewBrandProducts(selectedbrand);
  }


}
