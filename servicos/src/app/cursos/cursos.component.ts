import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
  , providers: [ CursosService ]
})
export class CursosComponent implements OnInit {

  cursos : string[] = [];
  // private cursosService: CursosService;

  constructor(private cursosService: CursosService) { 
    // this.cursosService = new CursosService();
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    // this.cursosService.
  }

}
