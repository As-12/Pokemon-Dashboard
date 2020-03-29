import { Injectable } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {}

  InjectTag(
    title = "Pokemon Deck",
    description = "A portfolio app to collect your pokemon cards",
    image = ""
  ) {
    this.title.setTitle(title);
    this.meta.addTags([
      {
        name: "og:url",
        content: `https://pokemon.as12production.com${this.router.url}`
      },
      { name: "og:title", content: title },
      { name: "og:description", content: description },
      { name: "og:image", content: image },
      { name: "description", content: description }
    ]);
  }
}
