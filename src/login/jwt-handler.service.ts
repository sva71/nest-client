import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class JwtHandlerService {

    private token: string = localStorage.getItem('access-token') || '';

    constructor() { }

    getToken(): string {
        return this.token;
    }

    setToken(value: string) {
        this.token = value;
        localStorage.setItem('access-token', value);
    }

    tokenExpired(): boolean {
        const user = JSON.parse(atob(this.token.split('.')[1]));
        return +Date.now().toFixed() > user.exp * 1000
    }

}
