import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ShowMoreButtonComponent } from './components/show-more-button/show-more-button.component';
import { GithubButtonComponent } from './components/github-button/github-button.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IntersectionDirective } from './directives/intersection.directive';

@NgModule({
  declarations: [
    GalleryComponent,
    GithubButtonComponent,
    NavbarComponent,
    ShowMoreButtonComponent,
    ClickOutsideDirective,
    IntersectionDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    RouterModule
  ],
  exports: [
    GalleryComponent,
    GithubButtonComponent,
    NavbarComponent,
    ShowMoreButtonComponent,
    ClickOutsideDirective,
    IntersectionDirective
  ]
})
export class SharedModule {}
