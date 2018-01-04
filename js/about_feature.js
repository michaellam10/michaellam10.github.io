$(window).on("load", function() {
  setTimeout(function() {
    transitionHeader();
  }, 1500);
});

const mq = window.matchMedia( "(min-width: 1280px)" );
var aboutMeContainerOffset = $('#aboutme').offset().top - 500;
var bioGraphicContainerOffset = $('#bio-graphic').offset().top - 400;
var bioContentFeatureContainerOffset = $('#bio-content-feature').offset().top - 500;
var bioGalleryContainerOffset = $('#gallery').offset().top - 600;

$(document).ready(function() {
  if(mq.matches) {
    $(document.body).on('touchmove', onScroll); // for mobile
    $(window).on('scroll', onScroll);
  }
  else {
    transitionAboutMe();
    transitionGraphic();
    transitionContent();
    transitionGallery();
  }
});


$(window).resize(function() {
  if(mq.matches) {
    $(document.body).on('touchmove', onScroll); // for mobile
    $(window).on('scroll', onScroll);
  }
  else {
    transitionAboutMe();
    transitionGraphic();
    transitionContent();
    transitionGallery();
  }
});

// —————————————————————  Function Definitions  ————————————————————————————————— //

function onScroll(){

  if($(window).scrollTop() >= aboutMeContainerOffset) {
    transitionAboutMe();
  };

  if($(window).scrollTop() >= bioGraphicContainerOffset) {
    transitionGraphic();
  };

  if($(window).scrollTop() >= bioContentFeatureContainerOffset) {
    transitionContent();
  };

  if($(window).scrollTop() >= bioGalleryContainerOffset) {
    transitionGallery();
  };

}

function transitionHeader() {
  $('.bio-photo').toggleClass('bio-photo-post-transition');
  $('.bio-name').toggleClass('bio-name-post-transition');
  $('#bio-first-name').toggleClass('first-name-post-transition');
  $('#bio-last-name').toggleClass('last-name-post-transition');
  $('.bio-header-description').toggleClass('bio-header-description-post-transition');
}

function transitionGraphic() {
  $('#bio-graphic').find('.bio-feature-text').addClass('scrolled');
  $('#bio-graphic').find('p').addClass('post-transition');
  $('#bio-graphic').find('.fact-icon-container').addClass('post-transition');
  $('#bio-graphic').find('.fact-icon-container').find('i, img').addClass('post-transition');
  $('#bio-graphic').find('.fact-icon-container.post-transition').each(function( index ) {

    var postTransitionDelay = 0.25 * index;
      $(this).css('transition-delay', postTransitionDelay + 's');
  });
};

function transitionAboutMe() {
  $('.section-photo').addClass('about-photo-post-transition');
  $('.section-title').addClass('about-title-post-transition');
  $('.section-content').addClass('about-content-post-transition');
  $('#about-title-left').addClass('post-transition');
  $('#about-title-right').addClass('post-transition');

  window.setTimeout(function() {
    $('#aboutme').find('.line-connect-2').addClass('post-transition');
    $('#aboutme').find('.line-connect-5').addClass('post-transition');
  }, 1500);
};

function transitionGallery() {
  $('#gallery').find('img').addClass('post-transition');
  $('#gallery').find('.line-connect-6').addClass('post-transition');
}

function transitionContent() {
  $('#bio-content-feature').find('.feature-item-icon').addClass('post-transition');
  $('#bio-content-feature').find('.feature-item-title').addClass('post-transition');
  $('#bio-content-feature').find('.feature-item-detail').addClass('post-transition');
}
