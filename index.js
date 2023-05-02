// $(function () {
//     $("#meBunny").slideDown().fadeIn();
// })
$(window).on("load", function(){
    //$(".homeProjects").css("paddingLeft", ($(".homeProjects").css("paddingLeft") += 100) + vw);
    $(".homePageLight").slideDown("slow", function(){
        $(this).find("*").fadeIn("slow"/*, function(){
            $(".homeProjects").animate({
                padding: {
                    left: `-=100vw`
                } 
            })
        }*/);
    });
})