console.log("JS is connected");

mapboxgl.accessToken = 'pk.eyJ1IjoieXVqdW5tamlhbmciLCJhIjoiY2s2aXd1MmgwMDVudjNtbWZ1YjR3MzUwNSJ9.0-rJvNwIiwNXtqRCMy1vVw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/yujunmjiang/ck6ixe1c70kvt1il356yl432b',
    center: [-96, 37.8], // starting position
    zoom: 3 // starting zoom
});

// Add geolocate control to the map.
map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
);
 
		// document.getElementById('city-ny').addEventListener('click', function() {
		// 	// Fly to New York: 40.730610, -73.935242
		// 	map.flyTo({
		// 		center: [-73.935242, 40.730610],
		// 		zoom: 12,
		// 		essential: true // this animation is considered essential with respect to prefers-reduced-motion
		// 	});
		// });

		// document.getElementById('city-bos').addEventListener('click', function() {
		// 	map.flyTo({
		// 		center: [-71.057083, 42.361145],
		// 		zoom: 12,
		// 		essential: true // this animation is considered essential with respect to prefers-reduced-motion
		// 	});
		// });

		// document.getElementById('city-chi').addEventListener('click', function() {
		// 	map.flyTo({
		// 		center: [-87.623177, 41.881832],
		// 		zoom: 12,
		// 		essential: true // this animation is considered essential with respect to prefers-reduced-motion
		// 	});
		// });

		// document.getElementById('city-la').addEventListener('click', function() {
		// 	map.flyTo({
		// 		center: [-118.243683, 34.052235],
		// 		zoom: 12,
		// 		essential: true // this animation is considered essential with respect to prefers-reduced-motion
		// 	});
		// });

		// document.getElementById('city-sf').addEventListener('click', function() {
		// 	map.flyTo({
		// 		center: [-122.446747, 37.733795],
		// 		zoom: 12,
		// 		essential: true // this animation is considered essential with respect to prefers-reduced-motion
		// 	});
		// });

function preload() {
    data = loadTable("../assets/data/NYPD_Shooting_Incident_Data__Historic_.csv", "csv", "header");

}