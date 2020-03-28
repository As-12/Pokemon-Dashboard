import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { LoginDialogComponent } from "./dialogs/login-dialog.component";
import { LogoutDialogComponent } from './dialogs/logout-dialog.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [AppComponent, LoginDialogComponent, LogoutDialogComponent, HomePageComponent, ErrorComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent, LogoutDialogComponent]
})
export class AppModule {}
