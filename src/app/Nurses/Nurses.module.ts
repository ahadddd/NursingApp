import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesComponent } from './Nurses/Nurses.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: NursesComponent
      }
    ])
  ],
  declarations: [NursesComponent]
})
export class NursesModule { }
