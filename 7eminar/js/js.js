 /*slider*/
        $('.slider').slick({
            slidesToShow: 4,
            infinite: true,
            autoplay:false,
            autoplaySpeed:2000,
            slidesToScroll: 1,
            prevArrow: '<div class="slider-left "><img src="img/L.png" alt=""></div>',
            nextArrow: '<div class="slider-right "><img src="img/R.png" alt=""></div>'
            
        });
        /*animated*/
        jQuery(document).ready(function($) {
    $('footer').addClass('wow animated fadeInUp'); 
    $('.advantages-content__img,.slider__items,.in-detail,.input-submit').addClass('wow animated zoomIn'); 
    
    $('.waiting__item,.price__item').addClass('wow animated bounceIn');
    $('.subtitel,.headliner__photo').addClass('wow animated fadeInRight');
    $('.headliner__video').addClass('wow animated fadeInLeft');
    $('.wow').attr('data-wow-duration', '3.5s' );

});
jQuery(document).ready(function($) {
new WOW().init();
});