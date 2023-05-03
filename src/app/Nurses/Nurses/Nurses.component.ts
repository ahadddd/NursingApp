import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getNurses() {
    this.loading = 'loading';
    const req = this.http.post(this.baseURL, this.resource);
    req.subscribe({
      next: (res: any) => {
        this.nurses = res.data;
        console.log(this.nurses);
        this.loading = 'done';
      },
      error: () => {
        this.loading = 'error';
      }
    })
  }

}
