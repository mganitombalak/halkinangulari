import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  constructor(private authService: AuthService) { }

  isAuthenticated: boolean;

  ngAfterViewInit(): void {
    this.authService.onAuthStatusChanged.subscribe(r => this.isAuthenticated = r);
  }
  ngOnDestroy(): void {
    this.authService.onAuthStatusChanged.unsubscribe();
  }

  loginLogout(): void {

  }
}
