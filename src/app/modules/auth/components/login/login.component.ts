import { Component, OnInit } from '@angular/core';
import { IAuthInfo } from 'src/app/core/models/IAuthInfo';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model: IAuthInfo = { username: '', password: '' };
  constructor(private authService: AuthService) { }

  onSubmit(): void {
    this.authService.login(this.model);
  }

}
