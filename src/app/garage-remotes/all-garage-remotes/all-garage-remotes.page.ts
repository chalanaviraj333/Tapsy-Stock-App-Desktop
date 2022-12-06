import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { GarageRemote } from 'src/app/interfaces/garage-remote';
import { ModalserviceService } from 'src/app/modalservice.service';
import { GarageRemoteHttpService } from 'src/app/services/garage-remote-http.service';

@Component({
  selector: 'app-all-garage-remotes',
  templateUrl: './all-garage-remotes.page.html',
  styleUrls: ['./all-garage-remotes.page.scss'],
})
export class AllGarageRemotesPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  public hideButton: boolean = false;

  constructor(public garageRemotesService: GarageRemoteHttpService, private modelService: ModalserviceService) { }

  ngOnInit() {
    this.garageRemotesService.getAllGarageRemotes();
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

  _ionChange(event) {
    const entervalue = event.target.value;

    this.garageRemotesService.performSearch(entervalue);

  }

  async onClick(selectedGarageRemote: GarageRemote) {

    await this.modelService.onClickViewGarageRemote(selectedGarageRemote);
  }

  doRefresh() {
    this.garageRemotesService.getAllGarageRemotes();
    // this.garageRemotesService.addmoreItems();
  }

}
