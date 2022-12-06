import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent, IonSearchbar } from "@ionic/angular";
import { DatabaseServiceTabThreeService } from "../database-service-tab-three.service";
import { ModalserviceService } from "../modalservice.service";
import { RemoteShell } from "../remote-shell";

@Component({
  selector: "app-remoteshell-page",
  templateUrl: "./remoteshell-page.page.html",
  styleUrls: ["./remoteshell-page.page.scss"],
})
export class RemoteshellPagePage implements OnInit {
  @ViewChild("search", { static: false }) search: IonSearchbar;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  public hideButton: boolean = false;
  public data: any;

  counter(i: number) {
    return new Array(i);
  }


  constructor(public databaseTabThreeSerive: DatabaseServiceTabThreeService, private modelService: ModalserviceService) {}

  ngOnInit() {
    this.databaseTabThreeSerive.getAllRemoteShells();
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 1000);
  }


  _ionChange(event) {
    const entervalue = event.target.value;

    this.databaseTabThreeSerive.performSearch(entervalue);

  }

  async onClick(selectedRemote: RemoteShell) {

    await this.modelService.onClickViewItemRemoteShell(selectedRemote);
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

  onClickFilter() {
    this.modelService.onClickFilterTabThree();
  }

  doRefresh() {
    
    this.databaseTabThreeSerive.getAllRemoteShells();
  }
}
