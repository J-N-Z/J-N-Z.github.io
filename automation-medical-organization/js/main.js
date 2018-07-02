;(function() {

    $('.a-add-solutions__items').owlCarousel({
        loop:true,
        nav:true,
        autoplay: true,
        autoplaySpeed: 700,
        navSpeed: 700,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            600:{
                items:3
            },
            800:{
                items:4
            },
            1030:{
                items:5
            }
        }
    });

    $('.a-cases__items').owlCarousel({
        loop:true,
        nav:true,
        autoplay: true,
        autoplaySpeed: 700,
        navSpeed: 700,
        responsive:{
            0:{
                items:1
            }
        }
    });


    $('.a-events__btn-all').on('click', function(e) {
        e.preventDefault();
        $('.a-events__items-preview').removeClass('a-events__items-preview');
        $(this).hide();
    });





})();

