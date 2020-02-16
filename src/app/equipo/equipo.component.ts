import { Component, OnInit } from '@angular/core';

import { Empleado } from '../modelos/empleado.modelo';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  empleados: Array<Empleado> = [
    { id: 0, nombre: 'Freddie', apellidos: 'Mercury', puesto: 'Cantante' },
    { id: 1, nombre: 'Eric', apellidos: 'Clapton', puesto: 'Lead Guitar' },
    { id: 2, nombre: 'James', apellidos: 'Hetfield', puesto: 'Rhythm Guitar' },
    { id: 3, nombre: 'Cliff', apellidos: 'Burton', puesto: 'Bajo' },
    { id: 4, nombre: 'John', apellidos: 'Bonham', puesto: 'Bateria' }
  ];

  verFormularioCrear: boolean = true;
  verFormularioModificar: boolean = true;

  idEmpleado: string;
  nombreEmpleado: string = "Elton";
  apellidosEmpleado: string = "John";
  puestoEmpleado: string = "Pianista";

  //VISUALIZAR
  verEmpleado(empleado) {
    alert("ID: " + empleado.id +
      " - Nombre: " + empleado.nombre +
      " - Apellidos: " + empleado.apellidos +
      " - Puesto: " + empleado.puesto);
  }

  //BORRAR
  borrarEmpleado(empleado) {

    for (let i = 0; i < this.empleados.length; i++) {
      if (this.empleados[i].id == empleado.id) {
        this.empleados.splice(i, 1);
      }
    }
  }

  //MODIFICAR
  mostrarFormularioModificar(empleado) {

    if (this.verFormularioModificar) {

      this.verFormularioModificar = false;

      this.idEmpleado = empleado.id;
      this.nombreEmpleado = empleado.nombre;
      this.apellidosEmpleado = empleado.apellidos;
      this.puestoEmpleado = empleado.puesto;

    } else {

      this.verFormularioModificar = true;
      this.nombreEmpleado = "Elton";
      this.apellidosEmpleado = "John";
      this.puestoEmpleado = "Pianista";
    }
  }

  modificarMusico() {
    for (let i = 0; i < this.empleados.length; i++) {

      if (this.empleados[i].id == parseInt(this.idEmpleado)) {

        this.empleados.splice(i, 1);
        this.empleados.push({ id: parseInt(this.idEmpleado), nombre: this.nombreEmpleado, apellidos: this.apellidosEmpleado, puesto: this.puestoEmpleado });
        this.verFormularioModificar = true;
      }
    }
  }

  //CREAR
  mostrarFormularioCrear() {
    if (this.verFormularioCrear) {
      this.verFormularioCrear = false;
    } else {
      this.verFormularioCrear = true;
    }
  }

  calcularIdNuevoEmpleado() {
    return this.empleados.length + 1;
  }

  crearEmpleado() {
    this.empleados.push({ id: this.calcularIdNuevoEmpleado(), nombre: this.nombreEmpleado, apellidos: this.apellidosEmpleado, puesto: this.puestoEmpleado });
    this.verFormularioCrear = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
