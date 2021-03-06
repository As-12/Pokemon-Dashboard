import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { SeoService } from "../seo.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  constructor(public auth: AuthenticationService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.InjectTag();
  }
}
