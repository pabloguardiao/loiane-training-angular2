import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  // providers: [ CursosService ],
  declarations: [ CursosComponent ],
  exports: [ CursosComponent ]
})
export class CursosModule { }
