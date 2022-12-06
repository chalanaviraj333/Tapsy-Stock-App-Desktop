import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Remote } from "../remote";
import { ModalserviceService } from "../modalservice.service";
import { RemoteShell } from "../remote-shell"
import { SelectedCar } from "../selected-car";
import { DatabaseServiceService } from "../database-service.service";
import { IonRouterOutlet } from "@ionic/angular";

interface Car {
  brand: string;
  model: string;
  icon: string;
}


@Component({
  selector: "app-result",
  templateUrl: "./result.page.html",
  styleUrls: ["./result.page.scss"],
})
export class ResultPage implements OnInit {
  public startyear: string;
  public endyear: string;

  public selectedCarDetails: SelectedCar = {};

  printerrorremoteshells: string = "LOADING";
  iconerrorremoteshells: string = "happy-outline";
  isFetchingremoteshells: boolean = true;

  printerrorremotes: string = "LOADING";
  iconerrorremotes: string = "happy-outline";
  isFetchingRemotes: boolean = true;
  public compitableremotes: Array<Remote> = [];
  public compitableremoteshells: Array<RemoteShell> = []
  public carnotes: Array<string> = [];

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    private modelService: ModalserviceService,
    public databaseService: DatabaseServiceService
  ) {

    // getting selected car details from URL
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("selectedBrand" && "selectedModel" && "selectedYear")) {
        // redirect
        return;
      }
      this.selectedCarDetails.model = paramMap.get("selectedModel");
      this.selectedCarDetails.selectedyear = Number(
        paramMap.get("selectedYear")
      );
      this.selectedCarDetails.carbrand = paramMap.get("selectedBrand");

      this.startyear = paramMap.get("startyear");
      this.endyear = paramMap.get("endyear");
    });
  }

  ngOnInit() {
    // disable swipe to exit 
    this.routerOutlet.swipeGesture = false;

    // getting car photo from database
    this.http
      .get<{ [key: string]: Car }>(
        "https://tapsystock-a6450-default-rtdb.firebaseio.com/car-model.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            if (
              resData[key].brand == this.selectedCarDetails.carbrand &&
              resData[key].model == this.selectedCarDetails.model
            ) {
              this.selectedCarDetails.image = resData[key].icon;
            }
          }
        }
      });

    // getting car notes
    this.databaseService.gettingcarnotesforselectedCar(this.selectedCarDetails);

      // getting remotes
    this.http
      .get<{ [key: string]: Remote }>(
        "https://tapsystock-a6450-default-rtdb.firebaseio.com/remotes.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          let compatiblecars: any = resData[key].compitablecars;

          if (
            compatiblecars !== undefined &&
            compatiblecars.find(
              (i) =>
                i.brand === this.selectedCarDetails.carbrand &&
                i.model === this.selectedCarDetails.model &&
                this.selectedCarDetails.selectedyear >= i.startyear &&
                this.selectedCarDetails.selectedyear <= i.endyear
            )
          ) {
            this.compitableremotes.push({
              key,
              tapsycode: resData[key].tapsycode,
              boxnumber: resData[key].boxnumber,
              shell: resData[key].shell,
              inbuildchip: resData[key].inbuildchip,
              inbuildblade: resData[key].inbuildblade,
              remotetype: resData[key].remotetype.toUpperCase(),
              productType: resData[key].productType,
              suppliertype: resData[key].suppliertype,
              qtyavailable: resData[key].qtyavailable,
              battery: resData[key].battery,
              buttons: resData[key].buttons,
              costperitem: resData[key].costperitem,
              frequency: resData[key].frequency,
              compitablebrands: resData[key].compitablebrands,
              image: resData[key].image,
              notes: resData[key].notes,
              recentAddedQuantity: resData[key].recentAddedQuantity,
              recentmoreStockAddDate: resData[key].recentmoreStockAddDate,
              totalSale: resData[key].totalSale,
              moreStock: resData[key].moreStock,
              compitablecars: resData[key].compitablecars,
            });
            this.compitableremotes.sort((a, b) =>
              a.boxnumber > b.boxnumber ? 1 : -1
            );
            this.isFetchingRemotes = false;
          }
        }

        if (this.compitableremotes.length == 0) {
          this.printerrorremotes = "No Remote Found";
          this.iconerrorremotes = "sad-outline";
        }
      });


      // getting remote shells
      this.http
      .get<{ [key: string]: RemoteShell }>(
        "https://tapsystock-a6450-default-rtdb.firebaseio.com/remote-shells.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          let compatiblecars: any = resData[key].compitablecars;

          if (
            compatiblecars !== undefined &&
            compatiblecars.find(
              (i) =>
                i.brand === this.selectedCarDetails.carbrand &&
                i.model === this.selectedCarDetails.model &&
                this.selectedCarDetails.selectedyear >= i.startyear &&
                this.selectedCarDetails.selectedyear <= i.endyear
            )
          ) {
            this.compitableremoteshells.push({
              key,
              tapsycode: resData[key].tapsycode,
              boxnumber: resData[key].boxnumber,
              shell: resData[key].shell,
              productType: resData[key].productType,
              inbuildblade: resData[key].inbuildblade,
              buttons: resData[key].buttons,
              image: resData[key].image,
              qtyavailable: resData[key].qtyavailable,
              recentAddedQuantity: resData[key].recentAddedQuantity,
              recentmoreStockAddDate: resData[key].recentmoreStockAddDate,
              totalSale: resData[key].totalSale,
              moreStock: resData[key].moreStock,
              notes: resData[key].notes

            });
            this.compitableremoteshells.sort((a, b) =>
              a.boxnumber > b.boxnumber ? 1 : -1
            );
            this.isFetchingremoteshells = false;
          }
        }

        if (this.compitableremoteshells.length == 0) {
          this.printerrorremoteshells = "No Shell Found";
          this.iconerrorremoteshells = "sad-outline";
        }
      });
  }

  // calling add car note modal
  async onClickAddNotes() {
    await this.modelService.onClickaddNotes(this.selectedCarDetails);
  }

  // calling remotedetail View Modal
  async onClickItemModal(selectedtapsycode: string) {

    const selectedremote = this.compitableremotes.find(remote => remote.tapsycode === selectedtapsycode);

    await this.modelService.onClickViewItem(selectedremote);
  }
}
