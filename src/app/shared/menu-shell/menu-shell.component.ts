import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/authentication.service";

@Component({
  selector: "app-menu-shell",
  templateUrl: "./menu-shell.component.html",
  styleUrls: ["./menu-shell.component.scss"]
})
export class MenuShellComponent implements OnInit {
  constructor(public auth: AuthenticationService) {}

  gitHub: string = "https://github.com/As-12/Pokemon-Dashboard";
  ngOnInit(): void {}
}
