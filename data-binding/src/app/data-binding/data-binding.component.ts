import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  //styles: ``
})
export class DataBindingComponent implements OnInit {
  
  url : string = "http://loiaine-training";
  cursoAngular: boolean = true;
  urlImagem: string = "http://lorempixel.com/400/200/sports/";
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'Angular';
  valorInicial: number = 15;

  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 10;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(event) {
    console.log(event.novoValor);
  }
}
