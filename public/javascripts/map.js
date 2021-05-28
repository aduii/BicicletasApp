var map = L.map('main_map').setView([-11.4874328, -77.2325403], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
}).addTo(map);

// L.marker([-11.4874328, -77.2325403]).addTo(map);
// L.marker([-11.498627, -77.202863]).addTo(map);

$.ajax({
  dataType: 'json',
  url: 'api/bicicletas',
  success: (result) => {
    console.log(result);
    result.bicicletas.forEach((bici) => {
      L.marker(bici.ubicacion, { title: bici.id }).addTo(map);
    });
  },
});
