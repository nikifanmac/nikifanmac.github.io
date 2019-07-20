jQuery(document).ready(function($){

    $('.exit').click(function () {
      $('.popup').css('display' , 'none');
    });

    $('.popup__go').click(function () {
      $('.popup').css('display' , 'flex');
    });




            $('[href^="#"]').click(function(event){
              var id_clicked_element = $(this).attr('href');
              var destination = $(id_clicked_element).offset().top;
              $('html, body').animate({scrollTop: destination}, 1000);
              return false;
             });


  $('.header__menu__link .header__menu__link__item').not('.header__menu__link__item__active').click(function(){
      var index = $(this).index();
      var content = $('.header__form__right').eq(index);
      $(this).addClass('header__menu__link__item__active').siblings().removeClass('header__menu__link__item__active');
      $('.header__form__right').css('display', 'none').eq(index).css('display', 'flex');
  });


  $(function(){
      $('.header__menu__link__item1').addClass('header__menu__link__item__active');
      $('.header__form__right__branding').css('display' , 'flex');
    });


  $(".form__popup").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/Approve/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Спасибо!");
      $('.popup').css('display' , 'none');
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });


  $(".header__form__email").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/Approve/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Спасибо!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });


var h = $(window).height();
  $(window).scroll(function(){
  if ( ($(this).scrollTop()+h/2) >= $(".works__stage").offset().top) {
  setTimeout(function () {
        $('.works__stage__item1').addClass('works__stage__item__active');
    },
  1000);

  setTimeout(function () {
      $('.works__stage__item2').addClass('works__stage__item__active');
  },
2000);

setTimeout(function () {
    $('.works__stage__item3').addClass('works__stage__item__active');
},
3000);

setTimeout(function () {
    $('.works__stage__item4').addClass('works__stage__item__active');
},
4000);


setTimeout(function () {
    $('.works__stage__item5').addClass('works__stage__item__active');
},
5000);

setTimeout(function () {
    $('.works__stage__item6').addClass('works__stage__item__active');
},
6000);

setTimeout(function () {
    $('.works__stage__item7').addClass('works__stage__item__active');
},
7000);

setTimeout(function () {
    $('.works__stage__item8').addClass('works__stage__item__active');
},
8000);

    }
});





      $(".slider__logo__slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
      });








})
