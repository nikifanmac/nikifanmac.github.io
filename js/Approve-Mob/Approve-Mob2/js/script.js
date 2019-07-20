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

  $('#burg').click(function () {
    $('body').toggleClass('header__navigation__mobile__active');
  });

  // $('').click(function () {
  //   $('body').removeClass('header__navigation__mobile__active');
  // });



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
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });






        $(".advantages__slider").slick({
        vertical: false,
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: false,
        autoplaySpeed: 5000,

      });


      $(".slider__logo__slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
      });


   //
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




        $('a[href^="#"]').click(function(event){
          var id_clicked_element = $(this).attr('href');
          var destination = $(id_clicked_element).offset().top;
          $('html, body').animate({scrollTop: destination}, 1000);
          return false;
         });


$(".advantages__slider #slick-slide-control00").text("01");
$(".advantages__slider #slick-slide-control01").text("02");
$(".advantages__slider #slick-slide-control02").text("03");





      $(".slider__links__wrap__slider").slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
      });

      $('#submenu__go__mobile').click(function () {
        $('.footer__wrap .submenu').toggleClass('submenu__active');
      });


})
