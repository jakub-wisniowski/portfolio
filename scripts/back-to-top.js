let button;

export function initScroll(btn) {
	button = btn;
}

export function scrollToTop () {
	button.classList.add("active");
	const c = document.documentElement.scrollTop || document.body.scrollTop;
	if (c > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, c - 30);
	} else {
		button.classList.remove("active");
		button.blur();
	}
}