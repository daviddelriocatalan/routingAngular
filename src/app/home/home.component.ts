import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = ['../../assets/images/queen.jpg', '../../assets/images/queen2.jpg', '../../assets/images/queen3.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
