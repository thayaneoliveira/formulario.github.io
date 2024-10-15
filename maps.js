
const map = L.map("map").setView([-3.119, -60.0217], 12);


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);


const marker = L.marker([-3.119, -60.0217])
  .addTo(map)
  .bindPopup("Localização inicial: Manaus")
  .openPopup();


function searchAddress() {
  const addressInput = document.getElementById("address");
  const address = addressInput.value;

  if (address) {
    
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lng = parseFloat(data[0].lon);
          const newLocation = [lat, lng];

         
          map.setView(newLocation, 12);
          marker.setLatLng(newLocation);
          marker.bindPopup(`Endereço: ${data[0].display_name}`).openPopup();
          
         
          addressInput.value = '';
        } else {
          alert("Endereço não encontrado.");
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar o endereço:", error);
        alert("Erro ao buscar o endereço.");
      });
  } else {
    alert("Por favor, insira um endereço válido.");
  }
}


document.getElementById("searchAddress").addEventListener("click", searchAddress);

window.addEventListener('resize', function() {
  map.invalidateSize();
});
