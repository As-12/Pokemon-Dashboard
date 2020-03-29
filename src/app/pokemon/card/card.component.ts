import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Pokemon } from "../pokemon.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input()
  card: Pokemon;

  @Output()
  titleChange: EventEmitter<string> = new EventEmitter();

  constructor() {}

  dataChanged(event: any) {
    this.titleChange.emit(event.target.value);
  }
  ngOnInit(): void {}
}
