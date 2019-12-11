import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({ selector: '[appAsideHover]' })
export class AsideHoverDirective {

    @HostListener('mouseenter', ['$event']) onMouseEnter(event: Event) {
        this.renderer.addClass(this.element.nativeElement, 'active');
    }
    @HostListener('mouseleave', ['$event']) onMouseLeave(event: Event) {
        this.renderer.removeClass(this.element.nativeElement, 'active');
    }

    constructor(private element: ElementRef, private renderer: Renderer2) { }

}