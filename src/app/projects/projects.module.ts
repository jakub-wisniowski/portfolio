import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectsRoutingModule } from "./projects-routing.module";
import { HomeLibraryComponent } from "./home-library/home-library.component";
import { PlanetsComponent } from "./planets/planets.component";
import { AknWebAppComponent } from "./akn-web-app/akn-web-app.component";
import { AknMobileAppComponent } from "./akn-mobile-app/akn-mobile-app.component";
import { RpnCalculatorComponent } from "./rpn-calculator/rpn-calculator.component";
import { LegoAppComponent } from "./lego-app/lego-app.component";
import { MrDumplingComponent } from "./mr-dumpling/mr-dumpling.component";
import { ClimateCampComponent } from "./climate-camp/climate-camp.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowMoreButtonComponent } from './shared/show-more-button/show-more-button.component';
import { GithubButtonComponent } from './shared/github-button/github-button.component';
import { ClimateCampWebsiteComponent } from './climate-camp-website/climate-camp-website.component';

@NgModule({
  declarations: [
    HomeLibraryComponent,
    PlanetsComponent,
    AknWebAppComponent,
    AknMobileAppComponent,
    RpnCalculatorComponent,
    LegoAppComponent,
    MrDumplingComponent,
    ClimateCampComponent,
    ClimateCampWebsiteComponent,
    NavbarComponent,
    ShowMoreButtonComponent,
    GithubButtonComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, FontAwesomeModule]
})
export class ProjectsModule {}
