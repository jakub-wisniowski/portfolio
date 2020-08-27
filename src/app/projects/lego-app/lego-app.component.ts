import { Component } from "@angular/core";

@Component({
  selector: "app-lego-app",
  templateUrl: "./lego-app.component.html",
  styleUrls: ["../styles.scss"],
})
export class LegoAppComponent {
  constructor() {}

  images = [
    { src: "assets/images/lego-app/project-view.png", alt: "project view" },
    { src: "assets/images/lego-app/set-url.png", alt: "set url view" },
    { src: "assets/images/lego-app/parts.png", alt: "parts view" },
    {
      src: "assets/images/lego-app/parts-edited.png",
      alt: "parts view after editing",
    },
    { src: "assets/images/lego-app/set-url.png", alt: "set url view" },
    { src: "assets/images/lego-app/set-url.png", alt: "set url view" },
    { src: "assets/images/lego-app/set-url.png", alt: "set url view" },
  ];
}
