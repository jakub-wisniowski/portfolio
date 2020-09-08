import { Component, Renderer2 } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  isCollapsed = true;
  formSubmitted = false;

  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private renderer: Renderer2) {
    this.form = this.fb.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", [Validators.required]),
    });
  }

  scrollToSection(section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    this.isCollapsed = true;
  }

  submit() {
    this.http
      .post("https://formspree.io/jakub.m.wisniowski@gmail.com", {
        name: this.form.controls.name.value,
        email: this.form.controls.email.value,
        message: this.form.controls.message.value,
      })
      .subscribe((_) => {
        this.formSubmitted = true;
        setTimeout(() => {
          this.formSubmitted = false;
        }, 3000);
      });
  }

  handleIntersection(visible: boolean, el: HTMLElement) {
    visible
      ? this.renderer.addClass(el, "intersecting")
      : this.renderer.removeClass(el, "intersecting");
  }
}
