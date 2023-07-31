import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Input({ required: false }) appHover = ''

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.el.nativeElement.style.color = this.appHover;
    this.el.nativeElement.style.fontWeight = 'bolder';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = '';
    this.el.nativeElement.style.fontWeight = 'normal';
  }
}
