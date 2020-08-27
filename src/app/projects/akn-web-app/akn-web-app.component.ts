import { Component } from '@angular/core';

@Component({
  selector: 'app-akn-web-app',
  templateUrl: './akn-web-app.component.html',
  styleUrls: ['../styles.scss']
})
export class AknWebAppComponent {

  constructor() { }

 images = [
   {src: "assets/images/AKN-web-app/add-new-lessons.png", alt: "add new lessons"},
   {src: "assets/images/AKN-web-app/AKN-app-preview.png", alt: "AKN app preview"},
   {src: "assets/images/AKN-web-app/modify-account.png", alt: "modify account"},
 ]
}
