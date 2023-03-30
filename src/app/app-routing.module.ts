import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {UsersComponent} from "./users/users.component";
import {RolesComponent} from "./roles/roles.component";
import {LoginComponent} from "../login/login.component";
import {loginGuard} from "../login/login.guard";

const routes: Routes = [
    { path: '', component: MenuComponent, canActivate: [loginGuard] },
    { path: 'users', component: UsersComponent, canActivate: [loginGuard] },
    { path: 'roles', component: RolesComponent, canActivate: [loginGuard] },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
