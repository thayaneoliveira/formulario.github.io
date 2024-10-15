// Inicialize o mapa
const map = L.map('map').setView([-23.5505, -46.6333], 12); // São Paulo, Brasil

// Adicione um layer de mapa usando OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Adicione um marcador
L.marker([-23.5505, -46.6333]).addTo(map)
    .bindPopup('Localização')
    .openPopup();
