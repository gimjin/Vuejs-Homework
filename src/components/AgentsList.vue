<template>
<div id="agents-list" class="container-fluid">
  <div class="row">
    <div class="col-md-12" style="padding: 10px;margin-bottom:10px; background: #e8eaec;">
      Agents
      <RadioGroup v-model="selectedType" type="button">
        <Radio label="all"></Radio>
        <Radio label="physical"></Radio>
        <Radio label="virtual"></Radio>
      </RadioGroup>
    </div>
  </div>
  <div class="row">
    <div class="col-md-8 col-sm-9" style="margin-bottom: 20px;">
      <Scroll :on-reach-bottom="handleReachBottom" loading-text="Loading" height="410">
        <agent-item v-for="(item, index) in filteredAgent" :key="index" :item="item"></agent-item>
      </Scroll>
    </div>
    <div class="col-md-4 col-sm-3" style="display: block; height: 410px; overflow: scroll;">
      <div class="panel panel-default">
        <div class="panel-heading">Summary</div>
        <div class="panel-body">
          <div>building: 2</div>
          <div>idle: 2</div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">History</div>
        <ul class="list-group">
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
          <li class="list-group-item">bjstdmngbgr02.thoughtworks.com</li>
        </ul>
      </div>
    </div>
  </div>
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
