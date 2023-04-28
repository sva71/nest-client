import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {IRole} from "../interfaces/role-interface";

const ROLES_URL: string = 'roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

    path: string = '';

    constructor(private http: HttpClient) {
        const { SERVER_URL, SERVER_PORT, SERVER_ORIGIN } = environment;
        this.path = `${SERVER_URL}:${SERVER_PORT}/${SERVER_ORIGIN}/${ROLES_URL}`;
    }

    getRoles(): Observable<IRole[]> {
        return this.http.get<IRole[]>(this.path)
    }

}
