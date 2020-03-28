import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  private _loginState = new BehaviorSubject<boolean>(false);
  private _userName = new BehaviorSubject<string>("Guest");

  // Expose the observable$ part of the _todos subject (read only stream)
  public readonly authState$ = this._loginState.asObservable();
  public readonly user$ = this._userName.asObservable();

  constructor() {}

  LogInAs(name: string): void {
    // some validations here
    if (!name) {
      throw new Error("Invalid Login");
    }
    this._loginState.next(true);
    this._userName.next(name);
  }

  Logout(): void {
    this._loginState.next(false);
    this._userName.next("Guest");
  }
}
