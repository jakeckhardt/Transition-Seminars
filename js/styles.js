$(window).load(function() {
  $("body").removeClass("preload");
});





/*Menu slide left on burger click*/

$(".menu_button").click(function() {
  $(".bar").toggleClass("pushed");
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



/*parallax features*/


$(window).scroll(function() {
  var wScroll = $(window).scrollTop();

  $("#quote-1").css({
    'transform' : 'translate(0px, '+ wScroll /6 +'%)'
  });

  $("#quote-2").css({
    'transform' : 'translate(0px, '+ wScroll /3.5 +'%)'
  });

  $("#quote-3").css({
    'transform' : 'translate(0px, '+ wScroll /10 +'%)'
  });

  $("#programs-header h1").css({
    'transform' : 'translate(0px, '+ wScroll /10 +'%)'
  });

});









/* Index Fade in effects*/

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

  if ($(window).scrollTop()>1400) {
    $("#strategy img").addClass("animated fadeInUp");
    $("#strategy span").addClass("animated fadeInUp");
    $("#strategy p").addClass("animated fadeInUp");
  } else {

  }
});



$(window).width(function(){
  if ($(window).width() < 1200) {
    $("#nav").css("left", "-1200");
  }
});

$(window).resize(function(){
  if ($(window).width() < 1200) {
    $("#nav").css("left", "-1200");
  }
});
		
	







