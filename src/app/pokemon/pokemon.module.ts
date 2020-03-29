import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokemonRoutingModule } from "./pokemon-routing.module";
import { BoardComponent } from "./board/board.component";
import { SharedModule } from "../shared/shared.module";
import { CardComponent } from "./card/card.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ConfirmDeleteDialogComponent } from "./dialogs/confirm-delete-dialog.component";

@NgModule({
  declarations: [BoardComponent, CardComponent, ConfirmDeleteDialogComponent],
  imports: [CommonModule, PokemonRoutingModule, DragDropModule, SharedModule],
  entryComponents: [ConfirmDeleteDialogComponent]
})
export class PokemonModule {}
