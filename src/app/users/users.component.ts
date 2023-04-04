import { Component, OnInit } from '@angular/core';
import { UsersService } from "./users.service";
import { IUser } from "../../interfaces/user-interfaces";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        RouterModule
    ],
    providers: [UsersService],
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: Observable<Array<IUser>>;

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        this.users = this.usersService.getUsers();
    }

}
