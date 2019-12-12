import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/core/models/ICategory';
import { take } from 'rxjs/operators';
import { ActionGridCellComponent } from 'src/app/modules/shared/components/action-grid-cell/action-grid-cell.component';
import { ModalService } from 'src/app/modules/shared/services/modal.service';
import { CategoryDetailComponent } from '../category-detail/category-detail.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements AfterViewInit, OnDestroy {

  // private categoryServiceSubscription: Subscription;
  model: Array<ICategory>;
  protected columnDefs = [
    { headerName: 'Display Order', field: 'displayOrder', sortable: true, filter: true, sort: 'asc' },
    { headerName: 'Adi', field: 'name', filter: true },
    { headerName: 'Aktif/Pasif', field: 'isActive' },
    { headerName: 'Oluşturulma Tarihi', field: 'createdAt' },
    { headerName: 'Action', width: 250, cellRendererFramework: ActionGridCellComponent },
  ];

  gridContext: any;
  constructor(private categoryService: CategoryService, private modalService: ModalService) { }

  ngAfterViewInit(): void {
    // this.categoryServiceSubscription =
    this.categoryService.findAll().pipe(take(1)).subscribe(r => {
      this.model = r.data;
    });
    this.gridContext = { componentParent: this };
  }
  ngOnDestroy(): void {
    // this.categoryServiceSubscription.unsubscribe();
  }

  onEditClicked(data: ICategory): void {
    this.modalService.open(
      {
        title: `Edit ${data.name}`,
        activeComponent: CategoryDetailComponent,
        componentMode: ComponentMode.Edit,
        data: null,
        showModalFooter: false,
        showModalHeader: true
      });

  }
  onDeleteClicked(data: ICategory): void {
    console.log(`${data.name} is deleting.`);
  }

  onInfoClicked(data: ICategory): void {
    console.log(`${data.name} is showing.`);
  }

}
