'use strict';
if(navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(position){
  console.log(position)
  const {latitude, longitude} = position.coords;
  const coords = [latitude, longitude]
 
  var map = L.map('map').setView([51.505, -0.09], 13);
 }

, function(){
  alert("Can't find current location")
 })

}