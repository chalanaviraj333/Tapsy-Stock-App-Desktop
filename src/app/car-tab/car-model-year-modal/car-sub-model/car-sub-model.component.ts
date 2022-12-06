import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DatabaseServiceService } from 'src/app/database-service.service';
import { CarSubModel } from 'src/app/interfaces/car-sub-model';

@Component({
  selector: 'app-car-sub-model',
  templateUrl: './car-sub-model.component.html',
  styleUrls: ['./car-sub-model.component.scss'],
})
export class CarSubModelComponent implements OnInit {

  public selectedBrand: string;
  public selectedModel: string;
  private modelStartYear: string;
  private modelEndYear: string;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public databaseService: DatabaseServiceService
  ) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (
        !paramMap.has(
          "selectedBrand" && "selectedModel" && "startyear" && "endyear"
        )
      ) {
        // redirect
        return;
      }
      this.selectedBrand = paramMap.get("selectedBrand");
      this.selectedModel = paramMap.get("selectedModel");
      this.modelStartYear = paramMap.get("startyear");
      this.modelEndYear = paramMap.get("endyear");
    });
  }

  ngOnInit() {

    this.databaseService.getAllCarSubModels(this.selectedBrand, this.selectedModel);
  }

  onClickSubModel(submodel: CarSubModel) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "data": JSON.stringify(submodel)
      }
    }

    this.router.navigate(
       ["tabs/car-brand-page/car-model-page/car-sub-model-page/result-sub-model/" + this.modelStartYear + '/' + this.modelEndYear],
        navigationExtras);
  }

  _ionChange(event) {
    const val = event.target.value;
    this.databaseService.perfromSearchCarModel(val);
  }

}
