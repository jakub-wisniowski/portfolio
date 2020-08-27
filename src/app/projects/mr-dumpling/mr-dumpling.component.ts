import { Component } from '@angular/core';

@Component({
  selector: 'app-mr-dumpling',
  templateUrl: './mr-dumpling.component.html',
  styleUrls: ['../styles.scss']
})
export class MrDumplingComponent {

  constructor() { }

  images = [
    {src: "assets/images/mr-dumpling/menu.png", alt: "main menu"},
    {src: "assets/images/mr-dumpling/shop.png", alt: "shop"},
    {src: "assets/images/mr-dumpling/achievements.png", alt: "achievements"},
    {src: "assets/images/mr-dumpling/categories.png", alt: "categories"},
    {src: "assets/images/mr-dumpling/levels.png", alt: "levels"},
    {src: "assets/images/mr-dumpling/mini-games-menu.png", alt: "mini games menu"},
    {src: "assets/images/mr-dumpling/quiz.png", alt: "quiz mini game"},
    {src: "assets/images/mr-dumpling/arcade.png", alt: "arcade mini game"},
    {src: "assets/images/mr-dumpling/memory.png", alt: "memory mini game"},
    {src: "assets/images/mr-dumpling/baskets.png", alt: "baskets mini game"},
  ]
}
