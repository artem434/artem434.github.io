$(function () {
	$('.slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	});

});

$(document).ready(function () {
	$('body').append('<a href="#" class="go-top" title="Back to top">Back to top</a>');
});

$(function () {
	$.fn.scrollToTop = function () {
		$(this).hide().removeAttr("href");
		if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
		var scrollDiv = $(this);
		$(window).scroll(function () {
			if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
			else $(scrollDiv).fadeIn("slow")
		});
		$(this).click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, "slow")
		})
	}
});

$(function () {
	$(".go-top").scrollToTop();
});




$(document).ready(function () {
	$('.menu-trigger').click(function () {
		$('.menu__block').slideToggle(940);
	}); //end slide toggle

	$(window).resize(function () {
		if ($(window).width() > 940) {
			$('.menu__block').removeAttr('style');
		}
	}); //end resize
}); //end ready