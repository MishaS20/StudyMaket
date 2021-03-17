$(document).ready(function () {
    $('.header__menu').click(function (event) {
        $('.icon-menu, .menu__list').toggleClass('active');
    });
    $('.services__item-title').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
    $(".slider").slick({
        vertical: true,
        arrows: true,
        verticalSwiping: true,
        slidesToShow: 2,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        swipe: true,
        waitForAnimate: false,
        // pauseOnDotsHover: true,
    });
    // $('.slick-vertical').slick({
    //     vertical: true,
    //     verticalSwiping: true,
    //     slidesToShow: 2,
    //     autoplay: true,
    // });
    // $(function () {
    //     $('.slider').slick({
    //         vertical: true,
    //         verticalSwiping: true,
    //         slidesToShow: 2,
    //         autoplay: true,
    //     });
    // });
})