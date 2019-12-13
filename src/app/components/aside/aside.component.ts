import { Component, AfterViewInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { IMenuItem } from 'src/app/core/models/IMenuItem';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements AfterViewInit {

  model: Array<IMenuItem> = null;
  constructor(private menuService: MenuService) { }

  ngAfterViewInit(): void {
    this.model = this.menuService.findAll();
    // .subscribe(r => {
    //   this.model = r.data;
    // });
  }
}
