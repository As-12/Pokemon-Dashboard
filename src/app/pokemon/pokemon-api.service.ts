import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PokemonAPIService {
  private fetchURL: string = "https://pokeapi.co/api/v2/pokemon";

  private pokemonCount: number = 807; // https://pokeapi.co/api/v2/pokemon-species/?limit=0

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<Pokemon> {
    let random = Math.floor(Math.random() * this.pokemonCount) + 1;
    return this.http.get(`${this.fetchURL}/${random}`).pipe(
      retry(3),
      map(response => ({
        title: response["name"],
        weight: response["weight"],
        imageUrl: response["sprites"]["front_default"]
      })),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    console.error("An HTTP error occurred:", err.error);
    return throwError(
      "Something bad while making web request to Pokemon API; please try again later."
    );
  }
}
