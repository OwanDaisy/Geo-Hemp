// Initialize the map
var map = L.map('map').setView([14.4974, -14.4524], 6);  // Coordinates for Senegal

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for Dakar, Senegal
L.marker([14.6928, -17.4467]).addTo(map)
    .bindPopup('Dakar, Senegal')
    .openPopup();

// Add active class on click
document.querySelectorAll('#sidebar ul li a').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelectorAll('#sidebar ul li a').forEach(function(link) {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

