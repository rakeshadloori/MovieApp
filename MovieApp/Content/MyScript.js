window.onload = function () {
   
    //alert("hi");
}



$(window).scroll(function () {
    var scroll = $(document).scrollTop();
    console.log(scroll);
    if (scroll > 70) {
        $(".navbar").css({ "height": "50px" })
        $(".navbar-collapse").css({ "margin-top": "-50px" })
        $(".navbar-collapse").css({ "background-color": "#222222" })
    }

    else if (scroll < 70) {
        $(".navbar-collapse").css({ "margin-top": "0px" })
        $(".navbar").css({ "height": "100px" })
        
    }
});