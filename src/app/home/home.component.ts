import { Component, OnInit, ElementRef } from "@angular/core";
import {
  NgForm,
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  isCollapsed = true;
  formSubmitted = false;

  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
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

  get f() {
    return this.form.controls;
  }

  submit() {
    this.http
      .post("https://formspree.io/jakub.m.wisniowski@gmail.com", {
        name: this.form.controls.name.value,
        email: this.form.controls.email.value,
        message: "this.form.controls.message.value",
      })
      .subscribe((_) => {
        this.formSubmitted = true;
        setTimeout(() => {
          this.formSubmitted = false;
        }, 3000);
      });
  }
}
