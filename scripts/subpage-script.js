import {initScroll, scrollToTop} from "./back-to-top.js";

let slideIndex = 1;
let placeholder, popup, subpageWrapper, footer;


window.onload  = () => {
	popup = document.getElementById("popup");
	showDivs(slideIndex);
	placeholder = document.getElementById("imagePlaceholder");
	subpageWrapper = document.getElementsByClassName("subpage-wrapper")[0];
	footer = document.getElementsByClassName("footer")[0];

	const button = document.getElementById("backToTop");
	initScroll(button);
	button.addEventListener("click", scrollToTop);
};

function plusDivs (n) {
	showDivs(slideIndex += n);
}

function currentDiv (n) {
	showDivs(slideIndex = n);
}

function showDivs (n) {
	let i;
	const slides = document.getElementsByClassName("slide");
	const badges = document.getElementsByClassName("slide-badge");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].classList.remove("visible");
		badges[i].className = badges[i].className.replace("badge-selected", "");
	}

	slides[slideIndex - 1].classList.add("visible");
	badges[slideIndex - 1].className += " badge-selected";
}

function showImage () {
	const visibleImage = document.getElementsByClassName("visible")[0];
	placeholder.src = visibleImage.src;
	placeholder.alt = visibleImage.alt;
	popup.classList.add("visible");
	subpageWrapper.classList.add("blurred");
	footer.classList.add("blurred");
}

function closePopup() {
	popup.classList.remove("visible");
	subpageWrapper.classList.remove("blurred");
	footer.classList.remove("blurred");
}
