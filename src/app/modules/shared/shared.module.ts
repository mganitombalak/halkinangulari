import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionGridCellComponent } from './components/action-grid-cell/action-grid-cell.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    ActionGridCellComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ActionGridCellComponent, ModalComponent]
})
export class SharedModule { }
