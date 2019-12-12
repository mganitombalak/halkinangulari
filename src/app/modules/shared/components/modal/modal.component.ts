import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { IModalOptions } from 'src/app/core/models/IModalOptions';
import { ModalService } from '../../services/modal.service';
import { ModalBodyContainerDirective } from 'src/app/core/directives/modal-body-container.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChild('globalModal', { static: false }) modalElement: ElementRef;
  @ViewChild(ModalBodyContainerDirective, { static: false }) modalContentHost: ModalBodyContainerDirective;
  constructor(public modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.modalService.setup({ modalContainer: this.modalElement, modalComponent: this });
  }

  onOpening(): void {
    if (this.modalContentHost) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.modalService.modalOptions.activeComponent);
      const componentRef = this.modalContentHost.viewContainerRef.createComponent(componentFactory);
    }
  }
  onClosing(): void {
    this.modalContentHost.viewContainerRef.clear();
  }

}
