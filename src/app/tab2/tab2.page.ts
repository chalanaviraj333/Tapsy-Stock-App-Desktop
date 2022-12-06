import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { IonContent, IonSearchbar } from "@ionic/angular";
import { DatabaseServiceTabTwoService } from "../database-service-tab-two.service";
import { ModalserviceService } from "../modalservice.service";
import { Remote } from "../remote";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit, OnDestroy {
  @ViewChild("search", { static: false }) search: IonSearchbar;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  public hideButton: boolean = false;
  public data: any;

  counter(i: number) {
    return new Array(i);
  }

  constructor(
    private modelService: ModalserviceService,
    public databaseTabTwoService: DatabaseServiceTabTwoService
  ) {}

  ngOnInit() {
    this.databaseTabTwoService.getAllRemotes();
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


  ngOnDestroy() {}

  _ionChange(event) {
    const entervalue = event.target.value;

    this.databaseTabTwoService.performSearch(entervalue);

  }

  async onClick(selectedRemote: Remote) {

    await this.modelService.onClickViewItem(selectedRemote);
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
    this.modelService.onClickFilterTabTwo();
  }

  doRefresh() {
    
    this.databaseTabTwoService.getAllRemotes();
  }

}
