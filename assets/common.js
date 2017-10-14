$(document).ready(function(){


	$(".item").magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

})

$(function() {

$(document).pjax('.pjax-container', {fragment: '.pjax-container'})

});