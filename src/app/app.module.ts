import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { RouterModule } from '@angular/router';
import { NursesComponent } from './Nurses/Nurses/Nurses.component';

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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [RouterModule]
})
export class AppModule { }
