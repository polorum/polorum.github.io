
$(function() {

        // scroll handler
        var scrollToAnchor = function( id ) {

                // grab the element to scroll to based on the name
                var elem = $("a[name='"+ id +"']");

                // if that didn't work, look for an element with our ID
                if ( !!elem ) {
                        elem = $("#"+id);
                }

                // if the destination element exists
                if ( !!elem ) {

                        // do the scroll
                        $('html, body').animate({
                                scrollTop: elem.offset().top
                        }, 1000 );

                }
        }

        // bind to click event
        $("a").click(function( event ) {

                // only do this if it's an anchor link
                if ( $(this).attr("href").match("#") ) {

                        // cancel default event propagation
                        event.preventDefault();

                        // scroll to the location
                        var href = $(this).attr('href').replace('#', '')
                        scrollToAnchor( href );

                }

        });

});
