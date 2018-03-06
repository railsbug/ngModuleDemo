import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {
    path: 'a',
    loadChildren: './main/content/a/a.module#AModule'
  },
  {
    path: 'b',
    loadChildren: './main/content/b/b.module#BModule'
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, MainModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
