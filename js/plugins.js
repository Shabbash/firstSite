$(document).ready(function() {

	//nice scroll

	$("html").niceScroll();


    $('.carousel').carousel({
        interval: 4000
    });

    // show colors when click on the gear to change the site colors
    $(".gear").click(function() {
        $(".color-option").fadeToggle();
    });

    // change theme color on click

    var colorLi = $(".color-option ul li");

    colorLi
        .eq(0).css("backgroundColor", "#e13030").end()
        .eq(1).css("backgroundColor", "#e1c00c").end()
        .eq(2).css("backgroundColor", "#c0c0c0").end()
        .eq(3).css("backgroundColor", "#433bdd");

    colorLi.click(function() {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    // caching scroll top element to use it in other places
    var scrollButton = $("#scroll-top");
    $(window).scroll(function() {
        //	console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 800) {

            scrollButton.show();

        } else {
            scrollButton.hide();
        }

    });

    scrollButton.click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });

});

//Loading Screen
$(window).on('load', function() {


    $(".loading .spinner").fadeOut(3000,
        function() {

        	 $("body").css("overflow", "auto");

            $(this).parent().fadeOut(2000,
                function() {

                    // Remove Loading section from the code
                    $(this).remove()
                });
        });
});