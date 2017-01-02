$(window).load(function() {
  $("body").removeClass("preload");
});


/*Menu slide left on burger click*/

$(".menu_button").click(function(event) {
  $('#menu_button_container').toggleClass("pushed");
  $("#nav").toggleClass("nav-left");
});


/*Burger color change on scroll*/

var intro = $("#intro").offset();

$(window).scroll(function() {
    if ($(window).scrollTop() >= intro.top) {
        $(".bar").addClass("bar-scroll");
    } else {
        $(".bar").removeClass("bar-scroll");
    }
});


/* Fade in effects*/

$(window).scroll(function() {
  if ($(window).scrollTop()>600) {
		$("#vision img").addClass("animated fadeInUp");
    $("#vision span").addClass("animated fadeInUp");
    $("#vision p").addClass("animated fadeInUp");
	} else {

  }

  if ($(window).scrollTop()>1000) {
    $("#value-photos img").addClass("animated fadeInUp");
  } else {

  }

  if ($(window).scrollTop()>1500) {
    $("#strategy img").addClass("animated fadeInUp");
    $("#strategy span").addClass("animated fadeInUp");
    $("#strategy p").addClass("animated fadeInUp");
  } else {

  }
});




		
	







