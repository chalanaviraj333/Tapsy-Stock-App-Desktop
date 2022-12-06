import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonSearchbar } from '@ionic/angular';
import { DatabaseServiceService } from 'src/app/database-service.service';

@Component({
  selector: 'app-car-model-page',
  templateUrl: './car-model-page.page.html',
  styleUrls: ['./car-model-page.page.scss'],
})
export class CarModelPagePage implements OnInit {

  @ViewChild("search", { static: false }) search: IonSearchbar;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  public selectedBrand: string;
  public hideButton: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public databaseService: DatabaseServiceService
  ) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("brandId")) {
        // redirect
        return;
      }
      this.selectedBrand = paramMap.get("brandId");
    });
  }

  ngOnInit() {

    this.databaseService.getAllCarModels(this.selectedBrand);
  }

  onClick(x, startyear, endyear) {
    const selectedModel = x;

    this.router.navigateByUrl(
      "tabs/car-brand-page/car-model-page/car-sub-model-page/" +
        this.selectedBrand +
        "/" +
        selectedModel +
        "/" +
        startyear +
        "/" +
        endyear
    );
  }

  _ionChange(event) {
    const val = event.target.value;
    this.databaseService.perfromSearchCarModel(val);
  }



  logScrollStart() {
    setTimeout(() => {
      this.hideButton = true;
    }, 500);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
    setTimeout(() => {
      this.hideButton = false;
    }, 4000);
  }

}
