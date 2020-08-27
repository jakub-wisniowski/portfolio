import { Component } from '@angular/core';

@Component({
  selector: 'app-climate-camp-website',
  templateUrl: './climate-camp-website.component.html',
  styleUrls: ['../styles.scss']
})
export class ClimateCampWebsiteComponent {
  constructor() { }

  images = [
    {src: "assets/images/climate-camp-website/climate-camp-website-01.png", alt: "main page"},
    {src: "assets/images/climate-camp-website/climate-camp-website-02.png", alt: "subpage"},
  ]

}
