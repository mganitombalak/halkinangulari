import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { AsideHoverDirective } from './core/directives/aside-hover.directive';
import { DropDownMenuDirective } from './core/directives/dropdown-menu.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalApiInterceptor } from './core/interceptors/global-api-interceptor';
import { ArrayCheckPipe } from './core/pipes/array-check.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UnAuthorizedResponseInterceptor } from './core/interceptors/unauthorized-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    AsideHoverDirective,
    DropDownMenuDirective,
    ArrayCheckPipe,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: GlobalApiInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: UnAuthorizedResponseInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
