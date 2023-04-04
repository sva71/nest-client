import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { JwtInterceptor } from "./login/jwt-interceptor";
import { provideRouter } from "@angular/router";
import { ROUTES } from "./app/routing";
import { importProvidersFrom } from "@angular/core";

bootstrapApplication(AppComponent, {
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        importProvidersFrom(HttpClientModule),
        provideRouter(ROUTES)
    ],
}).catch(err => console.log(err));
