$(document).ready(function() {
    var respMenuLis = $(".responsive_menu li");
    $(window).scroll(function() {
        $('.navbar-fixed-top').toggleClass('scrolled', $(this).scrollTop() > 50);
        $('#header_logo').toggleClass('smaller', $(this).scrollTop() > 50);
    });

    $('.glyphicon-menu-hamburger').on('click', function() {
       $(".responsive_menu").slideDown("slow", function() {
            respMenuLis.each(function(index) {
                $(this).delay(200*index).animate({opacity: 1}, 700);
            });
        });
         $(".responsive_menu").addClass("active");    
    });

   $(".glyphicon-remove").on("click", function() {
        $(".responsive_menu").slideUp("slow", function() {
            $(".responsive_menu").removeClass("active");
            respMenuLis.css("opacity", "0");
        });
    });


    $(".responsive_menu li a").on("click", function() {
        $(".responsive_menu").slideUp("slow", function() {
            $(".responsive_menu").removeClass("active");
            respMenuLis.css("opacity", "0");
        });
    
    }); 

 

    $('body').scrollspy({ target: "#collapse", offset: 50 });
    $("#collapse a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }

    });

});