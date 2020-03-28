import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { AuthenticationGuard } from "./authentication.guard";
import { ErrorComponent } from "./error/error.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  {
    path: "error",
    component: ErrorComponent,
    canActivate: [AuthenticationGuard]
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
