import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { LoginService } from "./login.service";
import { HttpClientModule } from "@angular/common/http";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { finalize, takeUntil } from "rxjs";
import { Router } from "@angular/router";
import { DestroyService } from "../app/destroy.service";

interface LoginFormGroup {
    email: FormControl<string>;
    password: FormControl<string>;
}

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        MatProgressSpinnerModule],
    providers: [DestroyService],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginGroup: FormGroup;
    private _loading: boolean = false;
    error: string = '';
    path: string = '';

    constructor(private loginService: LoginService, private router: Router, private destroy$: DestroyService) {
        this.path = this.router['browserUrlTree'].queryParams?.from || ''
    }

    ngOnInit() {
        const userEmail = localStorage.getItem('user-email') || '';
        this.loginGroup = new FormGroup<LoginFormGroup>({
            email: new FormControl<string>(userEmail, Validators.required),
            password: new FormControl<string>('', Validators.required)
        });
    }

    get loading(): boolean {
        return this._loading;
    }

    set loading(value: boolean) {
        const emailControl = this.loginGroup.get('email');
        const passControl = this.loginGroup.get('password');
        if (value) {
            emailControl && emailControl.disable();
            passControl && passControl.disable();
        } else {
            emailControl && emailControl.enable();
            passControl && passControl.enable();
        }
        this._loading = value;
    }

    onSubmit() {
        this.loading = true;
        this.loginService.login(this.loginGroup.value)
            .pipe(takeUntil(this.destroy$))
            .pipe(finalize(() => this.loading = false))
            .subscribe({
                next: response => response.token && localStorage.setItem('access-token', response.token),
                error: err => this.error = err.error.message,
                complete: () => {
                    localStorage.setItem('user-email', this.loginGroup.value.email);
                    this.router.navigateByUrl(this.path).catch(err => console.log(err))
                }
        })
    }

}
