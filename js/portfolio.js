$('.project-container').on('click', function() {

  var projectID = '#' + this.id;
  selectProject(projectID);

});

$('#scroll-down-arrow').on('click', function() {
    $('html, body').animate({
    scrollTop: $("#portfolio-scroll-target").offset().top - 85
  }, 1000);
})

$("li").on('click', function() {
  sortProjectID(this.id);
});

// —————————————————————  Function Definitions  ————————————————————————————————— //

var sortProjectID = function(scrollID) {
  var scrollID = scrollID;
  var projectID = null;

  switch(scrollID) {
    case 'scroll-ignitetexas':
      projectID = '#ignitetexas';
      break;
    case 'scroll-inksaver':
      projectID = '#inksaver';
      break;
    case 'scroll-travelportal':
      projectID = '#travelportal';
      break;
    case 'scroll-weatherapp':
      projectID = '#weatherapp';
      break;
    case 'scroll-personalwebsite':
      projectID = '#personalwebsite';
      break;
    case 'scroll-dashboard':
      projectID = '#dashboard';
      break;
    default:
      projectID = null;
  }

  scrollToProject(projectID);
}

var scrollToProject = function(projectID) {

  selectProject(projectID);

  $('html, body').animate({
    scrollTop: $(projectID).offset().top - 85
  }, 1000);
}

var selectProject = function(projectID) {

  $(projectID).siblings().children('.project-feature-description-container').removeClass('selected');
  $(projectID).children('.project-feature-description-container').toggleClass('selected');
  $(projectID).find('.project-feature-image-title').toggleClass('expanded');

  $(projectID).siblings().each(function() {

    var projectTitle = $(this).find('.project-feature-image-title');
    if($(projectTitle).hasClass('expanded')) {
      $(projectTitle).toggleClass('expanded');
    }
  })
}
