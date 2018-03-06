import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A1ComponentComponent } from './a1-component/a1-component.component';
import { A2ComponentComponent } from './a2-component/a2-component.component';
import {RouterModule} from '@angular/router';
const routes = [
  {
    path:'a1-component',
    component:A1ComponentComponent,
  },
  {
    path:'a2-component',
    component:A2ComponentComponent,
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [A1ComponentComponent, A2ComponentComponent]
})
export class AModule { }
