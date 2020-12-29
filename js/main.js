;$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header-slider').slick({
        dots: true,
        arrows : false,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        });

        $('.slider-projects').slick({
            dots: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            responsive: [
              {
                breakpoint: 1220,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              
              {
                breakpoint: 768,
                settings: {
                  slidesToShow:1,
                  slidesToScroll:1,
                  infinite: true,
                  dots: true
                }
              }
              
            ]
          });
});

