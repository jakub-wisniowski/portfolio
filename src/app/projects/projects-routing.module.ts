import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeLibraryComponent } from "./home-library/home-library.component";
import { PlanetsComponent } from "./planets/planets.component";
import { AknWebAppComponent } from "./akn-web-app/akn-web-app.component";
import { AknMobileAppComponent } from "./akn-mobile-app/akn-mobile-app.component";
import { RpnCalculatorComponent } from "./rpn-calculator/rpn-calculator.component";
import { LegoAppComponent } from "./lego-app/lego-app.component";
import { MrDumplingComponent } from "./mr-dumpling/mr-dumpling.component";
import { ClimateCampComponent } from "./climate-camp/climate-camp.component";
import { ClimateCampWebsiteComponent } from './climate-camp-website/climate-camp-website.component';

const routes: Routes = [
  { path: "home-library", component: HomeLibraryComponent },
  { path: "planets", component: PlanetsComponent },
  { path: "AKN-web-app", component: AknWebAppComponent },
  { path: "AKN-mobile-app", component: AknMobileAppComponent },
  { path: "RPN-calc", component: RpnCalculatorComponent },
  { path: "lego-app", component: LegoAppComponent },
  { path: "mr-dumpling", component: MrDumplingComponent },
  { path: "climate-camp", component: ClimateCampComponent },
  { path: "climate-camp-website", component: ClimateCampWebsiteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
