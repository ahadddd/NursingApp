import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetailsComponent } from './ProfileDetails.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileDetailsComponent
      }
    ])
  ],
  declarations: [ProfileDetailsComponent]
})
export class ProfileDetailsModule { }
