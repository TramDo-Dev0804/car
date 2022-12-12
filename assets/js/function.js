function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function () {
    $('.album-slick').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
});
$(document).ready(function () {
    $(".next").click(function () {
        $(".pagination")
            .find(".pageNumber.active")
            .next()
            .addClass("active");
        $(".pagination")
            .find(".pageNumber.active")
            .prev()
            .removeClass("active");
    });
    $(".prev").click(function () {
        $(".pagination")
            .find(".pageNumber.active")
            .prev()
            .addClass("active");
        $(".pagination")
            .find(".pageNumber.active")
            .next()
            .removeClass("active");
    });
});
$("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
    $(e.target)
      .prev()
      .find("i:last-child")
      .toggleClass("fa-minus fa-plus");
  });

  // Main/Product image slider for product page
  $('.main-img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 300,
    lazyLoad: 'ondemand',
    asNavFor: '.thumb-nav',
    prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i><span class="sr-only sr-only-focusable"><</span></div>',
    nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i><span class="sr-only sr-only-focusable">></span></div>'
});

// Thumbnail/alternates slider for product page
$('.thumb-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    centerPadding: '0px',
    asNavFor: '.main-img-slider',
    dots: false,
    centerMode: false,
    draggable: true,
    speed: 200,
    focusOnSelect: true,
    prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i><span class="sr-only sr-only-focusable"><</span></div>',
    nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i><span class="sr-only sr-only-focusable">></span></div>'
});

//keeps thumbnails active when changing main image, via mouse/touch drag/swipe
$('.main-img-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    //remove all active class
    $('.thumb-nav .slick-slide').removeClass('slick-current');
    //set active class for current slide
    $('.thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
});
$(document).ready(function () {
    $('.product').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        // nextArrow:,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }]
    });
});