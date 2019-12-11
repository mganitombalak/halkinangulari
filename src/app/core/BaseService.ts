import { IResponse } from './IResponse';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalSettingsService } from '../services/global/global-settings.service';

export class BaseService<T> {

    protected serviceUrl: string;
    constructor(protected httpClient: HttpClient) { }
    findAll(): Observable<IResponse<T>> {
        return this.httpClient.get(this.serviceUrl) as Observable<IResponse<T>>;
    }
}