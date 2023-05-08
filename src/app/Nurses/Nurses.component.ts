import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './Data.service';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Nurses',
  templateUrl: './Nurses.component.html',
  styleUrls: ['./Nurses.component.css']
})
export class NursesComponent implements OnInit {

  baseURL = `https://api.digital4nurse.ch/api/public/nurse-search`;
  resource = { "sort_by": "name-asc" };
  loading = '';
  nurses: any = [];
  selectedNurses: any = [];
  showModal=false;
  scheduledNurse: any;
  totalAmount: number = 0;

  constructor(private http: HttpClient, private dataService: DataService, public dp: DatePipe, private router:Router) { }

  ngOnInit() {
    this.getNurses();
  }

  getNurses() {
    this.loading = 'loading';
    const req = this.http.post(this.baseURL, this.resource);
    req.subscribe({
      next: (res: any) => {
        this.nurses = res.data;
        // console.log(this.nurses);
        this.loading = 'done';
      },
      error: () => {
        this.loading = 'error';
      }
    })
  }

  selectAll() {
    this.selectedNurses = this.nurses;
    let total: number = 0;
    for(var i = 0; i < this.nurses.length; i++) {
      this.nurses[i].services.forEach((item: any) => {
        total += item.base_price;
      })
    }
    this.totalAmount = total;
  }

  deselectAll() {
    this.selectedNurses = [];
    this.totalAmount = 0;
  }

  addNurse(index: any) {
    let exists = false;
    // console.log(this.nurses[index]);
    this.selectedNurses.forEach((item: any) => {
      if(item.id == this.nurses[index].id) {
        alert('Nurse already added.');
        exists = true;
        return;
      }
    })
    if(exists == false) {
      this.selectedNurses.push(this.nurses[index]);
      let total: number = 0;
      this.nurses[index].services.forEach((item: any) => {
        total += item.base_price;
      });
      this.totalAmount += total;
      // alert('Nurse Added.');
    }
  }

  removeNurse(index: any) {
    console.log(this.selectedNurses[index]);
    let deductable: any = 0;
    this.selectedNurses[index].services.forEach((item: any) => {
      deductable += item.base_price;
    })
    this.totalAmount -= deductable;
    this.selectedNurses.splice(index, 1);
    console.log(this.selectedNurses);
  }

  sendNurseData(index: any) {
    let id = this.nurses[index].id;
    this.router.navigate([`/profile`, id])

    // let res: any  = this.http.get(`https://api.digital4nurse.ch/api/public/nurse/${id}`);
    // let data: any;
    // res.subscribe({
    //   next: (res: any) => {console.log(res.data)},
    //   error: () => alert('Error Encountered')
    // })
    // this.dataService.setData(data);
  }



  displayModal(index: any) {
    this.showModal = true;
    this.scheduledNurse = this.nurses[index];
    console.log(this.scheduledNurse);
  }
  closeModal() {
    this.showModal = false;
  }

}
