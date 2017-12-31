$(document).ready(function() {

  setTimeout(function() {
    $('.scroll-downs').toggleClass('scroll-downs-post-transition');
  }, 2000);
});

$(window).scroll(function() {
  if($(window).scrollTop() > 0) {
    $('.scroll-downs').removeClass('scroll-downs-post-transition');
    // $('#scroll-down-text').addClass('hidden');
  }
  else {
    $('.scroll-downs').addClass('scroll-downs-post-transition');
    // $('#scroll-down-text').removeClass('hidden');
  }
});

$('.scroll-downs').click(function() {
  $('html, body').animate({
      scrollTop: $("#portfolio-scroll-target").offset().top - 85
  }, 1000);
})
