import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faHome = faHome;
  constructor() { }

  ngOnInit(): void {
  }

}
