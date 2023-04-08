import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { JwtHandlerService } from "./jwt-handler.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private jwtHandler: JwtHandlerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.jwtHandler.getToken();
        if (token) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
            return next.handle(authReq)
        } else {
            return next.handle(req);
        }
    }

}
