
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatabaseServiceService } from 'src/app/database-service.service';
import { CarSubModel } from 'src/app/interfaces/car-sub-model';


@Component({
  selector: 'app-result-sub-model',
  templateUrl: './result-sub-model.page.html',
  styleUrls: ['./result-sub-model.page.scss'],
})
export class ResultSubModelPage implements OnInit {

  public selectedSubModel: CarSubModel = {key: '', brand: '', model: '', submodel: '', typeofignition: '', icon: '', startyear: 2001, endyear: 2002, compatibleremotes: [], compatibleremoteshells: [], chipID: '', freq: '', profile: '',
  allLostKeyPrice: 0, spareKeyPrice: 0, compatibleDevices: [], allLostKeySpecialNotes: [], spareKeySpecialNotes: [], allLostKeyPriceUpdateDate: new Date, spareKeyPriceUpdateDate: new Date};
  public modelstartYear: string = '';
  public modelendYear: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
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
    this.databaseService.getAllCarSubModels(this.selectedSubModel.brand, this.selectedSubModel.model);
  }

  onClickItemModal(selectedtapsycode: string) {

  }

  onSubmitAllLostKeyPrice(form: NgForm) {
    this.selectedSubModel.allLostKeyPrice = form.value.allLostKeyPrice;
    this.selectedSubModel.allLostKeyPriceUpdateDate = new Date();
      this.selectedSubModel.allLostKeySpecialNotes = [];
      this.selectedSubModel.spareKeySpecialNotes = [];


    if (form.value.eprom == true) {
      this.selectedSubModel.allLostKeySpecialNotes.push('EPROM Programming');
    }
    if (form.value.twokeysmust == true) {
      this.selectedSubModel.allLostKeySpecialNotes.push('Two Keys Required');
    }
    if (form.value.keydiycompatible == true) {
      this.selectedSubModel.allLostKeySpecialNotes.push('KEYDIY Compatible');
      this.selectedSubModel.spareKeySpecialNotes.push('KEYDIY Compatible');
    }
    if (form.value.genuineonly == true) {
      this.selectedSubModel.allLostKeySpecialNotes.push('Genuine Key Only');
      this.selectedSubModel.spareKeySpecialNotes.push('Genuine Key Only');
    }

    this.databaseService.updateCarSubmodelDetails(this.selectedSubModel);
  }

  editAllLostKeyData() {
    this.selectedSubModel.allLostKeyPrice = 0;
  }

  editSpareKeyData() {
    this.selectedSubModel.spareKeyPrice = 0;
  }

  onSubmitSpareKeyPrice(form: NgForm) {
    this.selectedSubModel.spareKeyPrice = form.value.spareKeyPrice;
    this.selectedSubModel.spareKeyPriceUpdateDate = new Date();
      this.selectedSubModel.spareKeySpecialNotes = [];

    if (form.value.keydiycompatible == true) {
      this.selectedSubModel.spareKeySpecialNotes.push('KEYDIY Compatible');
    }
    if (form.value.genuineonly == true) {
      this.selectedSubModel.spareKeySpecialNotes.push('Genuine Key Only');
    }

    this.databaseService.updateCarSubmodelDetails(this.selectedSubModel);
  }

}
