//Pop up

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

$('body').on('click', '#ht-summerboy-toggle', function(e) {
  e.preventDefault();
  $(".ht-summerboy-video-container").toggleClass("ht-summerboy-video-container--show");
});

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 5000);
  });

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 0, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 0, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control-prev').click(function () {
        moveLeft();
    });

    $('a.control-next').click(function () {
        moveRight();
    });

});

//Video player

function playVideo() {
        $('#ht-summerboy-video').trigger('play');
    }
    function pauseVideo() {
        $('#ht-summerboy-video').trigger('pause');
    }
