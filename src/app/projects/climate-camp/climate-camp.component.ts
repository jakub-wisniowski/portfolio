import { Component } from '@angular/core';

@Component({
  selector: 'app-climate-camp',
  templateUrl: './climate-camp.component.html',
  styleUrls: ['../styles.scss']
})
export class ClimateCampComponent {

  constructor() { }

  images = [
    {src: "assets/images/climate-camp/menu.png", alt: "main menu"},
    {src: "assets/images/climate-camp/items-list.png", alt: "list of crucial items to pack"},
    {src: "assets/images/climate-camp/programme.png", alt: "programme overview"},
    {src: "assets/images/climate-camp/details.png", alt: "programme details"},
  ]

}
