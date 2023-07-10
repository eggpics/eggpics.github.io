$(document).ready(() => {
    $("#mobileMenu").on("click", event =>{
        menuState = !$("header").attr("class").includes("closed"); /*True if menu is open*/
        if(menuState){
            $("header").addClass("closed");
        } else{
            $("header").removeClass("closed")
        }
    });
});