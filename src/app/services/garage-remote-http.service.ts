import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GarageRemote } from '../interfaces/garage-remote';

@Injectable({
  providedIn: 'root'
})
export class GarageRemoteHttpService {

  public filterGarageRemotes: Array<GarageRemote> = [];
  private allGarageRemotes: Array<GarageRemote> = [];

  constructor(private http: HttpClient) { }

  // get all garage remotes
  getAllGarageRemotes() {
    this.allGarageRemotes = [];
    
    this.http
      .get<{ [key: string]: GarageRemote }>(
        "https://tapsystock-a6450-default-rtdb.firebaseio.com/garage-remotes.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
              this.allGarageRemotes.push({
                key,
                tapsycode: resData[key].tapsycode,
                boxnumber: resData[key].boxnumber,
                shell: resData[key].shell,
                frequency: resData[key].frequency,
                compatibleBrand: resData[key].compatibleBrand,
                productType: resData[key].productType,
                qtyavailable: resData[key].qtyavailable,
                sellingPrice: resData[key].sellingPrice,
                image: resData[key].image,
                instructionsImage: resData[key].instructionsImage,
                notes: resData[key].notes,
                compatibleModels: resData[key].compatibleModels,
              });
          }
        }
      });
      this.filterGarageRemotes = this.allGarageRemotes;
  }

  performSearch(entervalue: string) {
    this.filterGarageRemotes = this.allGarageRemotes;

    if (entervalue && entervalue.trim() != "") {
      this.filterGarageRemotes = this.filterGarageRemotes.filter((currentremote) => {
        if (currentremote.compatibleBrand !== undefined) {
          let searchWord =
            currentremote.tapsycode + currentremote.compatibleBrand +
            currentremote.compatibleModels.toString();

          return searchWord.toLowerCase().indexOf(entervalue.toLowerCase()) > -1;
        } else {
          let searchWord = currentremote.tapsycode;
          return searchWord.toLowerCase().indexOf(entervalue.toLowerCase()) > -1;
        }
      });
    }
  }
}
