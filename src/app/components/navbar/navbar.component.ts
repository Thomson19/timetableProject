import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../models/User';
import {Role} from '../../models/Role';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isMenuCollapsed = true;

  currentUser;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
  }

  ngOnInit(): void { }

  logout() {
    this.authenticationService.logout();
    window.location.reload();
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.accountType === Role.Admin;
  }
}
