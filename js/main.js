$(document).ready(function(){	
	  var myPlace = new google.maps.LatLng(59.889371, 30.405350);
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

});