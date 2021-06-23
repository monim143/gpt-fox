/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - kawsar bin siraj
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // code should be execute here

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // for select#select-country
    $(function () {
        if ($('#select-country').length) {
            function custom_template(obj) {
                var data = $(obj.element).data();
                var text = $(obj.element).text();
                if (data && data['img_src']) {
                    img_src = data['img_src'];
                    template = $("<div class='img-option'><img src=\"" + img_src + "\" style=\"width:20px;height:20px;\" /> </div>");
                    return template;
                }
            }
            $('#select-country').select2({
                minimumResultsForSearch: -1,
                'templateSelection': custom_template,
                'templateResult': custom_template,
            });
        }
    });


    //  $(".popular-games-list").owlCarousel();
    $(function () {
        if ($('.popular-games-list').length) {
            $(".popular-games-list").owlCarousel({
                loop: true,
                margin: 30,
                nav: $(window).width() > 1024 ? true : false,
                dots: true,
                autoplay: false,
                autoplayHoverPause: true,
                navText: ["<img src='assets/img/chevron-left.svg' class='img-fluid' />", "<img src='assets/img/chevron-right.svg' class='img-fluid' />"],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    });


    //  $(".gaming-statistics-carousel").owlCarousel();
    $(function () {
        if ($('.gaming-statistics-carousel').length) {
            $(".gaming-statistics-carousel").owlCarousel({
                loop: true,
                margin: 30,
                nav: $(window).width() > 1024 ? true : false,
                dots: true,
                autoplay: false,
                autoplayHoverPause: true,
                navText: ["<img src='assets/img/chevron-left.svg' class='img-fluid' />", "<img src='assets/img/chevron-right.svg' class='img-fluid' />"],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            });
        }
    });


    //  $(".game-trailer-carousel").owlCarousel();
    $(function () {
        if ($('.game-trailer-carousel').length) {
            $(".game-trailer-carousel").owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                nav: $(window).width() > 1024 ? true : false,
                dots: true,
                autoplay: false,
                autoplayHoverPause: true,
                navText: ["<img src='assets/img/chevron-left.svg' class='img-fluid' />", "<img src='assets/img/chevron-right.svg' class='img-fluid' />"],

            });
        }
    });

    //  $(".our-reviews-carousel").owlCarousel();
    $(function () {
        if ($('.our-reviews-carousel').length) {
            $(".our-reviews-carousel").owlCarousel({
                items: 3,
                loop: true,
                items: 3,
                center: true,
                margin: 30,
                nav: true,
                dots: true,
                autoplay: false,
                navText: ["", ""],
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    });


    // filter-options
    $(function () {
        if ($('.filter-options').length) {
            pettyFilter({
                filterBtn: '.btn-filter',  // this is your filter button which is the get targeted value
                ActiveClassName: 'btn-gpt',    // you have to must use by class name
                filterGridRow: '.filter-container', // gird row which is the parent of  filter items or grid items
                filterGridItem: '.filter-item' // gird item which is your filter item
            });
        }
    });


     // load more
     $(function () {
        if ($('.enableLoadMoreEffect').length) {
            $(".enableLoadMoreEffect .blog-card").slice(0, 9).show();
            $("#loadMore").on('click', function (e) {
                e.preventDefault();
                $(".enableLoadMoreEffect .blog-card:hidden").slice(0, 3).slideDown();
                if ($(".enableLoadMoreEffect .blog-card:hidden").length == 0) {
                    $("#loadMore").fadeOut('slow');
                }
                $('html,body').animate({
                    scrollTop: $(this).offset().top - 500
                }, 2500);
            });
        }
    });


});
