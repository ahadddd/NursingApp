import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NursesComponent } from './Nurses.component';
import { HttpClientModule } from '@angular/common/http';

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
        path: 'profile',
        loadChildren: () => import(`./profile/profile.module`).then(module => module.ProfileModule)
      }
    ])
  ],
  declarations: [NursesComponent]
})
export class NursesModule { }
