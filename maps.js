const map = L.map("map").setView([-3.119, -60.0217], 12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

const marker = L.marker([-3.119, -60.0217])
  .addTo(map)
  .bindPopup("Localização inicial: Manaus")
  .openPopup();

function showLocation(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const userLocation = [lat, lng];

  map.setView(userLocation, 12);
  marker.setLatLng(userLocation);

  const reverseGeocodeUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;

  fetch(reverseGeocodeUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.display_name) {
        marker.bindPopup(`Você está aqui: ${data.display_name}`).openPopup();
      } else {
        marker.bindPopup("Endereço não encontrado.").openPopup();
      }
    })
    .catch((error) => {
      console.error("Erro ao buscar o endereço:", error);
      marker.bindPopup("Erro ao buscar o endereço.").openPopup();
    });
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showLocation, function (error) {
    console.error("Erro ao obter localização:", error);
    alert("Não foi possível obter sua localização.");
  });
} else {
  alert("Geolocalização não é suportada pelo seu navegador.");
}

function searchAddress() {
  const addressInput = document.getElementById("address");
  const address = addressInput.value;

  if (address) {
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      address
    )}`;

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

          addressInput.value = "";
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

document
  .getElementById("searchAddress")
  .addEventListener("click", searchAddress);

window.addEventListener("resize", function () {
  map.invalidateSize();
});
