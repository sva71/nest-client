import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";
import {IUser} from "../../interfaces/user-interfaces";
import {take} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: Array<IUser>

    constructor(private usersService: UsersService,
                private router: Router) {
    }

    ngOnInit() {
        this.usersService.getUsers().pipe(take(1)).subscribe({
            next: response => this.users = response,
            error: err => console.log(err.error.message)
        })
    }

    getHome() {
        this.router.navigateByUrl('').catch(err => console.error(err))
    }
}
