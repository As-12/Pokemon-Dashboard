import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { AuthenticationGuard } from "./authentication.guard";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  {
    // Lazy loading the feature
    path: "pokemon",
    loadChildren: () =>
      import("./pokemon/pokemon.module").then(m => m.PokemonModule),
    canActivate: [AuthenticationGuard]
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
