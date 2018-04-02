$(function() {

    //Menu for class .toggle-mnu
    $(".toggle-mnu").click(function(){
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle(); // по кліку розкрива .main-mnu
    });

    $(".main-footer .toggle-mnu").click(function () {
        $("html, body").animate({scrollTop: $(document).height()}, "slow");
        return false;
    });

    // Скрол до наступної секції
    $(".arrow-bottom").click(function () {
        $("html, body").animate({scrollTop: $(".main-head").height()+120}, "slow");
        return false;
    });

    //animate.css
    $(".section-head h2").animated("pulse");
    $(".info-item-wrap").animated("zoomIn");
    $(".slider .slide").animated("rollIn");
    $(".homesect.section_8.forms").animated("fadeInRight");

    $(".section_2").waypoint(function() {
        $(".s2-item-wrap").each(function (index) {
            var ths = $(this);
            setInterval(function () {
                ths.addClass("on");
            }, 200 * index);
        });
    },{
        offset: "30%"
    });

    //jQuery equalHeights
    $(".section_1 .section-content .info-item").equalHeights();
    $(".section_3 .section-content .info-item").equalHeights();
    $(".s1-bottom .info-item").equalHeights();
    $(".s2-item").equalHeights();
    $(".s2-item .img-wrap").equalHeights();


    $(".section_4").waypoint(function() {

        $(".section_4 .card").each(function (index) {
            var ths = $(this);
            setInterval(function () {
                ths.removeClass("card-off").addClass("card-on");
            }, 200 * index);
        });

    },{
        offset: "20%"
    });

    // $(".section_5").waypoint(function(){
    //
    //     $(".section_5 .tc-item").each(function(index){
    //         var ths = $(this);
    //         setTimeout(function() {
    //             var myAnimation = new DrawFillSVG ({
    //                 elementId: "tc-svg-" + index
    //         });
    //             ths.removeClass("").addClass("");
    //         }, 700*index);
    //     });
    //
    // },{
    //     offset: "20%"
    // });

    //Анімація задопомогою скрипта drawfillsvg.min.js
    var myAnimation = new DrawFillSVG ({
        elementId: "tc-svg-0"
    });

    var myAnimation = new DrawFillSVG ({
        elementId: "tc-svg-1"
    });

    var myAnimation = new DrawFillSVG ({
        elementId: "tc-svg-2"
    });

    var myAnimation = new DrawFillSVG ({
        elementId: "tc-svg-3"
    });

    //Стрелка вверх
    $(".top").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });

    // Карусель
    $(".slider").owlCarousel({
        items: 1,
        nav: true,
        navText: "",
        loop: true,
        autoplayHoverPause: true,
        fluidSpeed: 600,
        autoplaySpeed: 600,
        navSpeed: 600,
        dotsSpeed: 600,
        dragEndSpeed: 600
    });


    //SVG Fallback
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    // MagnificPopup
    $(".homesect .section-bottom .buttons").click(function() {
        $("#callback h4").html($(this).text());
        $("#callback input[name=formname]").val($(this).text());
    }).magnificPopup({
       type:'inline',
       mainClass: 'mfp-forms'
    });

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $(".forms").submit(function() { //Change
        $.ajax({
            type: "POST",
            url: "/mail.php", //Change
            data: $(this).serialize() //Збирає введені дані з усіх заповнених полів і відправляє на mail.php
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                $(".forms").trigger("reset"); // Тут сбрасуються всі поля форми
            }, 1000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
