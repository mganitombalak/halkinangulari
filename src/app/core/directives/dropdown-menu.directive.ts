import { ElementRef, Renderer2, HostListener, Directive } from '@angular/core';

@Directive({ selector: '[appDropDownMenu]' })
export class DropDownMenuDirective {

    private subMenuContainer: any;
    @HostListener('mouseenter', ['$event'])
    onMouseEnter(event: Event) {
        this.subMenuContainer = this.element.nativeElement.parentNode.querySelector('.dropdown-menu');
        this.renderer.addClass(this.subMenuContainer, 'd-block');
        this.renderer.removeClass(this.subMenuContainer, 'd-none');
    }
    @HostListener('mouseleave', ['$event'])
    onMouseLeave(event: Event) {
        this.subMenuContainer = this.element.nativeElement.parentNode.querySelector('.dropdown-menu');
        this.renderer.addClass(this.subMenuContainer, 'd-none');
        this.renderer.removeClass(this.subMenuContainer, 'd-block');
    }

    constructor(private element: ElementRef, private renderer: Renderer2) {}

}