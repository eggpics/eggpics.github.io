$(document).ready(() => {
    var altBarShowing = false;
    if($("nav").attr("class").includes("fixed")){
        altBarShowing = true;
    }

    $(window).scroll(event => {
        scrollDist = $(window).scrollTop();
        navbarBottom = $("nav").position().top+$("nav").outerHeight(true);
        if(scrollDist > navbarBottom){
            if(!altBarShowing){
                $("nav").addClass("fixed")
                altBarShowing = true;
            }
        } 
        else{
            if(altBarShowing){
                $("nav").removeClass("fixed")
                altBarShowing = false;
            }
        }
    });
});