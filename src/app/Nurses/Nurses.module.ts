import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesComponent } from './Nurses.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './Profile/Profile.component';
import { ProfileModule } from './Profile/Profile.module';
import { AppModule } from '../app.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: NursesComponent
      },
      {
        path: 'profile/:id',
        component: ProfileComponent
      }
      
    ])
  ],
  declarations: [NursesComponent]
})
export class NursesModule { }
