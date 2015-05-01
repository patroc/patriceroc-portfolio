'use strict';

(function($) {
  $(document).ready(function() {

$('#intro-anchor').scrollTo();
$('#work-anchor').scrollTo();
$('#about-anchor').scrollTo();
$('#contact-anchor').scrollTo();

// $('.img-holder').imageScroll();
$('.img-holder').imageScroll({
    coverRatio: 0.6
});

  });

})(jQuery);
