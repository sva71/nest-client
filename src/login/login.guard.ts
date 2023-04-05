import { ActivatedRouteSnapshot, createUrlTreeFromSnapshot, RouterStateSnapshot } from "@angular/router";

export function loginGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let token = localStorage.getItem('access-token') || '';
    if (token) {
        const user = JSON.parse(atob(token.split('.')[1]));
        if (+Date.now().toFixed() > user.exp * 1000) token = '';
    }
    return token ? true : createUrlTreeFromSnapshot(route, ['/auth/login'], { from: route.routeConfig.path });
}
