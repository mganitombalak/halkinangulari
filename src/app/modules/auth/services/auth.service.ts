import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthInfo } from 'src/app/core/models/IAuthInfo';
import { IAuthResponse } from 'src/app/core/models/IAuthResponse';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  onAuthStatusChanged: BehaviorSubject<boolean>;
  onAuthError: BehaviorSubject<boolean>;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.onAuthStatusChanged = new BehaviorSubject(this.isAuthenticated() || false);
    this.onAuthError = new BehaviorSubject(null);
  }

  login(loginInfo: IAuthInfo): void {
    const auth = this.httpClient.post('auth', JSON.stringify(loginInfo));
    auth.pipe(take(1)).subscribe((res: IAuthResponse) => {
      localStorage.setItem('userData', JSON.stringify(res.data));
      localStorage.setItem('token', res.token);
      this.onAuthStatusChanged.next(true);
    }, e => this.onAuthError.next(e));
  }

  logout(): void {
    localStorage.clear();
    this.onAuthStatusChanged.next(false);
    this.router.navigate(['/auth']);
  }

  isAuthenticated = () => !!localStorage.getItem('userData');


}
