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

    var myPlace = new google.maps.LatLng(59.889371, 30.400350);
    var myOptions = {
        zoom: 16,
        center: myPlace,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_CENTER
        }
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.889371, 30.405350),
        map: map,
        title: "Часы"
    });

    custom["monitor"] = function(){
        var nowY = 0,
            step = 388,
            slides = 10,
            timer,
            dur = 50;

        $(".b-monitor").css({
            "opacity" : 1
        });

        timer = setTimeout(function run(){
            nowY += step;
            if( nowY <= step*(slides-1) ){
                $(".b-monitor").css({
                    "background-position" : "50% -"+nowY+"px"
                });
                setTimeout(run,dur);
            }
        },500);
    }

    $(".b-4-animation li").hover(function(){
        document.getElementById($(this).attr("data-svg")).beginElement();
        console.log("over");
    },function(){
        console.log("out");
    });

});