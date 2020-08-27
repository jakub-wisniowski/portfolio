import { Component } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['../styles.scss']
})
export class PlanetsComponent {

  constructor() { }

  images = [
    {src: "assets/images/planets/list-view.png", alt: "list view"},
    {src: "assets/images/planets/search.png", alt: "search view"},
    {src: "assets/images/planets/sorted.png", alt: "column sorted after clicking the header"},
    {src: "assets/images/planets/edit.png", alt: "edit row view"},
    {src: "assets/images/planets/add-character.png", alt: "add character view"},
    {src: "assets/images/planets/validation.png", alt: "validation"},
    {src: "assets/images/planets/error.png", alt: "error view"},
  ]
}
