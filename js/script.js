$(document).ready(function () {
    $('.header__menu').click(function (event) {
        $('.icon-menu, .menu__list').toggleClass('active');
    });
    $('.services__item-title').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
})