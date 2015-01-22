$(document).ready(function(e) {
    var menuTopPos = $('#menu').offset().top;

    var stickToTop = function(){
        var winScrollTop = $(window).scrollTop();
                  
        if (winScrollTop >= menuTopPos) {
                $('#menu').addClass('stick_top');
        } else {
                $('#menu').removeClass('stick_top');  
        }
        
    };

    stickToTop();

    $(window).scroll(function() {
            stickToTop();
    });
});
