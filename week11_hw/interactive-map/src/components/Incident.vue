<template>

    <div class="container">
      <div class="row">
    
        <div class="col-12">

          <h1 class="text-center text-info">Shooting Incident List</h1>

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
        
      </div>
    </div>
    <!-- /.container -->

</template>

<script>

  import axios from 'axios'
  import IncidentList from './IncidentList.vue'
  import IncidentMap from './IncidentMap.vue'

export default {
  name: 'Incident',
  components: {IncidentList, IncidentMap}, 
  data: function() {
    return {
      incidents: []
    }
  },

  mounted: function() {
    // https://data.cityofnewyork.us/resource/5ucz-vwe8.json

    axios.get('https://data.cityofnewyork.us/resource/5ucz-vwe8.json')
         .then((r) => {
           this.incidents = r.data;
         })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
