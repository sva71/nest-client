import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";
import {IUser} from "../../interfaces/user-interfaces";
import {Observable} from "rxjs";

@Component({
  selector: 'app-users',
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
