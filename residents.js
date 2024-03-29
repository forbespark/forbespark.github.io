// Define an array of home icon coordinates
var parttimehomeCoordinates = [
    { lat: 37.5003, lng: -105.2083},
    { lat: 37.4979, lng: -105.2134},
    { lat: 37.4986, lng: -105.2138},
    { lat: 37.4964, lng: -105.2132},
    { lat: 37.4952, lng: -105.2137},
    { lat: 37.4967, lng: -105.2122},
    { lat: 37.5007, lng: -105.1965},
    { lat: 37.4974, lng: -105.2190},
    { lat: 37.4955, lng: -105.2208},
    { lat: 37.4968, lng: -105.2242},
    { lat: 37.5018, lng: -105.2288},
    { lat: 37.50662942522605, lng: -105.21303795357714},
    { lat: 37.50541575005033, lng: -105.21192480837732},
    { lat: 37.50530074765472, lng: -105.21399577619255},
    { lat: 37.49419428828889, lng: -105.21240587875585},
    { lat: 37.43215741791824, lng: -105.17236266203322},
    { lat: 37.50446944891931, lng: -105.22590714543861},
    { lat: 37.50854470298462, lng: -105.23335599200216},
    { lat: 37.51307416545882, lng: -105.23393933033232},
    { lat: 37.42072417837515, lng: -105.16294166168232},
    { lat: 37.43942062363452, lng: -105.16062218238157},
    { lat: 37.44010518386592, lng: -105.16027858525752},
    { lat: 37.44138666703992, lng: -105.15699853427331},
    { lat: 37.44517809540761, lng: -105.15581609611655},
    { lat: 37.44736646241947, lng: -105.16558597671967},
    { lat: 37.50079918462833, lng: -105.20736339119641},
    { lat: 37.50148790011579, lng: -105.20007717673346},
    { lat: 37.49699201652135, lng: -105.22059255574042},
];

var fulltimehomeCoordinates = [

];

function homesLocation (){
var fulltimehomeIcon = L.icon({
    iconUrl: './icons/full-time.png', 
    iconSize: [32, 32], 
    iconAnchor: [16, 32], 
});

fulltimehomeCoordinates.forEach(function(coord) {
    var homeMarker = L.marker([coord.lat, coord.lng], { icon: fulltimehomeIcon }).addTo(map);
    homeMarker.bindTooltip('Home', { direction: 'top' });
});

var parttimehomeIcon = L.icon({
    iconUrl: './icons/part-time.png', 
    iconSize: [32, 32], 
    iconAnchor: [16, 32],
});

parttimehomeCoordinates.forEach(function(coord) {
    var homeMarker = L.marker([coord.lat, coord.lng], { icon: parttimehomeIcon }).addTo(map);
    homeMarker.bindTooltip('Home', { direction: 'top' });
});
}