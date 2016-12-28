$(window).load(function() {
  $("body").removeClass("preload");
});




$(".menu_button").click(function(event) {
  $('#menu_button_container').toggleClass("pushed");
  $("#nav").toggleClass("nav-left");
  $("#logo").toggleClass("logo-left");
});