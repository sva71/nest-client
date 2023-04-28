import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "../interfaces/user-interfaces";
import { environment } from "../../environments/environment";

const USERS_URL: string = 'users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    path: string = '';

    constructor(private http: HttpClient) {
        const { SERVER_URL, SERVER_PORT, SERVER_ORIGIN } = environment;
        this.path = `${SERVER_URL}:${SERVER_PORT}/${SERVER_ORIGIN}/${USERS_URL}`;
    }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.path)
    }

}
