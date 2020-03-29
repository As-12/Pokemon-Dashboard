import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon.model";
import { AuthenticationService } from "../authentication.service";

@Injectable({
  providedIn: "root"
})
export class BoardDataService {
  constructor(private auth: AuthenticationService) {}

  getUserBoards() {
    if (!this.auth.currentUser) {
      throw new Error("Bug: user did not sign in");
    }

    const key = `${this.auth.currentUser}-board`;
    if (localStorage.getItem(key) != null) {
      let json = localStorage.getItem(key);
      return JSON.parse(json);
    } else {
      return [];
    }
  }

  persistBoard(cards: Pokemon[]) {
    const key = `${this.auth.currentUser}-board`;
    localStorage.setItem(key, JSON.stringify(cards));
  }
}
