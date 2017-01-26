/* Gömmer hamburgarikonen och aktiverar den gömda menyn */
function navOpen() {
	document.getElementById("navicon").style.display = "none";
    document.getElementById("sideNav").style.width = "100%";
    document.getElementById("sideNav").style.display = "block";
    document.getElementById("closeicon").style.display = "flex";
}
/* Gömmer menyn och kryss-ikonen */
function navClose() {
    document.getElementById("sideNav").style.display = "none";
     document.getElementById("closeicon").style.display = "none";
     document.getElementById("navicon").style.display = "flex";
}

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(59.334591, 18.063240),
    zoom: 7,
    zoomControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER,
      animation: google.maps.Animation.BOUNCE
    }
  };

  var map = new google.maps.Map(mapCanvas ,mapOptions);
}