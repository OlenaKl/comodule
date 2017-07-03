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
    var slidesToScroll = clientsSlide%slidesToShow; 
    console.log(slidesToScroll);
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
    if(clientsSlide > 6){
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
});
