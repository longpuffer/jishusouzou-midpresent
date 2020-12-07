$(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 250) {
        $('#menu-bar').addClass('fixed');
      } else {
        $('#menu-bar').removeClass('fixed');
      }
    });
  });