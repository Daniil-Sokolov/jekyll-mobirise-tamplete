$(document).ready(function(){


  $(".item").magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });


})







$(window).load(function() {
  $('#before-load').find('span').fadeOut().end().delay(400).fadeOut('slow');
});





$(function(){
      
      // pjax
      $(document).pjax('a', '#pjax-container', {fragment: '#pjax-container'});
    })




$(document).on('ready pjax:end', function(event) {
  $(document).ready(function(){


  $(".item").magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });


})
})