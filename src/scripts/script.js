$(document).ready(function(){
    $('.flexslider').flexslider({
        animation: "slide"
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

});

/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js

/*
 * Custom
 */
//= parties/jquery.flexslider-min.js