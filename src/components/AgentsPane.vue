<template>
<div id="agents-pane">
  <i-layout>
    <i-header>
      <span>Agents</span>
      <i-radiogroup v-model="agentsType" type="button">
        <i-radio label="All"></i-radio>
        <i-radio label="Pysical"></i-radio>
        <i-radio label="Virtual"></i-radio>
      </i-radiogroup>
    </i-header>
    <i-layout>
      <i-content>
        <agents-list></agents-list>
      </i-content>
      <i-sider width="300">
        <i-card title="Summary" :padding="0" shadow>
          <i-cellgroup>
            <i-cell title="building" :extra="building" />
            <i-cell title="idle" :extra="idle" />
          </i-cellgroup>
        </i-card>
        <i-card title="History" :padding="0" shadow>
          <i-cellgroup>
            <i-cell title="bjstdmngbgr02.thoughtworks.com" />
            <i-cell title="bjstdmngbgr02.thoughtworks.com" />
            <i-cell title="bjstdmngbgr02.thoughtworks.com" />
            <i-cell title="bjstdmngbgr02.thoughtworks.com" />
            <i-cell title="bjstdmngbgr02.thoughtworks.com" />
            <i-cell title="bjstdmngbgr02.thoughtworks.com" />
            <i-cell title="bjstdmngbgr02.thoughtworks.com" />
            <i-cell title="bjstdmngbgr02.thoughtworks.com" />
            <i-cell title="bjstdmngbgr02.thoughtworks.com" />
            <i-cell title="bjstdmngbgr02.thoughtworks.com" />
          </i-cellgroup>
        </i-card>
      </i-sider>
    </i-layout>
  </i-layout>
</div>
</template>

<script>
import AgentsList from './AgentsList.vue'

export default {
  name: 'AgentsPane',
  data() {
    return {
      agentsType: 'Pysical',
      building: '2',
      idle: '2',
    }
  },
  components: {
    AgentsList
  },
  computed: {

  },
  methods: {

  },
  mounted: function() {

  },
}
</script>

<style scoped>
#image-larva {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
