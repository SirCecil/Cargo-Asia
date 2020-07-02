@@include("Jquery.js");
@@include("burger.js");
@@include("slick.min.js");
@@include("webp.js");

jQuery(($) => {
  $('.header__city-list').on('click', '.select__head', function () {
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().fadeOut();
      } else {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
          $(this).addClass('open');
          $(this).next().fadeIn();
      }
  });

  $('.header__city-list').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
      if (!$(e.target).closest('.header__city-list').length) {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
      }
  });
});

$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    appendDots: $('.slider-item__wrapper'),
    autoplay: false,
    autoplaySpeed: 3000,
  });