import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { DatabaseServiceService } from 'src/app/database-service.service';
import { CarSubModel } from 'src/app/interfaces/car-sub-model';
import { ModalserviceService } from 'src/app/modalservice.service';
import { Remote } from 'src/app/remote';
import { RemoteShell } from 'src/app/remote-shell';

@Component({
  selector: 'app-result-sub-model',
  templateUrl: './result-sub-model.page.html',
  styleUrls: ['./result-sub-model.page.scss'],
})
export class ResultSubModelPage implements OnInit {

  public selectedSubModel: CarSubModel = {key: '', brand: '', model: '', submodel: '', typeofignition: '', icon: '', startyear: 2001, endyear: 2002, compatibleremotes: [], compatibleremoteshells: [], chipID: '', freq: '', profile: ''};
  public modelstartYear: string = '';
  public modelendYear: string = '';

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    private modelService: ModalserviceService,
    public databaseService: DatabaseServiceService
  ) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (
        !paramMap.has(
        "startyear" && "endyear"
        )
      ) {
        // redirect
        return;
      }
      this.modelstartYear = paramMap.get("startyear");
      this.modelendYear = paramMap.get("endyear");
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedSubModel = JSON.parse(params["data"])
    });
  }

  ngOnInit() {
    
  }

  onClickItemModal(selectedtapsycode: string) {

  }

}
