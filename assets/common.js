$(document).ready(function(){


  $(".item").magnificPopup({
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