import {initScroll, scrollToTop} from './back-to-top.js';

let sendButton, form;

window.onload = () => {
	sendButton = document.getElementById("send-button");
	form = document.getElementById("contact-form");
	sendButton.disabled = true;

	const button = document.getElementById("backToTop");
	initScroll(button);
	button.addEventListener("click", scrollToTop);
};

function handleFormChanged () {
	sendButton.disabled = !form.checkValidity();
}