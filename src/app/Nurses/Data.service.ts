import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private NurseData: any;

  setData(data: any) {
    this.NurseData = data;
  }

  getData() {
    return this.NurseData;
  }

}
