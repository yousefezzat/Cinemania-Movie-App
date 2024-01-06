import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  IsloggedIn: boolean = false;
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.getStatus();

  }
  getStatus() {
    this.userService.isLoggedInSubject.subscribe((status) => {
      this.IsloggedIn = status;
      console.log(this.IsloggedIn);
    })
  }
  handleLogout() {
    this.userService.logout();
    return true;
  }

}
