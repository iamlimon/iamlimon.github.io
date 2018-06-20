$(function () {
    // cache the sliding object in a var
    var slideout = $('#aside');
    // "click-me" is what is in your html not "clickme"
    $("#menu-icon").toggle(function () {
        // use cached object instead of searching
        slideout.animate({
            right: '0px'
        }, {
            queue: false,
            duration: 500
        });
    }, function () {
        // use cached object instead of searching        
        slideout.animate({
            right: '-300px'
        }, {
            queue: false,
            duration: 500
        });
    });
});