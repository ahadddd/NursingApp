import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './Data.service';

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
  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
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
  }

  deselectAll() {
    this.selectedNurses = [];
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
      alert('Nurse Added.');
    }
  }

  removeNurse(index: any) {
    console.log(this.selectedNurses[index]);
    this.selectedNurses.splice(index, 1);
    console.log(this.selectedNurses);
  }

  sendNurseData(index: any) {
    this.dataService.setData(this.nurses[index]);
  }
  displayModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }

}
