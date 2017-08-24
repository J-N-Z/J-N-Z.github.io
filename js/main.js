;(function() {

	$('.js-main-slider').owlCarousel({
		loop: true,
		responsive:{
			0:{
				items:1
			}
		}
	});

	$('.js-trending-slider').owlCarousel({
		loop: true,
		responsive:{
			0:{
				items:1
			}
		}
	});

	$('.js-blog-slider').owlCarousel({
		nav:true,
		dots: false,
		loop: true,
		margin: 15,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			}
		}
	});
})();

