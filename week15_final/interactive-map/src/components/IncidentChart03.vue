<template>
    
    <div>
        <div class="incident-cahrt-03">
            <v-chart :options="bar"/>

        </div>

    </div>

</template>

<script>
import Vue from 'vue'
import ECharts from 'vue-echarts' // refers to components/ECharts.vue in webpack

// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'

// If you want to use ECharts extensions, just import the extension package and it will work
// Taking ECharts-GL as an example:
// You only need to install the package with `npm install --save echarts-gl` and import it as follows
import 'echarts-gl'

// register component to use
Vue.component('v-chart', ECharts)

export default {
    name: "IncidentChart03",
    props: {
        incidents: Array
    },
    components: {
        'v-chart': ECharts
    },
    data: () => ({
        loading: true,
        bar: {
            title: {
                text: 'Victim‘s Age Distribution',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}'
            },
            angleAxis: {
                type: 'category',
                data: ['Brooklyn', 'Bronx', 'Queens', 'Manhattan', 'Staten Island']
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
                type: 'bar',
                data: [971, 784, 275, 343, 72],
                coordinateSystem: 'polar',
                name: '<18',
                stack: 'a'
            }, {
                type: 'bar',
                data: [3468, 2591, 1299, 1016, 254],
                coordinateSystem: 'polar',
                name: '18-24',
                stack: 'a'
            }, {
                type: 'bar',
                data: [4039, 2596, 1526, 1199, 271],
                coordinateSystem: 'polar',
                name: '25-44',
                stack: 'a'
            }, {
                type: 'bar',
                data: [637, 373, 216, 180, 54],
                coordinateSystem: 'polar',
                name: '45-64',
                stack: 'a'
            }, {
                type: 'bar',
                data: [61, 34, 24, 18, 9],
                coordinateSystem: 'polar',
                name: '65+',
                stack: 'a'
            }, {
                type: 'bar',
                data: [25, 16, 16, 6, 2],
                coordinateSystem: 'polar',
                name: 'unknown',
                stack: 'a'
            }],
            legend: {
                show: true,
                left: 'center',
                top: 'bottom',
                data: ['<18', '18-24', '25-44', '45-64', '65+', 'unknown']
            }
        }

    })
    
}
</script>>

<!-- Add "scopped" attribute to limit css to this component only -->
<style lang="scss" scoped>
  
  .incident-cahrt-03 {
      margin-top: 50px;
      height: 50vh;
      overflow-x: auto;
      overflow-y: auto;
  }

</style>