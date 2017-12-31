$(document).ready(function () {
  $('#navbar').toggleClass('navbar-post-transition');

  $('.navbar-toggle').click(function () {
    $('.navbar-ctas').toggleClass('active');
    $('#navbar-collapse-button').toggleClass('active');
    $(this).parents('.navbar-toggle-contain').toggleClass('collapsed');
  });

  $('#navbar-collapse-button').click(function() {
    $('.navbar-ctas').toggleClass('active');
    $(this).toggleClass('active');
    $(this).parents().siblings('.navbar-toggle-contain').toggleClass('collapsed');
  });
});

$(window).scroll(function() {
  animateNavbar();
});

$(window).resize(function() {
  $('.navbar-ctas').removeClass('active');
  $('#navbar-collapse-button').removeClass('active');
  $('.navbar-toggle-contain').removeClass('collapsed');
});

// —————————————————————  Function Definitions  ————————————————————————————————— //

var animateNavbar = function() {
  if($(window).scrollTop() > 0){
    $('#navbar, .navbar-ctas, .navbar-toggle-contain').addClass('scrolled');
    $('#navbar').addClass('scrolled-hover');

    $('#navbar.scrolled').hover(function() {
      $('.navbar-ctas').addClass('scrolled-hover');
    }, function() {
      $('.navbar-ctas').removeClass('scrolled-hover');
    });
  }
  else if ($(window).scrollTop() == 0){
    $('#navbar, .navbar-ctas, .navbar-toggle-contain').removeClass('scrolled');
    $('#navbar, .navbar-ctas').removeClass('scrolled-hover');

    $('#navbar').hover(function() {
      $('.navbar-ctas').removeClass('scrolled-hover');
    });
  }
};
