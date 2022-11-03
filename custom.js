$('body').on('click', '#ht-about-toggle', function(e) {
  e.preventDefault();
  $(".ht-pop-up-container--about").toggleClass("ht-pop-up-container--show");
  $(".ht-close-container--about").toggleClass("ht-close-container--about--show");
});

$('body').on('click', '#ht-publication-toggle', function(e) {
  e.preventDefault();
  $(".ht-pop-up-container--publication").toggleClass("ht-pop-up-container--show");
  $(".ht-close-container--publication").toggleClass("ht-close-container--publication--show");
  $(".ht-fold-container").toggleClass("ht-fold-container--show");
});

$('body').on('click', '#ht-texts-toggle', function(e) {
  e.preventDefault();
  $(".ht-pop-up-container--texts").toggleClass("ht-pop-up-container--show");
  $(".ht-close-container--texts").toggleClass("ht-close-container--texts--show");
});
