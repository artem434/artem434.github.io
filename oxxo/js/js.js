
/* Mobile Menu*/

var ww = document.body.clientWidth;

$(document).ready(function() {
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav").toggle();
	});
	adjustMenu();
})

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 1000) {
		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".nav").hide();
		} else {
			$(".nav").show();
		}
		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	} 
	else if (ww >= 1000) {
		$(".toggleMenu").css("display", "none");
		$(".nav").show();
		$(".nav li").removeClass("hover");
		$(".nav li a").unbind('click');
		$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});
	}
}
/*Slider Header*/

$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	autoplay:false,
	dots:false,
	prevArrow: '<img class="slick-arrow-left" src="img/Left-Navigation-Button.png" alt="Left-Navigation">',
  	nextArrow: '<img class="slick-arrow-right" src="img/Right-Navigation-Button.png" alt="Right-Navigation">'
}); 

/*About-Us-Slider*/

$('.about-us-slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	autoplay:false,
	dots:false,
	prevArrow: '<div class="about-us-arrow-left  slider-arrow"><i class="fas fa-angle-left"></i></div>',
  	nextArrow: '<div class="about-us-arrow-right slider-arrow"><i class="fas fa-angle-right"></i></div>'
});

/*Clients-Say-Slider*/

$('.clients-say-slider-wr ').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	autoplay:false,
	dots:false,
	prevArrow: '<div class="clients-say-slider-left slider-arrow"><i class="fas fa-angle-left"></i></div>',
  	nextArrow: '<div class="clients-say-slider-right slider-arrow"><i class="fas fa-angle-right"></i></div>'
});

/*Client-Logo-Slider*/

$('.client-logo-slider').slick({
	infinite: true,
	slidesToShow: 5,
	infinite: true,
	arrows:false,
	autoplay:true,
	autoplaySpeed:2000,
	slidesToScroll: 2,
	responsive: [
	{
		breakpoint: 720,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		}
	},
	{
		breakpoint: 576,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	},
	{
		breakpoint: 350,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}
	]
});

/*Fancybox*/

$("[data-fancybox]").fancybox({
  	transitionEffect: 'slide',
});

