$(window).on("load", function() {
  $('.pane, .loader').addClass('post-transition');

  setTimeout(function() {
    $('.loader').addClass('stop-animation');
  }, 1500);

  $('main').removeClass('initial-hide');
});
