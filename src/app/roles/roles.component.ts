import {Component, OnInit} from '@angular/core';
import {RolesService} from "./roles.service";
import {IRole} from "../../interfaces/role-interface";
import {takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {DestroyService} from "../destroy.service";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

    roles: Array<IRole>;

    constructor(private rolesService: RolesService,
                private router: Router, private destroy$: DestroyService) { }

    ngOnInit() {
        this.rolesService.getRoles().pipe(takeUntil(this.destroy$)).subscribe({
            next: response => this.roles = response,
            error: err => console.error(err)
        })
    }

}
