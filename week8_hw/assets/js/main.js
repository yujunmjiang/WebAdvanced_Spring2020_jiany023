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

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
 
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

// function preload() {
//     data = loadTable("../assets/data/NYPD_Shooting_Incident_Data__Historic_.csv", "csv", "header");

// }



map.on('click', function(e) {
	var features = map.queryRenderedFeatures(e.point, {
	  layers: ['newyork-crime-data'] // replace this with the name of the layer
	});
  
	if (!features.length) {
	  return;
	}
  
	var feature = features[0];
  
	var popup = new mapboxgl.Popup({ offset: [0, -15] })
	  .setLngLat(feature.geometry.coordinates)
	  .setHTML('<h3>Incident Key: ' + feature.properties.INCIDENT_KEY + '</h3><p>Date: ' + feature.properties.OCCUR_DATE + '</p><p>Time: ' + feature.properties.OCCUR_TIME + '</p><p>Boro: ' + feature.properties.BORO + '</p><p>Age: ' + feature.properties.VIC_AGE_GROUP + '</p><p>Sex: ' + feature.properties.VIC_SEX + '</p><p>Race: ' + feature.properties.VIC_RACE + '</p>')
	  .setLngLat(feature.geometry.coordinates)
	  .addTo(map);
});



new Chart(document.getElementById("bar-chart-horizontal"), {
	type: 'horizontalBar',
    data: {
      labels: ["BROOKLYN", "BRONX", "QUEENS", "MANHATTAN", "STATEN ISLAND"],
      datasets: [
        {
          label: "Shooting Incidents",
          backgroundColor: ["#f6cb0e", "#ee1c25","#0185ff","#ff6502","#4e6756"],
		  data: [8829,6128,3198,2617,636]
        }
      ]
    },
    options: {
	  responsive: true,
	  maintainAspectRatio: false,
      legend: { display: false },
      title: {
        display: true,
        text: 'NYPD Shooting Incident Data (Historic: Jan 2006 - Sep 2019)'
	  },
	  scales: {
		  xAxes: [{
			  gridLines: {
				color: 'rgba(80, 80, 80, 1)'
			  },
			  display: true,
			  stacked: true
			}],
		  yAxes: [{
			  gridLines: {
				  color: 'rgba(80, 80, 80, 1)'
			  },
			  display: true,
			  stacked: true
		  }]
	  },

	}
});



new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["BLACK", "WHITE HISPANIC", "BLACK HISPANIC", "WHITE", "ASIAN / PACIFIC ISLANDER", "AMERICAN INDIAN / ALASKAN NATIVE", "UNKNOWN"],
      datasets: [
        {
          label: "Shooting Incidents",
          backgroundColor: ["#4a332d", "#e0ab8b","#743d2b","#fee3d4","#f4dec1","#dbb19c","#cccccc"],
          data: [15314,3075,2067,571,281,9,91]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'NYPD Shooting Incident Data (Historic: Jan 2006 - Sep 2019)'
      }
    }
});



new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
    datasets: [{ 
        data: [1422,1337,1448,1288,1374,1409,1235,975,1082,1014,850,704,663,513],
        label: "BLACK",
        borderColor: "#4A332D",
        fill: false
      }, { 
        data: [445,285,282,264,198,196,265,169,145,186,215,133,159,133],
        label: "WHITE HISPANIC",
        borderColor: "#e0ab8b",
        fill: false
      }, { 
        data: [114,187,149,187,254,239,147,133,186,166,87,87,74,57],
        label: "BLACK HISPANIC",
        borderColor: "#743d2b",
        fill: false
      }, { 
        data: [46,54,44,62,56,60,46,35,24,42,37,22,25,18],
        label: "WHITE",
        borderColor: "#fee3d4",
        fill: false
      }, { 
        data: [26,18,32,15,25,30,14,22,19,19,14,19,14,14],
        label: "ASIAN / PACIFIC ISLANDER",
        borderColor: "#f4dec1",
        fill: false
      }, { 
        data: [0,1,0,2,1,2,1,0,0,0,1,0,1,0],
        label: "AMERICAN INDIAN / ALASKAN NATIVE",
        borderColor: "#dbb19c",
        fill: false
      },{ 
        data: [2,5,3,10,2,3,9,5,8,7,4,4,15,14],
        label: "UNKNOWN",
        borderColor: "#cccccc",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'NYPD Shooting Incident Data (Historic: Jan 2006 - Sep 2019)'
    }
  }
});
