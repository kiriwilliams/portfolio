
let menuState = "closed";

$(document).ready(function() {
    responsiveSizing($(window).width());

    $(window).resize(function() {
        let viewportWidth = $(window).width();
        responsiveSizing(viewportWidth);
    })
    $("#menu-toggle").on("click", () => {
        toggleMenu();
    })
})

toggleMenu = () => {
    if(menuState === "closed"){
        $("#menu-toggle").attr("aria-label","Close menu").text("close menu");
        $("#menu").attr("style","display: block");
        menuState = "open";
    }
    else{
        $("#menu-toggle").attr("aria-label","Open menu").text("open menu");
        $("#menu").attr("style","display: none");
        menuState = "closed";
    }
}

responsiveSizing = (width) => {
    if (width <= 640) {
        $("#menu-toggle").attr("aria-label","Open menu").text("open menu").show();
        $("#menu").attr("style", "display: none");
    }
    else{
        $("#menu-toggle").hide();
        $("#menu").attr("style", "display: block");
    }
}