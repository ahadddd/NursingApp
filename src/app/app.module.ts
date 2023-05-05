import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'nurses',
        loadChildren: () => import(`./Nurses/Nurses.module`).then(module => module.NursesModule)
      },
      {
        path: '',
        component: AppComponent
      }
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  // exports: [RouterModule]
})
export class AppModule { }
