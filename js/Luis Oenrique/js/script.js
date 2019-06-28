jQuery(document).ready(function($){

	$('.header__navigation__mobile').hide();
	
	$('#burg').click(function() {
	
		$('.header__navigation__mobile').slideToggle(600);
	})



      $(".testimonials__slider").slick({
        dots: true,
      	arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1

      });



})


