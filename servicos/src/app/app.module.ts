import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosModule } from './cursos/cursos.module';
import { ReceberCursoCriadoComponent } from './receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    CriarCursoModule
  ],
  // providers: [ CursosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
