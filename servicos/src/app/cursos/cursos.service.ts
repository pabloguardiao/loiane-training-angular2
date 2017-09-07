import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {
    
    private cursos: string[] = ['Angular 2', 'Java', 'Outro'];
    private emitirCursoCriado = new EventEmitter<string>();

    constructor() {
        console.log(this);
    }

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }
}