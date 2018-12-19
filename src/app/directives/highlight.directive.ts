import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;
  

  constructor(private el: ElementRef) { 
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(null);
  }

  setColor(color) {
    this.el.nativeElement.style.color = color;
  }
}
