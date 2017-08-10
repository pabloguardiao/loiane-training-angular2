import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  url : string = "http://loiaine-training";
  cursoAngular: boolean = true;
  urlImagem: string = "http://lorempixel.com/400/200/sports/";

  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 10;
  }

  getCurtirCurso(){
    return true;
  }
}
