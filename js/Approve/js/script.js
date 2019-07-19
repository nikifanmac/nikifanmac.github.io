jQuery(document).ready(function($){


  // $('.header__navigation__mobile').hide();
  //
  // $('#burg').click(function() {
  //
  //   $('.header__navigation__mobile').slideToggle(600);
  // });

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





      //   $(".advantages__slider").slick({
      //   vertical: true,
      //   dots: true,
      //   arrows: false,
      //   infinite: false,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   // adaptiveHeight: true,
      //   autoplay: true,
      //   autoplaySpeed: 5000,
      // });



   //    var $gallery = $('.advantages__slider')
   //   var is_scroll = true,
   //        count_slides = 0;
   //
   //   $gallery.on('init', function(event, slick, currentSlide, nextSlide){
   //     count_slides = slick.$slides.length;
   //   });
   //   $gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
   //     is_scroll = false;
   //   });
   //   $gallery.on('afterChange', function(event, slick, currentSlide, nextSlide){
   //     setTimeout(function(){
   //       is_scroll = true;
   //     }, 1000)
   //   });
   //
   //   $gallery.slick({
   //     vertical: true,
   //     dots: true,
   //     arrows: false,
   //     infinite: false,
   //     slidesToShow: 1,
   //     slidesToScroll: 1,
   //     // adaptiveHeight: true,
   //     autoplay: true,
   //     autoplaySpeed: 5000,
   // })
   //
   //   function slick_move(side) {
   //     if(is_scroll) {
   //       is_scroll = false;
   //
   //       if(side === 'next') {
   //          $gallery.slick('slickPrev');
   //         console.log('top')
   //       } else {
   //         $gallery.slick('slickNext');
   //
   //         console.log('bottom')
   //       }
   //     }
   //   }
   //
   //
   //   $gallery.bind('mousewheel', function(e) {
   //     var scrollTo = 0;
   //
   //
   //     var gecurent_slide = $gallery.slick('slickCurrentSlide') + 1;
   //
   //     if(scrollTo > e.originalEvent.wheelDelta) {
   //       slick_move('prev')
   //       if (gecurent_slide !== count_slides) {
   //         e.preventDefault();
   //       }
   //     } else {
   //       slick_move('next')
   //       if(gecurent_slide !== 1) {
   //         e.preventDefault();
   //       }
   //     }
   //     scrollTo = (e.originalEvent.wheelDelta);
   //   });


    //
    //   var $gallery = $('.advantages__slider')
    //   var is_scroll = true;
    //
    //
    //   $gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     is_scroll = false;
    //   });
    //   $gallery.on('afterChange', function(event, slick, currentSlide, nextSlide){
    //     setTimeout(function(){
    //       is_scroll = true;
    //     }, 1000)
    //   });
    //
    //
    //   $gallery.slick({
    //     vertical: true,
    //     dots: true,
    //     arrows: false,
    //     infinite: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     // adaptiveHeight: true,
    //     autoplay: false,
    //     autoplaySpeed: 5000,
    // })
    //
    //   function slick_move(side) {
    //     if(is_scroll) {
    //       is_scroll = false;
    //
    //       if(side === 'next') {
    //          $gallery.slick('slickPrev');
    //         console.log('top')
    //       } else {
    //         $gallery.slick('slickNext');
    //
    //         console.log('bottom')
    //       }
    //     }
    //   }
    //
    //
    //   $gallery.bind('mousewheel', function(e) {
    //     var scrollTo = 0;
    //     e.preventDefault();
    //
    //     if(scrollTo > e.originalEvent.wheelDelta) {
    //       slick_move('prev')
    //     } else {
    //        slick_move('next')
    //     }
    //     scrollTo = (e.originalEvent.wheelDelta);
    //   });
    //





$(".advantages__slider #slick-slide-control00").text("01");
$(".advantages__slider #slick-slide-control01").text("02");
$(".advantages__slider #slick-slide-control02").text("03");





      $(".slider__logo__slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
      });


})
