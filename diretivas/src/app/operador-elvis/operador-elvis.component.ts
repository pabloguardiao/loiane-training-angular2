import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.sass']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any = {
    desc: 'Descricao',
    responsavel: {
      usuario: null
    }
    // responsavel.usuario.nome
  };

  constructor() { }

  ngOnInit() {
  }

}
