jQuery(document).ready(function($){


  


        $('a[href^="#"]').click(function(event){
          var id_clicked_element = $(this).attr('href');
          var destination = $(id_clicked_element).offset().top;
          $('html, body').animate({scrollTop: destination}, 1000);
          return false;
         });


        

       


     });