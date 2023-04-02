import {Component, OnInit} from '@angular/core';
import {RolesService} from "./roles.service";
import {IRole} from "../../interfaces/role-interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-roles',
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
