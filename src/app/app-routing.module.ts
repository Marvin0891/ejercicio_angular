import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContacComponent } from './pages/contac/contac.component';

const routes: Routes=[
{path:'home', component: HomeComponent},
{path:'about', component: AboutComponent},
{path:'contac', component: ContacComponent},
{path:'**', redirectTo: 'home'}
];

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
