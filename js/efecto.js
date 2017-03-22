// scroll effect
$(function(){
    $("#inicio-menu").on("click", function(){
        $("html, body").animate({scrollTop: $("#intro").offset().top}, 750);
    });
});

$(function(){
    $("#soy-menu").on("click", function(){
        $("html, body").animate({scrollTop: $("#soy").offset().top}, 750);

    });
});
$(function(){
    $("#back-menu").on("click", function(){
        $("html, body").animate({scrollTop: $("#back-ground").offset().top}, 750);

    });
});
//fin > scroll effect


$(function(){
    $("#myname").fadeIn(3000);
});


$(function(){
	$("#words").fadeIn(3500);
});

$(function(){
    $("span").fadeIn(4200).css("display", "inline-block");

});



