$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('app').addClass('changeColor');
    }
    if ($(this).scrollTop() < 50) {
      $('app').removeClass('changeColor');
    }
  });
});
