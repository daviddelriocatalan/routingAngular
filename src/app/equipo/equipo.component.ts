import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  persona1 : boolean = false;
  persona2 : boolean = false;
  persona3 : boolean = false;
  colaborador1 : boolean = false;
  
  mostrarPersona1(){
    if (this.persona1) {
      this.persona1 = false;
    } else {
      this.persona1 = true;
      this.persona2 = false;
      this.persona3 = false;
    }
  } 

  mostrarPersona2(){
    if (this.persona2) {
      this.persona2 = false;
    } else {
      this.persona2 = true;
      this.persona1 = false;
      this.persona3 = false;
    }
  }

  mostrarPersona3(){
    if (this.persona3) {
      this.persona3 = false;
    } else {
      this.persona3 = true;
      this.persona1 = false;
      this.persona2 = false;
    }
  }

  mostrarColaborador1(){
    if (this.colaborador1) {
      this.colaborador1 = false;
    } else {
      this.colaborador1 = true;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
