let sendButton, form;

function handleFormChanged () {
	sendButton.disabled = !form.checkValidity();
}

window.onload = function () {
	sendButton = document.getElementById("send-button");
	form = document.getElementById("contact-form");
	sendButton.disabled = true;
};