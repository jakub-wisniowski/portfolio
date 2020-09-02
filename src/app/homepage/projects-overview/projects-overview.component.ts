import { Component, AfterViewInit, ElementRef, Renderer2, OnInit } from "@angular/core";

@Component({
  selector: "app-projects-overview",
  templateUrl: "./projects-overview.component.html",
  styleUrls: ["./projects-overview.component.scss"],
})
export class ProjectsOverviewComponent {
    projectBackgrounds = {
        homeLibrary: 'assets/images/home-library/home-library-icon.png',
        planets: 'assets/images/planets/list-view.png',
        aknWebApp: 'assets/images/AKN-web-app/modify-account.png',
        aknMobileApp: 'assets/images/AKN-mobile-app/login-icon.png',
        RPNcalc: 'assets/images/RPN-calc/basic.png',
        legoApp: 'assets/images/lego-app/project-view.png',
        mrDumpling: 'assets/images/mr-dumpling/menu.png',
        climateCamp: 'assets/images/climate-camp/menu.png',
        climateCampWebsite: 'assets/images/icons/climate-camp-logo.png'

    }
  constructor(private renderer: Renderer2) {}

  handleIntersection(visible: boolean, el: HTMLElement, project: string) {
    visible
      ? this.renderer.addClass(el, "intersecting")
      : this.renderer.removeClass(el, "intersecting");

    visible && this.renderer.setAttribute(el.querySelector('img'), 'src', this.projectBackgrounds[project]);
  }
}
