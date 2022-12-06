import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Kdxhorse } from "../interfaces/kdxhorse";

@Injectable({
  providedIn: "root",
})
export class XhorsekdDatabaseService {
  private kDXHorseRemotes: Array<Kdxhorse> = [];
  public filterProductArray: Array<Kdxhorse> = [];
  private duplicateSeriesArray: Array<string> = [];
  public seriesArray: Array<string> = [];

  constructor(private http: HttpClient) {}

  getAlllKDXhorseRemotes() {
    this.http
      .get<{ [key: string]: Kdxhorse }>(
        "https://tapsystock-a6450-default-rtdb.firebaseio.com/kd-xhorse-remotes.json"
      )
      .subscribe((resData) => {
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            this.kDXHorseRemotes.push({
              key,
              tapsycode: resData[key].tapsycode,
              boxnumber: resData[key].boxnumber,
              shell: resData[key].shell,
              series: resData[key].series,
              productcategory: resData[key].productcategory,
              name: resData[key].name,
              producttype: resData[key].producttype,
              qtyavailable: resData[key].qtyavailable,
              image: resData[key].image,
              butttons: resData[key].butttons,
              notes: resData[key].notes
            });

            if (resData[key].series != null && resData[key].series != "") {
              this.duplicateSeriesArray.push(resData[key].series);
            }
          }
        }

        this.kDXHorseRemotes.sort((a, b) =>
          a.boxnumber > b.boxnumber ? 1 : -1
        );

        // Series List
        this.seriesArray = this.duplicateSeriesArray.filter(function (
          elem,
          index,
          self
        ) {
          return index === self.indexOf(elem);
        });
        this.seriesArray.sort((a, b) => (a > b ? 1 : -1));
      });

    this.filterProductArray = this.kDXHorseRemotes;
  }
}
