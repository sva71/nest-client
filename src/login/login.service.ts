import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { IUserDto } from "../interfaces/user-interfaces";
import { Observable } from "rxjs";

const LOGIN_URL: string = 'auth/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    path: string = '';

    constructor(private http: HttpClient) {
        const { SERVER_URL, SERVER_PORT, SERVER_ORIGIN } = environment;
        this.path = `${SERVER_URL}:${SERVER_PORT}/${SERVER_ORIGIN}/${LOGIN_URL}`;
    }

    login(user: IUserDto): Observable<any> {
        return this.http.post(this.path, user);
    }

}
