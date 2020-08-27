import { Component } from '@angular/core';

@Component({
  selector: 'app-akn-mobile-app',
  templateUrl: './akn-mobile-app.component.html',
  styleUrls: ['../styles.scss']
})
export class AknMobileAppComponent {
  constructor() { }

  images = [
    {src: "assets/images/AKN-mobile-app/login.png", alt: "login"},
    {src: "assets/images/AKN-mobile-app/menu-lesson.png", alt: "lesson menu"},
    {src: "assets/images/AKN-mobile-app/choose-scope.png", alt: "choose scope"},
    {src: "assets/images/AKN-mobile-app/choose-scope-2.png", alt: "choose scope"},
    {src: "assets/images/AKN-mobile-app/revision-learning.png", alt: "choose revision or learning mode"},
    {src: "assets/images/AKN-mobile-app/correct.png", alt: "correct response"},
    {src: "assets/images/AKN-mobile-app/wrong.png", alt: "incorrect response"},
    {src: "assets/images/AKN-mobile-app/show-hint.png", alt: "show hint"},
    {src: "assets/images/AKN-mobile-app/progress.png", alt: "progress view"},
  ]
  

}
