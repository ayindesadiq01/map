'use strict';
if(navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(position){
  console.log(position)
  const {latitude, longitude} = position.coords;
  const coords = [latitude, longitude]
 
  const mapLocation = L.map('mapLocation').setView(coords, 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 19,
   attribution: '© OpenStreetMap'
}).addTo(mapLocation);
 }

, function(){
  alert("Can't find current location")
 })

}