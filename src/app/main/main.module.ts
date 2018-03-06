import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [MainComponent, ContentComponent, FooterComponent, HeaderComponent, NavbarComponent, ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
