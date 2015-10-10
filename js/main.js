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

	$('#about').parallax({imageSrc: './img/about-parallax.png'});
});
