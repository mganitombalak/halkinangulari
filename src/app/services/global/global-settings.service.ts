import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalSettingsService {

  baseUrl: string;
  constructor() {
    this.baseUrl = environment.baseUrl;
  }
}
