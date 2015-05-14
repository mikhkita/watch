$(document).ready(function(){	

    // Кастомные функции
    custom['svg-anim'] = function(el){
        document.getElementById(el.attr("data-id")).beginElement();
    }
    custom['clock-anim'] = function(el){
        document.getElementById(el.attr("data-id")).beginElement();
    }
    custom['clock-change'] = function (){
        $(".clock-anim").find("img").fadeIn(500);
        $(".clock-anim").find("svg").fadeOut(500);
    }

    $(".blur-clouds li div").parallax({
        mouseport: $(".b-1"),
        xparallax: "50%"
    }); 

    $(".b-questions li div").parallax({
        mouseport: $(".b-9"),
        xparallax: "50%"
    }); 

    // var myPlace = new google.maps.LatLng(59.889371, 30.405350);
    // var myOptions = {
    //     zoom: 16,
    //     center: myPlace,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP,
    //     disableDefaultUI: true,
    //     scrollwheel: false,
    //     zoomControl: true,
    //     zoomControlOptions: {
    //         style: google.maps.ZoomControlStyle.LARGE,
    //         position: google.maps.ControlPosition.LEFT_CENTER
    //     }
    // }
    // var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

    // var marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(59.889371, 30.405350),
    //     map: map,
    //     title: "Часы"
    // });

});