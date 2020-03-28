import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LoginDialogComponent } from "./dialogs/login-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { LogoutDialogComponent } from "./dialogs/logout-dialog.component";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private _loginState = new BehaviorSubject<boolean>(false);
  private _userName = new BehaviorSubject<string>("Guest");

  public isLoggedIn = false;
  // Expose the observable$ part of the _todos subject (read only stream)
  public readonly authState$ = this._loginState.asObservable();
  public readonly user$ = this._userName.asObservable();

  constructor(private dialog: MatDialog) {}

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
        this._loginState.next(true);
        this.isLoggedIn = true;
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
        this._userName.next("Guest");
        this.isLoggedIn = false;
      }
    });
  }
}
