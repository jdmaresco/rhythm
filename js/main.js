$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 65
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	$('#talk-button').on('click',function(e) {
		e.preventDefault();
		olark('api.box.expand');
	});

	// $('#challenges').parallax({
	// 	imageSrc: './img/roughwall.jpg',
	// 	speed: 0.1
	// });

	// $('#team').parallax({
	// 	imageSrc: './img/birds-bg-2400.jpg',
	// 	speed: 0.1
	// });
});
