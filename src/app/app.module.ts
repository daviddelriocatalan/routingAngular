import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { BarraNavegadoraComponent } from './barra-navegadora/barra-navegadora.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EquipoComponent } from './equipo/equipo.component';
import { FooterComponent } from './footer/footer.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegadoraComponent,
    HomeComponent,
    ProyectosComponent,
    EquipoComponent,
    FooterComponent,
    ProyectoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  exports:[
    BarraNavegadoraComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
