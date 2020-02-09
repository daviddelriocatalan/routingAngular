import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EquipoComponent } from './equipo/equipo.component';
import {Proyecto1Component} from './proyecto1/proyecto1.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipo', component: EquipoComponent },
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'proyecto1', component: Proyecto1Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
