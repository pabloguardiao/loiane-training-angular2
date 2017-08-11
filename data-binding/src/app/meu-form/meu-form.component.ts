import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'abc';
  pessoa: any = {
    nome: "João Paulo",
    idade: 3,
    endereco: {
      rua: "sao joao"
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
