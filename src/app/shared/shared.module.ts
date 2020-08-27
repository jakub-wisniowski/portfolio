import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { ShowMoreButtonComponent } from './show-more-button/show-more-button.component';
import { GithubButtonComponent } from './github-button/github-button.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GalleryComponent,
    GithubButtonComponent,
    NavbarComponent,
    ShowMoreButtonComponent,
    ClickOutsideDirective
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
    ClickOutsideDirective
  ]
})
export class SharedModule {}
