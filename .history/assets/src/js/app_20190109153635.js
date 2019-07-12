'use strict';
/**
 *  Load modules
*/
import showSubMenu from './../../libs/jquery-mobile-menu/dist/jquery-simple-mobilemenu';



(function ($) {

    let sliderInit = $('.main-slider__inner');
    let multiSliderSmInit = $('.multi-slider--sm');
    let multiSliderLgInit = $('.multi-slider--lg');
    let phone = $('.phone');
    let iconPhone = $('.icon-phone');
    let dotsContainer = $('.dots-container');
    let url = document.location.toString();
    let li = $('#menu-mobile-menu li.hasChild');
    let liHasChildLink = $('#menu-mobile-menu li.hasChild a');
    $(window).on('load', function () {
        $('<span class="arrow"></span>').appendTo('li');
    });
     let arrow = $('#menu-mobile-menu li.hasChild .arrow');
        arrow.on('click',showSubMenu);


    $("a").filter(function () {
        return url.indexOf(this.href) != -1;
    }).addClass("active");

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
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 768,
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
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 768,
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

    let addMobileSlider = function () {
        multiSliderSmInit.slick({
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 480,
                    settings: "unslick",
                    slidesToShow: 1
                }
            ]
        });
    };
    addMobileSlider();

    $(window).on('resize', function () {
        if ($(window).width() <= 480) {
            addMobileSlider();
        }
    });

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


    $(".mobile_menu").slideMobileMenu({
        onMenuLoad: function (menu) {
        },
        onMenuToggle: function (menu, opened) {
        }
    });
    /* add plugins done*/

    $(window).on('click', '.sm_menu_outer .hasChild', function () {
        $('.sm_menu_outer').toggleClass('transparent');
    });


    $(window).on('click', '#sm_menu_ham', function () {
        $('.sm_menu_outer').removeClass('transparent');
    });


    phone.on('click', function () {
        $(this).toggleClass('active');
    });

    iconPhone.on('click', function () {
        phone.toggleClass('active');
    });


})(jQuery);