$('.skills_slider').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    focusOnSelect: true,
    adaptiveHeight: true,
    // responsive: [{
    //         breakpoint: 768,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 3
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 1
    //         }
    //     }
    // ]
});

$('.testimonials_pictures').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonials_text',
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
$('.testimonials_text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.testimonials_pictures'
  });