$('body').on('click', '#si-video-toggle', function(e) {
  e.preventDefault();
  $(".si-video-sign-container").toggleClass("si-video-sign-container--close");
});

$( function() {
    $( "#draggable" ).draggable();
    $( "#draggable-2" ).draggable();
    $( "#draggable-3" ).draggable();
    $( "#draggable-4" ).draggable();
    $( "#draggable-5" ).draggable();
    $( "#draggable-6" ).draggable();
    $( "#draggable-7" ).draggable();
    $( "#draggable-8" ).draggable();
    $( "#draggable-9" ).draggable();
    $( "#draggable-10" ).draggable();
    $( "#draggable-11" ).draggable();
    $( "#draggable-12" ).draggable();
    $( "#draggable-13" ).draggable();
    $( "#draggable-14" ).draggable();
  } );

  $(document).on("scroll", function(){
    var pixels = $(document).scrollTop();
    var pageHeight = $(document).height() - $(window).height();
    var progress = 100 * pixels / pageHeight;

    $("div.progress").css("width", progress + "%");
  })
