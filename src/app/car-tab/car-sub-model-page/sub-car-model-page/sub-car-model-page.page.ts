import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseServiceService } from 'src/app/database-service.service';

@Component({
  selector: 'app-sub-car-model-page',
  templateUrl: './sub-car-model-page.page.html',
  styleUrls: ['./sub-car-model-page.page.scss'],
})
export class SubCarModelPagePage implements OnInit {

  public selectedBrand: string;
  public selectedModel: string;

  // 
  public turntomodels: boolean = true;

  constructor(
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
    });
  }

  ngOnInit() {

  }

  onChangeType(event) {
    this.turntomodels = !this.turntomodels;
  }

}
