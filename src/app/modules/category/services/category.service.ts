import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/BaseService';
import { ICategory } from 'src/app/core/models/ICategory';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CategoryService extends BaseService<ICategory> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
    this.serviceUrl = 'category';
  }
}
