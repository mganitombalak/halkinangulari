import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/core/models/ICategory';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements AfterViewInit, OnDestroy {

  // private categoryServiceSubscription: Subscription;
  model: Array<ICategory>;
  protected columnDefs = [
    { headerName: 'Display Order', field: 'displayOrder' },
    { headerName: 'Adi', field: 'name' },
    { headerName: 'Aktif/Pasif', field: 'isActive' },
    { headerName: 'Oluşturulma Tarihi', field: 'createdAt' }
  ];
  constructor(private categoryService: CategoryService) { }

  ngAfterViewInit(): void {
    // this.categoryServiceSubscription =
    this.categoryService.findAll().pipe(take(1)).subscribe(r => {
      this.model = r.data;
    });
  }
  ngOnDestroy(): void {
    // this.categoryServiceSubscription.unsubscribe();
  }

}
