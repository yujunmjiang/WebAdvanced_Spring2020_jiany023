<template>

    <div class="container">
      <div class="row">
    
        <div class="col-12">

          <h1 class="text-center text-info">NYC Shooting Incident Report (Jan 2006 - Dec 2019)</h1>

        </div>
        <!-- /.col-12 -->

      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-6">

          <IncidentList :incidents="incidents"/>

        </div>
        <!-- /.col-6 -->

        <div class="col-6">

          <IncidentMap :incidents="incidents"/>
          
        </div>
        <!-- /.col-6 -->

        <div class="col-6">

          <IncidentChart01 :incidents="incidents"/>
          
        </div>
        <!-- /.col-6 -->

        <div class="col-6">

          <IncidentChart02 :incidents="incidents"/>
          
        </div>
        <!-- /.col-6 -->

        <div class="col-6">

          <IncidentChart03 :incidents="incidents"/>
          
        </div>
        <!-- /.col-6 -->

        <div class="col-6">

          <IncidentChart04 :incidents="incidents"/>
          
        </div>
        <!-- /.col-6 -->
        
      </div>
    </div>
    <!-- /.container -->

</template>

<script>

  import axios from 'axios'
  import IncidentList from './IncidentList.vue'
  import IncidentMap from './IncidentMap.vue'
  import IncidentChart01 from './IncidentChart01.vue'
  import IncidentChart02 from './IncidentChart02.vue'
  import IncidentChart03 from './IncidentChart03.vue'
  import IncidentChart04 from './IncidentChart04.vue'

export default {
  name: 'Incident',
  components: {IncidentList, IncidentMap, IncidentChart01, IncidentChart02, IncidentChart03, IncidentChart04}, 
  data: function() {
    return {
      incidents: []
    }
  },
  mounted: function() {
    // https://data.cityofnewyork.us/resource/833y-fsy8.json

    axios.get('https://data.cityofnewyork.us/resource/833y-fsy8.json')
         .then((r) => {
           this.incidents = r.data;
         })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.container {
  h1 {
    color: #1e90ff !important;
    font-size: 25px;
    margin-top: 50px;
  }
}

</style>
