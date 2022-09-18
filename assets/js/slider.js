$(document).ready(function(){
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop: true,
		margin: 35,
		dots: true,
		autoWidth: true,
		dotsContainer: '.slider--dots',
		responsiveClass:true,
		items: 3,
		responsive : {
			0: {
				margin: 10
			},
			575: {
				margin: 35,
			}
		}
	});

	$('.slider--prev').click(function() {
		owl.trigger('prev.owl.carousel');
	})

	$('.slider--next').click(function() {
		owl.trigger('next.owl.carousel', [300]);
	});
});