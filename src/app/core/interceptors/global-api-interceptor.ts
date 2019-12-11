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
          .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjQ5NjVjNmM5LTM3YmYtNDVjYi05NmJlLTliNmQ0Y2FjY2Y1MCIsImVtYWlsIjoiaWxoYW5AZ3JhdHVkZS5jb20iLCJyb2xlIjoibnVsbCIsIm5iZiI6MTU3NjA2MjY5NSwiZXhwIjoxNTc2MDYzNTk1LCJpYXQiOjE1NzYwNjI2OTV9.UvUwZeNcdifAefEg_OY37cOaE8dKgXaKBQhsfTz4H2Y')
      });
    return next.handle(requestObject);
  }
}