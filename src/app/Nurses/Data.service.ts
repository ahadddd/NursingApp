import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private NurseData: any;

  setData(data: any) {
    this.NurseData = data;
    if(this.NurseData == undefined) {
      console.log('Data not written to object.');
      
    }
  }

  getData() {
    return this.NurseData;
  }

}
