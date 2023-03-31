import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent} from "../login/login.component";
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import {MatButtonModule} from "@angular/material/button";
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "../login/jwt-interceptor";
import {CommonModule} from "@angular/common";
import {DestroyService} from "./destroy.service";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FooterComponent,
    MenuComponent,
    UsersComponent,
    RolesComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LoginComponent,
        MatButtonModule
    ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      DestroyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
