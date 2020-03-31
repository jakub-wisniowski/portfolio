import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-show-more-button',
    template: '<div class="button-wrapper"><button (click)="toggleDescription()">Show gallery</button></div>',
    styleUrls: ['./show-more-button.component.scss']
})

export class ShowMoreButtonComponent {
    @Input()
    elementId: string;

    @Input()
    toggleClass: string;

    constructor() {}

    get elementRef() {
        return document.getElementById(this.elementId);
    }
    toggleDescription() {
       const isOpen = this.elementRef.classList.contains(this.toggleClass);
       if(isOpen) {
           this.elementRef.classList.remove(this.toggleClass);
       } else {
           this.elementRef.classList.add(this.toggleClass);
       }
    }
}