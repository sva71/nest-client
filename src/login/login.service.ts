import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { IUserDto } from "../interfaces/user-interfaces";
import { Observable, tap } from "rxjs";
import { JwtHandlerService } from "./jwt-handler.service";

const LOGIN_URL: string = 'auth/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    path: string = '';

    constructor(private http: HttpClient, private jwtHandler: JwtHandlerService) {
        const { SERVER_URL, SERVER_PORT, SERVER_ORIGIN } = environment;
        this.path = `${SERVER_URL}:${SERVER_PORT}/${SERVER_ORIGIN}/${LOGIN_URL}`;
    }

    login(user: IUserDto): Observable<{token: string}> {
        return this.http.post<{token: string}>(this.path, user).pipe(tap(response => {
            response.token && this.jwtHandler.setToken(response.token);
            response.token && localStorage.setItem('user-email', user.email);
        }))
    }

}
