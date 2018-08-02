$('.menu-icon').click(function() {
  $('header').toggleClass('menu-opened');
}
);

$('.animation-group').waypoint(function() {
  $(this.element).find('.animate-fade, .animate-fade-up').addClass('animated');
}, {offset: '90%' });

$('.animate-fade, .animate-fade-up').waypoint(function() {
  $(this.element).addClass('animated');
}, {offset: '90%' });

$('.dean-gabriele-text').waypoint(function (direction) {
    if (direction == 'down') {
        $('.dean-gabriele-image-desktop').addClass('bottom');
    } else {
        $('.dean-gabriele-image-desktop').removeClass('bottom');
    }
}, {offset: 'bottom-in-view' });

  