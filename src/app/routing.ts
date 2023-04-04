import {Routes} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import {loginGuard} from "../login/login.guard";
import {UsersComponent} from "./users/users.component";
import {RolesComponent} from "./roles/roles.component";
import {LoginComponent} from "../login/login.component";

export const ROUTES: Routes = [
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
