<template>
    
    <div>
        <div class="incident-cahrt-02">
            <v-chart :options="line"/>

        </div>

    </div>

</template>

<script>
import Vue from 'vue'
import ECharts from 'vue-echarts' // refers to components/ECharts.vue in webpack

// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'

// If you want to use ECharts extensions, just import the extension package and it will work
// Taking ECharts-GL as an example:
// You only need to install the package with `npm install --save echarts-gl` and import it as follows
import 'echarts-gl'

// register component to use
Vue.component('v-chart', ECharts)

export default {
    name: "IncidentChart02",
    props: {
        incidents: Array
    },
    components: {
        'v-chart': ECharts
    },
    data: () => ({
        loading: true,
        line: {
            title: {
                text: 'Shooting Incidents in Each Year',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: 'Total',
                type: 'line',
                data: [2055, 1887, 1958, 1828, 1910, 1939, 1717, 1339, 1464, 1434, 1208, 969, 951, 1716],
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
  
  .incident-cahrt-02 {
      margin-top: 75px;
      height: 50vh;
      overflow-x: auto;
      overflow-y: auto;
  }

</style>