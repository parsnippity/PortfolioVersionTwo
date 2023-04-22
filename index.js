$(window).on("load", function() {
    $("body").on("click", function(event){
        console.log(event.pageX);
        console.log(event.pageY);
    })
    $("body").mousemove(function(event) {
        $("#test").css("backgroundColor", `rgb(${event.pageX / 10}, ${event.pageY / 10}, 255`);
    });
})