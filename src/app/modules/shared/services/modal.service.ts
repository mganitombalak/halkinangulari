import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';
import { IModalSetupOptions } from 'src/app/core/models/IModalSetupOptions';
import { IModalOptions } from 'src/app/core/models/IModalOptions';

@Injectable({ providedIn: 'root' })
export class ModalService {

  modalSetupOptions: IModalSetupOptions;
  modalOptions: IModalOptions = {
    title: '',
     activeComponent: null,
      componentMode: ComponentMode.Read,
      data: null,
      showModalHeader: false, showModalFooter: false };
  renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setup(setupOptions: IModalSetupOptions): void {
    this.modalSetupOptions = setupOptions;
  }

  open(options: IModalOptions): void {
    this.modalOptions = options;
    this.renderer.setStyle(this.modalSetupOptions.modalContainer.nativeElement, 'display', 'block');
    setTimeout(() => this.renderer.addClass(this.modalSetupOptions.modalContainer.nativeElement, 'show'), 100);

  }
  close(): void {
    this.renderer.setStyle(this.modalSetupOptions.modalContainer.nativeElement, 'display', 'none');
    setTimeout(() => this.renderer.removeClass(this.modalSetupOptions.modalContainer.nativeElement, 'hide'), 100);
  }
}
