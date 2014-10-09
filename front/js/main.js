$(document).ready(function () {

  $('.navbar-list-item a').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 50
    }, 500);
  });

  $(document).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('is-scrolled');
      $('.navbar-btn').addClass('is-visible');
    } else {
      $('.navbar')
        .removeClass('is-scrolled')
        .removeClass('is-visible');
      $('.navbar-btn').removeClass('is-visible');
    }
  });

  $('.navbar-btn').on('click', function (evt) {
    evt.preventDefault();
    $(this)
      .parent()
        .toggleClass('is-visible');
  })

});