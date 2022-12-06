import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GarageRemote } from '../interfaces/garage-remote';
import { NgForm } from "@angular/forms";
import { RemoteNote } from '../remote-note';
import { Storage } from '@capacitor/storage';
import { Printer } from '@awesome-cordova-plugins/printer/ngx';

@Component({
  selector: 'app-view-garage-remote-details',
  templateUrl: './view-garage-remote-details.page.html',
  styleUrls: ['./view-garage-remote-details.page.scss'],
})
export class ViewGarageRemoteDetailsPage implements OnInit {

  @Input() selectedGarageRemote : GarageRemote;

  private username: string = 'User1';
  public newValue: any;

  constructor(private modalController: ModalController, private printer: Printer) { }

  ngOnInit() {
    Storage.get({key: 'username'}).then(
      storedData => {
        if (!storedData || !storedData.value) {
          return;
        }
        this.username = JSON.parse(storedData.value);
      });

      this.toDataURL(`${this.selectedGarageRemote.instructionsImage}`, (dataUrl) => {
        if (dataUrl !== undefined){
          const splitInputArray: Array<string> = dataUrl.split('base64,');
          this.newValue = splitInputArray[1];
        }
        
      });
  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }

  _onClickPrintInstrauctions() {
    this.printer.isAvailable().then(onSuccess => {

      this.printer.print(`base64://${this.newValue}`);
    },);
  }

  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  onSubmit(form: NgForm) {
    const newRemoteNote: RemoteNote = {
      username: this.username,
      notebodyText: form.value.remotenote
    };
    if (this.selectedGarageRemote.notes == undefined) {
      this.selectedGarageRemote.notes = [];
    }

    this.selectedGarageRemote.notes.push(newRemoteNote);
    form.reset();
    this.modalController.dismiss();
    
  }

}
