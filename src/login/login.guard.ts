import { ActivatedRouteSnapshot, createUrlTreeFromSnapshot, RouterStateSnapshot } from "@angular/router";
import { JwtHandlerService } from "./jwt-handler.service";
import { inject } from "@angular/core";

export function loginGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const jwtHandler = inject(JwtHandlerService);
    let token = jwtHandler.getToken();
    return token && !jwtHandler.tokenExpired() ? true : createUrlTreeFromSnapshot(route, ['/auth/login'], { from: route.routeConfig.path });
}

