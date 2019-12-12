import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionGridCellComponent } from './components/action-grid-cell/action-grid-cell.component';



@NgModule({
  declarations: [
    ActionGridCellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ActionGridCellComponent]
})
export class SharedModule { }
