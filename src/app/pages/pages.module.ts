import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContacComponent } from './contac/contac.component';



@NgModule({
  declarations: [HomeComponent, AboutComponent, ContacComponent],
  exports: [HomeComponent, AboutComponent, ContacComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
