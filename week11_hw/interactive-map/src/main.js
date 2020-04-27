import './scss/main.scss';

import Vue from 'vue'
import App from './App.vue'

import 'leaflet/dist/leaflet.css';

// If the maker icons are missing the issue lies in a problem with webpack, a quick fix is to run this snippet:
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
