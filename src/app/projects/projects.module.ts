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
import { ClimateCampWebsiteComponent } from './climate-camp-website/climate-camp-website.component';
import { SharedModule } from '../shared/shared.module';

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
    ClimateCampWebsiteComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule]
})
export class ProjectsModule {}
