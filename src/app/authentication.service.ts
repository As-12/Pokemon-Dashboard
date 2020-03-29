import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LoginDialogComponent } from "./dialogs/login-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { LogoutDialogComponent } from "./dialogs/logout-dialog.component";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private _loginState: BehaviorSubject<boolean>;
  private _userName: BehaviorSubject<string>;
  public readonly authState$;
  public readonly user$;
  public isLoggedIn: boolean;
  public currentUser: string;
  // Expose the observable$ part of the _todos subject (read only stream)

  constructor(private dialog: MatDialog, private router: Router) {
    this._userName = new BehaviorSubject<string>("Guest");
    this._loginState = new BehaviorSubject<boolean>(false);
    this.authState$ = this._loginState.asObservable();
    this.user$ = this._userName.asObservable();
    this.isLoggedIn = false;
    this.currentUser = null;

    if (localStorage.getItem("user") != null) {
      let user = localStorage.getItem("user");
      this._userName.next(user);
      this._loginState.next(true);
      this.isLoggedIn = true;
      this.currentUser = user;
    }
  }

  LogIn(): void {
    // some validations here

    const diagRef = this.dialog.open(LoginDialogComponent, {
      width: "330px",
      height: "300px",
      data: {}
    });

    diagRef.afterClosed().subscribe(result => {
      if (result) {
        this._userName.next(result.trim());
        localStorage.setItem("user", result.trim());
        this._loginState.next(true);
        this.isLoggedIn = true;
        this.currentUser = result.trim();
      }
    });
  }

  LogOut(): void {
    const diagRef = this.dialog.open(LogoutDialogComponent, {
      width: "330px",
      height: "300px",
      data: {}
    });

    diagRef.afterClosed().subscribe(result => {
      if (result) {
        this._loginState.next(false);
        localStorage.removeItem("user");
        this._userName.next("Guest");
        this.isLoggedIn = false;
        this.currentUser = null;
        this.router.navigate(["/"]);
      }
    });
  }
}
