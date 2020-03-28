import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokemonRoutingModule } from "./pokemon-routing.module";
import { BoardComponent } from "./board/board.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, PokemonRoutingModule, SharedModule]
})
export class PokemonModule {}
