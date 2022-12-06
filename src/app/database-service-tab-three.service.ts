import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RemoteShell } from './remote-shell';

interface selectedData {
  selectedButton: string;
  selectedBlade: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceTabThreeService {

  private allRemoteShells: Array<RemoteShell> = [];
  public filterRemoteShells: Array<RemoteShell> = [];
  public buttonList: Array<string> = [];
  public bladeList: Array<string> = [];

  public selectedData: selectedData = {
    selectedButton: '',
    selectedBlade: ''
  }

  constructor(private http: HttpClient) { }

  getAllRemoteShells() {

    this.allRemoteShells = [];
    this.filterRemoteShells = [];
    let duplicatebuttonsArray: Array<string> = [];
    let duplicatebladeArray: Array<string> = [];
    
    this.http
      .get<{ [key: string]: RemoteShell }>(
        "https://tapsystock-a6450-default-rtdb.firebaseio.com/remote-shells.json"
      )
    // this.http
    //   .get<{ [key: string]: RemoteShell }>(
    //     "https://tapsystock-a6450-default-rtdb.firebaseio.com/remote-shells-clone-delete-later.json"
    //   )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
              this.allRemoteShells.push({
                key,
                tapsycode: resData[key].tapsycode,
                boxnumber: resData[key].boxnumber,
                shell: resData[key].shell,
                remotetype: resData[key].remotetype,
                productType: resData[key].productType,
                compitablebrands: resData[key].compitablebrands,
                image: resData[key].image,
                qtyavailable: resData[key].qtyavailable,
                inbuildblade: resData[key].inbuildblade,
                buttons: resData[key].buttons,
                notes: resData[key].notes,
                recentAddedQuantity: resData[key].recentAddedQuantity,
                recentmoreStockAddDate: resData[key].recentmoreStockAddDate,
                moreStock: resData[key].moreStock,
                totalSale: resData[key].totalSale,
              });

              this.allRemoteShells.sort((a, b) => (a.boxnumber > b.boxnumber ? 1 : -1));

              if (resData[key].buttons != null && resData[key].buttons != '') {
                duplicatebuttonsArray.push(resData[key].buttons);
              }

              if (resData[key].inbuildblade != null && resData[key].inbuildblade != '') {
                duplicatebladeArray.push(resData[key].inbuildblade);
              }
          }
        }

      // buttons array
      this.bladeList = duplicatebladeArray.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      });
      this.buttonList.sort((a, b) => (a > b ? 1 : -1));
        
        // blade array
        this.buttonList = duplicatebuttonsArray.filter(function (elem, index, self) {
          return index === self.indexOf(elem);
        });
        this.buttonList.sort((a, b) => (a > b ? 1 : -1));
        
      });

      this.filterRemoteShells = this.allRemoteShells;
  }

  filterProducts(selectedData: selectedData) {
    this.selectedData = selectedData;

    this.filterRemoteShells = this.allRemoteShells;

    if (this.selectedData.selectedBlade != '') {
      this.filterRemoteShells = this.filterRemoteShells.filter(product => product.inbuildblade === this.selectedData.selectedBlade);
    } 
    if (this.selectedData.selectedButton != undefined && this.selectedData.selectedButton != '') {
      const stringtoNumber = Number(this.selectedData.selectedButton);

      this.filterRemoteShells = this.filterRemoteShells.filter(product => Number(product.buttons) == stringtoNumber);
    }  
  }

  performSearch(entervalue: string) {
    this.filterRemoteShells = this.allRemoteShells;

    if (entervalue && entervalue.trim() != "") {
      this.filterRemoteShells = this.filterRemoteShells.filter((currentremote) => {
        if (currentremote.compitablebrands !== undefined) {
          let searchWord =
          currentremote.tapsycode + currentremote.shell + currentremote.boxnumber +  
            currentremote.compitablebrands.toString();
          return searchWord.toLowerCase().indexOf(entervalue.toLowerCase()) > -1;
        } else {
          let searchWord = currentremote.tapsycode + currentremote.shell + currentremote.boxnumber;
          return searchWord.toLowerCase().indexOf(entervalue.toLowerCase()) > -1;
        }
      });
    }
  }

}
