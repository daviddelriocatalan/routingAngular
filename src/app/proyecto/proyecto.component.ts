import { Component, OnInit } from '@angular/core';

import { Proyecto } from '../modelos/proyecto.modelo';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  }

  proyectos: Array<Proyecto> = [
    { id: 1, nombre: 'PROYECTO RAKUSO', descripcion: 'RAKUSO es el nombre de una organización para militar subencionada por los judios de Israel'},
    { id: 2, nombre: 'PROYECTO VENGADORES', descripcion: 'Habia una idea. Reunir a los seres más peligrosos de la tierra. Alguien tiene que librar las batallas que nosotros no podemos'},
    { id: 3, nombre: 'PROYECTO XRACSO21', descripcion: 'EL mejor canal de Twitch de todos los tiempos. Jodete Elrubius. Jodete Ibai. Y jodete puto calvod e mierda Auronplei.'},
    { id: 4, nombre: 'PROYECTO CHIPI-X', descripcion: 'JAJAJAJAJAJAJJAJAJAJAJaJAJAJAJ PUTO OSCAR DE MIERDA JAJAJAJAJAJAJAJAJAJAJAJ CHIPIRON JAJAJAJAJAJAJAJAJAJAJAJ'}
  ];

  retorno : string = this.route.snapshot.params.id;

  valor = parseInt(this.retorno) - 1;

  id : string = this.proyectos[this.valor].id.toString();
  nombre : string = this.proyectos[this.valor].nombre;
  descripcion : string = this.proyectos[this.valor].descripcion;

}
