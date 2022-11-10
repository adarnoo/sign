// Pop up

$('body').on('click', '#ht-about-toggle', function(e) {
  e.preventDefault();
  $(".ht-pop-up-container--about").toggleClass("ht-pop-up-container--show");
  $(".ht-close-container--about").toggleClass("ht-close-container--about--show");
});

$('body').on('click', '#ht-publication-toggle', function(e) {
  e.preventDefault();
  $(".ht-spreads-scroll-container").toggleClass("ht-spreads-scroll-container--show");
  $(".ht-close-container--publication").toggleClass("ht-close-container--publication--show");
});

$('body').on('click', '#ht-texts-toggle', function(e) {
  e.preventDefault();
  $(".ht-pop-up-container--texts").toggleClass("ht-pop-up-container--show");
  $(".ht-close-container--texts").toggleClass("ht-close-container--texts--show");
  $(".ht-pop-up-title--fixed").toggleClass("ht-pop-up-title--fixed--show");
});

$('body').on('click', '#ht-summerboy-toggle', function(e) {
  e.preventDefault();
  $(".ht-summerboy-video-container").toggleClass("ht-summerboy-video-container--show");
});

// Video player

function playVideo() {
        $('#ht-summerboy-video').trigger('play');
    }
    function pauseVideo() {
        $('#ht-summerboy-video').trigger('pause');
    }
