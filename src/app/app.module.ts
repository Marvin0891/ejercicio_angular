import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { AboutComponent } from './pages/about/about.component';
//import { ContacComponent } from './pages/contac/contac.component';
//import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
   AppComponent,
    //AboutComponent,
    //ContacComponent,
    //HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
