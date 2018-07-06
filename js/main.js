$.fn.toggleClick = function(){
    var methods = arguments, // store the passed arguments for future reference
        count = methods.length; // cache the number of methods 

    //use return this to maintain jQuery chainability
    return this.each(function(i, item){
        // for each element you bind to
        var index = 0; // create a local counter for that element
        $(item).click(function(){ // bind a click handler to that element
            return methods[index++ % count].apply(this,arguments); // that when called will apply the 'index'th method to that element
            // the index % count means that we constrain our iterator between 0 and (count-1)
        });
    });
};


$(function () {
    // cache the sliding object in a var
    var slideout = $('.navigation');
    console.log(slideout);
    // "click-me" is what is in your html not "clickme"
    $(".menu").toggleClick(function () {
        console.log("clicked");
        // use cached object instead of searching
        slideout.animate({
            top: '96',
            opacity: '1'
        }, {
            queue: false,
            duration: 200
        });
    }, function () {
        // use cached object instead of searching        
        slideout.animate({
            top: '-183',
            opacity: '0'
        }, {
            queue: false,
            duration: 200
        });
    });
});

$(".menu").mouseover(function() {
    $("#line2").css('margin-left', '10px');
    console.log("ya hovered.")
});
$(".menu").mouseout(function() {
    $("#line2").css('margin-left', '0');
    console.log("ya hovered.")
});

$(".nav-svg").mouseover(function() {
    $(this).next().css('visibility', 'visible');
    console.log("FOO");
});
$(".nav-svg").mouseout(function() {
    $(this).next().css('visibility', 'hidden');
    console.log("BAR");
});