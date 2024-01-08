import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  IsloggedIn: boolean = this.userService.isLogged();
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    console.log(`Before Status: IsloggedIn: ${this.IsloggedIn}`);
    this.getStatus();
    console.log(`After Status: IsloggedIn: ${this.IsloggedIn}`);

  }
  getStatus() {
    this.IsloggedIn = this.userService.isLogged();
    return this.IsloggedIn;
  }
  handleLogout() {
    this.userService.logout();
    this.getStatus();
    console.log(`Handle Logout, ${this.IsloggedIn}`);
    return true;
  }

}
