import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { B2ComponentComponent } from './b2-component.component';
const routes = [
  {
    path:'**',
    component:B2ComponentComponent,
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [B2ComponentComponent]
})
export class B2Module { }
