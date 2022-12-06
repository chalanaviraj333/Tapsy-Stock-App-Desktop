import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { NgForm } from "@angular/forms";
import { SelectedCar } from "../selected-car";
import { DatabaseServiceService } from "../database-service.service";
import { CarNote } from "../car-note";
import { Storage } from '@capacitor/storage';

@Component({
  selector: "app-addnotes",
  templateUrl: "./addnotes.page.html",
  styleUrls: ["./addnotes.page.scss"],
})
export class AddnotesPage implements OnInit {
  @Input() selectedCar: SelectedCar;

  private username: string = 'User1';

  constructor(
    private modalController: ModalController,
    public databaseService: DatabaseServiceService
  ) {}

  ngOnInit() {
    Storage.get({key: 'username'}).then(
      storedData => {
        if (!storedData || !storedData.value) {
          return;
        }
        this.username = JSON.parse(storedData.value);
      });
  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }

  onSubmit(form: NgForm) {
    const newCarNote: CarNote = {
      brand: this.selectedCar.carbrand,
      userename: this.username,
      model: this.selectedCar.model,
      selectedyear: this.selectedCar.selectedyear,
      carnotesDescription: form.value.carnote,
      date: new Date(),
    };

    this.databaseService.addtonotes(newCarNote);
    this.modalController.dismiss();
  }
}
