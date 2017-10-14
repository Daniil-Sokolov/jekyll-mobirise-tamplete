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
      $(document).pjax('.pjax-container', {fragment: '.pjax-container'});
    })