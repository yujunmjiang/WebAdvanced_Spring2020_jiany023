<template>
    
    <div>
        <div class="incident-cahrt-01">
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
    name: "IncidentChart01",
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
                text: 'Shooting Incidents in 5 Boroughs',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['Brooklyn', 'Bronx', 'Queens', 'Manhattan', 'Staten Island']
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: 'Total',
                type: 'bar',
                data: [9201, 6394, 3356, 2762, 662],
                itemStyle: {
                    color: '#1e90ff'
                },
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                },
                markLine: {
                    silent: true,
                }
            }]
        }

    })
    
}
</script>>

<!-- Add "scopped" attribute to limit css to this component only -->
<style lang="scss" scoped>
  
  .incident-cahrt-01 {
      margin-top: 75px;
      height: 50vh;
      overflow-x: auto;
      overflow-y: auto;
  }



</style>