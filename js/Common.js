'use strict';

const wow = new WOW(
    {
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 50, // default 
        live: true // default
    }
); wow.init();

function owlslide(num, margin, autoplay, dot, nav, items, animateIn, animateOut, mouseDrag = true) {
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
        mouseDrag: mouseDrag,
        responsive: {
            0: {
                items: items[4],
                margin: margin[4],
                autoplay: num > items[4] ? autoplay : false,
                nav: num > items[4] ? nav : false,
                dots: num > items[4] ? dot : false,
            },
            479: {
                items: items[3],
                margin: margin[3],
                autoplay: num > items[3] ? autoplay : false,
                nav: num > items[3] ? nav : false,
                dots: num > items[3] ? dot : false,
            },
            767: {
                items: items[2],
                margin: margin[2],
                autoplay: num > items[2] ? autoplay : false,
                nav: num > items[2] ? nav : false,
                dots: num > items[2] ? dot : false,
            },
            991: {
                items: items[1],
                margin: margin[1],
                autoplay: num > items[1] ? autoplay : false,
                nav: num > items[1] ? nav : false,
                dots: num > items[1] ? dot : false,
            },
            1199: {
                items: items[0],
                margin: margin[0],
                autoplay: num > items[0] ? autoplay : false,
                nav: num > items[0] ? nav : false,
                dots: num > items[0] ? dot : false,
            }
        }
    }
    return option;
}
function scrollHead(event) {
    event.preventDefault();
    $('body,html').animate({ scrollTop: 0 }, 1600);
}
$(window).scroll(function () {
    var offsetWindow = $(this).scrollTop();
    var offsetTopIconService = $("#iconService").offset().top;
    var hIconService = $("#iconService").height();
    if (offsetWindow > 0) {
        $("#header").addClass("fixTop");
    }
    if (offsetWindow > hIconService + offsetTopIconService) {
        $("#header").addClass("fixService");
    }
    if (offsetWindow < hIconService + offsetTopIconService && offsetWindow > 0) {
        $("#header").removeClass("fixService");
    }
    if (offsetWindow == 0) {
        $("#header").removeClass("fixTop");
    }
    if ($("#news .detail .colLeft").length > 0) {
        var hHeader = $("#header").height();
        var offset = $("#news .detail .colLeft").offset().top;
        var offset_Bottom = offset + $("#news .detail .colLeft").height() - $(".fixRightDetail").height();
        if (offsetWindow >= offset - hHeader && offsetWindow <= offset_Bottom) {
            $(".fixRightDetail").css({ "bottom": "auto", "top": offsetWindow - offset + hHeader + 20 })
        } else if (offsetWindow >= offset_Bottom) {
            $(".fixRightDetail").css({ "bottom": "0", "top": "auto" })
        } else {
            $(".fixRightDetail").css({ "bottom": "auto", "top": "0" })
        }
        $(".list_tableOfContents li> a").each(function () {
            var id = $(this).attr("href");
            var dataOffset = $(`${id}`).offset().top;
            if (offsetWindow + 10 > dataOffset) {
                $(this).parents("ul").prevAll(":has(a.active)").find($(".active")).removeClass("active");
                $(this).parents("ul").find($(".active")).removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
        if ($("#news .detail .noidung").offset().top < offsetWindow) {
            $("#btn_tableOfContents1").addClass("ac");
        } else {
            $("#btn_tableOfContents1").removeClass("ac");
        }
    }
});
$(document).ready(() => {
    $('#bttop').click(function (e) {
        scrollHead(e);
    });
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 400) {
            $('#bttop').addClass("active");
        } else {
            $('#bttop').removeClass("active");
        }
    });
    $('.openList').click(() => {
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
    $('html').on('click', ".tabs .tab-links a",
        function (e) {
            var currentAttrValue = $(this).attr('href');
            $('.tabs ' + currentAttrValue).addClass("active").siblings().removeClass("active");
            $(this).parent('li').addClass('active').siblings().removeClass('active');
            e.preventDefault();
        });
    $('.modal').on('shown.bs.modal', function () {
        $(this).trigger('focus')
    })
    // $(".marquee").marquee({ duration: 20000, gap: 20, delayBeforeStart: 0, direction: "left", duplicated: true, pauseOnHover: true });

    $('#iconService:not(.inside) .group').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [0, 0, 0, 0, 0, 0], false, true, true, [8, 8, 6, 5, 4], "", ""));
    });
    $('#iconService.inside .group').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [0, 0, 0, 0, 0, 0], false, true, true, [8, 8, 6, 5, 4], "", ""));
    });
    $('#iconService2 .group').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [0, 0, 0, 0, 0, 0], false, true, true, [9, 8, 6, 6, 4], "", "", true));
    });
    $('#staffHome:not(.list) .group').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [0, 0, 0, 0, 0, 0], true, true, true, [1, 1, 1, 1, 1], "fadeIn", "fadeOut", false));
    });
    $('#customer .group').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [10, 10, 10, 10, 10, 0], true, true, true, [5, 4, 4, 4, 3], "fadeIn", "fadeOut"));
    });
    $('#partner .group').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [40, 40, 40, 40, 40, 40], true, true, true, [3, 3, 3, 3, 3], "fadeIn", "fadeOut"));
    });
    $('#staffHome.detail .other .groupOther').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [80, 80, 80, 80, 80, 80], true, true, true, [3, 3, 3, 3, 3], "fadeIn", "fadeOut"));
    });
    $('#activity .group').each(function () {
        if ($(this).find(">*").length > 1) {
            $(this).owlCarousel({
                items: 1,
                center: true,
                loop: true,
                stagePadding: 30,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 1000,
                margin: 50,
                nav: true,
                navText: ""
            });
        }
    });
    $(".tvmp").each(function () {
        animationChar($(this))
    })

    $("html").on("click", ".toggleSearch", function () {
        $(this).toggleClass("active");
        $(this).next(".searchForm").fadeToggle();
    })

    setCateChild();
    $(".toggleMenuChild").click(function () {
        $(this).prev().slideToggle();
        $(this).toggleClass("active");
    });

    $("#footer .right .group .nameCate i").click(function () {
        $(this).parent().next(".list").slideToggle();
        $(this).toggleClass("active");
    });

    $(document).click(function (e) {
        if (!$(".searchForm").is(e.target) && $(".searchForm").has(e.target).length === 0 && !$(".toggleSearch").is(e.target) && $(".toggleSearch").has(e.target).length === 0) {
            $(".searchForm").fadeOut();
            $(".toggleSearch").removeClass("active");
        }
    });
});
$(window).resize(function () {
    setCateChild();
    var wWinDow = $(window).width();
    if (wWinDow > 479) {
        $("#footer .group .list").show();
        $("#footer .nameCate i").removeClass("active");
    } else {
        $("#footer .group .list").hide();
        $("#footer .nameCate i").removeClass("active");
    }
})

function animationChar(ele, animationIn = "in", animationOut = "out", split = 1) {
    if (split === 1) {
        var text = ele.text().trim();
        const arrayChar = text.split('');
        if (arrayChar.length > 0) {
            var innerHtml = "";
            for (var i = 0; i < arrayChar.length; i++) {
                if (arrayChar[i] === ' ') {
                    innerHtml += `<span class="item"> &nbsp;</span>`
                } else {
                    innerHtml += `<span class="item">${arrayChar[i]}</span>`
                }
            }
            ele.html(innerHtml)
        }
    }
    setInterval(() => {
        ele.find(".item").each(function (i) {
            setTimeout(() => {
                $(this).attr("class", `item ${animationOut}`)
                setTimeout(() => {
                    $(this).attr("class", `item ${animationIn}`)
                }, i);
            }, (i + 1) * 60);
        });
    }, 4000);
}

function setCateChild() {
    $(".lstCate .cateRight").each(function () {
        const $this = $(this);
        if ($this.next(".menuChild").length > 0) {
            $this.next(".menuChild").find("li").each(function () {
                $(this).appendTo($this);
            })
            $this.parent(".lstCate").find(".menuChild,.toggleMenuChild").remove();
        }
        var width = $this.width() - 20;
        var lengthChild = $this.find("li").length;
        var lengthShow = width / 120;
        if (lengthChild > lengthShow) {
            $this.parent().append(`<ul class="menuChild"></ul><a href="javascript://" class="toggleMenuChild"><i class="far fa-angle-right"></i></a>`)
            for (var i = 0; i < lengthChild - lengthShow; i++) {
                $this.find("li:last-child()").appendTo($this.parent().find(".menuChild"))
            }
        }
    });
}
var size = parseInt($(".noidung").css("font-size")),
    lineheight = parseInt($(".noidung").css("line-height"));
size || (size = 16);
lineheight || (lineheight = 24);

function Increasenoidung() {
    size++;
    lineheight += 2;
    $(".noidung").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
    $(".noidung").find("*").css("cssText",
        "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
}
function Decreasenoidung() {
    size--;
    lineheight -= 2;
    $(".noidung").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
    $(".noidung").find("*").css("cssText",
        "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
}
function Resetnoidung() {
    size = 16;
    lineheight = 24;
    $(".noidung").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
    $(".noidung").find("*").css("cssText",
        "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
}
