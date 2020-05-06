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

  .shooting-incident-list {

    margin-top: 50px;
    height: 50vh;
    overflow-y: scroll;
    li {
      &:hover {
        background-color: #1e90ff;
      }
    }

  }

</style>>