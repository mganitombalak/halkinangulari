import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { CategoryService } from './services/category.service';
import { SharedModule } from '../shared/shared.module';
import { ActionGridCellComponent } from '../shared/components/action-grid-cell/action-grid-cell.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
@NgModule({
  declarations: [CategoryListComponent, CategoryDetailComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    AgGridModule.withComponents([ActionGridCellComponent])
  ],
  providers: [CategoryService],
  exports: [CategoryDetailComponent]

})
export class CategoryModule { }
