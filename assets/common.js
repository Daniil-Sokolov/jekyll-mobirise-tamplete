$(document).ready(function() {
  $(".item").magnificPopup({
    type: "image",
    gallery: {
      enabled: !0
    }
  })
});



$(function() {
  $(document).pjax("a", "#pjax-container", {
    fragment: "#pjax-container"
  })

$(document).on('pjax:start', function() { $('#pjax-container').fadeOut(); })
$(document).on('pjax:end',   function() { $('#pjax-container').fadeIn("slow");})

});



$(document).on("ready pjax:end", function(a) {
  $(document).ready(function() {
    $.getScript("/assets/theme/js/script.js");
    $.getScript("//yastatic.net/es5-shims/0.0.2/es5-shims.min.js");
    $.getScript("//yastatic.net/share2/share.js");
  });
  $(document).ready(function() {
    $(".item").magnificPopup({
      type: "image",
      gallery: {
        enabled: !0
      }
    })
  }) 
});