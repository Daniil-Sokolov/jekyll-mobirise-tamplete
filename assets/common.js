$(document).ready(function(){


  $(".item, .pop").magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });


})


$(function(){
      
      // pjax
      $(document).pjax('a', '#pjax-container', {fragment: '#pjax-container'});
    })



$(window).load(function() {
  $('#before-load').find('span').fadeOut().end().delay(400).fadeOut('slow');
});

