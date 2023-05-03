import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Nurses',
  templateUrl: './Nurses.component.html',
  styleUrls: ['./Nurses.component.css']
})
export class NursesComponent implements OnInit {

  baseURL = `https://api.digital4nurse.ch/api/public/nurse-search`;
  resource = `{"sort_by": "name-asc"}`;

  nurses = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  getNurses() {
    const req = this.http.post(this.baseURL, this.resource);
    console.log(req);

  }

}
