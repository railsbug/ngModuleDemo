import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { B2ComponentComponent } from './b2-component/b2-component.component';
// import { B1ComponentComponent } from './b1-component/b1-component.component';

import { RouterModule } from '@angular/router';
const routes = [
  {
    path: 'b1-component',
    loadChildren: './b1-component/b1.module#B1Module',
  },
  {
    path: 'b2-component',
    loadChildren: './b2-component/b2.module#B2Module',
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class BModule { }
