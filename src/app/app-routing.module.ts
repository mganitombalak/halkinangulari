import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './modules/auth/components/login/login.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'category', loadChildren: './modules/category/category.module#CategoryModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
