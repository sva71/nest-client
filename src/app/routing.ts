import { Route } from "@angular/router";
import { loginGuard } from "./login/login.guard";
import { LoginComponent } from "./login/login.component";

export const ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () => import('./menu/menu.component').then(m => m.MenuComponent),
        canActivate: [loginGuard] },
    {
        path: 'users',
        loadComponent: () => import('./users/users.component').then(m => m.UsersComponent),
        canActivate: [loginGuard]
    },
    {
        path: 'roles',
        loadComponent: () => import('./roles/roles.component').then(m => m.RolesComponent),
        canActivate: [loginGuard]
    },
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
