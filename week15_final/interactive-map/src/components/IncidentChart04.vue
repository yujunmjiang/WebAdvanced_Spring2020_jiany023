<template>
    
    <div>
        <div class="incident-cahrt-04">
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
                text: 'Victim‘s Race Distribution',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                left: 'center',
                top: 'bottom',
                data: ['American Indian / Alaskan Native', 'Asian / Pacific Islander', 'Black', 'Black / Hispanic', 'White', 'White Hispanic', 'Unknown']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {show: true},
                    saveAsImage: {show: true}
                    }
            },
            series: [
                {
                    name: 'Detail Info',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    data: [
                        {value: 9, name: 'American Indian / Alaskan Native'},
                        {value: 300, name: 'Asian / Pacific Islander'},
                        {value: 15983, name: 'Black'},
                        {value: 2142, name: 'Black / Hispanic'},
                        {value: 596, name: 'White'},
                        {value: 3238, name: 'White Hispanic'},
                        {value: 107, name: 'Unknown'}
                    ]
                }
            ]
        }

    })
    
}
</script>>

<!-- Add "scopped" attribute to limit css to this component only -->
<style lang="scss" scoped>
  
  .incident-cahrt-04 {
      margin-top: 50px;
      height: 50vh;
      overflow-x: auto;
      overflow-y: auto;
  }

</style>