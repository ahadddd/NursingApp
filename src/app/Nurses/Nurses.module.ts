import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesComponent } from './Nurses.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [NursesComponent]
})
export class NursesModule { }
