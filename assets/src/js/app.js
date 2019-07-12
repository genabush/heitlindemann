'use strict';
/**
 *  Load modules
 */


(function ($) {

    let sliderInit = $('.main-slider__inner');
    let multiSliderLgInit = $('.multi-slider--lg');

    let multiSliderSmInit = $('.multi-slider--sm');


    let phone = $('.phone');
    let iconPhone = $('.icon-phone');
    let dotsContainer = $('.dots-container');
    let url = document.location.toString();




    $("a").filter(function () {
        return url.indexOf(this.href) != -1;
    }).addClass("active");

    sliderInit.each(function () {
        let $this = $(this);
        if ($this.children().length > 1) {
            $this.slick({
                autoplay: true,
                dots: true,
                infinite: true,
                arrows: false,
                appendDots: dotsContainer
            });
        }
    });


    /* add plugins */
    multiSliderLgInit.each(function () {
        let $this = $(this);
        if ($this.children().length > 3) {
            $this.slick({
                autoplay: true,
                dots: false,
                arrows: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
    });

    const mobileSlider = function () {
        multiSliderSmInit.each(function () {
            let $this = $(this);
            if ($this.children().length > 2) {
                $this.slick({
                    autoplay: true,
                    dots: false,
                    arrows: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                infinite: true
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            }
            else {
                $this.slick({
                    autoplay: true,
                    dots: false,
                    arrows: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst:true,
                    responsive: [
                        {
                            breakpoint: 481,
                            settings: "unslick"
                        }
                    ]
                });
            }

        });
    };
    mobileSlider();




    $(".mobile_menu").slideMobileMenu({
        onMenuLoad: function (menu) {
        },
        onMenuToggle: function (menu, opened) {
        }
    });
    /* add plugins done*/

    phone.on('click', function () {
        $(this).toggleClass('active');
    });

    iconPhone.on('click', function () {
        phone.toggleClass('active');
    });



})(jQuery);