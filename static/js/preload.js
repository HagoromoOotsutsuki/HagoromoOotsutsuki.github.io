function preloader() {
	if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
		var img4 = new Image();
		var img5 = new Image();
		var img6 = new Image();

		img1.src = "/static/img/landing/header_one.jpg";
		img2.src = "/static/img/landing/header_two.jpg";
		img3.src = "/static/img/landing/header_three.jpg";
		img4.src = "/static/img/landing/header_four.jpg";
		img5.src = "/static/img/landing/header_five.jpg";
		img6.src = "/static/img/landing/header_six.jpg";
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);
