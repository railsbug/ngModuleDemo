import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { B1ComponentComponent } from './b1-component.component';
const routes = [
  {
    path:'**',
    component:B1ComponentComponent,
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    B1ComponentComponent
  ]
})
export class B1Module { }
