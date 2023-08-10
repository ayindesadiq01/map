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

  

  // To add Marker by clicking on different Coords
  mapLocation.on('click', function(mapEvent){
   console.log(mapEvent)
   const {lat, lng} = mapEvent.latlng;
   const mapLatLng = [lat, lng]
   // Adding Marker
  const marker = L.marker(mapLatLng).addTo(mapLocation);
  marker.bindPopup(
   L.popup({
   maxWidth: 300,
   minWidth: 100,
   autoClose: false,
   closeOnClick: false,
  }), L.tooltip({
   opacity: 0.3,
  }))
  .openPopup();
  })
 }

, function(){
  alert("Can't find current location")
 })

}