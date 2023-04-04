import { Component, OnInit } from '@angular/core';
import { RolesService } from "./roles.service";
import { IRole } from "../../interfaces/role-interface";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-roles',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        RouterModule
    ],
    providers: [RolesService],
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

    roles: Observable<Array<IRole>>;

    constructor(private rolesService: RolesService) { }

    ngOnInit() {
        this.roles = this.rolesService.getRoles();
    }

}
