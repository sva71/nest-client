import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";
import {IUser} from "../../interfaces/user-interfaces";
import {takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {DestroyService} from "../destroy.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: Array<IUser>

    constructor(private usersService: UsersService,
                private router: Router, private destroy$: DestroyService) {
    }

    ngOnInit() {
        this.usersService.getUsers().pipe(takeUntil(this.destroy$)).subscribe({
            next: response => this.users = response,
            error: err => console.log(err)
        })
    }

}
