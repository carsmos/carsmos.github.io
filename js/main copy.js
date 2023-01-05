    alert("ok");

    
$(document).ready(function () {
    "use strict";

    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;




    $(".fullscreen").css("height", window_height);
    $(".fitscreen").css("height", fitscreen);

    /* ---------------------------------------------
        Initiate superfish on nav menu 
     --------------------------------------------- */

    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });


    /* ---------------------------------------------
        Mobile Navigation
     --------------------------------------------- */

    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function (e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
            $('#mobile-body-overly').toggle();
        });

        $(document).on('click', function (e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });



    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }


    /* -------------------------------------------------------------------
        Smooth scroll for the menu and links with .scrollto classes
     ------------------------------------------------------------------ */

    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space;
                    }
                }

                if ($('#header2').length) {
                    top_space = $('#header2').outerHeight();

                    if (!$('#header2').hasClass('header-fixed')) {
                        top_space = top_space;
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });

    $(document).ready(function () {
        $('html, body').hide();
        if (window.location.hash) {
            setTimeout(function () {
                $('html, body').scrollTop(0).show();
                $('html, body').animate({
                    scrollTop: $(window.location.hash).offset().top - 68
                }, 1000)
            }, 0);
        } else {
            $('html, body').show();
        }
    });



    jQuery(document).ready(function ($) {
        // Get current path and find target link
        var path = window.location.pathname.split("/").pop();

        // Account for home page with empty path
        if (path === '') {
            path = 'index.php';
        }

        var target = $('nav a[href="' + path + '"]');
        // Add active class to target link
        target.addClass('menu-active');
    });

    $(document).ready(function () {
        if ($('.menu-has-children ul>li a').hasClass('menu-active')) {
            $('.menu-active').closest("ul").parentsUntil("a").addClass('parent-active');
        }
    });


    /* -------------------------------------------------------------------
        Header Scroll Class js
     ------------------------------------------------------------------ */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header2').addClass('header-scrolled');
        } else {
            $('#header2').removeClass('header-scrolled');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header7').addClass('header-scrolled');
        } else {
            $('#header7').removeClass('header-scrolled');
        }
    });


    /* -------------------------------------------------------------------
        Owl Carusel js
     ------------------------------------------------------------------ */


    $('.active-dash-carusel').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        animateOut: 'fadeOut'
    });


    $('.active-review-carusel').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });


    $('.active-review-carusel2').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        // autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 800,
    });


    $('.active-execution-carusel').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        animateOut: 'fadeOut'
    });

    $('.active-feature-carusel').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 800,
        animateOut: 'fadeOut'
    });


    $('#sass-owl').owlCarousel({
        stagePadding: 0,
        items: 1,
        loop: true,
        margin: 0,
        singleItem: true,
        dots: true,
        autoplay: 2500,
        slideSpeed: 300,
        paginationSpeed: 500,
        smartSpeed: 800,
        animateOut: 'fadeOut'
    });

    $('#app-owl').owlCarousel({
        stagePadding: 0,
        items: 1,
        loop: true,
        margin: 0,
        singleItem: true,
        dots: true,
        autoplay: 2500,
        slideSpeed: 300,
        paginationSpeed: 500,
        smartSpeed: 800,
        animateOut: 'fadeOut'
    });

    $('#blog-owl').owlCarousel({
        stagePadding: 0,
        items: 1,
        loop: true,
        margin: 0,
        singleItem: true,
        dots: true,
        // autoplay: 2500,
        slideSpeed: 300,
        paginationSpeed: 500,
        smartSpeed: 800,
        nav: true,
        navText: ["<i class='fas fa-arrow-up'></i>", "<i class='fa fa-arrow-down'></i>"]
    });


    /* ---------------------------------------------
        Blog post pagination
    --------------------------------------------- */
    $('.blog-post').find('.page-item').on('click', function () {
        $('.page-item').removeClass("active");
        $(this).addClass("active");
    });

    /* ---------------------------------------------
        Blog post List pagination
    --------------------------------------------- */
    $('.blog-post-list').find('.page-item').on('click', function () {
        $('.page-item').removeClass("active");
        $(this).addClass("active");
    });

    /* ---------------------------------------------
        Blog post Sidebar pagination
    --------------------------------------------- */

    $('#blog-post-sidebar').find('.page-item').on('click', function () {
        $('.page-item').removeClass("active");
        $(this).addClass("active");
    });

    /* ---------------------------------------------
        Blog List Sidebar pagination
    --------------------------------------------- */
    $('#blog-list-sidebar').find('.page-item').on('click', function () {
        // console.log('hello');
        $('.page-item').removeClass("active");
        $(this).addClass("active");
    });



    /* ---------------------------------------------
        accordion
     --------------------------------------------- */

    var allPanels = $(".accordion > dd").hide();
    allPanels.first().slideDown("easeOutExpo");
    $(".accordion").each(function () {
        $(this).find("dt > a").first().addClass("active").parent().next().css({
            display: "block"
        });
    });


    $(document).on('click', '.accordion > dt > a', function (e) {

        var current = $(this).parent().next("dd");
        $(this).parents(".accordion").find("dt > a").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
        $(this).parent().next().slideDown("easeOutExpo");

        return false;

    });


    /* -------------------------------------------------------------------
        Google map js
     ------------------------------------------------------------------ */

    if (document.getElementById("map")) {
        google.maps.event.addDomListener(window, 'load', init);
        function init() {
            var mapOptions = {
                zoom: {{ site.map.zoom }},
                center: new google.maps.LatLng({{ site.map.let }}, {{ site.map.lng }}), // New York
                styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e9e9e9"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dedede"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#333333"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }]
            };

            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng({{ site.map.let }}, {{ site.map.lng }}),
                map: map,
                title: '{{ site.map.title }}'
            });
        }
    }

    /* -------------------------------------------------------------------
        MailChimp js
     ------------------------------------------------------------------ */

    $(document).ready(function () {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });



    /* -------------------------------------------------------------------
        Onclick map address hide
     ------------------------------------------------------------------ */

    $(document).on('click', '#add-hide', function (e) {
        $(".contact-info").css("display", "none");
        $(".show-btn").css("display", "block");
    });

    $(document).on('click', '#add-show', function (e) {
        $(".contact-info").css("display", "block");
        $(".show-btn").css("display", "none");
    });
    
    // hero-widget
    $(function(){
        $('#hero-widget iframe').load(function(){
            $(".lds-spinner").hide();
            $(this).fadeIn();
            console.log('iframe loaded successfully')
        });
    });


});

