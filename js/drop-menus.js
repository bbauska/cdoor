$(document).ready(function() {
  
  menu = $('#menu');
  
  $('.menu-trigger').on('click', function(e) {
    e.preventDefault(); 
    menu.toggleClass('ouvert');
    menu.slideToggle();
   
  });
  
  
  
  
  $(window).bind("resize", function () {
        console.log($(this).width())
        if ($(this).width() < 1190) {
              $('#menu').removeClass('monmenu').addClass('open')
        } else {
            $('#menu').removeClass('open').addClass('monmenu')
$('#menu').removeClass('ouvert')
          
          
        }
    }).trigger('resize');
  
  
  
  
  
});//end ready
