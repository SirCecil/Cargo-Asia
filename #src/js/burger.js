$(document).ready(function() {
	$('.header__burger').click(function(event) {
    $('.header__burger').toggleClass('burger_active');
		$('.header__nav').toggleClass('nav_active');
	});
});