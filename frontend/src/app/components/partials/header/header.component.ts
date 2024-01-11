import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoginModalOpen: boolean = false;
  user!: User;

  constructor(private userService: UserService) {
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  openLoginModal(): void {
    this.isLoginModalOpen = true;
  }
  closeLoginModal(): void {
    this.isLoginModalOpen = false;
  }

  ngOnInit(): void { }

  logout() {
    this.userService.logout();
  }

  get isAuth() {
    return this.user.token;
  }
}
