<template>
<div id="agents-list">
  <agent-item url="bjstdmngbgr01.thoughtworks.com" state="physical" server="192.168.1.1" path="/var/lib/cruise-agent" :resources="['ubuntu', 'firefox', 'core-duo']"></agent-item>
</div>
</template>

<script>
import AgentItem from './AgentItem.vue'

export default {
  name: 'AgentsList',
  computed: {

  },
  components: {
    AgentItem
  },
  methods: {

  }
}
</script>

<!-- 通过sass代码编写css -->
<style>

</style>
