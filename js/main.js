;(function() {

    var menu = $('.main-menu'),
        menuToggler = $('.main-menu__toggle'),
        menuList = $('.main-menu__list');

    menuToggler.on('click', function() {
        if (!menu.hasClass('main-menu_active')) {
            menu.addClass('main-menu_active');
            menuList.stop().slideDown();
        } else {
            menu.removeClass('main-menu_active');
            menuList.stop().slideUp();
        }
    })

})();

