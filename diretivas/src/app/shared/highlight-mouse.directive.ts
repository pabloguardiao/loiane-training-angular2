import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  // Caso não precise manipular nada pode ser usado assim
  // @HostBinding('style.backgroundColor')
  // backgroundColor: string;

  // Caso precise fazer alguma manipulação
  @HostBinding('style.backgroundColor')
  get setColor() {
    // codigo extra
    return this.backgroundColor;
  }
  private backgroundColor: string;

  constructor(
    private _elementRef: ElementRef, 
    private _renderer: Renderer
  ) { }

  @HostListener('mouseenter') 
  onMouseOver() {
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement, 
    //   'background-color', 
    //   'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement, 
    //   'background-color', 
    //   'white'
    // );
    this.backgroundColor = 'white';
  }

}
