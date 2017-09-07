import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string = '';
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) { 
    console.log("CursoDetalheComponent");
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        console.log("Console retorno: " + this.id);
      }
    );
  }

  ngOnDestroy() {
    console.log("Destroy app")
    this.inscricao.unsubscribe();
  }
}
