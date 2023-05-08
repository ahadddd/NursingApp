import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProfileComponent } from './Profile.component';
import { RouterModule } from '@angular/router';
import { DataService } from '../Data.service';
import { NursesModule } from '../Nurses.module';

@NgModule({
  imports: [
    CommonModule,
    DatePipe,
    RouterModule.forChild([
      {
        // path: '',
        // component: ProfileComponent
      }
    ])
  ],
  declarations: [ProfileComponent],
  providers: [DatePipe]

})
export class ProfileModule { }
