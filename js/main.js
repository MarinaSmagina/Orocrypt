$(document).ready(function(){
    $('.gallery').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
		slidesToScroll: 1
	});
});
$('.scroll-btn').on('click', function() {
    $.smoothScroll({
        scrollElement: $('#token_sale'),
        scrollTarget: '#findme'
    });
    return false;
});