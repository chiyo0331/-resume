$(document).ready(function () {
    $("#btntop").click(function (e) {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });
    //alert();
    $(window).scroll(function () {
        ;
        if ($(window).scrollTop() > 660) {
            $("#btntop").fadeIn(500)
        } else {
            $("#btntop").fadeOut(500)

        }
    });
    $("# ").click(function (e) { 
        $("html,body").animate({scrollTop:0},500);

    });
});

