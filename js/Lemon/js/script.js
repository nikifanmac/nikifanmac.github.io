jQuery(document).ready(function($){

    $("#login__form , #login__remember , #login__button").hide();

    $("#login").click(function () {
      $("#login__form , #login__remember , #login__button").slideToggle(500);
    });


    $("#sign__form , #sign__remember , #sign__button").hide();

    $("#sign").click(function () {
      $("#sign__form , #sign__remember , #sign__button").slideToggle(500);
    });




      $(".slider__block").slick({
        dots: true,
      	arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
  		autoplaySpeed: 4000,

      });

          $(".slider__sidebar").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      autoplaySpeed: 4000,

      });








})