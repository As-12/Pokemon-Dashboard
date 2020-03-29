import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Subscription, Observable } from "rxjs";
import { BoardDataService } from "../board-data.service";
import { Pokemon } from "../pokemon.model";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDeleteDialogComponent } from "../dialogs/confirm-delete-dialog.component";
import { PokemonAPIService } from "../pokemon-api.service";
import { BreakpointObserver } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";
import { SeoService } from "src/app/seo.service";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit, OnDestroy {
  cards: Pokemon[];
  sub: Subscription;
  addButton: boolean = false;

  isTabletWide$: Observable<boolean> = this.breakpointObserver
    .observe(["(min-width: 1024px)"])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    public boardService: BoardDataService,
    public pokeAPI: PokemonAPIService,
    private dialog: MatDialog,
    public breakpointObserver: BreakpointObserver,
    private seo: SeoService
  ) {}

  counter: number;
  ngOnInit() {
    this.cards = [];
    this.cards = this.boardService.getUserBoards();
    this.counter = this.cards.length;
    this.seo.InjectTag();
  }

  createCard() {
    this.counter += 1;
    this.addButton = true;
    this.pokeAPI.getPokemon().subscribe(pokemon => {
      this.cards.push(pokemon);
      this.boardService.persistBoard(this.cards);
      this.addButton = false;
    });
  }

  deleteCard(index: number) {
    const diagRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: "330px",
      height: "300px",
      data: {}
    });

    diagRef.afterClosed().subscribe(result => {
      if (result) {
        if (index > -1) {
          this.cards.splice(index, 1);
          this.boardService.persistBoard(this.cards);
        }
      }
    });
  }
  ngOnDestroy() {
    //Unsubscribe any stream observable here
  }

  titleChanged(title, i) {
    this.cards[i].title = title;
    this.boardService.persistBoard(this.cards);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    this.boardService.persistBoard(this.cards);
  }
}
