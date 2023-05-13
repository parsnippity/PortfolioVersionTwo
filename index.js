$(window).on("load", function(){
    $(".homeProjects").css("marginLeft", "100vw");
    $(".homePageLight").slideDown("slow", function(){
        $(this).find("*").fadeTo("slow", 1, function(){
            $(".homeProjects").animate({
                marginLeft: 0
            }, "slow")
        });
    });
})