import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { GlobalSettingsService } from 'src/app/services/global/global-settings.service';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalApiInterceptor implements HttpInterceptor {
  constructor(private globalSettings: GlobalSettingsService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestObject = req.clone({
        url: `${this.globalSettings.baseUrl + req.url}`,
        headers: req.headers
          .set('Content-Type', 'application/json')
          .set('Accept', 'header 2 value')
          .set('Access-Control-Allow-Origin', '*')
          .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      });
    return next.handle(requestObject);
  }
}
