import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegadora',
  templateUrl: './barra-navegadora.component.html',
  styleUrls: ['./barra-navegadora.component.css']
})
export class BarraNavegadoraComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
