function camsLocations() {

var camIcon = L.icon({
iconUrl: './icons/cam.png',
iconSize: [32, 32],
iconAnchor: [16, 32] });

var camLocation = L.marker([37.50215, -105.1998], {icon: camIcon}).addTo(map);
camLocation.bindPopup('<img src="./road_cams/emery_lp_1.jpg" alt="Emery Loop" style="width:600px; height:auto;">', {maxWidth: "auto"});

var camLocation = L.marker([37.50158, -105.2023], {icon: camIcon}).addTo(map);
camLocation.bindPopup('<img src="./road_cams/macomber_ln_1.jpg" alt="Macomber Lane" style="width:600px; height:auto;">', {maxWidth: "auto"});

var camLocation = L.marker([37.50115, -105.2042], {icon: camIcon}).addTo(map);
camLocation.bindPopup('<img src="./road_cams/emery_lp_2.jpg" alt="Emery Loop" style="width:600px; height:auto;">', {maxWidth: "auto"});

var camLocation = L.marker([37.49844, -105.2172], {icon: camIcon}).addTo(map);
camLocation.bindPopup('<img src="./road_cams/singer_ln_1.jpg" alt="Emery Loop" style="width:600px; height:auto;">', {maxWidth: "auto"});

}