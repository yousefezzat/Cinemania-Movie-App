import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollBackground]'
})
export class ScrollBackgroundDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  /* @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition =  document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition > 0) {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#000000');
    } else {
      this.renderer.removeStyle(this.elRef.nativeElement, 'background-color');
    }
  } */
}
