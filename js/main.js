;(function() {

    var menu = $('.main-menu'),
        menuToggler = $('.main-menu__toggle'),
        menuList = $('.main-menu__list'),
        $copyright = $('.js-copyright');
        $window = $(window);

    // adaptive menu

    menuToggler.on('click', function() {
        if (!menu.hasClass('main-menu_active')) {
            menu.addClass('main-menu_active');
            menuList.stop().slideDown();
        } else {
            menu.removeClass('main-menu_active');
            menuList.stop().slideUp();
        }
    });


    // remove inline styles which could crash menu

    $window.on('resize', function() {
        if ($window.width() > 750) {
            menuList.removeAttr('style');
        }
    });


    // smooth scrolling to target section
	
	$('a[href^="#"]').click(function () { 
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top - 70;
        $('body,html').animate( { scrollTop: destination }, 800 );
        return false;
   });



   // skill bars fill animation activated on scroll

   var skills = $('.skills'),
       skillBars = $('.skills-scale__meter-fill'),
       skillBarFullWidth = $('.skills-scale__meter').width();

    $window.on('scroll', function() {
        if ($window.scrollTop() > skills.offset().top - 250) {
            skillBars.each(function(index) {
                var skillBarPercent = $(this).attr('data-percent'),
                    skillBarWidthInPixels = skillBarFullWidth / 100 * skillBarPercent;
                $(this).css('width', skillBarWidthInPixels + 'px'); 
            });
        }
    });

    $copyright.html(new Date().getFullYear() + $copyright.html());


})();