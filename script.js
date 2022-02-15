$("document").ready(function(){


    $("document").mousemove(function(e) {
        $("#follow").css({
            left: e.pageX,
            top: e.pageY
        });
    });

    $("#sublabel1").click(function(){
        console.log("click")
        var posy;
        posy = (posy==50?-50:50);
        $('header').animate(
        {
            top:posy
        }, 300);
            $("#row1").slideToggle(300);
    });

    $("#row1").hover(function(){
        console.log("row1 have been clicked!")
            $("#row1").toggleClass("itemspecial");
    });

    $("#sublabel2").click(function(){
        console.log("sublabel1 have been clicked!")
            $("#row2").slideToggle(300);
    });

    $("#row2").hover(function(){
        console.log("row2 have been clicked!")
            $("#row2").toggleClass("itemspecial");
    });

    $("#row22").hover(function(){
        console.log("row22 have been clicked!")
            $("#row22").toggleClass("itemspecial");
    });

    $("#sublabel3").click(function(){
        console.log("sublabel1 have been clicked!")
            $("#row3").slideToggle(300);
    });

    $("#row3").hover(function(){
        console.log("row3 have been clicked!")
            $("#row3").toggleClass("itemspecial");
    });

    $("#row33").hover(function(){
        console.log("row33 have been clicked!")
            $("#row33").toggleClass("itemspecial");
    });
    $(".menu").children().hover(function(){
        console.log("click")
        $(this).toggleClass("menuitems");
        $(this).toggleClass("menuitems2");
        $(this).toggleClass("menuitems3");
    });

});
