// 'use strict';

//================================Accordion====================================
window.onload = function () {

	var accordion = document.querySelectorAll('.reviews__accordion');

	for (var i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener('click', slide, false);
	}

	function slide(e) {
		var activeFold = e.currentTarget.querySelector('.active');
		var classesList = ' ' + e.target.classList + ' ';
		var inactive = (' ' + e.target.parentNode.classList + ' ').indexOf('inactive');

		var foldContent = e.target.nextElementSibling;

		var isAnimating = false;

		if (e.target.tagName !== 'DIV' || classesList.indexOf('fold__heading') == -1 || inactive > -1) {
			return;
		}

		activeFold.classList.remove('active');
		e.target.parentNode.classList.add('active');
	}
}

//================================Button Up====================================
function up() {
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (top > 0) {
		window.scrollBy(0, ((top + 100) / -15));
		t = setTimeout('up()', 20);
	} else clearTimeout(t);
	return false;
}

//================================Flex Slider 2================================

$(window).on('load', function () {
	$('.flexslider').flexslider({
		animation: "slide"
	});
});