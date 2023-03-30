import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    constructor(private router: Router) { }

    usersClick() {
        this.router.navigateByUrl('users').catch(err => console.log(err.error.message));
    }

    rolesClick() {
        this.router.navigateByUrl('roles').catch(err => console.log(err.error.message));
    }

}
