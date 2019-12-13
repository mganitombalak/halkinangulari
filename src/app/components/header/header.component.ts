import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  constructor(private authService: AuthService, private router: Router) { }

  isAuthenticated = false;

  ngAfterViewInit(): void {
    this.authService.onAuthStatusChanged.subscribe(r => this.isAuthenticated = r);
  }
  ngOnDestroy(): void {
    this.authService.onAuthStatusChanged.unsubscribe();
  }

  loginLogout(): void {
    if (this.isAuthenticated) {
      this.authService.logout();
    } else {
      this.router.navigate(['/auth']);
    }
  }
}
