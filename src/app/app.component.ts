import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "jakub-wisniowski";

  @ViewChild("backToTop")
  backToTop: ElementRef;

  scrollToTop = () => {
    const button = (this.backToTop.nativeElement as HTMLElement);

    button.classList.add("active");
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(this.scrollToTop);
      window.scrollTo(0, c - 30);
    } else {
      button.classList.remove("active");
      button.blur();
    }
  }
}
