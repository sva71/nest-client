import {Component, OnInit} from '@angular/core';
import {RolesService} from "./roles.service";
import {IRole} from "../../interfaces/role-interface";
import {take} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

    roles: Array<IRole>;

    constructor(private rolesService: RolesService,
                private router: Router) { }

    ngOnInit() {
        this.rolesService.getRoles().pipe(take(1)).subscribe({
            next: response => this.roles = response,
            error: err => console.error(err)
        })
    }

    getHome() {
        this.router.navigateByUrl('').catch(err => console.error(err))
    }
}
