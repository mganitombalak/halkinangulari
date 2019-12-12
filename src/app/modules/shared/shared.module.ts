import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionGridCellComponent } from './components/action-grid-cell/action-grid-cell.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalBodyContainerDirective } from 'src/app/core/directives/modal-body-container.directive';



@NgModule({
  declarations: [
    ActionGridCellComponent,
    ModalComponent,
    ModalBodyContainerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ActionGridCellComponent, ModalComponent, ModalBodyContainerDirective]
})
export class SharedModule { }
