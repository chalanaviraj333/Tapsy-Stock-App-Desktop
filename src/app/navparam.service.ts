import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavparamService {

  brand:any;
  key: string;
  year: number;

  constructor() { }

setNavData(navObj){
  this.brand = navObj

}

getNavData(){
  return this.brand;

}

setRemoteKey(navObj) {
  this.key = navObj;
}


getRemoteKey() {
  return this.key;
}

setCarNote(navObj) {
  this.year = navObj;
}


getCarNote() {
  return this.year;
}

}
