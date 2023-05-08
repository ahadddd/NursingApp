import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  nurseData: any;
  userId: any;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("//////");
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    
  }
  

  

}
