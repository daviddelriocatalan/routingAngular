import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EquipoComponent } from './equipo/equipo.component';
import {ProyectoComponent} from './proyecto/proyecto.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipo', component: EquipoComponent },
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'proyecto/:id', component: ProyectoComponent},
  {path: ':**', component: ErrorComponent}
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
