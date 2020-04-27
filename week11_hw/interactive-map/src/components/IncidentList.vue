<template>

    <div class="card shooting-incident-list">
        <ul class="list-group list-group-flush">
            <li 
                class="list-group-item"
                v-for="(incident, index) in incidents" :key="index"
                    
                
            >{{index}}, {{incident.occur_date}}, {{incident.boro}}, {{incident.statistical_murder_flag}}, {{incident.perp_age_group}}, {{incident.perp_sex}}, {{incident.perp_race}}, {{incident.latitude}}, {{incident.longitude}}</li>
              
        </ul>
    </div>
    
</template>>

<script>
export default {
    name: "IncidentList",
    props: {
        incidents: Array
    }
    
}
</script>>

<!-- Add "scopped" attribute to limit css to this component only -->

<style lang="scss" scoped>

  .shooting-incident-list{

    overflow-y: scroll;
    height: 90vh;
    li {
      &:hover {
        background-color: darkgrey;
      }
    }

  }

</style>>