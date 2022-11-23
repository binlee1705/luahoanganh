//"use strict";

'use strict';

$(window).load(function () {
    /*Phần khung ảnh*/
    LoadImage();

    $('.owl-carousel').on('changed.owl.carousel', function (event) {
        $(undefined).find('img').lazy({
            effect: "fadeIn",
            effectTime: 0
        });
    });
});
function owlslide(num, margin, autoplay, dot, nav, items, animateIn, animateOut) {
    var option = {
        items: num,
        autoplay: num > items[0] ? autoplay : false,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        loop: num > 1,
        nav: num > items[0] ? nav : false,
        dots: num > items[0] ? dot : false,
        autoplayHoverPause: true,
        margin: margin[0],
        lazyLoad: true,
        navText: [''],
        animateIn: animateIn,
        animateOut: animateOut,
        responsive: {
            0: {
                items: items[4],
                margin: margin[4],
                autoplay: num > items[4] ? autoplay : false,
                nav: num > items[4] ? nav : false,
                dots: num > items[4] ? dot : false
            },
            479: {
                items: items[3],
                margin: margin[3],
                autoplay: num > items[3] ? autoplay : false,
                nav: num > items[3] ? nav : false,
                dots: num > items[3] ? dot : false
            },
            767: {
                items: items[2],
                margin: margin[2],
                autoplay: num > items[2] ? autoplay : false,
                nav: num > items[2] ? nav : false,
                dots: num > items[2] ? dot : false
            },
            991: {
                items: items[1],
                margin: margin[1],
                autoplay: num > items[1] ? autoplay : false,
                nav: num > items[1] ? nav : false,
                dots: num > items[1] ? dot : false
            },
            1199: {
                items: items[0],
                margin: margin[0],
                autoplay: num > items[0] ? autoplay : false,
                nav: num > items[0] ? nav : false,
                dots: num > items[0] ? dot : false
            }
        }
    };
    return option;
}
function LoadImage() {
    $("img").lazy({
        effect: "fadeIn",
        effectTime: 1000
    });
}
function scrollHead() {
    event.preventDefault();
    $('body,html').animate({ scrollTop: 0 }, 1600);
}

$(document).ready(function () {
    $(window).scroll(function () {
        $('#bttop').click(function () {
            scrollHead();
        });
    });
    $(function () {
        //$('.noidung img').attr("data-lightbox", "roadtrip");
        //var countimg = 0;
        //$('.noidung img').each(function () {
        //    var src = $(this).attr("src");
        //    if (!src.includes("http") ) {
        //        src = $("#adminPage").val() + src;
        //        $(this).attr("src", src);
        //    }
        //    if (!$(this).parent().is("a")) {
        //        $('<a class="example-image-link countimg' +
        //            countimg +
        //            '" href="' +
        //            src +
        //            '" data-lightbox="example-1"></a>').insertBefore($(this));
        //        $('.countimg' + countimg).append($(this));
        //    } else {
        //        var href = $(this).parent("a").attr("href");
        //        if (href === src)
        //            $(this).parent("a").attr({
        //                "class": "example-image-link countimg" + countimg,
        //                "data-lightbox": "example-1"
        //            });
        //    }
        //    countimg++;
        //});

        //lightbox.option({
        //    'resizeDuration': 200,
        //    'wrapAround': true
        //});

    });
    $('.openList').click(function () {
        $('#menu').toggleClass('ac');
        $('.openList').toggleClass('ac');
        $('#overlay').fadeToggle();
    });
    $('#overlay').click(function () {
        $('#menu').toggleClass('ac');
        $('.openList').toggleClass('ac');
        $('#overlay').fadeToggle();
    });
    $('.openSub').click(function () {
        $(this).next('ul').slideToggle();
        $(this).toggleClass('ac');
        $(this).parents('li').toggleClass('ac');
    });
    $('.btnToggle').click(function () {
        $(this).toggleClass("ac");
        $(this).parent('.group').find('.detail').toggleClass("ac").slideToggle();
    });
    $('html').on('click', ".tabs .tab-links a", function (e) {
        var currentAttrValue = $(this).attr('href');
        $('.tabs ' + currentAttrValue).addClass("active").siblings().removeClass("active");
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
    if ($('.imageL').length > 0 && $('.imageSm').length > 0) {
        $('.imageL').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.imageSm',
            autoplay: true

        });
        $('.imageSm').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.imageL',
            dots: false,
            arrows: false,
            focusOnSelect: true
        });
    }
    if ($('#newMain .slickMain').length > 0 && $('#newMain .other').length > 0) {
        $('#newMain .slickMain').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '#newMain .other',
            autoplay: true

        });
        $('#newMain .other').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '#newMain .slickMain',
            dots: false,
            arrows: true,
            focusOnSelect: true,
            autoplaySpeed: 3000,
            infinite: true,
            speed: 1000,
            nextArrow: '<i class="far fa-chevron-right slick-next"></i>',
            prevArrow: '<i class="far fa-chevron-left slick-prev"></i>',
            responsive: [{
                breakpoint: 479,
                settings: {
                    slidesToShow: 2
                }
            }]
        });
    }

    //var href = location.href.toString();
    //if (!href.includes("localhost")) {
    //    $(document).keydown(function (event) {
    //        if (event.keyCode == 123) {
    //            return false;
    //        } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    //            return false;
    //        } else if (event.ctrlKey &&
    //            (event.keyCode === 67 ||
    //                event.keyCode === 86 ||
    //                event.keyCode === 85 ||
    //                event.keyCode === 117)) {
    //            return false;
    //        }
    //    });
    //    window.addEventListener('contextmenu', function (e) {
    //        e.preventDefault();
    //    }, false);
    //}

    //$('#slideMain').each(function () {
    //    $(this).owlCarousel(owlslide($(this).find('>*').size(), [10, 10, 10, 10, 10, 10], true, true, true, [1, 1, 1, 1, 1], "fadeIn", "fadeOut"));
    //});

    $(".marquee").marquee({ duration: 20000, gap: 20, delayBeforeStart: 0, direction: "left", duplicated: true, pauseOnHover: true });
});

var size = parseInt($(".noidung").css("font-size")),
    lineheight = parseInt($(".noidung").css("line-height"));
size || (size = 16);
lineheight || (lineheight = 24);

function Increasenoidung() {
    size++;
    lineheight += 2;
    $(".noidung").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
    $(".noidung").find("*").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
}

function Decreasenoidung() {
    size--;
    lineheight -= 2;
    $(".noidung").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
    $(".noidung").find("*").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
}

function Resetnoidung() {
    size = 16;
    lineheight = 24;
    $(".noidung").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
    $(".noidung").find("*").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
}

function scrollHead() {
    event.preventDefault();
    $('body,html').animate({ scrollTop: 0 }, 0);
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

