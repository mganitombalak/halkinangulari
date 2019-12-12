import { ViewContainerRef, Directive } from '@angular/core';

@Directive({ selector: '[appModalBodyContainer]'})
export class ModalBodyContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
