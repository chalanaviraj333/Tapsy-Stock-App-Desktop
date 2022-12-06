import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { CarNote } from "./car-note";
import { NavparamService } from "./navparam.service";
import { SelectedCar } from "./selected-car";
import { Storage } from '@capacitor/storage';
import { Remote } from "./remote";
import { Carmodel } from "./carmodel";
import { RemoteShell } from "./remote-shell";
import { Carbrand } from "./carbrand";
import { CarModel } from "./interfaces/car-model";
import { CarSubModel } from "./interfaces/car-sub-model";

export interface selectedData {
  selectedCategory: string;
  selectedFrequncy: string;
  selectedChip: string;
  selectedBlade: string;
}


@Injectable({
  providedIn: "root",
})
export class DatabaseServiceService {

  //
  public isFetching: boolean = true;

  // all car brands array and search car brand array
  private allCarBrands: Array<Carbrand> = [];
  public searchCarBrands: Array<Carbrand> = [];

  // all car models array and search car model array
  private allCarModels: Array<CarModel> = [];
  public searchCarModels: Array<CarModel> = [];

  // all car sub models array and search car model array
  private allCarSubModels: Array<CarSubModel> = [];
  public searchCarSubModels: Array<CarSubModel> = [];


  // 
  public carNotesforCar: Array<CarNote> = [];

  public allremotes: Array<Remote> = [];
  public searchedCarModels: Array<Carmodel> = [];
  private brandedProducts: Array<any> = [];
  public filteredBrandProducts: Array<any> = [];
  public frequcnyList: Array<string> = [];
  public chipList: Array<string> = [];
  public bladeList: Array<string> = [];
  
  public selectedData: selectedData = {
    selectedCategory: '',
    selectedFrequncy: '',
    selectedBlade: '',
    selectedChip: ''
  }


  constructor(
    private http: HttpClient,
    public toastController: ToastController,
    private navParamService: NavparamService,
    private modalController: ModalController
  ) { }


  // <---- all database service related to tab 1 ---->

  // get all carbrands from database
  getAllCarBrands() {
    if (this.allCarBrands.length == 0) {
      this.http.get<{ [key: string]: Carbrand }>('https://tapsy-stock-app-v3-database-default-rtdb.firebaseio.com/all-car-brands.json')
      .subscribe(resData => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)){
              this.allCarBrands.push({key, name: resData[key].name, icon: resData[key].icon })
              this.allCarBrands.sort((a, b) => (a.name > b.name) ? 1 : -1)
          }           
        } 
        this.searchCarBrands = this.allCarBrands;      
    });
    } 
  }

  // perform search car brand on tab 1 page/car-brand page
  performSearchCarBrand(val: string) {
    this.searchCarBrands = this.allCarBrands;

    if (val && val.trim() != '') {
      this.searchCarBrands = this.searchCarBrands.filter((item: any) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  // duplicate car brands to another database
  // copyCarBrandsinDatabase() {
  //   this.allCarBrands.forEach(carbrand => {
  //     this.http
  //     .post(
  //       "https://tapsy-stock-app-v3-database-default-rtdb.firebaseio.com/all-car-brands.json",
  //       { ...carbrand, key: null }
  //     )
  //     .subscribe((resData) => {
  //       console.log(resData);
  //     });
  //   });
  // }



  // get all car models from the database
  getAllCarModels(selectedCarBrand: string) {
    this.isFetching = true;
    this.allCarModels = [];

      this.http
      .get<{ [key: string]: CarModel }>(
        "https://tapsy-stock-app-v3-database-default-rtdb.firebaseio.com/all-car-models.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            if (resData[key].brand == selectedCarBrand) {
              this.allCarModels.push({
                key,
                brand: resData[key].brand,
                model: resData[key].model,
                startyear: resData[key].startyear,
                endyear: resData[key].endyear,
                icon: resData[key].icon,
                show: resData[key].show
              });
              this.allCarModels.sort((a, b) => (a.model > b.model ? 1 : -1));
              this.isFetching = false;
            }
          }
        }

        this.searchCarModels = this.allCarModels;

        if (this.allCarModels.length == 0) {
          this.isFetching = false;
        }
        
      });
  }

    // get all car models from the database
    // getAllCarModelsWithoutFilter() {
    //   this.isFetching = true;
    //   this.allCarModels = [];
  
    //     this.http
    //     .get<{ [key: string]: CarModel }>(
    //       "https://tapsystock-a6450-default-rtdb.firebaseio.com/car-model.json"
    //     )
    //     .subscribe((resData) => {
    //       for (const key in resData) {
    //         if (resData.hasOwnProperty(key)) {
    //             this.allCarModels.push({
    //               key,
    //               brand: resData[key].brand,
    //               model: resData[key].model,
    //               startyear: resData[key].startyear,
    //               endyear: resData[key].endyear,
    //               icon: resData[key].icon,
    //               show: resData[key].show
    //             });
    //             this.allCarModels.sort((a, b) => (a.model > b.model ? 1 : -1));
    //             console.log(this.allCarModels);
    //             this.isFetching = false;
    //           }
    //       }
          
    //     });
    // }

  // perform search on car model page
  perfromSearchCarModel(val: string) {
    this.searchCarModels = this.allCarModels;

    if (val && val.trim() != "") {
      this.searchCarModels = this.searchCarModels.filter((item: any) => {
        return item.model.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }


  // get all car sub models from database
  getAllCarSubModels(selectedBrand: string, selectedModel: string) {
    this.isFetching = true;
    this.allCarSubModels = [];

      this.http
      .get<{ [key: string]: CarSubModel }>(
        "https://tapsy-stock-app-v3-database-default-rtdb.firebaseio.com/all-car-sub-models.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            if (resData[key].brand == selectedBrand && resData[key].model == selectedModel) {
              this.allCarSubModels.push({
                key,
                brand: resData[key].brand,
                model: resData[key].model,
                submodel: resData[key].submodel,
                typeofignition: resData[key].typeofignition,
                icon: resData[key].icon,
                startyear: resData[key].startyear,
                endyear: resData[key].endyear,
                compatibleremotes: resData[key].compatibleremotes,
                compatibleremoteshells: resData[key].compatibleremoteshells,
                chipID: resData[key].chipID,
                freq: resData[key].freq,
                profile: resData[key].profile
              });
              this.allCarSubModels.sort((a, b) => (a.startyear > b.startyear ? 1 : -1));
              this.isFetching = false;
            }
          }
        }

        this.searchCarSubModels = this.allCarSubModels;

        if (this.allCarSubModels.length == 0) {
          this.isFetching = false;
        }
        
      });
  }


    // duplicate car brands to another database
    // copyCarModelssinDatabase() {
    //   this.allCarModels.forEach(carmodel => {
    //     this.http
    //     .post(
    //       "https://tapsy-stock-app-v3-database-default-rtdb.firebaseio.com/all-car-models.json",
    //       { ...carmodel, show: true, key: null }
    //     )
    //     .subscribe((resData) => {
    //       console.log(resData);
    //     });
    //   });
    // }

  // <---- end of tab1/car-brand page related database serivces ---->


  getBrandedProducts(selectedBrand: string) {
    this.brandedProducts = [];
    this.filteredBrandProducts = [];
    let duplicatefreqArray: Array<string> = [];
    let duplicatechipArray: Array<string> = [];
    let duplicatebladeArray: Array<string> = [];
    
    this.http
      .get<{ [key: string]: Remote }>(
        "https://tapsystock-a6450-default-rtdb.firebaseio.com/remotes.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            if (resData[key].compitablebrands !== undefined && resData[key].compitablebrands.find((i) => i === selectedBrand)){
              this.brandedProducts.push({
                key,
                tapsycode: resData[key].tapsycode,
                boxnumber: resData[key].boxnumber,
                shell: resData[key].shell,
                qtyavailable: resData[key].qtyavailable,
                inbuildchip: resData[key].inbuildchip,
                inbuildblade: resData[key].inbuildblade,
                battery: resData[key].battery,
                buttons: resData[key].buttons,
                costperitem: resData[key].costperitem,
                frequency: resData[key].frequency,
                remotetype: resData[key].remotetype,
                suppliertype: resData[key].suppliertype,
                productType: resData[key].productType,
                image: resData[key].image,
                notes: resData[key].notes,
                compitablecars: resData[key].compitablecars,
                compitablebrands: resData[key].compitablebrands,
                cssClass: ''
              });
              if (resData[key].frequency != null && resData[key].frequency != '') {
                duplicatefreqArray.push(resData[key].frequency);
              }

              if (resData[key].inbuildchip != null && resData[key].inbuildchip != '') {
                duplicatechipArray.push(resData[key].inbuildchip);
              }

              if (resData[key].inbuildblade != null && resData[key].inbuildblade != '') {
                duplicatebladeArray.push(resData[key].inbuildblade);
              }
              
            }
          }
        }

        // frequncy list
        this.frequcnyList = duplicatefreqArray.filter(function (elem, index, self) {
          return index === self.indexOf(elem);
        });
        this.frequcnyList.sort((a, b) => (a > b ? 1 : -1));
      
        // chip list
        this.chipList = duplicatechipArray.filter(function (elem, index, self) {
          return index === self.indexOf(elem);
        });
        this.chipList.sort((a, b) => (a > b ? 1 : -1));
        
        // blade array
        this.bladeList = duplicatebladeArray.filter(function (elem, index, self) {
          return index === self.indexOf(elem);
        });
        this.bladeList.sort((a, b) => (a > b ? 1 : -1));
        

        let indexofProduct: number = 0;

        this.brandedProducts.forEach(product => {
         indexofProduct = indexofProduct + 1;
         if (indexofProduct % 2 == 0) {
          product.cssClass = "cssLeftClass";
         }
         else {
          product.cssClass = "cssRightClass";
         }

      });
      });

      this.http
      .get<{ [key: string]: RemoteShell }>(
        "https://tapsystock-a6450-default-rtdb.firebaseio.com/remote-shells.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            if (resData[key].compitablebrands !== undefined && resData[key].compitablebrands.find((i) => i === selectedBrand)){
            this.brandedProducts.push({
              key,
              tapsycode: resData[key].tapsycode,
              boxnumber: resData[key].boxnumber,
              shell: resData[key].shell,
              remotetype: resData[key].remotetype,
              productType: resData[key].productType,
              qtyavailable: resData[key].qtyavailable,
              compitablebrands: resData[key].compitablebrands,
              image: resData[key].image,
              inbuildblade: resData[key].inbuildblade,
              buttons: resData[key].buttons,
              notes: resData[key].notes,
              cssClass: ''
            });

            if (resData[key].inbuildblade != null && resData[key].inbuildblade != '') {
              duplicatebladeArray.push(resData[key].inbuildblade);
            }
          }
        }
      }

      this.bladeList = duplicatebladeArray.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      });
      this.bladeList.sort((a, b) => (a > b ? 1 : -1));
      

      let indexofProduct: number = 0;

        this.brandedProducts.forEach(product => {
         indexofProduct = indexofProduct + 1;
         if (indexofProduct % 2 == 0) {
          product.cssClass = "cssLeftClass";
         }
         else {
          product.cssClass = "cssRightClass";
         }

      });
      });
      this.filteredBrandProducts = this.brandedProducts;
  }

  gettingcarnotesforselectedCar(selectedCar: SelectedCar) {
    this.carNotesforCar = [];

    this.http
      .get<{ [key: string]: CarNote }>(
        "https://tapsystock-a6450-default-rtdb.firebaseio.com/car-special-notes.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            if (
              resData[key].brand == selectedCar.carbrand &&
              resData[key].model == selectedCar.model &&
              resData[key].selectedyear == selectedCar.selectedyear
            ) {
              this.carNotesforCar.push({
                userename: resData[key].userename,
                carnotesDescription: resData[key].carnotesDescription,
                date: new Date(resData[key].date)
              });
            }
          }
        }
      });
  }

  closebrandedProductsPage() {
    this.selectedData = {
      selectedCategory: '',
      selectedFrequncy: '',
      selectedBlade: '',
      selectedChip: ''
    }
    this.modalController.dismiss();

  }

  addtonotes(newNote: CarNote) {
    this.http
      .post(
        "https://tapsystock-a6450-default-rtdb.firebaseio.com/car-special-notes.json",
        { ...newNote, key: null }
      )
      .subscribe((resData) => {
        this.carNotesforCar.push(newNote);
        this.presentToastAddNote();
        this.navParamService.setCarNote(newNote.selectedyear);
      });
  }

  async presentToastAddNote() {
    const toast = await this.toastController.create({
      message: "Note Added Successfully.",
      duration: 2000,
      position: "top",
      color: "dark",
    });
    toast.present();
  }

  setUsername(username: string) {
    const data = JSON.stringify(username);
      Storage.set({
        key: 'username',
        value: data,
      });
  }

  addProductNote(updatedRemote: Remote) {
    if (updatedRemote.productType == 'remote'){
      this.http
        .put(
          `https://tapsystock-a6450-default-rtdb.firebaseio.com/remotes/${updatedRemote.key}.json`,
          { ...updatedRemote, remoteKey: null }
        )
        .subscribe((resData) => {
          this.presentToastAddNote();
        });
    } else if (updatedRemote.productType == 'remoteshell') {
      this.http
        .put(
          `https://tapsystock-a6450-default-rtdb.firebaseio.com/remote-shells/${updatedRemote.key}.json`,
          { ...updatedRemote, remoteKey: null }
        )
        .subscribe((resData) => {
          this.presentToastAddNote();
        });
    }
    
  }


  filterProducts(selectedData: selectedData) {
    this.selectedData = selectedData;

    this.filteredBrandProducts = this.brandedProducts;

    if (this.selectedData.selectedCategory != '') {
      this.filteredBrandProducts = this.filteredBrandProducts.filter(product => product.productType === this.selectedData.selectedCategory);
    }
    if (this.selectedData.selectedFrequncy != '') {
      this.filteredBrandProducts = this.filteredBrandProducts.filter(product => product.frequency === this.selectedData.selectedFrequncy);
    }
    if (this.selectedData.selectedChip != '') {
      this.filteredBrandProducts = this.filteredBrandProducts.filter(product => product.inbuildchip === this.selectedData.selectedChip);
    }
    if (this.selectedData.selectedBlade != '') {
      this.filteredBrandProducts = this.filteredBrandProducts.filter(product => product.inbuildblade === this.selectedData.selectedBlade);
    }  

    let indexofProduct: number = 0;

    this.filteredBrandProducts.forEach(product => {
      indexofProduct = indexofProduct + 1;
      if (indexofProduct % 2 == 0) {
       product.cssClass = "cssLeftClass";
      }
      else {
       product.cssClass = "cssRightClass";
      }
    })
  }

}
