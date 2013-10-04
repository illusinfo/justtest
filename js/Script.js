$(document).ready(function () {
    $("#projects").children().eq(0).addClass("pt-page-current pt-page-moveFromLeft pt-page-delay200 pt-page-ontop");

    $(".left").children(".button").click(function () {
        $("#projects").children()
            .removeClass("pt-page-current pt-page-rotateRightSideFirst")
            .removeClass("pt-page-current pt-page-rotateLeftSideFirst")
            .siblings(".pt-page-ontop")
                .removeClass("pt-page-current pt-page-moveFromRight pt-page-delay200 pt-page-ontop")
                .removeClass("pt-page-current pt-page-moveFromLeft pt-page-delay200 pt-page-ontop")
                    .addClass("pt-page-current pt-page-rotateRightSideFirst")
                        .prevOrLast()
                            .addClass("pt-page-current pt-page-moveFromRight pt-page-delay200 pt-page-ontop");
    });

    $(".right").children(".button").click(function () {
        $("#projects").children()
            .removeClass("pt-page-current pt-page-rotateLeftSideFirst")
            .removeClass("pt-page-current pt-page-rotateRightSideFirst")
            .siblings(".pt-page-ontop")
                .removeClass("pt-page-current pt-page-moveFromLeft pt-page-delay200 pt-page-ontop")
                .removeClass("pt-page-current pt-page-moveFromRight pt-page-delay200 pt-page-ontop")
                    .addClass("pt-page pt-page-current pt-page-rotateLeftSideFirst")
                        .nextOrFirst()
                            .addClass("pt-page-current pt-page-moveFromLeft pt-page-delay200 pt-page-ontop");
    });

    $(".center").children(".button").click(function () {
        document.write(14);
    });
});




var counter;

// click on slideshow menu when we are in a page that contains slideshow

// Disable slideshow timer on leaving the page that contains slideshow
//clearInterval(counter);


// Timer function
//function timer(sec) {
//    if (counter) {
//        clearInterval(counter);
//    }
//    counter = setInterval(function () {
//        sec--;
//        if (sec == 0) {
//            clearInterval(counter);
//            $('section#slideshow menu').children('.active').nextOrFirst().trigger('click');
//        }
//    }, 1000);
//}


// Next or first
jQuery.fn.nextOrFirst = function (selector) {
    var next = this.next(selector);
    return (next.length) ? next : this.prevAll(selector).last();
}
// Prev or last
jQuery.fn.prevOrLast = function (selector) {
    var prev = this.prev(selector);
    return (prev.length) ? prev : this.nextAll(selector).last();
}



































//case 28:
//				outClass = 'pt-page-rotateRightSideFirst';
//				inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
//				break;
//			case 29:
//				outClass = 'pt-page-rotateLeftSideFirst';
//				inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
//				break;
//			case 30:
//				outClass = 'pt-page-rotateTopSideFirst';
//				inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
//				break;
//			case 31:
//				outClass = 'pt-page-rotateBottomSideFirst';
//				inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
//				break;


//$(document).ready(function () {
//    $("#projects").children().eq(0).addClass("pt-page-current pt-page pt-page-moveFromLeft pt-page-delay200 pt-page-ontop");

//    $(".left").children(".button").click(function () {
//        $("#projects").children()
//            .removeClass("pt-page-current pt-page-rotateRightSideFirst")
//            .removeClass("pt-page-current pt-page-rotateLeftSideFirst")
//            .siblings(".pt-page-ontop")
//                .removeClass("pt-page-current pt-page-moveFromRight pt-page-delay200 pt-page-ontop")
//                .removeClass("pt-page-current pt-page-moveFromLeft pt-page-delay200 pt-page-ontop")
//                    .addClass("pt-page-current")
//                    .addClass("pt-page")
//                    .addClass("pt-page-rotateRightSideFirst")
//                        .prev()
//                            .addClass("pt-page-current pt-page pt-page-moveFromRight pt-page-delay200 pt-page-ontop");
//    });

//    $(".right").children(".button").click(function () {
//        $("#projects").children()
//            .removeClass("pt-page-current pt-page-rotateLeftSideFirst")
//            .removeClass("pt-page-current pt-page-rotateRightSideFirst")
//            .siblings(".pt-page-current")
//                .removeClass("pt-page-current pt-page-moveFromLeft pt-page-delay200 pt-page-ontop")
//                .removeClass("pt-page-current pt-page-moveFromRight pt-page-delay200 pt-page-ontop")
//                    .addClass("pt-page-current")
//                    .addClass("pt-page")
//                    .addClass("pt-page-rotateLeftSideFirst")
//                        .next()
//                            .addClass("pt-page-current pt-page pt-page-moveFromLeft pt-page-delay200 pt-page-ontop").bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
//                                $(this).removeClass("pt-page-moveFromLeft pt-page-delay200 pt-page-ontop")
//                            });
//    });



//});



//$(document).ready(function () {
//    $("#projects").children().eq(2)
//        .addClass("pt-page-current pt-page-moveFromLeft pt-page-delay200 pt-page-ontop")
//        .bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () {
//            $(this).removeClass("pt-page-moveFromLeft pt-page-delay200 pt-page-ontop");
//        });


//    $(".right").children(".button").click(function () {
//        
//        $("#projects").children(".pt-page-current").addClass("pt-page-rotateLeftSideFirst").bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
//            $(this).removeClass("pt-page-current pt-page-rotateLeftSideFirst");
//        });
//        $("#projects").children(".pt-page-current").next().addClass("pt-page-current pt-page-moveFromLeft pt-page-delay200 pt-page-ontop").bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
//            $(this).removeClass("pt-page-moveFromLeft pt-page-delay200 pt-page-ontop");
//        });


//    });


//    $(".left").children(".button").click(function () {

//        $("#projects").children(".pt-page-current").addClass("pt-page-rotateRightSideFirst").bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
//            $(this).removeClass("pt-page-current pt-page-rotateRightSideFirst");
//        });
//        $("#projects").children(".pt-page-current").prev().addClass("pt-page-current pt-page-moveFromRight pt-page-delay200 pt-page-ontop").bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
//            $(this).removeClass("pt-page-moveFromRight pt-page-delay200 pt-page-ontop").addClass("pt-page-current");
//        });


//    });

//});