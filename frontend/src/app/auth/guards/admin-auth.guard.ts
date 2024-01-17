import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) { }

    canActivate(): boolean {
        if (this.userService.isAdmin) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}