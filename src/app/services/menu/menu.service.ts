import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/BaseService';
import { IMenuItem } from 'src/app/core/models/IMenuItem';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // extends BaseService<IMenuItem> {
  //   constructor(protected httpClient: HttpClient) {
  //     super(httpClient);
  //     this.serviceUrl = 'menu';
  //   }
  findAll(): Array<IMenuItem> {
    return [{ title: 'Kategori', url: '/category' }, { title: 'Birimler', url: '/units' }];
  }
}
