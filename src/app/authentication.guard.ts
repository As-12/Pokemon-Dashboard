import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable, of } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthenticationService } from "./authentication.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private auth: AuthenticationService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.auth.isLogIn()) {
      return true;
    }

    this.snackBar.open("You must be logged in to use the service!", "OK", {
      duration: 5000
    });
    this.router.navigate(["/"]);
    return false;
  }
}
