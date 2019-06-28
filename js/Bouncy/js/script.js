jQuery(document).ready(function($){


  $('.header__navigation__mobile').hide();
  
  $('#burg').click(function() {
  
    $('.header__navigation__mobile').slideToggle(600);
  });




      $(".team__slider").slick({
        dots: true,
      	arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
      });


 

      $(".testimonials__slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
      });


        $(".blog__slider").slick({
        vertical: true,
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
      });


        $("#map__button").click(function() {

          $(".map__hover").hide(100);
        });


        $(".map").mouseleave(function () {
          $(".map__hover").slideDown(1000);
        })



        $('a[href^="#"]').click(function(event){
          var id_clicked_element = $(this).attr('href');
          var destination = $(id_clicked_element).offset().top;
          $('html, body').animate({scrollTop: destination}, 1000);
          return false;
         });




})















