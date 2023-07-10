var contactMaxAlpha = 0.7
var contactFade = 0.4;

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

        bottomScrollDist = scrollDist+$(window).innerHeight();

        contactHeight = $(".contactImg .content").outerHeight(true)
        contactInStart = $(".contactImg .content").position().top;
        contactDeadZoneStart = (contactFade*contactHeight)+contactInStart;
        contactOutStart = (contactFade*contactHeight)+contactInStart;
        contactOutEnd = contactHeight+contactInStart;

        contactInLen = contactDeadZoneStart-contactInStart;
        contactOutLen = contactOutEnd-contactOutStart;
        if(bottomScrollDist > contactInStart && bottomScrollDist < contactDeadZoneStart){
            /*Fade In Content*/
            newAlpha = contactMaxAlpha*((bottomScrollDist-contactInStart)/contactInLen);
            $(".contactImg .content").css("background", "rgba(0,0,0," + newAlpha.toString() + ")");
        } else if(scrollDist > contactOutStart && scrollDist < contactOutEnd){
            /*Fade Out Content*/
            newAlpha = contactMaxAlpha-(contactMaxAlpha*((scrollDist-contactOutStart)/contactOutLen));
            $(".contactImg .content").css("background", "rgba(0,0,0," + newAlpha.toString() + ")");
        } else if(bottomScrollDist > contactInStart && scrollDist < contactOutEnd){
            /*Set full alpha*/
            $(".contactImg .content").css("background", "rgba(0,0,0," + contactMaxAlpha.toString() + ")");
        }
    });
});