import { Component } from "@angular/core";

@Component({
  selector: "app-rpn-calculator",
  templateUrl: "./rpn-calculator.component.html",
  styleUrls: ["../styles.scss"],
})
export class RpnCalculatorComponent {
  constructor() {}

  images = [
    { src: "assets/images/RPN-calc/basic.png", alt: "basic view" },
    { src: "assets/images/RPN-calc/two-numbers.png", alt: "two numbers view" },
    { src: "assets/images/RPN-calc/sum1.png", alt: "sum view" },
    { src: "assets/images/RPN-calc/horizontal.png", alt: "horizontal view" },
    { src: "assets/images/RPN-calc/horizontal_minus.png", alt: "minus view" },
    {
      src: "assets/images/RPN-calc/horizontal_sum.png",
      alt: "horizontal sum view",
    },
    {
      src: "assets/images/RPN-calc/number_precision.png",
      alt: "settings view",
    },
    {
      src: "assets/images/RPN-calc/after_precision.png",
      alt: "view after changing settings",
    },
  ];
}
