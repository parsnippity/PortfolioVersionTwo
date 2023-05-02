$(window).on("load", function(){
    let $margin = $(".homeProjects").css("marginLeft");
    //$(".homeProjects").css("marginLeft", "100vw");
    $(".homePageLight").slideDown("slow", function(){
        $(this).find("*").fadeTo("slow", 1/*, function(){
            $(".homeProjects").animate({
                padding: {
                    left: `-=100vw`
                } 
            })
        }*/);
    });
})