import { Component, OnInit } from "@angular/core";
import {
  NgForm,
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
export class HomeComponent implements OnInit {
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

  ngOnInit(): void {}

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
