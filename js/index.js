$(document).ready(function () {
  var map = L.map('map').setView([-22.342919827708705, -46.94514608175479], 12);

  L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([-22.342919827708705, -46.94514608175479]).addTo(map)
    .bindPopup('Etec')
    .openPopup();

})