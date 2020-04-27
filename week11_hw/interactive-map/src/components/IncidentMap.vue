<template>
    <div>
        <div class="row map">

            <l-map :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-circle-marker 
                    v-for="(incident, index) in incidents" :key="index"
                    :lat-lng="latLng(incident.latitude, incident.longitude)"
                >
                    <l-popup>
                        Date: {{ incident.occur_date }} <br>
                        Borough: {{ incident.boro }} <br>
                        ---------------------------------------- <br>
                        Murder: {{incident.statistical_murder_flag}} <br>
                        ---------------------------------------- <br>
                        Age: {{incident.perp_age_group}} <br>
                        Sex: {{incident.perp_sex}} <br>
                        Race: {{incident.perp_race}}
                    </l-popup>
                </l-circle-marker>
            </l-map>

        </div>
        <!-- /.row map -->
    </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LCircleMarker, LPopup } from 'vue2-leaflet';

export default {
    name: "IncidentMap",
    props: {
        incidents: Array
    },
    data: function() {
        return {
          zoom: 13,
          center: L.latLng(40.730610, -73.935242),
          url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
          attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          marker: L.latLng(40.730610, -73.935242)
        }
    },
    components: {
      LMap,
      LTileLayer,
      LCircleMarker,
      LPopup
    },
    methods: {
        latLng: function(lat, lng) {
            return L.latLng(lat, lng);
        }
    }
}
</script>

<style scoped>
  
  .map {
      height: 90vh;
  }
</style>