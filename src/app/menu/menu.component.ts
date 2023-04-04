import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        RouterModule
    ],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

}
