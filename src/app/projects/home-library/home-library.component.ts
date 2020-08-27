import { Component } from "@angular/core";

@Component({
  selector: "app-home-library",
  templateUrl: "./home-library.component.html",
  styleUrls: ["../styles.scss"],
})
export class HomeLibraryComponent {
  constructor() {}

  images = [
    { src: "assets/images/home-library/add-new-book.png", alt: "add new book" },
    { src: "assets/images/home-library/home-library.png", alt: "home library" },
    {
      src: "assets/images/home-library/home-library-displayed.png",
      alt: "home library displayed",
    },
  ];
}
