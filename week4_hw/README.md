## Week 04 Assignment

#### Task
Add some functionality to your midterm project website using jQuery (Example: Scroll Animation, Menus, Make content appear and disappear when you click or you hover an element.

#### Solution
When I click a city name in the menu bar, the map will show a relevant city.

Code:
```html
<body>

  <div id="map"></div>
  
  <div class="topnav">  
		<a id="city-ny" href="#">New York</a>  
  </div>

  <script> 
	document.getElementById('city-ny').addEventListener('click', function() {
		map.flyTo({
			center: [-73.935242, 40.730610],
			zoom: 12,
			essential: true // this animation is considered essential with respect to prefers-reduced-motion
		});
	});
  </script>
	
<body>
```
