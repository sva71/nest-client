import { Component } from '@angular/core';
import { TitleComponent } from "./title/title.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        TitleComponent,
        FooterComponent,
        RouterModule
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'nest-client';
}
