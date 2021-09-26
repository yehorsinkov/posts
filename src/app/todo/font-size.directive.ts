import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  // constructor(private el: ElementRef) {
  //   el.nativeElement.style.fontSize = '20px';
  //   el.nativeElement.style.color = 'red';
  // }

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'red';
    this.setFontSize(20);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
    this.setFontSize(14);
  }

  setFontSize(size: number | string): void {
    this.el.nativeElement.style.fontSize = `${size}px`;
  }

}
