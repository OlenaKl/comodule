/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js

/*
 * Custom
 */
//= parties/slick.min.js
//= parties/jquery.flexslider-min.js

$(document).ready(function(){
    var clientsSlide = $('.clients-solution div').length;
    var slidesToShow = 6;
    var slidesToScroll = clientsSlide%slidesToShow > 0 ? clientsSlide%slidesToShow : slidesToShow; 

    var bubbleSlide = $('.bubble-slider .content-bubble').length;
    var bubbleslidesToShow = 3;
    var bubbleslidesToScroll = bubbleSlide%bubbleslidesToShow > 0 ? bubbleSlide%bubbleslidesToShow : bubbleslidesToShow; 

    $('.flexslider').flexslider({
        animation: "slide",
        prevText: "",
        nextText: ""
    });
    $(".anchor").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
        }
    });
    if(clientsSlide > slidesToShow){
        $('.clients-solution').removeClass('clients-default').slick({
            dots: false,
            infinite: false,
            speed: 600,
            infinite: true,
            slidesToShow: slidesToShow,
            slidesToScroll: slidesToScroll,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            responsive: [
                    {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }

    if(bubbleSlide > bubbleslidesToShow){
        $('.bubble-slider').removeClass('bubble-default').slick({
            dots: false,
            infinite: false,
            speed: 600,
            infinite: true,
            slidesToShow: bubbleslidesToShow,
            slidesToScroll: bubbleslidesToScroll,
            adaptiveHeight: true,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            responsive: [
                    {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }

    // $(window).bind('scroll', function () {
    //     if ($(window).scrollTop() > $('.main-slider').height()) {
    //         $('.header-section').addClass('fixed');
    //     } else {
    //         $('.header-section').removeClass('fixed');
    //     }
    // });
});
