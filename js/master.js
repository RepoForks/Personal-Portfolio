$(document).ready(function() {
    $('.carousel[data-type="multi"] .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 4; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });

//Button Scroll
    $(".btn-custom").click(function(){
      $("html, body").animate({
        scrollTop: $("#about-me").offset().top}, "slow");
    });


//Scroll On Click Navbar
    $('body').on('click', '.scroll-on-click a', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 'slow');
      event.preventDefault();
      /* Act on the event */
    });
});

$(function(){

  $('.navbar-collapse ul li a').click(function() {
    /* Act on the event */
    $('.navbar-toggle:visible').click();
  });

})
