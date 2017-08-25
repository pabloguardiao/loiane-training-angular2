import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { 
      // Problema de vulnerabilidade usando ElementRef
      // console.log(_elementRef);
      // _elementRef.nativeElement.style.backgroundColor = 'yellow'

      // Melhor forma para implementação de diretivas
      this._renderer.setElementStyle(
        this._elementRef.nativeElement,
        'background-color',
        'yellow'
      );
  }

}
