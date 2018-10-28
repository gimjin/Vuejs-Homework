<template>
<div id="agents-list">
  <span>Agents</span>
  <RadioGroup v-model="selectedType" type="button">
    <Radio label="all"></Radio>
    <Radio label="physical"></Radio>
    <Radio label="virtual"></Radio>
  </RadioGroup>
  <Scroll :on-reach-bottom="handleReachBottom" loading-text="Loading">
    <agent-item v-for="(item, index) in filteredAgent" :key="index" :item="item"></agent-item>
  </Scroll>
</div>
</template>

<script>
import AgentItem from './AgentItem.vue'
import axios from 'axios'

export default {
  name: 'AgentsList',
  data: function() {
    return {
      selectedType: 'all',
      page: 0
    }
  },
  computed: {
    filteredAgent: function() {
      var vm = this
      var category = vm.selectedType

      if (category == 'all') {
        return vm.$store.state.agentsData
      } else {
        return vm.$store.state.agentsData.filter(item => item.type == category)
      }
    }
  },
  components: {
    AgentItem
  },
  methods: {
    handleReachBottom: function() {
      return new Promise(resolve => {
        setTimeout(() => {
          axios
            .get(`/static/json/request-page=${this.page}.json`)
            .then(response => {
              this.$store.commit('loadAgentsData', response.data.agents)
              this.page++
            })
            .catch(error => {
              console.log(error)
              this.errored = true
            })
          resolve()
        }, 2000)
      })
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      axios
        .get(`/static/json/request-page=${this.page}.json`)
        .then(response => {
          this.$store.commit('loadAgentsData', response.data.agents)
          this.page++
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
    })
  }
}
</script>

<style>

</style>
